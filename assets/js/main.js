// G'Secure Labs Clone - Interactions
document.addEventListener('DOMContentLoaded', () => {

  // Header scroll
  const header = document.querySelector('.header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll); onScroll();

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  toggle?.addEventListener('click', () => menu.classList.toggle('open'));

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; const target = parseFloat(el.dataset.count); const suffix = el.dataset.suffix || '';
      let cur = 0; const step = target / 60;
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target + suffix; return; }
        el.textContent = Math.floor(cur) + suffix; requestAnimationFrame(tick);
      };
      tick();
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  // Smooth anchor
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); menu?.classList.remove('open'); }
    });
  });

  // Form demo
  document.querySelectorAll('form[data-demo]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const btn = f.querySelector('button[type="submit"]');
      const orig = btn.innerHTML; btn.innerHTML = '✓ Sent! We\'ll be in touch.'; btn.disabled = true;
      f.reset();
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3500);
    });
  });

  // Respect reduced-motion preference
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero code-rain particles
  const rain = document.getElementById('heroRain');
  if (rain && !reduceMotion) {
    const glyphs = '01∆◊※☓◌◎◍▲▼◇⬡⬢';
    const count = 28;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = (Math.random() * 100) + '%';
      s.style.animationDuration = (6 + Math.random() * 8) + 's';
      s.style.animationDelay = (Math.random() * 8) + 's';
      s.style.fontSize = (10 + Math.random() * 8) + 'px';
      rain.appendChild(s);
    }
  }

  // Character-by-character hero word animation
  document.querySelectorAll('[data-anim-chars]').forEach(el => {
    const text = el.textContent;
    const baseDelay = parseInt(el.dataset.animDelay || '0', 10);
    el.textContent = '';
    [...text].forEach((c, i) => {
      const span = document.createElement('span');
      span.className = c === ' ' ? 'ch space' : 'ch';
      span.textContent = c === ' ' ? ' ' : c;
      if (reduceMotion) {
        span.style.animation = 'none';
        span.style.opacity = '1';
        span.style.transform = 'none';
      } else {
        span.style.animationDelay = (baseDelay + i * 45) + 'ms';
      }
      el.appendChild(span);
    });
  });

  // Word-by-word fade for paragraphs
  document.querySelectorAll('[data-anim-words]').forEach(el => {
    const text = el.textContent;
    const baseDelay = parseInt(el.dataset.animDelay || '0', 10);
    el.textContent = '';
    text.split(/(\s+)/).forEach((w, i) => {
      const span = document.createElement('span');
      if (/^\s+$/.test(w)) { span.className = 'w space'; span.textContent = ' '; }
      else { span.className = 'w'; span.textContent = w; }
      if (reduceMotion) {
        span.style.animation = 'none';
        span.style.opacity = '1';
        span.style.transform = 'none';
      } else {
        span.style.animationDelay = (baseDelay + i * 35) + 'ms';
      }
      el.appendChild(span);
    });
  });

  /* ========== Premium polish ========== */

  // Page scroll progress bar
  if (!document.querySelector('.page-progress')) {
    const bar = document.createElement('div');
    bar.className = 'page-progress';
    document.body.appendChild(bar);
    const updateBar = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  // Global mouse spotlight (sets --mx/--my on body)
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    let raf = null, mx = 50, my = 30;
    window.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth) * 100;
      my = (e.clientY / window.innerHeight) * 100;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.body.style.setProperty('--mx', mx + '%');
        document.body.style.setProperty('--my', my + '%');
        raf = null;
      });
    }, { passive: true });
  }

  // Card glow tracking (--gx/--gy)
  document.querySelectorAll('.service-card, .cap-item, .story-card, .blog-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--gx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--gy', (e.clientY - r.top) + 'px');
    });
  });

  // Magnetic buttons
  if (!reduceMotion) {
    document.querySelectorAll('.btn-primary, .btn-large').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // Hero parallax for visual elements
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && !reduceMotion) {
    const targets = heroVisual.querySelectorAll('.float-card, .shield-animated, .ring, .orb');
    heroVisual.parentElement.addEventListener('mousemove', (e) => {
      const r = heroVisual.parentElement.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      targets.forEach((t, i) => {
        const depth = (i % 4 + 1) * 6;
        t.style.transform = (t.dataset.baseTransform || '') + ` translate(${dx * depth}px, ${dy * depth}px)`;
      });
    });
  }

  // Hero network canvas (animated nodes)
  const heroSec = document.querySelector('.hero');
  if (heroSec && !reduceMotion) {
    const cv = document.createElement('canvas');
    cv.className = 'hero-canvas';
    heroSec.prepend(cv);
    const ctx = cv.getContext('2d');
    let W, H, nodes = [];
    const resize = () => {
      const r = heroSec.getBoundingClientRect();
      W = cv.width = r.width * devicePixelRatio;
      H = cv.height = r.height * devicePixelRatio;
      cv.style.width = r.width + 'px';
      cv.style.height = r.height + 'px';
      const count = Math.min(60, Math.floor((r.width * r.height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          const max = 140 * devicePixelRatio;
          if (d < max) {
            const alpha = 1 - d / max;
            ctx.strokeStyle = `rgba(255,166,26,${alpha * 0.18})`;
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(255,200,120,0.7)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  // Auto-add reveal class to common content blocks (bonus for inner pages)
  document.querySelectorAll('section .container > *:not(.reveal), .two-col > *, .check-list li')
    .forEach(el => {
      if (!el.classList.contains('reveal') && !el.closest('.hero')) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

  // Typed text effect for hero (skipped when reduced motion is on)
  const typed = document.querySelector('[data-typed]');
  if (typed) {
    const words = JSON.parse(typed.dataset.typed);
    if (reduceMotion) {
      typed.textContent = words[0];
    } else {
      let i = 0, j = 0, deleting = false;
      const tick = () => {
        const w = words[i];
        typed.textContent = w.slice(0, j);
        if (!deleting && j < w.length) { j++; setTimeout(tick, 80); }
        else if (deleting && j > 0) { j--; setTimeout(tick, 40); }
        else { deleting = !deleting; if (!deleting) i = (i + 1) % words.length; setTimeout(tick, 1200); }
      };
      tick();
    }
  }
});
