// WhatToExpect.jsx — simple worship card + communion photo + sunday timeline
const WhatToExpect = () => {
  const timeline = [
    { time: 'Doors open',  label: 'Arrive & be welcomed by a greeter' },
    { time: '9:30 AM',     label: 'Bible class' },
    { time: '10:30 AM',    label: 'Worship service begins' },
    { time: '',            label: 'A cappella singing' },
    { time: '',            label: 'Scripture reading' },
    { time: '',            label: 'Message from the Word' },
    { time: '',            label: 'Lord\'s Supper' },
    { time: 'After service', label: 'Visit and fellowship with one another' },
  ];

  return (
    <section className="section expect">
      <div className="container">
        <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>What to expect</div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'start'}}>
          <div>
            <div className="expect-card" style={{marginBottom: 'var(--space-6)'}}>
              <div className="tag">Simple worship</div>
              <h3>Following New Testament Pattern</h3>
              <p>Our worship follows the pattern of the New Testament church. There will be a cappella singing, prayer, teaching from the Bible, and the Lord's Supper each Sunday.</p>
            </div>
            <div className="expect-card">
              <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>Sunday morning</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-3)'}}>
                {timeline.map((item, idx) => (
                  <div key={idx} style={{display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline'}}>
                    <span style={{minWidth: 96, fontSize: '0.8rem', fontWeight: 600, color: 'var(--sage-700)', flexShrink: 0}}>{item.time}</span>
                    <span style={{fontSize: '0.95rem', color: 'var(--fg-2)'}}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1610131635230-9c4afb6238b7?auto=format&fit=crop&w=1400&q=80"
            alt="Communion cup with red juice"
            style={{width: '100%', borderRadius: 'var(--radius-md)', objectFit: 'cover', aspectRatio: '4 / 5', display: 'block'}}
          />
        </div>
      </div>
    </section>
  );
};

window.WhatToExpect = WhatToExpect;
