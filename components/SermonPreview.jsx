// SermonPreview.jsx — latest sermon teaser for homepage
const SermonPreview = () => (
  <section className="section sermon-preview">
    <div className="container">
      <div className="sermon-preview-grid">
        <div className="sermon-preview-art">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80"
            alt="Sunlight through stained glass"
          />
          <div className="sermon-play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom: 'var(--space-4)'}}>Latest Sermon</div>
          <h2 style={{marginBottom: 'var(--space-4)'}}>The Anchor for the Soul.</h2>
          <p className="lead" style={{marginBottom: 'var(--space-4)'}}>
            What does it mean to find a hope that holds steady when life shifts beneath us?
            A study of Hebrews 6:19 — and what early Christians knew about lasting confidence.
          </p>
          <div className="sermon-meta">
            <span className="verse-ref">Hebrews 6:13–20</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>Brother David Whitfield</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>April 19, 2026</span>
          </div>
          <div style={{marginTop: 'var(--space-6)', display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            <a href="#/sermons" className="btn btn-primary">Listen now</a>
            <a href="#/sermons" className="btn btn-tertiary">Browse the archive</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.SermonPreview = SermonPreview;
