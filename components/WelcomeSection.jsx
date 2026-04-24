// WelcomeSection.jsx — warm welcome block on homepage (tweakable image)
const WELCOME_IMAGES = {
  field:    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
  meadow:   'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1400&q=80',
  porch:    'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1400&q=80',
  window:   'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80',
  hands:    'https://images.unsplash.com/photo-1518676590629-3dcba9c5a555?auto=format&fit=crop&w=1400&q=80',
  coffee:   'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
  trees:    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
};

const WELCOME_ALT = {
  field:  'A quiet open field at golden hour',
  meadow: 'A peaceful mountain meadow under soft light',
  porch:  'A calm sunlit porch with pale wood',
  window: 'Gentle morning light through a window',
  hands:  'Two hands resting open in soft daylight',
  coffee: 'A warm cup on a quiet table',
  trees:  'Sunlight through tall trees in a quiet forest',
};

const WelcomeSection = ({ imageKey = 'field' }) => {
  const src = WELCOME_IMAGES[imageKey] || WELCOME_IMAGES.field;
  const alt = WELCOME_ALT[imageKey] || WELCOME_ALT.field;
  return (
    <section className="section welcome">
      <div className="container">
        <div className="welcome-grid">
          <div>
            <img
              src={src}
              alt={alt}
              style={{width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', display: 'block', aspectRatio: '4 / 5', objectFit: 'cover'}}
            />
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>Welcome</div>
            <h2 style={{marginBottom: 'var(--space-5)'}}>
              A spiritual family, grounded in the Bible.
            </h2>
            <p className="lead" style={{marginBottom: 'var(--space-4)'}}>
              The Kennesaw church of Christ seeks to follow New Testament Christianity —
              a local congregation striving to follow the pattern of the early church revealed in Scripture.
            </p>
            <p style={{marginBottom: 'var(--space-5)'}}>
              We welcome everyone. Whether you've attended church your whole life or never walked into
              one before, you'll find a seat, a warm greeting, and a community honest about following Christ.
            </p>
            <a href="#/about" className="btn btn-tertiary">Learn more about us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.WelcomeSection = WelcomeSection;
window.WELCOME_IMAGES = WELCOME_IMAGES;
