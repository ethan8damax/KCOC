// Nav.jsx — sticky primary navigation
const Nav = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  const items = [
    { href: '#/', label: 'Home' },
    { href: '#/about', label: 'About' },
  ];
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#/" onClick={() => setOpen(false)}>
            <img src="./assets/logo.svg" alt="Kennesaw Church of Christ" className="nav-logo" />
          </a>
          <div className="nav-links">
            {items.map(i => (
              <a key={i.href} href={i.href} className={route === i.href ? 'active' : ''}>{i.label}</a>
            ))}
            <a href="#/visit" className="nav-cta">Plan your visit</a>
          </div>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <React.Fragment><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></React.Fragment>
                : <React.Fragment><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></React.Fragment>}
            </svg>
          </button>
        </div>
      </nav>
      <div className={`mobile-drawer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {items.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
        <a href="#/visit" style={{color: 'var(--sage-700)', fontWeight: 600}}>Plan your visit →</a>
      </div>
    </React.Fragment>
  );
};

window.Nav = Nav;
