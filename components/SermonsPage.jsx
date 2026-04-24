// SermonsPage.jsx
const SermonsPage = () => {
  const featured = {
    title: 'The Anchor for the Soul',
    passage: 'Hebrews 6:13–20',
    speaker: 'Brother David Whitfield',
    date: 'April 19, 2026',
    summary:
      "What does it mean to find a hope that holds steady when life shifts beneath us? A study of Hebrews 6:19 — and what early Christians knew about lasting confidence.",
  };
  const archive = [
    { title: 'Walking by Faith, Not by Sight', passage: '2 Corinthians 5:1–10', speaker: 'Brother Mark Ellison', date: 'April 12, 2026', length: '38 min' },
    { title: 'A Living Hope',                  passage: '1 Peter 1:3–9',         speaker: 'Brother David Whitfield', date: 'April 5, 2026',  length: '34 min' },
    { title: 'The Lord\u2019s Supper, Remembered', passage: '1 Corinthians 11:23–26', speaker: 'Brother James Clayton', date: 'March 29, 2026', length: '29 min' },
    { title: 'Be Still and Know',              passage: 'Psalm 46',              speaker: 'Brother Mark Ellison',   date: 'March 22, 2026', length: '36 min' },
    { title: 'The Pattern of the Early Church',passage: 'Acts 2:42–47',          speaker: 'Brother David Whitfield', date: 'March 15, 2026', length: '41 min' },
    { title: 'Forgiven and Free',              passage: 'Ephesians 2:1–10',      speaker: 'Brother James Clayton',   date: 'March 8, 2026',  length: '32 min' },
    { title: 'Disciples, Not Just Believers',  passage: 'Matthew 28:18–20',      speaker: 'Brother Mark Ellison',    date: 'March 1, 2026',  length: '35 min' },
    { title: 'The Quiet Power of Prayer',      passage: 'Philippians 4:4–9',     speaker: 'Brother David Whitfield', date: 'February 22, 2026', length: '33 min' },
  ];
  const series = [
    { name: 'Letters to the Church', count: 8, range: 'Hebrews · 1 Peter · James' },
    { name: 'Songs of the Pilgrim',  count: 6, range: 'Psalms 42–73' },
    { name: 'The Pattern',            count: 5, range: 'Acts of the Apostles' },
  ];

  return (
    <React.Fragment>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Sermons &amp; Teaching</span>
          <h1>Faithful preaching from the Word.</h1>
          <p className="lead">
            Each Sunday we open the Bible together. Catch up on a sermon you missed, or revisit
            a passage that's stayed with you. New sermons are posted Monday afternoons.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="featured-sermon">
            <div className="featured-sermon-art">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80"
                alt="Sunlight through stained glass"
              />
              <div className="sermon-play sermon-play-lg" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="featured-badge">This week</div>
            </div>
            <div className="featured-sermon-body">
              <span className="verse-ref">{featured.passage}</span>
              <h2 style={{margin: '12px 0 16px'}}>{featured.title}</h2>
              <p className="lead">{featured.summary}</p>
              <div className="sermon-meta" style={{marginTop: 18}}>
                <span>{featured.speaker}</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>{featured.date}</span>
              </div>
              <div style={{marginTop: 'var(--space-6)', display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <a href="#" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 2}}><path d="M8 5v14l11-7z"/></svg>
                  Listen now
                </a>
                <a href="#" className="btn btn-secondary">Read transcript</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="series-row">
            <div>
              <div className="eyebrow" style={{marginBottom: 10}}>Current series</div>
              <h2>Walk through a series.</h2>
            </div>
            <a href="#" className="btn btn-tertiary">All series</a>
          </div>
          <div className="series-grid">
            {series.map(s => (
              <a href="#" key={s.name} className="series-card">
                <div className="series-card-num">{String(s.count).padStart(2, '0')}</div>
                <div>
                  <h3 style={{margin: 0}}>{s.name}</h3>
                  <div className="caption" style={{marginTop: 8}}>{s.range}</div>
                  <div className="verse-ref" style={{marginTop: 14}}>{s.count} sermons</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section expect" style={{paddingTop: 'var(--space-8)'}}>
        <div className="container">
          <div className="series-row">
            <div>
              <div className="eyebrow" style={{marginBottom: 10}}>Archive</div>
              <h2>Recent sermons.</h2>
            </div>
            <div className="archive-filter">
              <button className="filter-chip active">All</button>
              <button className="filter-chip">2026</button>
              <button className="filter-chip">2025</button>
              <button className="filter-chip">By speaker</button>
            </div>
          </div>
          <div className="archive-list">
            {archive.map(a => (
              <a href="#" key={a.title} className="archive-row">
                <div className="archive-play" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="archive-main">
                  <div className="verse-ref">{a.passage}</div>
                  <h3 style={{margin: '4px 0 6px', fontSize: '1.375rem'}}>{a.title}</h3>
                  <div className="archive-meta">
                    <span>{a.speaker}</span>
                    <span className="dot" aria-hidden="true">·</span>
                    <span>{a.date}</span>
                    <span className="dot" aria-hidden="true">·</span>
                    <span>{a.length}</span>
                  </div>
                </div>
                <div className="archive-arrow" aria-hidden="true">→</div>
              </a>
            ))}
          </div>
          <div style={{marginTop: 'var(--space-7)', textAlign: 'center'}}>
            <a href="#" className="btn btn-secondary">Load more sermons</a>
          </div>
        </div>
      </section>

      <ScriptureQuote
        text="Faith comes from hearing, and hearing through the word of Christ."
        reference="Romans 10:17"
      />

      <CTABanner />
    </React.Fragment>
  );
};

window.SermonsPage = SermonsPage;
