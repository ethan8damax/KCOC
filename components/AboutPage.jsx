// AboutPage.jsx
const AboutPage = () => (
  <React.Fragment>
    <header className="page-head">
      <div className="container">
        <h1>About the Kennesaw church of Christ</h1>
      </div>
    </header>

    <section className="section">
      <div className="reading">
        <span className="eyebrow">Our mission</span>
        <h2 style={{marginTop: 8}}>Following Christ in Kennesaw.</h2>
        <p>
          We strive to be like the early church. faithfully following God's word, without adding to it
          or taking away from it is our goal. We meet each week to worship God, study
          Scripture, share the Lord's Supper, and encourage one another to live as disciples of Jesus.
        </p>
        <p>
          Our vision is simple: to draw closer to God in Kennesaw, and to help our neighbors do
          the same. We do that through faithful teaching, hospitable gatherings, and quiet,
          consistent service to the community around us.
        </p>

        <hr className="divider" />

        <span className="eyebrow">How we're different</span>
        <h2 style={{marginTop: 8}}>We are a congregation, not a denomination.</h2>
        <p>
          The Kennesaw church of Christ seeks to follow New Testament Christianity.
          Our goal is simple: to restore the faith and practice of the church described in the
          New Testament. We are not a denomination, but a local congregation striving to follow
          the pattern of the early church revealed in Scripture.
        </p>
        <p>
          Each local congregation is autonomous and governed only by Christ through His Word,
          not by denominational councils or conventions. We reject human creeds and traditions
          as sources of authority, and seek instead to follow Christ through His Word.
        </p>

        <hr className="divider" />

        <span className="eyebrow">Our beliefs</span>
        <h2 style={{marginTop: 8}}>What we believe, and why.</h2>

        <h3>The Bible</h3>
        <p>
          In a world full of questions, the Bible is our guide <span className="verse-ref">(Psalm 119:105)</span>.
          It offers wisdom when we're lost, comfort when we're down, and clarity when life gets
          tough <span className="verse-ref">(Proverbs 3:5–6)</span>. Most importantly, it shows us the path
          to salvation and eternal life <span className="verse-ref">(Romans 1:16)</span>.
        </p>

        <h3>Jesus</h3>
        <p>
          Jesus is our Savior and guiding light <span className="verse-ref">(1 John 4:14; John 8:12)</span>.
          In the midst of life's chaos, we find our anchor in Christ. We call ourselves "disciples"
          because He is our model, and we strive to live as He did <span className="verse-ref">(1 Corinthians 11:1)</span>.
        </p>

        <h3>Forgiveness</h3>
        <p>
          The pressure to be perfect can be overwhelming. But God never intended for us to bear
          that burden; His grace lifts it from our shoulders. Forgiveness isn't something we earn
          by being good; it's a gift we receive through faith in Christ
          <span className="verse-ref"> (Ephesians 2:8–9)</span>.
        </p>

        <h3>Baptism</h3>
        <p>
          Water baptism, by full immersion, washes away our sins
          <span className="verse-ref"> (Acts 2:38; Acts 22:16)</span>. This sacred act marks the
          beginning of a new spiritual journey <span className="verse-ref">(Romans 6:3–4)</span>.
        </p>

        <h3>The Church</h3>
        <p>
          We strive to be a spiritual family, directly connected to the original church that Jesus
          Himself founded <span className="verse-ref">(Matthew 16:18)</span>. Each congregation is
          independent, guided by its local leaders according to the Bible
          <span className="verse-ref"> (Titus 1:5; 1 Peter 5:1–4)</span>.
        </p>

        <h3>Worship</h3>
        <p>
          We believe worship should be simple and sincere. When we gather, it's about honoring
          God in the way He desires <span className="verse-ref">(John 4:24)</span> and encouraging
          each other toward love and good works <span className="verse-ref">(Hebrews 10:24)</span>.
          We sing a cappella, pray, teach from Scripture, share the Lord's Supper each Sunday, and
          give as we are able.
        </p>
      </div>
    </section>

    <ScriptureQuote
      text="Those who worship Him must worship in Spirit and in Truth."
      reference="John 4:24"
    />

    <section className="section">
      <div className="reading">
        <span className="eyebrow">Plan of salvation</span>
        <h2 style={{marginTop: 8}}>A path the New Testament lays out clearly.</h2>
        <p>
          Forgiveness is a gift we don't earn or deserve <span className="verse-ref">(Ephesians 2:8–9)</span>.
          However, the New Testament provides a clear path that guides us
          in receiving it and maintaining it.
        </p>

        <div className="steps">
          <div className="step">
            <div>
              <h4>Hear the gospel.</h4>
              <p>Faith begins with hearing the message of Christ. <span className="verse-ref">Romans 10:17</span></p>
            </div>
          </div>
          <div className="step">
            <div>
              <h4>Believe in Jesus.</h4>
              <p>Believe in Him as the Son of God. <span className="verse-ref">John 3:16; Hebrews 11:6</span></p>
            </div>
          </div>
          <div className="step">
            <div>
              <h4>Repent of sin.</h4>
              <p>Turn away from sin and follow Christ. <span className="verse-ref">Acts 17:30; Luke 13:3</span></p>
            </div>
          </div>
          <div className="step">
            <div>
              <h4>Confess faith in Christ.</h4>
              <p>Openly declare Jesus as Lord. <span className="verse-ref">Matthew 10:32; Romans 10:9–10</span></p>
            </div>
          </div>
          <div className="step">
            <div>
              <h4>Be baptized.</h4>
              <p>Full immersion in water, representing the death, burial, and resurrection of Christ. <span className="verse-ref">Romans 6:3–4; Acts 2:38</span></p>
            </div>
          </div>
          <div className="step">
            <div>
              <h4>Live faithfully.</h4>
              <p>Follow Christ daily, growing in faith, love, and obedience. <span className="verse-ref">Revelation 2:10; Matthew 28:18–20</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTABanner />
  </React.Fragment>
);

window.AboutPage = AboutPage;
