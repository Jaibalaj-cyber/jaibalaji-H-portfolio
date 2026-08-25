const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

let pool = null;
if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

// In-memory rate limiting map for active serverless instance
const submissionTracker = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 5;

function isRateLimited(clientKey) {
  const now = Date.now();
  const clientData = submissionTracker.get(clientKey);

  if (!clientData) {
    submissionTracker.set(clientKey, { count: 1, firstSeen: now });
    return false;
  }

  if (now - clientData.firstSeen > RATE_LIMIT_WINDOW_MS) {
    submissionTracker.set(clientKey, { count: 1, firstSeen: now });
    return false;
  }

  clientData.count += 1;
  return clientData.count > MAX_SUBMISSIONS_PER_WINDOW;
}

// Sanitize string
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

// Validate RFC Email format
function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 100) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email.trim());
}

// Nodemailer Transporter Setup
function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    const cleanPass = pass.replace(/\s+/g, '');
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: user.trim(),
        pass: cleanPass
      }
    });
  }
  return null;
}

module.exports = async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are supported.'
    });
  }

  try {
    // Rate Limiting (Using Vercel / proxy IP headers)
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
    const clientKey = typeof clientIp === 'string' ? clientIp.split(',')[0].trim() : 'unknown';

    if (isRateLimited(clientKey)) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before trying again.'
      });
    }

    // Parse Body
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({
          success: false,
          error: 'Invalid JSON payload format.'
        });
      }
    }

    const { name, email, message } = body || {};

    // Validate Name
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your name.'
      });
    }

    // Validate Email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    // Validate Message
    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your message.'
      });
    }

    const cleanName = sanitize(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = sanitize(message);

    let dbId = null;
    let createdAt = new Date().toISOString();

    // Store submission in PostgreSQL if pool is available
    if (pool) {
      try {
        const insertRes = await pool.query(
          'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at',
          [cleanName, cleanEmail, cleanMessage]
        );
        if (insertRes.rows.length > 0) {
          dbId = insertRes.rows[0].id;
          createdAt = insertRes.rows[0].created_at;
        }
      } catch (dbErr) {
        console.error('Database Insertion Error:', dbErr.message);
      }
    }

    const submissionId = dbId ? `msg_${dbId}` : `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

    // Dispatch real email via Nodemailer SMTP
    const transporter = createTransporter();
    const emailTo = process.env.EMAIL_TO || process.env.CONTACT_EMAIL || 'jaibalaji0850@gmail.com';

    if (transporter) {
      try {
        const mailOptions = {
          from: `"Jai Balaji Portfolio" <${process.env.SMTP_USER}>`,
          to: emailTo,
          replyTo: cleanEmail,
          subject: `✨ New Inquiry from ${cleanName} — Jai Balaji Portfolio`,
          text: `You received a new portfolio inquiry:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nDate: ${createdAt}\n\nMessage:\n${cleanMessage}\n\nSubmission ID: ${submissionId}`,
          html: `
            <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0c0c; color: #f5f5f5; border: 2px solid #E62727; border-radius: 16px; overflow: hidden; padding: 24px;">
              <h2 style="color: #FFDE00; font-size: 22px; margin-top: 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">✦ New Portfolio Inquiry</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #a3a3a3; font-size: 13px; font-weight: bold; width: 80px;">NAME:</td>
                  <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: bold;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a3a3a3; font-size: 13px; font-weight: bold;">EMAIL:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #FFDE00; text-decoration: underline; font-size: 14px;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a3a3a3; font-size: 13px; font-weight: bold;">DATE:</td>
                  <td style="padding: 8px 0; color: #a3a3a3; font-size: 13px;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              <div style="background: #181818; border-left: 4px solid #E62727; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0; color: #f5f5f5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
              </div>
              <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
                <a href="mailto:${cleanEmail}?subject=Re:%20Portfolio%20Inquiry" style="background: #E62727; color: #ffffff; padding: 10px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 13px; display: inline-block;">Reply to ${cleanName} →</a>
              </div>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error('SMTP Dispatch Note:', mailErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    });

  } catch (err) {
    console.error('API Error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred. Please try again or email directly.'
    });
  }
};
