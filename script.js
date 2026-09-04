/**
 * JAI BALAJI H — PORTFOLIO SCRIPT ENGINE
 * UI/UX Designer Portfolio Engine: Smooth Navigation, Perspective Grid Canvas, Typewriter, Physics Stickers & Modal
 */

const SECTIONS = ['home', 'about', 'projects', 'contact'];
let currentSectionIndex = 0;
let isAnimating = false;
let touchStartY = 0;

document.addEventListener('DOMContentLoaded', () => {
  initPerspectiveCanvas();
  initTypewriter();
  initDraggableStickers();
  initFullpageScroll();
});

/* ===================================================
   1. CANVAS PERSPECTIVE GRID WITH MOUSE WARP (SUBTLE ATMOSPHERE)
   =================================================== */
function initPerspectiveCanvas() {
  const canvas = document.getElementById('home-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0, height = 0;
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let time = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', handleMouseMove);
  resize();

  function warp(x, y) {
    const dx = x - mouseX;
    const dy = y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 250 && dist > 0) {
      const norm = dist / 250;
      const factor = 15 * Math.sin(0.05 * dist - 4 * time) * (1 - norm * norm * (3 - 2 * norm));
      return {
        x: x + (dx / dist) * factor,
        y: y + (dy / dist) * factor
      };
    }
    return { x, y };
  }

  function drawSegment(x1, y1, x2, y2) {
    const start = warp(x1, y1);
    ctx.moveTo(start.x, start.y);
    for (let i = 1; i <= 15; i++) {
      const alpha = i / 15;
      const pt = warp(x1 + (x2 - x1) * alpha, y1 + (y2 - y1) * alpha);
      ctx.lineTo(pt.x, pt.y);
    }
  }

  function render() {
    // Only render when Home section is active/visible
    if (currentSectionIndex === 0 || window.scrollY < window.innerHeight) {
      time += 0.02;
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Subtle atmosphere grid lines
      ctx.strokeStyle = 'rgba(245, 245, 245, 0.05)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();

      // Radial perspective rays
      for (let i = 1; i < 6; i++) {
        drawSegment(cx, cy, 0, (height / 6) * i);
        drawSegment(cx, cy, width, (height / 6) * i);
      }
      for (let i = 1; i < 9; i++) {
        drawSegment(cx, cy, (width / 9) * i, 0);
        drawSegment(cx, cy, (width / 9) * i, height);
      }

      // Corner rays
      drawSegment(cx, cy, 0, 0);
      drawSegment(cx, cy, width, 0);
      drawSegment(cx, cy, 0, height);
      drawSegment(cx, cy, width, height);

      // Concentric rectangles
      for (let i = 0; i <= 5; i++) {
        const scale = 1 + 0.4 * i;
        const rw = width / 2 / scale;
        const rh = height / 2 / scale;
        drawSegment(cx - rw, cy - rh, cx + rw, cy - rh);
        drawSegment(cx + rw, cy - rh, cx + rw, cy + rh);
        drawSegment(cx + rw, cy + rh, cx - rw, cy + rh);
        drawSegment(cx - rw, cy + rh, cx - rw, cy - rh);
      }
      ctx.stroke();

      // Subtle Red (#E62727) + Yellow (#FFDE00) Ambient Radial Glow
      const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220);
      glow.addColorStop(0, 'rgba(230, 39, 39, 0.28)');
      glow.addColorStop(0.5, 'rgba(255, 222, 0, 0.08)');
      glow.addColorStop(1, 'rgba(8, 8, 8, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ===================================================
   2. KINETIC TYPEWRITER HEADLINE
   =================================================== */
function initTypewriter() {
  const words = [
    "UI/UX DESIGNER",
    "PRODUCT DESIGNER",
    "DESIGN SYSTEMS",
    "INTERACTION DESIGN",
    "USER RESEARCH"
  ];

  const textEl = document.getElementById('kinetic-typewriter-text');
  if (!textEl) return;

  let wordIndex = 0;
  let currentText = words[0];
  textEl.textContent = currentText;
  let isDeleting = false;

  setTimeout(() => {
    isDeleting = true;
    step();
  }, 2200);

  function step() {
    const fullWord = words[wordIndex];
    const delay = isDeleting ? 35 : 75;

    if (isDeleting) {
      currentText = fullWord.slice(0, currentText.length - 1);
      textEl.textContent = currentText;

      if (currentText === "") {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(step, 200);
        return;
      }
    } else {
      currentText = fullWord.slice(0, currentText.length + 1);
      textEl.textContent = currentText;

      if (currentText === fullWord) {
        setTimeout(() => {
          isDeleting = true;
          step();
        }, 2200);
        return;
      }
    }

    setTimeout(step, delay);
  }
}

/* ===================================================
   3. FULLPAGE SMOOTH NAVIGATION & SCROLL-SPY ENGINE
   =================================================== */
function goToSection(index, event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
  if (index < 0 || index >= SECTIONS.length) return;

  const targetId = SECTIONS[index];
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  currentSectionIndex = index;
  isAnimating = true;
  updateActiveUI(targetId);

  // Exact mobile-safe scroll offset for fixed navbar
  const navHeightOffset = window.innerWidth < 768 ? 60 : 80;
  const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeightOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: 'smooth'
  });

  // Update browser history hash without jump
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#' + targetId);
  }

  // Release animation lock after smooth scroll completes
  setTimeout(() => {
    isAnimating = false;
    evaluateActiveSection();
  }, 500);
}

