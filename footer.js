/**
 * Blue Engine Solutions — Universal Site Footer
 * Inject via: <div id="site-footer"></div><script src="footer.js"></script>
 */
(function () {
  const css = `
<style id="bes-footer-styles">
#site-footer footer {
  background: #1A3A5C;
  padding: 4rem 5rem 2.5rem;
  font-family: 'Epilogue', 'DM Sans', sans-serif;
}
#site-footer .ft-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
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
  opacity: 1;
}
#site-footer .ft-desc {
  font-size: .87rem;
  color: rgba(255,255,255,.58);
  line-height: 1.68;
  font-weight: 300;
  max-width: 280px;
  margin: 0;
}
#site-footer .ft-col-title {
  font-family: 'Epilogue', sans-serif;
  font-size: .85rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,1);
  margin-bottom: .9rem;
}
#site-footer .ft-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .45rem;
  padding: 0;
  margin: 0;
}
#site-footer .ft-links a {
  font-size: .85rem;
  color: rgba(255,255,255,.62);
  text-decoration: none;
  transition: color .2s;
}
#site-footer .ft-links a:hover { color: white; }

/* Why Blue Engine column */
#site-footer .ft-why-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .7rem;
}
#site-footer .ft-why-list li {
  display: flex;
  align-items: flex-start;
  gap: .55rem;
  font-size: .85rem;
  color: rgba(255,255,255,.62);
  line-height: 1.4;
}
#site-footer .ft-why-check {
  color: #3DA6CD;
  font-size: 1rem;
  flex-shrink: 0;
  line-height: 1.3;
}

/* Conversion CTA buttons in footer */
#site-footer .ft-cta-links {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1.25rem;
}
#site-footer .ft-cta-btn {
  display: block;
  padding: .6rem 1rem;
  background: #3DA6CD;
  color: white;
  font-family: 'Epilogue', sans-serif;
  font-size: .82rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 2px 10px rgba(61,166,205,.25);
  transition: background .2s, transform .15s;
}
#site-footer .ft-cta-btn:hover {
  background: #2e90b5;
  color: white;
  transform: translateY(-1px);
}
#site-footer .ft-cta-btn--outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,.22);
  color: rgba(255,255,255,.8);
  box-shadow: none;
}
#site-footer .ft-cta-btn--outline:hover {
  background: rgba(255,255,255,.07);
  border-color: rgba(255,255,255,.4);
  color: white;
  transform: translateY(-1px);
}

#site-footer .ft-utility {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  padding: 1.5rem 0;
  flex-wrap: wrap;
}
#site-footer .ft-utility a {
  font-family: 'Epilogue', sans-serif;
  font-size: .85rem;
  font-weight: 400;
  color: rgba(255,255,255,.62);
  text-decoration: none;
  transition: color .2s;
}
#site-footer .ft-utility a:hover { color: white; }
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
  color: rgba(255,255,255,.5);
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
</style>`;

  const html = `
<footer>
  <div class="ft-top">
    <div>
      <a href="/index.html" class="ft-brand-logo">
        <img src="/brand_assets/blueengine-2b-white.svg" alt="Blue Engine">
      </a>
      <p class="ft-desc">We fix broken Salesforce implementations and help your team actually love it.</p>
    </div>
    <div>
      <p class="ft-col-title">Services</p>
      <ul class="ft-links">
        <li><a href="/health-assessment/">Health Check</a></li>
        <li><a href="/services/#acc-managed">Managed Services</a></li>
        <li><a href="/services/#acc-fix">Org Cleanup</a></li>
        <li><a href="/services/#acc-automate">Integrations</a></li>
        <li><a href="/services/#acc-training">Training</a></li>
      </ul>
      <p class="ft-col-title" style="margin-top:1.5rem;">Who We Serve</p>
      <ul class="ft-links">
        <li><a href="/for-businesses.html">Growing Businesses</a></li>
        <li><a href="/for-nonprofits.html">Nonprofits</a></li>
      </ul>
    </div>
    <div>
      <p class="ft-col-title">Why Blue Engine?</p>
      <ul class="ft-why-list">
        <li><span class="ft-why-check">✓</span> Direct access to senior consultants</li>
        <li><span class="ft-why-check">✓</span> Cancel anytime — no lock-in, no penalties</li>
        <li><span class="ft-why-check">✓</span> Strategy before technology</li>
        <li><span class="ft-why-check">✓</span> Transparent billing, no surprises</li>
        <li><span class="ft-why-check">✓</span> We teach and empower your team</li>
      </ul>
    </div>
    <div>
      <p class="ft-col-title">Get In Touch</p>
      <div class="ft-cta-links">
        <a href="/health-assessment/" class="ft-cta-btn">Free Assessment →</a>
        <a href="/contact/" class="ft-cta-btn ft-cta-btn--outline">Schedule a Call →</a>
      </div>
      <ul class="ft-links">
        <li><a href="https://www.google.com/maps/place/Blue+Engine+Salesforce+Consultants/@38.9201005,-77.0310298,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b750b78dfe2d:0xaa2c3bc67c54f05a!8m2!3d38.9201005!4d-77.0310298!16s%2Fg%2F11kgt74f0h?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">Blue Engine Salesforce Consultants<br>1342 Florida Ave NW<br>Washington, DC 20009</a></li>
        <li><a href="tel:+12402731612">(240) 273-1612</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-utility">
    <a href="/about-us/">About</a>
    <a href="/approach/">Our Approach</a>
    <a href="/case-studies/">Case Studies</a>
    <a href="/testimonials/">Testimonials</a>
    <a href="/careers/">Careers</a>
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
