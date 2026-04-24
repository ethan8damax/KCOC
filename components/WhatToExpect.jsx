// WhatToExpect.jsx — three-column what-to-expect grid
const WhatToExpect = () => {
  const items = [
    {
      tag: 'Come as you are',
      title: 'No dress code.',
      body: "Some wear suits, some wear jeans. What matters is that you're here. You'll be welcomed warmly, not sized up.",
    },
    {
      tag: 'Simple worship',
      title: 'Singing, prayer, Scripture.',
      body: "Our worship follows the pattern of the New Testament church — a cappella singing, prayer, teaching from the Bible, and the Lord's Supper each Sunday.",
    },
    {
      tag: 'Bring the kids',
      title: 'All ages welcome.',
      body: 'We have a staffed nursery for little ones and Bible classes for every age group at 9:30 AM before worship.',
    },
  ];
  return (
    <section className="section expect">
      <div className="container">
        <div style={{maxWidth: 640}}>
          <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>What to expect</div>
          <h2>Your first visit, without surprises.</h2>
        </div>
        <div className="expect-grid">
          {items.map(i => (
            <div key={i.title} className="expect-card">
              <div className="tag">{i.tag}</div>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.WhatToExpect = WhatToExpect;