function updateActiveUI(sectionId) {
  if (!sectionId) return;

  // 1. Clean sweep: Remove active styles & aria-current from ALL navbar links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active', 'bg-[#E62727]', 'bg-[#C02604]', 'bg-[#F44A22]', 'text-white');
    link.classList.add('text-[#F5F5F5]');
    link.removeAttribute('aria-current');
  });

  // 2. Add active state and aria-current ONLY to the currently selected nav link
  const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.remove('text-[#F5F5F5]');
    activeLink.classList.add('active', 'bg-[#E62727]', 'text-white');
    activeLink.setAttribute('aria-current', 'page');
  }

  // 3. Clean sweep: Remove active state from ALL side dots first
  document.querySelectorAll('.side-dot-item').forEach(dot => {
    dot.classList.remove('active');
  });

  // 4. Add active state ONLY to the currently selected side dot
  const activeDot = document.querySelector(`.side-dot-item[data-section="${sectionId}"]`);
  if (activeDot) {
    activeDot.classList.add('active');
  }

  // 5. Update Reading Progress Bar
  const sIndex = SECTIONS.indexOf(sectionId);
  if (sIndex !== -1) {
    currentSectionIndex = sIndex;
    const progress = (sIndex / (SECTIONS.length - 1)) * 100;
    const bar = document.getElementById('scrollProgressBar');
    if (bar) bar.style.width = `${progress}%`;
  }
}

/**
 * Calculates the active section based on the user's primary focal reading zone.
 * Independent of varying section heights to guarantee zero premature transitions.
 */
