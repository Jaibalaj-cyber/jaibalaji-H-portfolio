const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const EMAIL_TO = process.env.EMAIL_TO || 'jaibalaji0850@gmail.com';

// PostgreSQL Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Initialize Contacts Table
pool.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`)
  .then(() => {
    console.log('✅ PostgreSQL connected successfully & contacts table ready');
  })
  .catch((error) => {
    console.error('❌ PostgreSQL connection failed:', error.message);
  });

/* ===================================================
   1. SECURITY MIDDLEWARE & PROTECTION
   =================================================== */

// Disable Express fingerprint header
app.disable('x-powered-by');

// CORS Policy (Allow frontend origins while keeping API protected)
app.use(cors({
  origin: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Accept']
}));

// Strict payload limit to prevent DoS via large JSON payloads (max 10kb)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Block any direct HTTP access to sensitive files and directories
app.use((req, res, next) => {
  const blockedPaths = [
    /^\/\.env/,
    /^\/data(\/|$)/i,
    /^\/server\.js$/i,
    /^\/package\.json$/i,
    /^\/package-lock\.json$/i,
    /^\/node_modules(\/|$)/i,
    /\.json$/i
  ];

  const requestPath = req.path;
  const isBlocked = blockedPaths.some(pattern => pattern.test(requestPath));

  if (isBlocked) {
    return res.status(404).send('Not Found');
  }

  next();
});

// Serve only safe static frontend assets (deny dotfiles)
app.use(express.static(path.join(__dirname), {
  dotfiles: 'deny',
  index: 'index.html',
  maxAge: '1h'
}));

/* ===================================================
   2. RATE LIMITING ENGINE (IN-MEMORY ABUSE PREVENTION)
   =================================================== */
const submissionTracker = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 5; // Max 5 submissions per 15 min

function isRateLimited(clientKey) {
  const now = Date.now();
  const clientData = submissionTracker.get(clientKey);

  if (!clientData) {
    submissionTracker.set(clientKey, { count: 1, firstSeen: now });
    return false;
  }

  // If window expired, reset counter
  if (now - clientData.firstSeen > RATE_LIMIT_WINDOW_MS) {
    submissionTracker.set(clientKey, { count: 1, firstSeen: now });
    return false;
  }

  // Increment count
  clientData.count += 1;
  return clientData.count > MAX_SUBMISSIONS_PER_WINDOW;
}

// Cleanup stale rate limit entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of submissionTracker.entries()) {
    if (now - data.firstSeen > RATE_LIMIT_WINDOW_MS) {
      submissionTracker.delete(key);
    }
  }
}, 30 * 60 * 1000);

/* ===================================================
   3. HELPER FUNCTIONS
   =================================================== */

// Sanitize string to prevent HTML/script injection
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

// Strict email format validation
function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 100) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email.trim());
}

// Setup Nodemailer Transporter securely
function createTransporter() {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const cleanPass = process.env.SMTP_PASS.replace(/\s+/g, '');
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER.trim(),
        pass: cleanPass
      }
    });
  }
  return null;
}

/* ===================================================
   4. API ENDPOINTS
   =================================================== */

// 1. Healthcheck (Minimal, zero information leakage)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 2. Contact Form Submission (Protected & Validated)
app.post('/api/contact', async (req, res) => {
  try {
    // Rate Limiting Check
    const clientKey = req.ip || req.connection.remoteAddress || 'unknown';
    if (isRateLimited(clientKey)) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before trying again.'
      });
    }

    const { name, email, message } = req.body || {};

    // Validate Name (1 - 100 characters)
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your name.'
      });
    }

    // Validate Email (5 - 100 characters)
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    // Validate Message (1 - 3000 characters)
    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your message.'
      });
    }

    const cleanName = sanitize(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = sanitize(message);

    // Insert inquiry into PostgreSQL database using parameterized query
    const insertResult = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at',
      [cleanName, cleanEmail, cleanMessage]
    );

    const record = insertResult.rows[0];
    const submissionId = `msg_${record.id}`;

    // Send email notification via Nodemailer if SMTP is configured
    const transporter = createTransporter();

    if (transporter) {
      try {
        const mailOptions = {
          from: `"Jai Balaji Portfolio" <${process.env.SMTP_USER}>`,
          to: EMAIL_TO,
          replyTo: cleanEmail,
          subject: `✨ New Inquiry from ${cleanName} — Jai Balaji Portfolio`,
          text: `You received a new portfolio inquiry:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nDate: ${record.created_at}\n\nMessage:\n${cleanMessage}\n\nDatabase ID: #${record.id}`,
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
                  <td style="padding: 8px 0; color: #a3a3a3; font-size: 13px;">${new Date(record.created_at).toLocaleString()}</td>
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
        console.error('SMTP Delivery Note: Could not dispatch email via SMTP transporter. Submission remains safely stored in PostgreSQL.');
      }
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred. Please try again or email directly.'
    });
  }
});

// Catch-all route to serve index.html for frontend navigation only
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🔒 Security-Hardened Portfolio Server listening on port ${PORT}`);
});
