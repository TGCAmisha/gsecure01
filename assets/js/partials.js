// Shared header/footer for all pages
const HEADER_HTML = `
<header class="header">
  <div class="container nav">
    <a href="index.html" class="logo">
      <div class="logo-mark">
        <svg viewBox="0 0 42 46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1a3a6e"/>
              <stop offset="55%" stop-color="#0a1f44"/>
              <stop offset="100%" stop-color="#ff4d4d"/>
            </linearGradient>
          </defs>
          <path class="shield-bg" d="M21 1 L40 8 V24 Q40 38 21 45 Q2 38 2 24 V8 Z"/>
          <path d="M21 1 L40 8 V24 Q40 38 21 45 Q2 38 2 24 V8 Z" fill="none" stroke="rgba(0,229,255,0.5)" stroke-width="0.8"/>
          <text class="shield-letter" x="21" y="28" text-anchor="middle">G</text>
        </svg>
      </div>
      <div><span class="logo-text">G'Secure</span><small>LABS</small></div>
    </a>
    <ul class="nav-menu">
      <li class="dropdown">
        <a href="services.html">Services ▾</a>
        <div class="dropdown-menu">
          <a href="mdr.html">MDR Services</a>
          <a href="soc.html">SOC Services</a>
          <a href="grc.html">GRC Services</a>
          <a href="vapt.html">VAPT</a>
          <a href="services.html">All Services</a>
        </div>
      </li>
      <li><a href="insights.html">Resources</a></li>
      <li><a href="success-stories.html">Stories</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="contact.html" class="btn btn-ghost">Get a Call</a>
      <a href="contact.html" class="btn btn-primary">Start Now →</a>
      <button class="menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <div class="logo-mark">
        <svg viewBox="0 0 42 46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1a3a6e"/>
              <stop offset="55%" stop-color="#0a1f44"/>
              <stop offset="100%" stop-color="#ff4d4d"/>
            </linearGradient>
          </defs>
          <path class="shield-bg" d="M21 1 L40 8 V24 Q40 38 21 45 Q2 38 2 24 V8 Z"/>
          <path d="M21 1 L40 8 V24 Q40 38 21 45 Q2 38 2 24 V8 Z" fill="none" stroke="rgba(0,229,255,0.5)" stroke-width="0.8"/>
          <text class="shield-letter" x="21" y="28" text-anchor="middle">G</text>
        </svg>
      </div>
          <div><span class="logo-text">G'Secure</span><small>LABS</small></div>
        </a>
        <p>Redefining your cyber security outcomes — protecting your business, your brand, and everything in between.</p>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="Facebook">f</a>
        </div>
      </div>
      <div>
        <h5>Services</h5>
        <ul>
          <li><a href="mdr.html">MDR</a></li>
          <li><a href="soc.html">SOC</a></li>
          <li><a href="grc.html">GRC</a></li>
          <li><a href="vapt.html">VAPT</a></li>
          <li><a href="services.html">All Services</a></li>
        </ul>
      </div>
      <div>
        <h5>Capabilities</h5>
        <ul>
          <li><a href="services.html">Threat Intelligence</a></li>
          <li><a href="services.html">Threat Hunting</a></li>
          <li><a href="services.html">Forensics</a></li>
          <li><a href="services.html">UEBA</a></li>
          <li><a href="services.html">EDR / NDR</a></li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="success-stories.html">Success Stories</a></li>
          <li><a href="insights.html">Insights</a></li>
          <li><a href="contact.html">Careers</a></li>
          <li><a href="contact.html">Partners</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>Isafjordsgatan 30A, Kista, Sweden</li>
          <li>+46 733 690899</li>
          <li>consult@gsecurelabs.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 G'Secure Labs (Demo Clone). All rights reserved.</span>
      <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('site-header'); if (h) h.outerHTML = HEADER_HTML;
  const f = document.getElementById('site-footer'); if (f) f.outerHTML = FOOTER_HTML;

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
