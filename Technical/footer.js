/**
 * Blue Engine Solutions — Universal Site Footer
 * Inject via: <div id="site-footer"></div><script src="footer.js"></script>
 */
(function () {
  const css = `
<style id="bes-footer-styles">
#site-footer footer {
  background: #0f1c2e;
  padding: 4rem 5rem 2.5rem;
  font-family: 'Epilogue', 'DM Sans', sans-serif;
}
#site-footer .ft-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
#site-footer .ft-brand-logo {
  display: inline-flex;
  margin-bottom: .85rem;
  text-decoration: none;
}
#site-footer .ft-brand-logo img {
  height: 28px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: .85;
}
#site-footer .ft-desc {
  font-size: .87rem;
  color: rgba(255,255,255,.42);
  line-height: 1.78;
  font-weight: 300;
  max-width: 280px;
  margin: 0;
}
#site-footer .ft-addr {
  font-size: .82rem;
  color: rgba(255,255,255,.28);
  line-height: 1.7;
  font-style: italic;
  margin-top: .75rem;
}
#site-footer .ft-col-title {
  font-family: 'Inconsolata', 'IBM Plex Mono', monospace;
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(255,255,255,.28);
  margin-bottom: 1.25rem;
}
#site-footer .ft-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .65rem;
  padding: 0;
  margin: 0;
}
#site-footer .ft-links a {
  font-size: .85rem;
  color: rgba(255,255,255,.48);
  text-decoration: none;
  transition: color .2s;
}
#site-footer .ft-links a:hover { color: white; }
#site-footer .ft-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-family: 'Inconsolata', 'IBM Plex Mono', monospace;
  font-size: .72rem;
  color: rgba(255,255,255,.22);
  letter-spacing: .04em;
}
#site-footer .ft-cert {
  display: flex;
  align-items: center;
  gap: .6rem;
  background: rgba(255,255,255,.06);
  padding: .4rem .9rem;
  border-radius: 4px;
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .1em;
  color: rgba(255,255,255,.35);
}
#site-footer .ft-cert-dot {
  width: 6px;
  height: 6px;
  background: #3b8fd4;
  border-radius: 50%;
  flex-shrink: 0;
}
@media (max-width: 960px) {
  #site-footer footer { padding: 3rem 1.5rem 2rem; }
  #site-footer .ft-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
  #site-footer .ft-bottom { flex-direction: column; gap: 1rem; text-align: center; }
}
@media (max-width: 560px) {
  #site-footer .ft-top { grid-template-columns: 1fr; }
}
#site-footer .ft-clients {
  padding: 2.25rem 5rem;
  background: #e8e8e8;
  border-bottom: 1px solid rgba(0,0,0,.07);
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}
#site-footer .ft-clients-label {
  font-family: 'Inconsolata', 'IBM Plex Mono', monospace;
  font-size: .58rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(0,0,0,.4);
  white-space: nowrap;
  flex-shrink: 0;
}
#site-footer .ft-clients-logos {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}
#site-footer .ft-client-logo img {
  height: 44px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  opacity: .8;
  transition: opacity .25s;
}
#site-footer .ft-client-logo img:hover { opacity: 1; }
@media (max-width: 960px) {
  #site-footer .ft-clients { padding: 2rem 1.5rem; gap: 2rem; }
  #site-footer .ft-clients-logos { gap: 2rem; }
}
</style>`;

  const html = `
<div class="ft-clients">
  <span class="ft-clients-label">Some of our happy clients</span>
  <div class="ft-clients-logos">
    <div class="ft-client-logo"><img src="/Client Logos/cag_logo-removebg-preview.png" alt="CAG"></div>
    <div class="ft-client-logo"><img src="/Client Logos/camden health logo transparent.png" alt="Camden Health"></div>
    <div class="ft-client-logo"><img src="/Client Logos/topgolf logo.png" alt="Topgolf"></div>
    <div class="ft-client-logo"><img src="/Client Logos/bond_civilutility_logo.jpg" alt="Bond Civil &amp; Utility"></div>
    <div class="ft-client-logo"><img src="/Client Logos/rebuilding-together-logo-vector.png" alt="Rebuilding Together"></div>
    <div class="ft-client-logo"><img src="/Client Logos/hero devs logo.png" alt="Hero Devs"></div>
    <div class="ft-client-logo"><img src="/Client Logos/penn logo.png" alt="University of Pennsylvania"></div>
    <div class="ft-client-logo"><img src="/Client Logos/umd logo 2.png" alt="University of Maryland"></div>
  </div>
</div>
<footer>
  <div class="ft-top">
    <div>
      <a href="/index.html" class="ft-brand-logo">
        <img src="/brand_assets/blueengine-2b.svg" alt="Blue Engine">
      </a>
      <p class="ft-desc">A certified Salesforce Partner helping nonprofits and growing businesses get more from the platform they've already invested in. Founded 2019.</p>
      <p class="ft-addr">Blue Engine Salesforce Consultants<br>1342 Florida Ave NW<br>Washington, DC 20009</p>
    </div>
    <div>
      <p class="ft-col-title">Services</p>
      <ul class="ft-links">
        <li><a href="/Site Pages/health-assessment.html">Health Check</a></li>
        <li><a href="/Site Pages/Services.html">Managed Services</a></li>
        <li><a href="/Site Pages/Services.html">Org Cleanup</a></li>
        <li><a href="/Site Pages/Services.html">Quick Starts</a></li>
        <li><a href="/Site Pages/Services.html">Integrations</a></li>
        <li><a href="/Site Pages/Services.html">Training</a></li>
      </ul>
    </div>
    <div>
      <p class="ft-col-title">Company</p>
      <ul class="ft-links">
        <li><a href="/Site Pages/about.html">About Us</a></li>
        <li><a href="/Site Pages/Case-Studies.html">Case Studies</a></li>
        <li><a href="#">AppExchange Reviews</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="/Site Pages/careers.html">Careers</a></li>
      </ul>
    </div>
    <div>
      <p class="ft-col-title">Get In Touch</p>
      <ul class="ft-links">
        <li><a href="/Site Pages/health-assessment.html">Free Assessment</a></li>
        <li><a href="/Site Pages/contact.html">Schedule a Call</a></li>
        <li><a href="mailto:hello@blueenginesolutions.com">hello@blueenginesolutions.com</a></li>
        <li><a href="https://maps.google.com/?q=1342+Florida+Ave+NW,+Washington,+DC+20009" target="_blank" rel="noopener">1342 Florida Ave NW, Washington DC</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-bottom">
    <span>&copy; 2025 Blue Engine Solutions LLC. All rights reserved.</span>
    <div class="ft-cert"><span class="ft-cert-dot"></span>CERTIFIED SALESFORCE PARTNER SINCE 2019</div>
  </div>
</footer>`;

  const target = document.getElementById('site-footer');
  if (!target) return;

  // Inject CSS once (guard against multiple inclusions)
  if (!document.getElementById('bes-footer-styles')) {
    document.head.insertAdjacentHTML('beforeend', css);
  }
  target.innerHTML = html;
})();
