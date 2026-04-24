// GetInvolved.jsx — quiet "ways to connect" block
const GetInvolved = () => {
  const items = [
    {
      tag: 'Bible Study',
      title: 'Wednesdays at 7:00 PM',
      body: "Mid-week study in the auditorium — currently walking through Hebrews verse by verse. Open to everyone, no prior attendance required.",
      cta: 'See current study',
      href: '#/sermons',
    },
    {
      tag: 'Small Groups',
      title: 'Homes across Kennesaw',
      body: 'Smaller circles gather Sunday evenings to share a meal, pray together, and talk through the morning sermon. Ask a greeter and we\u2019ll help you find one nearby.',
      cta: 'Find a group',
      href: '#/visit',
    },
    {
      tag: 'Serve',
      title: 'Quiet, ordinary love',
      body: 'Benevolence meals, hospital visits, food pantry, and partnerships with local schools. Service is how we love our neighbors as ourselves.',
      cta: 'Ways to serve',
      href: '#/visit',
    },
  ];
  return (
    <section className="section involve">
      <div className="container">
        <div style={{maxWidth: 720, marginBottom: 8}}>
          <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>Get connected</div>
          <h2>Ways to grow with us, beyond Sunday.</h2>
          <p className="lead" style={{marginTop: 16, maxWidth: 620}}>
            A church is more than a service. The real life of the congregation happens in living
            rooms, hospital rooms, and the long, ordinary middle of the week.
          </p>
        </div>
        <div className="involve-grid">
          {items.map(i => (
            <div key={i.title} className="involve-card">
              <div className="involve-tag verse-ref">{i.tag}</div>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
              <a href={i.href} className="btn btn-tertiary">{i.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.GetInvolved = GetInvolved;
