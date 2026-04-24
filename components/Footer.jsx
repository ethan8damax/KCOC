// Footer.jsx
const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div>
        <img src="./assets/logo-light.svg" alt="Kennesaw church of Christ" className="footer-logo" />
        <div className="footer-byline">
          Following Christ in Kennesaw. A spiritual family, grounded in the Bible.
        </div>
      </div>
      <div>
        <h5>Gatherings</h5>
        <ul>
          <li>Sunday Bible Class — 9:30 AM</li>
          <li>Sunday Worship — 10:30 AM</li>
          <li>Wednesday Bible Study — 7:00 PM</li>
        </ul>
      </div>
      <div>
        <h5>Visit</h5>
        <ul>
          <li>2871 Cherokee St NW</li>
          <li>Kennesaw, GA 30144</li>
          <li>(770) 555-0144</li>
        </ul>
      </div>
      <div>
        <h5>Learn</h5>
        <ul>
          <li><a href="#/about">About us</a></li>
          <li><a href="#/about">What we believe</a></li>
          <li><a href="#/sermons">Sermons</a></li>
          <li><a href="#/visit">Contact &amp; directions</a></li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom">
        <span>© 2026 Kennesaw church of Christ</span>
        <span>"Your word is a lamp to my feet."  —  Psalm 119:105</span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
