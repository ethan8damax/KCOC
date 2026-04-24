// BeliefsSnippet.jsx — homepage teaser for beliefs
const BeliefsSnippet = () => {
  const items = [
    {
      h: 'The Bible',
      p: "In a world full of questions, the Bible is our guide. It offers wisdom when we're lost, comfort when we're down, and clarity when life gets tough.",
      ref: 'Psalm 119:105',
    },
    {
      h: 'Jesus',
      p: "Jesus is our Savior and guiding light. In the midst of life's chaos, we find our anchor in Christ — He is the focus and guiding force in all we do.",
      ref: 'John 8:12',
    },
    {
      h: 'Forgiveness',
      p: "Forgiveness isn't something we earn by being good; it's a gift we receive through faith in Christ. His grace lifts the burden of perfection from our shoulders.",
      ref: 'Ephesians 2:8–9',
    },
  ];
  return (
    <section className="section beliefs">
      <div className="container">
        <div style={{maxWidth: 720, marginBottom: 16}}>
          <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>What we believe</div>
          <h2>Simple truths, held firmly.</h2>
          <p className="lead" style={{marginTop: 16, maxWidth: 600}}>
            We stick to the simple truth of the Bible — an unchanging treasure that has stood the test of time.
          </p>
        </div>
        <div className="beliefs-grid">
          {items.map(i => (
            <div key={i.h} className="belief-item">
              <h4>{i.h}</h4>
              <p>{i.p}</p>
              <div className="verse-ref">{i.ref}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: 'var(--space-7)'}}>
          <a href="#/about" className="btn btn-secondary">Read all our beliefs</a>
        </div>
      </div>
    </section>
  );
};

window.BeliefsSnippet = BeliefsSnippet;
