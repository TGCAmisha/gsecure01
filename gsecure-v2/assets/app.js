// ─── Shared nav + footer renderer ───
const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { mega: 'services', label: 'Services' },
  { href: 'coe.html', label: 'COE' },
  { href: 'essentials.html', label: "G'Secure Essentials" },
  { mega: 'resources', label: 'Resources' },
  { href: 'partners.html', label: 'Partners' },
  { href: 'about.html', label: 'About' },
  { href: 'contact.html', label: 'Contact' },
];

const SERVICES = [
  ['mdr.html','MDR','Managed Detection & Response','shield','orange'],
  ['soc.html','SOC','24×7 Security Operations','grid','blue'],
  ['grc.html','GRC','Governance, Risk & Compliance','check','orange'],
  ['vapt.html','VAPT','Vulnerability & Pen Testing','box','blue'],
  ['edr.html','EDR','Endpoint Detection & Response','target','orange'],
  ['ndr.html','NDR','Network Detection & Response','flow','blue'],
  ['ueba.html','UEBA','User & Entity Behavior','user','orange'],
  ['threat-intelligence.html','Threat Intel','Global threat intelligence','globe','blue'],
  ['cyber-threat-hunting.html','Threat Hunting','Proactive cyber hunting','search','orange'],
  ['security-monitoring.html','Security Monitoring','Continuous visibility','eye','blue'],
  ['forensic-analysis.html','Forensic Analysis','Digital forensics & IR','file','orange'],
  ['auto-containment.html','Auto-Containment','Automated response','lock','blue'],
];

const RESOURCES = [
  ['success-stories.html','Success Stories'],
  ['insights.html','Insights'],
  ['news-room.html','News Room'],
];

const ICONS = {
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  grid:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  check:'<path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
  box:'<path d="M12 22V12M12 12 4 8M12 12l8-4M4 8v8l8 4 8-4V8l-8-4Z"/>',
  target:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>',
  flow:'<path d="M2 12h20M5 6h14M5 18h14"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  search:'<path d="m21 21-4.3-4.3M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/>',
  eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  lock:'<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',
};

function svgIcon(name, cls='') {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${cls}">${ICONS[name]||''}</svg>`;
}

