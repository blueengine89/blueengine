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

/* Contact — secondary outline button */
#site-nav .sn-contact {
  padding: 9px 20px !important;
  background: transparent !important;
  color: rgba(11, 30, 54, 0.75) !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border: 1.5px solid rgba(11, 30, 54, 0.2) !important;
  border-radius: 7px !important;
  transition: border-color 0.2s, color 0.2s !important;
}
#site-nav .sn-contact:hover {
  border-color: rgba(11, 30, 54, 0.45) !important;
  color: #0B1E36 !important;
}

/* Free Health Check — primary red button */
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

#site-nav .sn-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  gap: 5px;
  background: none;
  border: none;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.2s;
}
#site-nav .sn-hamburger:hover { background: rgba(11, 30, 54, 0.06); }
#site-nav .sn-hamburger span {
  width: 100%;
  height: 2px;
  background: #0B1E36;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
  border-radius: 2px;
}
#site-nav .sn-hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(0px, 7px); }
#site-nav .sn-hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
#site-nav .sn-hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(0px, -7px); }
#site-nav .mobile-menu { display: none; }
@media (max-width: 960px) {
  #site-nav nav { padding: 0 24px; }
  #site-nav .sn-links { display: none; }
  #site-nav .sn-hamburger { display: flex; }
  #site-nav .mobile-menu {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(247, 245, 241, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(11, 30, 54, 0.07);
    padding: 24px 28px;
    display: none;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 8px 24px rgba(11, 30, 54, 0.08);
  }
  #site-nav .mobile-menu.show { display: flex; }
  #site-nav .mobile-menu a {
    font-family: 'Epilogue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 14px 0;
    border-bottom: 1px solid rgba(11, 30, 54, 0.08);
    color: rgba(11, 30, 54, 0.75);
    text-decoration: none;
    transition: color 0.2s;
  }
  #site-nav .mobile-menu a:hover { color: #0B1E36; }
  #site-nav .mobile-menu a:last-child {
    border-bottom: none;
    margin-top: 12px;
    padding: 12px 22px;
    background: #C43040;
    color: white !important;
    border-radius: 7px;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(196, 48, 64, 0.28);
  }
  #site-nav .mobile-menu a:last-child:hover { background: #A8202E; }
}
</style>`;

  const html = `
<nav id="bes-nav">
  <a href="/index.html" class="sn-logo">
    <img src="/brand_assets/blueengine-2b.svg" alt="Blue Engine Solutions">
  </a>
  <ul class="sn-links">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/about-us/">About</a></li>
    <li><a href="/contact/" class="sn-contact">Contact</a></li>
    <li><a href="/health-assessment/" class="sn-cta">Free Health Check →</a></li>
  </ul>
  <div class="sn-hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="mobile-menu">
    <a href="/index.html">Home</a>
    <a href="/services/">Services</a>
    <a href="/about-us/">About</a>
    <a href="/contact/">Contact</a>
    <a href="/health-assessment/">Free Health Check →</a>
  </div>
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
  const hamburger = document.querySelector('.sn-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
  });

  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(247, 245, 241, 0.98)'
      : 'rgba(247, 245, 241, 0.92)';
  }, { passive: true });
})();
