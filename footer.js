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
  align-items: center;
  gap: 7px;
  margin-bottom: .85rem;
  text-decoration: none;
}
#site-footer .ft-logo-img { height: 36px; width: auto; display: block; }
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
#site-footer a.ft-cert {
  text-decoration: none;
  transition: color .2s, background .2s;
}
#site-footer a.ft-cert:hover {
  color: rgba(255,255,255,.85);
  background: rgba(255,255,255,.1);
}
#site-footer .ft-cert-stars {
  color: #f5b731;
  letter-spacing: .04em;
  font-size: .72rem;
  line-height: 1;
}
#site-footer .ft-trust-group {
  display: flex;
  gap: .75rem;
  align-items: center;
  flex-wrap: wrap;
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
        <img src="/brand_assets/logo chevron transparent white text.png" alt="Blue Engine Solutions" class="ft-logo-img" />
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
    <a href="/faq.html">FAQ</a>
    <a href="/careers/">Careers</a>
    <div class="ft-trust-group">
      <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000ONlmUEAT" target="_blank" rel="noopener" class="ft-cert"><span class="ft-cert-dot"></span>CERTIFIED SALESFORCE PARTNER SINCE 2019</a>
      <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000ONlmUEAT" target="_blank" rel="noopener" class="ft-cert"><span class="ft-cert-stars">★★★★★</span>4.9 ON APPEXCHANGE</a>
    </div>
  </div>
</footer>`;

  const target = document.getElementById('site-footer');
  if (!target) return;

  // Inject CSS once (guard against multiple inclusions)
  if (!document.getElementById('bes-footer-styles')) {
    document.head.insertAdjacentHTML('beforeend', css);
  }
  target.innerHTML = html;

  // Inject Organization schema on every page for AEO entity signaling
  if (!document.getElementById('bes-org-schema')) {
    const schema = document.createElement('script');
    schema.id = 'bes-org-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Blue Engine Solutions",
      "alternateName": "Blue Engine Salesforce Consultants",
      "url": "https://www.blueenginesolutions.com",
      "description": "Boutique Salesforce consulting firm specializing in org cleanups, data architecture, and workflow automation for nonprofits and growing businesses.",
      "sameAs": [
        "https://www.linkedin.com/company/blue-engine-solutions",
        "https://www.facebook.com/BlueEngineSalesforce",
        "https://www.youtube.com/@blueenginesalesforceconsul1434",
        "https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000ONlmUEAT",
        "https://g.page/salesforcedc",
        "https://g.page/salesforceconsultantny",
        "https://www.google.com/maps/place/Blue+Engine+Salesforce+Consultants/@33.8027394,-84.3933341,15z/data=!4m5!3m4!1s0x88f505b89cf279db:0xfaac04440ed26666!8m2!3d33.8027394!4d-84.3933341",
        "https://g.page/salesforceconsultantsphilly",
        "https://g.page/salesforcelosangeles",
        "https://www.google.com/maps/place/?q=place_id:ChIJf4Aah4ERsYkROuII-u91jTY",
        "https://g.page/salesforcetampa",
        "https://www.google.com/maps/place/Blue+Engine+Salesforce+Consultants/@25.7717773,-80.3628806,11z/data=!4m5!3m4!1s0x88d9b797b7966493:0x86d895590f9a0b18!8m2!3d25.7738321!4d-80.1899842",
        "https://www.google.com/maps/place/Blue+Engine+Salesforce+Consultants/@35.7689488,-78.6659838,13z/data=!4m5!3m4!1s0x0:0x2d5cb6bf592d086b!8m2!3d35.773249!4d-78.6390759",
        "https://www.bing.com/maps/search?style=r&q=Blue+Engine+Salesforce+Consultants%2C+1342+Florida+Ave+NW%2C+Washington%2C+DC+20009%2C+United+States&ss=id.local_ypid%3A%22YNBC361B29AC77FC7A%22&st=Blue+Engine+Salesforce+Consultants&sfa=1342+Florida+Ave+NW%2C+Washington%2C+DC+20009%2C+United+States&cp=38.920097%7E-77.031067&lvl=16",
        "https://www.bing.com/maps/search?style=r&q=Blue+Engine+Salesforce+Consulting%2C+61+Jane+St%2C+New+York%2C+NY+10014%2C+United+States&ss=id.local_ypid%3A%22YN8C633058411BDBC6%22&st=Blue+Engine+Salesforce+Consulting&sfa=61+Jane+St%2C+New+York%2C+NY+10014%2C+United+States&cp=40.738445%7E-74.005875&lvl=16",
        "https://www.bing.com/maps/search?style=r&q=Blue+Engine+Salesforce+Consulting%2C+1010+N+Hancock+St%2C+Philadelphia%2C+PA+19123%2C+United+States&ss=id.local_ypid%3A%22YNE71066F8B4F5EDB7%22&st=Blue+Engine+Salesforce+Consulting&sfa=1010+N+Hancock+St%2C+Philadelphia%2C+PA+19123%2C+United+States&cp=39.965748%7E-75.139420&lvl=16",
        "https://www.bing.com/maps/search?style=r&q=Blue+Engine+Salesforce+Consultants%2C+555+Fayetteville+St%2C+Raleigh%2C+NC+27601%2C+United+States&ss=id.local_ypid%3A%22YN4A580D682A71C98A%22&st=Blue+Engine+Salesforce+Consultants&sfa=555+Fayetteville+St%2C+Raleigh%2C+NC+27601%2C+United+States&cp=35.773258%7E-78.638954&lvl=16",
        "https://www.bing.com/maps/search?style=r&q=Blue+Engine+Salesforce+Consultants%2C+2120+W+Cary+St%2C+Richmond%2C+VA+23220%2C+United+States&ss=id.local_ypid%3A%22YN45E0132F4BB75254%22&st=Blue+Engine+Salesforce+Consultants&sfa=2120+W+Cary+St%2C+Richmond%2C+VA+23220%2C+United+States&cp=37.548958%7E-77.468475&lvl=16"
      ]
    });
    document.head.appendChild(schema);
  }
})();