function evaluateActiveSection() {
  if (isAnimating) return;

  const scrollY = window.scrollY || window.pageYOffset || 0;
  const viewportHeight = window.innerHeight;
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );

  // 1. Top of page boundary
  if (scrollY <= 60) {
    if (currentSectionIndex !== 0) {
      currentSectionIndex = 0;
      updateActiveUI(SECTIONS[0]);
    }
    return;
  }

  // 2. Bottom of page boundary (Contact)
  if (scrollY + viewportHeight >= docHeight - 60) {
    const lastIdx = SECTIONS.length - 1;
    if (currentSectionIndex !== lastIdx) {
      currentSectionIndex = lastIdx;
      updateActiveUI(SECTIONS[lastIdx]);
    }
    return;
  }

  // 3. Focal trigger line (35% down the viewport, below fixed top navbar)
  const navHeightOffset = 85;
  const focalPoint = scrollY + navHeightOffset + (viewportHeight - navHeightOffset) * 0.35;

  let activeSectionId = null;

  // Check which section spans across the focal reading line
  for (let i = 0; i < SECTIONS.length; i++) {
    const el = document.getElementById(SECTIONS[i]);
    if (el) {
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (focalPoint >= top && focalPoint < bottom) {
        activeSectionId = SECTIONS[i];
        break;
      }
    }
  }

  // Fallback: choose section with highest visible pixel height in viewport
  if (!activeSectionId) {
    let maxVisibleHeight = -1;
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          activeSectionId = id;
        }
      }
    });
  }

  if (activeSectionId) {
    const newIdx = SECTIONS.indexOf(activeSectionId);
    if (newIdx !== -1 && newIdx !== currentSectionIndex) {
      currentSectionIndex = newIdx;
      updateActiveUI(activeSectionId);
    }
  }
}

function initFullpageScroll() {
  // Check if URL has a direct hash jump (#about, #projects, #contact)
  const initialHash = window.location.hash.replace('#', '').toLowerCase();
  const hashIndex = SECTIONS.indexOf(initialHash);
  if (hashIndex !== -1) {
    currentSectionIndex = hashIndex;
    updateActiveUI(initialHash);
    setTimeout(() => {
      const targetEl = document.getElementById(initialHash);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  } else {
    evaluateActiveSection();
  }

  // Throttled Scroll Listener for 60fps real-time scrollspy sync
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        evaluateActiveSection();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Handle window resize
  window.addEventListener('resize', () => {
    evaluateActiveSection();
  }, { passive: true });

  // Keyboard Arrow / Page Navigation
  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'PageDown'].includes(e.key)) {
      if (currentSectionIndex < SECTIONS.length - 1) {
        e.preventDefault();
        goToSection(currentSectionIndex + 1);
      }
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      if (currentSectionIndex > 0) {
        e.preventDefault();
        goToSection(currentSectionIndex - 1);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSection(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSection(SECTIONS.length - 1);
    }
  });

  // Touch Handling for Mobile: Smooth, natural touch scrolling
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (isAnimating) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    // On mobile, allow natural scrolling; only jump on desktop or deliberate large swipe (>140px on Home)
    if (Math.abs(deltaY) > 140 && currentSectionIndex === 0) {
      if (deltaY > 0 && currentSectionIndex < SECTIONS.length - 1) {
        goToSection(currentSectionIndex + 1);
      }
    }
  }, { passive: true });
}

/* ===================================================
   4. CONTACT DRAGGABLE STICKERS INTERACTION
   =================================================== */