function renderNav(activePage='') {
  const utility = `
  <div class="hidden md:block bg-black/60 border-b border-white/5 text-[12px] text-brand-body">
    <div class="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
      <div class="flex items-center gap-5">
        <span class="inline-flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#faa61a" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>+46 733 690899</span>
        <span class="inline-flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#faa61a" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>consult@gsecurelabs.com</span>
        <span class="inline-flex items-center gap-1.5 text-brand-mute">Serving 30+ Countries</span>
      </div>
      <div class="flex items-center gap-5">
        <a href="news-room.html" class="hover:text-brand-orange">News Room</a>
        <a href="#" class="hover:text-brand-orange">Careers</a>
        <span class="inline-flex items-center gap-1">EN <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></span>
      </div>
    </div>
  </div>`;

  const servicesGrid = SERVICES.map(([href,t,sub,icon,col])=>`
    <a href="${href}" class="flex gap-3 p-3 rounded-lg hover:bg-white/[.04]">
      <span class="w-9 h-9 rounded-md ${col==='orange'?'bg-brand-orange/10 text-brand-orange':'bg-brand-bright/10 text-brand-bright'} grid place-items-center">${svgIcon(icon)}</span>
      <span><span class="block text-white text-[13px] font-semibold">${t}</span><span class="block text-[12px] text-brand-mute">${sub}</span></span>
    </a>`).join('');

  const resourcesGrid = RESOURCES.map(([href,t])=>`<a href="${href}" class="block px-3 py-2 rounded-md hover:bg-white/[.04] text-white text-[13px]">${t}</a>`).join('');

  const navItems = NAV_LINKS.map(l=>{
    const active = l.href === activePage ? 'is-active' : '';
    if (l.mega === 'services') {
      return `<div class="has-mega relative">
        <a href="services.html" class="inline-flex items-center gap-1 hover:text-white ${activePage.match(/^(services|mdr|soc|grc|vapt|edr|ndr|ueba|threat|cyber|security-monitoring|forensic|auto)/) ? 'is-active' : ''}">Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="mega absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[860px] bg-brand-surface2/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <div class="grid grid-cols-3 gap-1">${servicesGrid}</div>
        </div>
      </div>`;
    }
    if (l.mega === 'resources') {
      return `<div class="has-mega relative">
        <button class="inline-flex items-center gap-1 hover:text-white ${activePage.match(/^(success|insights|news)/) ? 'is-active' : ''}">Resources <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="mega absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[280px] bg-brand-surface2/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">${resourcesGrid}</div>
      </div>`;
    }
    return `<a href="${l.href}" class="hover:text-white ${active}">${l.label}</a>`;
  }).join('');

  const mobileServices = SERVICES.map(([h,t])=>`<a href="${h}">${t}</a>`).join('');
  const mobileResources = RESOURCES.map(([h,t])=>`<a href="${h}">${t}</a>`).join('');

  const main = `
  <header id="nav" class="sticky top-0 z-50 transition">
    <div class="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-2.5 group">
        <svg class="logo-shield" viewBox="0 0 32 32">
          <defs><clipPath id="shieldClip"><path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z"/></clipPath></defs>
          <g clip-path="url(#shieldClip)"><rect x="0" y="0" width="16" height="32" fill="#004a80"/><rect x="16" y="0" width="16" height="32" fill="#faa61a"/></g>
          <path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
          <circle cx="16" cy="14" r="2.4" fill="#fff"/><rect x="15" y="14" width="2" height="6" fill="#fff"/>
        </svg>
        <span class="font-black tracking-tight text-white text-[15px]">G'SECURE <span class="text-brand-orange">LABS</span></span>
      </a>
      <nav class="hidden lg:flex items-center gap-7 text-[14px] text-white/85">${navItems}</nav>
      <div class="hidden md:flex items-center gap-2.5">
        <a href="contact.html" class="btn btn-ghost">Talk to Expert</a>
        <a href="security-assessment.html" class="btn btn-orange">Start Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
      <button id="mobBtn" class="lg:hidden text-white" aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
    </div>
    <div id="mobNav" class="lg:hidden hidden border-t border-white/5 bg-brand-ink/95 backdrop-blur-xl">
      <div class="px-6 py-4 flex flex-col gap-3 text-white/90 text-[15px]">
        <a href="index.html" class="py-2">Home</a>
        <details><summary class="py-2 cursor-pointer">Services</summary><div class="pl-4 py-2 flex flex-col gap-2 text-brand-body text-[14px]">${mobileServices}</div></details>
        <a href="coe.html" class="py-2">COE</a>
        <a href="essentials.html" class="py-2">G'Secure Essentials</a>
        <details><summary class="py-2 cursor-pointer">Resources</summary><div class="pl-4 py-2 flex flex-col gap-2 text-brand-body text-[14px]">${mobileResources}</div></details>
        <a href="partners.html" class="py-2">Partners</a>
        <a href="about.html" class="py-2">About</a>
        <a href="contact.html" class="py-2">Contact</a>
        <div class="flex gap-2 pt-2"><a href="contact.html" class="btn btn-ghost flex-1 justify-center">Talk to Expert</a><a href="security-assessment.html" class="btn btn-orange flex-1 justify-center">Start Now</a></div>
      </div>
    </div>
  </header>`;

  return utility + main;
}

