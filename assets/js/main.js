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