function initDraggableStickers() {
  const container = document.getElementById('contactStickersContainer');
  if (!container) return;

  const stickers = document.querySelectorAll('.draggable-sticker');

  // Boundary clamp helper to guarantee stickers remain completely inside container
  function clampStickerPosition(sticker) {
    const parentRect = container.getBoundingClientRect();
    if (parentRect.width === 0) return;
    const maxLeft = Math.max(0, parentRect.width - sticker.offsetWidth - 8);
    const maxTop = Math.max(0, parentRect.height - sticker.offsetHeight - 8);
    const currentLeft = sticker.offsetLeft;
    const currentTop = sticker.offsetTop;
    if (currentLeft > maxLeft) {
      sticker.style.left = `${Math.max(8, maxLeft)}px`;
    }
    if (currentTop > maxTop) {
      sticker.style.top = `${Math.max(8, maxTop)}px`;
    }
  }

  stickers.forEach(sticker => {
    clampStickerPosition(sticker);
  });

  window.addEventListener('resize', () => {
    stickers.forEach(sticker => {
      clampStickerPosition(sticker);
    });
  });

  stickers.forEach(sticker => {
    const isCta = sticker.getAttribute('data-is-cta') === 'true' || sticker.id === 'cta-send-message';
    let isDragging = false;
    let startX, startY, initLeft, initTop;
    let homeLeft = null, homeTop = null;
    let hasMoved = false;

    // Set initial resting z-index (CTA always stays above decorative social pills)
    if (isCta) {
      sticker.style.zIndex = '50';
    }

    function onPointerDown(e) {
      isDragging = true;
      hasMoved = false;
      sticker.style.zIndex = '100';
      sticker.style.cursor = 'grabbing';

      const rect = sticker.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      initLeft = rect.left - parentRect.left;
      initTop = rect.top - parentRect.top;

      // Capture home position on first grab for CTA
      if (isCta && homeLeft === null) {
        homeLeft = initLeft;
        homeTop = initTop;
      }

      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startY = e.clientY || (e.touches && e.touches[0].clientY);

      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const dx = clientX - startX;
      const dy = clientY - startY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasMoved = true;
        if (e.cancelable) e.preventDefault();
      }

      const parentRect = container.getBoundingClientRect();
      const maxLeft = parentRect.width - sticker.offsetWidth;
      const maxTop = parentRect.height - sticker.offsetHeight;

      const newLeft = Math.max(0, Math.min(maxLeft, initLeft + dx));
      const newTop = Math.max(0, Math.min(maxTop, initTop + dy));

      sticker.style.left = `${newLeft}px`;
      sticker.style.top = `${newTop}px`;

      if (isCta) {
        // Constrain CTA rotation to stay upright (max 6 degrees tilt)
        const tilt = Math.max(-6, Math.min(6, (dx / 20)));
        sticker.style.transform = `rotate(${tilt}deg) scale(1.06)`;
      } else {
        const initRotate = sticker.getAttribute('data-init-rotate') || '0';
        sticker.style.transform = `rotate(${initRotate}deg) scale(1.05)`;
      }
    }

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      sticker.style.cursor = 'grab';

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      if (isCta && homeLeft !== null) {
        // Elastic spring auto-return to home position for SEND MESSAGE CTA
        if (window.gsap) {
          gsap.to(sticker, {
            left: `${homeLeft}px`,
            top: `${homeTop}px`,
            rotation: 6,
            scale: 1,
            duration: 0.75,
            ease: "elastic.out(1, 0.45)",
            onComplete: () => {
              sticker.style.zIndex = '50';
            }
          });
        } else {
          sticker.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          sticker.style.left = `${homeLeft}px`;
          sticker.style.top = `${homeTop}px`;
          sticker.style.transform = 'rotate(6deg) scale(1)';
          setTimeout(() => {
            sticker.style.transition = '';
            sticker.style.zIndex = '50';
          }, 500);
        }
      } else {
        const initRotate = sticker.getAttribute('data-init-rotate') || '0';
        sticker.style.transform = `rotate(${initRotate}deg) scale(1)`;
      }

      if (hasMoved) {
        // Prevent accidental trigger on drag release
        const clickHandler = function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          sticker.removeEventListener('click', clickHandler, true);
        };
        sticker.addEventListener('click', clickHandler, true);
      }
    }

    sticker.addEventListener('mousedown', onPointerDown);
    sticker.addEventListener('touchstart', onPointerDown, { passive: true });
  });
}

/* ===================================================
   5. EMAIL COPY TO CLIPBOARD WITH TOAST
   =================================================== */