function renderCTABand() {
  return `
  <section class="relative py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 reveal" style="background: linear-gradient(135deg, #004a80 0%, #0077d0 100%);">
        <div class="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange"></div>
        <div class="orb orb-orange" style="width:360px;height:360px;top:-160px;right:-100px;opacity:.55"></div>
        <div class="relative p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div class="eyebrow text-brand-orangeSoft mb-3" style="color:#ffd07a">24×7 Cyber Defense</div>
            <h2 class="h-section text-white">Ready for next-gen detection and response?</h2>
            <p class="mt-3 text-white/80 max-w-xl">Talk to our security experts and see what AI-driven MDR can do for your enterprise.</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="contact.html" class="btn btn-orange">Talk to Expert</a>
            <a href="security-assessment.html" class="btn btn-ghost text-white">Free Security Assessment</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderFooter() {
  const services = SERVICES.slice(0,9).map(([h,t])=>`<li><a href="${h}" class="hover:text-brand-orange">${t}</a></li>`).join('');
  return `
  <footer class="border-t border-white/5 bg-black/40">
    <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <svg class="logo-shield" viewBox="0 0 32 32"><defs><clipPath id="sf"><path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z"/></clipPath></defs><g clip-path="url(#sf)"><rect x="0" y="0" width="16" height="32" fill="#004a80"/><rect x="16" y="0" width="16" height="32" fill="#faa61a"/></g><circle cx="16" cy="14" r="2.4" fill="#fff"/><rect x="15" y="14" width="2" height="6" fill="#fff"/></svg>
          <span class="font-black text-white">G'SECURE <span class="text-brand-orange">LABS</span></span>
        </div>
        <p class="text-brand-mute text-sm leading-relaxed">A Gateway Group Company. Redefining your cyber security outcomes across 30+ countries.</p>
        <div class="flex gap-3 mt-5">
          <a href="#" aria-label="LinkedIn" class="w-9 h-9 grid place-items-center rounded-md border border-white/10 text-brand-mute hover:text-brand-orange hover:border-brand-orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 17H6V10h2v7zM7 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm11 8h-2v-3.5c0-2-2-1.8-2 0V17h-2v-7h2v1.2c.9-1.7 4-1.8 4 1.6V17z"/></svg></a>
          <a href="#" aria-label="Twitter" class="w-9 h-9 grid place-items-center rounded-md border border-white/10 text-brand-mute hover:text-brand-orange hover:border-brand-orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.1 4.1 0 0 0 12 9.2c0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5 4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.6 11.7 11.7 0 0 0 8.3 20.5c7.5 0 11.7-6.3 11.7-11.7v-.5A8.3 8.3 0 0 0 22 5.8z"/></svg></a>
          <a href="#" aria-label="YouTube" class="w-9 h-9 grid place-items-center rounded-md border border-white/10 text-brand-mute hover:text-brand-orange hover:border-brand-orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-2 0-4-.4-5.4a2.7 2.7 0 0 0-1.9-1.9C18 4.3 12 4.3 12 4.3s-6 0-7.7.4A2.7 2.7 0 0 0 2.4 6.6C2 8 2 10 2 12s0 4 .4 5.4c.3 1 1 1.6 1.9 1.9 1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.4.4-3.4.4-5.4zM10 15.5v-7l5.2 3.5L10 15.5z"/></svg></a>
          <a href="#" aria-label="Facebook" class="w-9 h-9 grid place-items-center rounded-md border border-white/10 text-brand-mute hover:text-brand-orange hover:border-brand-orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9l2.2.2v2.5H15c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg></a>
        </div>
      </div>
      <div>
        <div class="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</div>
        <ul class="space-y-2 text-sm text-brand-body">${services}</ul>
      </div>
      <div>
        <div class="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</div>
        <ul class="space-y-2 text-sm text-brand-body">
          <li><a href="about.html" class="hover:text-brand-orange">About</a></li>
          <li><a href="coe.html" class="hover:text-brand-orange">COE</a></li>
          <li><a href="essentials.html" class="hover:text-brand-orange">G'Secure Essentials</a></li>
          <li><a href="partners.html" class="hover:text-brand-orange">Partners</a></li>
          <li><a href="success-stories.html" class="hover:text-brand-orange">Success Stories</a></li>
          <li><a href="insights.html" class="hover:text-brand-orange">Insights</a></li>
          <li><a href="news-room.html" class="hover:text-brand-orange">News Room</a></li>
          <li><a href="#" class="hover:text-brand-orange">Careers</a></li>
        </ul>
      </div>
      <div>
        <div class="text-white font-bold text-sm uppercase tracking-wider mb-4">Get in Touch</div>
        <ul class="space-y-3 text-sm text-brand-body">
          <li class="flex gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#faa61a" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>consult@gsecurelabs.com</li>
          <li class="flex gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#faa61a" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>+46 733 690899</li>
          <li class="flex gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#faa61a" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>Isafjordsgatan 30A, 16440 Kista, Sweden</li>
        </ul>
        <a href="contact.html" class="mt-4 inline-flex items-center gap-1 text-brand-orange text-[13px] font-semibold">View All Offices <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
    </div>
    <div class="border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-mute">
        <div>© 2026 G'SECURE LABS — A Gateway Group Company. All Rights Reserved.</div>
        <div class="flex gap-5"><a href="#" class="hover:text-brand-orange">Privacy</a><a href="#" class="hover:text-brand-orange">Terms</a></div>
      </div>
    </div>
  </footer>`;
}

// Mount + behaviors
function mountChrome(activePage) {
  const navMount = document.getElementById('nav-mount');
  const ctaMount = document.getElementById('cta-mount');
  const footMount = document.getElementById('footer-mount');
  if (navMount) navMount.innerHTML = renderNav(activePage);
  if (ctaMount) ctaMount.innerHTML = renderCTABand();
  if (footMount) footMount.innerHTML = renderFooter();

  // Glass nav on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('nav-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive:true }); onScroll();
  }
  // Mobile drawer
  const mb = document.getElementById('mobBtn');
  if (mb) mb.addEventListener('click', () => document.getElementById('mobNav').classList.toggle('hidden'));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), (i % 6) * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Counter
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; const to = +el.dataset.to;
      const dur = 1400; const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start)/dur);
        el.textContent = Math.floor(p * to) + (p === 1 ? '+' : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => cio.observe(el));
}
