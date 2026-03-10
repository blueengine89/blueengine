/**
 * Blue Engine Solutions — Universal Site Nav
 * Inject via: <div id="site-nav"></div><script src="nav.js"></script>
 * Place the div at the very start of <body>.
 */
(function () {
  const css = `
<style id="bes-nav-styles">
#site-nav nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 72px;
  padding: 0 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(247, 245, 241, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(11, 30, 54, 0.07);
  transition: background 0.3s;
  font-family: 'Epilogue', sans-serif;
}
#site-nav .sn-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
#site-nav .sn-logo img {
  height: 32px;
  width: auto;
  display: block;
}
#site-nav .sn-links {
  display: flex;
  align-items: center;
  gap: 34px;
  list-style: none;
  margin: 0;
  padding: 0;
}
#site-nav .sn-links a {
  font-family: 'Epilogue', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(11, 30, 54, 0.58);
  text-decoration: none;
  transition: color 0.2s;
}
#site-nav .sn-links a:hover { color: #0B1E36; }
#site-nav .sn-cta {
  padding: 9px 22px !important;
  background: #C43040 !important;
  color: white !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border: 1.5px solid transparent !important;
  border-radius: 7px !important;
  box-shadow: 0 2px 12px rgba(196, 48, 64, 0.28) !important;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s !important;
}
#site-nav .sn-cta:hover {
  background: #A8202E !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 18px rgba(196, 48, 64, 0.35) !important;
}
#site-nav .sn-health-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}
#site-nav .sn-health {
  font-family: 'Epilogue', sans-serif;
  font-size: 14px !important;
  font-weight: 600 !important;
  color: #0B1E36 !important;
  text-decoration: none;
  padding: 9px 20px !important;
  padding-right: 52px !important;
  border: 1.5px solid rgba(43, 140, 174, 0.35) !important;
  border-radius: 7px !important;
  background: rgba(61, 166, 205, 0.05) !important;
  transition: border-color 0.2s, background 0.2s !important;
  white-space: nowrap;
  display: block;
  line-height: 1.4;
}
#site-nav .sn-health:hover {
  border-color: rgba(43, 140, 174, 0.65) !important;
  background: rgba(61, 166, 205, 0.10) !important;
  color: #0B1E36 !important;
}
#site-nav .sn-health-pill {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: #3DA6CD;
  color: white;
  font-family: 'Inconsolata', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 2px 7px;
  border-radius: 20px;
  pointer-events: none;
  line-height: 1.5;
}
@media (max-width: 960px) {
  #site-nav nav { padding: 0 24px; }
  #site-nav .sn-links li:not(:last-child) { display: none; }
}
</style>`;

  const html = `
<nav id="bes-nav">
  <a href="/index.html" class="sn-logo">
    <img src="/brand_assets/blueengine-2b.svg" alt="Blue Engine Solutions">
  </a>
  <ul class="sn-links">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/Site Pages/Services.html">Services</a></li>
    <li><a href="/Site Pages/about.html">About</a></li>
    <li>
      <span class="sn-health-wrap">
        <a href="/Site Pages/health-assessment.html" class="sn-health">Health Check</a>
        <span class="sn-health-pill">FREE</span>
      </span>
    </li>
    <li><a href="/Site Pages/contact.html" class="sn-cta">Contact</a></li>
  </ul>
</nav>`;

  const target = document.getElementById('site-nav');
  if (!target) return;

  // Inject CSS once (guard against multiple inclusions)
  if (!document.getElementById('bes-nav-styles')) {
    document.head.insertAdjacentHTML('beforeend', css);
  }
  target.innerHTML = html;

  // Scroll opacity
  const nav = document.getElementById('bes-nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(247, 245, 241, 0.98)'
      : 'rgba(247, 245, 241, 0.92)';
  }, { passive: true });
})();
