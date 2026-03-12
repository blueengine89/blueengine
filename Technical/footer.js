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
  font-family: 'Inconsolata', 'IBM Plex Mono', monospace;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .14em;
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
  background: #C43040;
  color: white;
  font-family: 'Epilogue', sans-serif;
  font-size: .82rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 2px 10px rgba(196,48,64,.3);
  transition: background .2s, transform .15s;
}
#site-footer .ft-cta-btn:hover {
  background: #A8202E;
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

#site-footer .ft-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-family: 'Inconsolata', 'IBM Plex Mono', monospace;
  font-size: .72rem;
  color: rgba(255,255,255,.38);
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
      <p class="ft-desc">A certified Salesforce Partner helping nonprofits and growing businesses get more from the platform they've already invested in. Founded 2019.</p>
    </div>
    <div>
      <p class="ft-col-title">Services</p>
      <ul class="ft-links">
        <li><a href="/Site Pages/health-assessment.html">Health Check</a></li>
        <li><a href="/Site Pages/Services.html#managed">Managed Services</a></li>
        <li><a href="/Site Pages/Services.html#fix">Org Cleanup</a></li>
        <li><a href="/Site Pages/Services.html#implement">Quick Starts</a></li>
        <li><a href="/Site Pages/Services.html#automate">Integrations</a></li>
        <li><a href="/Site Pages/Services.html#training">Training</a></li>
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
        <a href="/Site Pages/health-assessment.html" class="ft-cta-btn">Free Assessment →</a>
        <a href="/Site Pages/contact.html" class="ft-cta-btn ft-cta-btn--outline">Schedule a Call →</a>
      </div>
      <ul class="ft-links">
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