function copyEmail() {
  const email = "jaibalaji0850@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast();
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById('email-toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ===================================================
   6. CONTACT MODAL & CUSTOM NODE.JS / EXPRESS API
   =================================================== */

// Custom Node.js / Express Contact API Endpoint (No Formspree / third-party services)
const getApiEndpoint = () => {
  if (window.location.protocol === 'file:') {
    return 'http://localhost:5000/api/contact';
  }
  if (window.location.port === '4000') {
    return 'http://localhost:5000/api/contact';
  }
  return '/api/contact';
};

function openContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.add('open');
    const statusBox = modal.querySelector('#contact-status');
    if (statusBox) {
      statusBox.className = 'hidden';
      statusBox.innerHTML = '';
    }
    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.remove('open');
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const submitBtn = form.querySelector('button[type="submit"]');
  const statusBox = form.parentElement.querySelector('#contact-status') || form.querySelector('#contact-status');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  // Form Validation
  if (!name || !email || !message) {
    if (statusBox) {
      statusBox.className = 'block mb-4 text-xs font-bold py-2.5 px-3.5 rounded-xl text-center bg-red-950/80 text-[#FFDE00] border border-[#E62727]';
      statusBox.textContent = 'Please fill out all required fields.';
    }
    return;
  }

  // 1. SUBMITTING STATE
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '<span>SEND INQUIRY ✦</span>';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin h-4 w-4 text-current inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>SENDING INQUIRY...</span>
    `;
  }
  if (nameInput) nameInput.disabled = true;
  if (emailInput) emailInput.disabled = true;
  if (messageInput) messageInput.disabled = true;
  if (statusBox) {
    statusBox.className = 'hidden';
    statusBox.innerHTML = '';
  }

  try {
    const endpoint = getApiEndpoint();
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.success) {
      // 2. SUCCESS STATE
      if (statusBox) {
        statusBox.className = 'block mb-4 text-xs font-bold py-2.5 px-3.5 rounded-xl text-center bg-emerald-950/90 text-[#FFDE00] border border-emerald-500/60 shadow-lg';
        statusBox.textContent = data.message || "Message sent successfully! I'll get back to you soon.";
      }
      form.reset();

      if (nameInput) nameInput.disabled = false;
      if (emailInput) emailInput.disabled = false;
      if (messageInput) messageInput.disabled = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>INQUIRY SENT ✦</span>';
      }

      // Auto-close modal after visitor has read the confirmation
      setTimeout(() => {
        closeContactModal();
        if (submitBtn) submitBtn.innerHTML = originalBtnHTML;
        if (statusBox) {
          statusBox.className = 'hidden';
          statusBox.innerHTML = '';
        }
      }, 3500);

    } else {
      throw new Error(data.error || `Server responded with status ${response.status}`);
    }

  } catch (error) {
    // 3. ERROR STATE — NEVER fake success
    console.error('Contact Form Submission Error:', error);
    if (statusBox) {
      statusBox.className = 'block mb-4 text-xs font-bold py-2.5 px-3.5 rounded-xl text-center bg-red-950/90 text-white border border-[#E62727] shadow-xl';
      const userMessage = error.message && !error.message.includes('Server responded') && !error.message.includes('fetch')
        ? error.message
        : 'Something went wrong. Please try again or email me directly at <a href="mailto:jaibalaji0850@gmail.com" class="text-[#FFDE00] underline font-bold">jaibalaji0850@gmail.com</a>';
      statusBox.innerHTML = userMessage;
    }

    // Re-enable inputs and submit button so visitor can retry
    if (nameInput) nameInput.disabled = false;
    if (emailInput) emailInput.disabled = false;
    if (messageInput) messageInput.disabled = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    }
  }
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeContactModal();
  }
});

/* ===================================================
   6. PORTRAIT TAP-TO-TOGGLE B&W / NORMAL COLOR
   =================================================== */
function togglePortraitColor(event) {
  if (event) {
    event.stopPropagation();
  }
  const img = document.getElementById('portraitImg');
  const card = document.getElementById('portraitCard');
  if (!img) return;

  const isNowColor = img.classList.toggle('is-color');
  if (card) {
    card.classList.toggle('is-active-color', isNowColor);
  }

  // Micro vibration haptic on mobile devices
  if (window.navigator && window.navigator.vibrate) {
    try {
      window.navigator.vibrate(25);
    } catch (_) {}
  }
}

