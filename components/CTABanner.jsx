// CTABanner.jsx
const CTABanner = () => (
  <section className="cta-banner">
    <div className="container cta-banner-inner">
      <div>
        <div className="tag">This Sunday</div>
        <h2>We'd love to meet you this week.</h2>
        <p>Worship at 10:30 AM</p> 
        <p>2871 Cherokee St NW, Kennesaw, GA 30144</p>
      </div>
      <a href="#/visit" className="btn btn-on-dark">Plan your visit</a>
    </div>
  </section>
);

window.CTABanner = CTABanner;
