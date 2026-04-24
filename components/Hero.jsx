// Hero.jsx — homepage hero with full-bleed contemplative photography
const Hero = () => (
  <section className="hero">
    <div
      className="hero-bg"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2000&q=80')" }}
    />
    <div className="hero-overlay" />
    <div className="container hero-inner">
      <div className="hero-eyebrow">Following Christ in Kennesaw</div>
      <h1>Draw closer to God,<br/>together.</h1>
      <p className="hero-lead">
        An independent, non-denominational congregation grounded in the Bible.
        We'd love to meet you this Sunday.
      </p>
      <div className="hero-cta">
        <a href="#/visit" className="btn btn-primary">Plan your visit</a>
        <a href="#/about" className="btn btn-secondary">What we believe</a>
      </div>
      <div className="hero-meta">
        <div><span>Sundays</span><strong>9:30 &amp; 10:30 AM</strong></div>
        <div><span>Wednesdays</span><strong>7:00 PM</strong></div>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
