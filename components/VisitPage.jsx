// VisitPage.jsx
const VisitPage = () => (
  <React.Fragment>
    <header className="page-head">
      <div className="container">
        <span className="eyebrow">Visit</span>
        <h1>We'd love to meet you this Sunday.</h1>
        <p className="lead">
          No need to register, dress up, or know anyone. Come as you are — you'll be welcomed warmly.
        </p>
      </div>
    </header>

    <section className="section">
      <div className="container">
        <div className="visit-grid">
          <div className="info-stack">
            <div>
              <div className="eyebrow" style={{marginBottom: 10}}>When</div>
              <h3>Sunday</h3>
              <p><strong style={{color: 'var(--fg-1)'}}>9:30 AM</strong> — Bible class for all ages</p>
              <p><strong style={{color: 'var(--fg-1)'}}>10:30 AM</strong> — Worship service</p>
            </div>
            <div>
              <h3>Wednesday</h3>
              <p><strong style={{color: 'var(--fg-1)'}}>7:00 PM</strong> — Midweek Bible study</p>
            </div>
            <div>
              <div className="eyebrow" style={{marginBottom: 10}}>Where</div>
              <h3>2871 Cherokee St NW</h3>
              <p>Kennesaw, GA 30144</p>
              <p style={{marginTop: 10}}>(770) 555-0144</p>
            </div>
            <div>
              <div className="eyebrow" style={{marginBottom: 10}}>What to bring</div>
              <h3>Just yourself.</h3>
              <p>Bibles are provided. We don't pass a collection plate toward visitors — giving is for members only.</p>
            </div>
          </div>
          <div>
            <div className="map-frame">
              <iframe
                title="Map to Kennesaw church of Christ"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-84.640%2C34.020%2C-84.590%2C34.045&amp;layer=mapnik&amp;marker=34.0327%2C-84.6147"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2871+Cherokee+St+NW+Kennesaw+GA+30144"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary"
              >Get directions</a>
              <a href="#/about" className="btn btn-secondary">What we believe</a>
            </div>
            <div className="visit-callout">
              <div className="verse-ref" style={{marginBottom: 8}}>For first-time visitors</div>
              <p style={{margin: 0}}>
                Park anywhere in the lot — there are no reserved spots. Enter through the front
                doors; a greeter will help you find a seat and the children's classes if you
                have kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ScriptureQuote
      text="Where two or three are gathered in my name, there am I among them."
      reference="Matthew 18:20"
    />

    <WhatToExpect />
  </React.Fragment>
);

window.VisitPage = VisitPage;
