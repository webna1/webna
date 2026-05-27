import { useEffect, useState } from 'react';

export function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 80) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on page change
  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const go = (page) => { navigate(page); setMenuOpen(false); };

  const NAV_ITEMS = [
    { label: 'About',    page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Process',  page: 'process' },
    { label: 'Work',     page: 'work' },
  ];

  return (
    <>
      <nav id="main-nav">
        <button className="nav-logo" onClick={() => go('home')}>
          <div className="nav-logo-text">WEB<span className="ar">نا</span></div>
          <div className="nav-logo-pipe" />
          <div className="nav-logo-sub">Web Agency</div>
        </button>

        {/* Desktop */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, page }) => (
            <li key={page}>
              <button className={currentPage === page ? 'active' : ''} onClick={() => go(page)}>{label}</button>
            </li>
          ))}
          <li><button className="nav-cta" onClick={() => go('contact')}>Start a Project</button></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_ITEMS.map(({ label, page }) => (
            <li key={page}>
              <button className={currentPage === page ? 'active' : ''} onClick={() => go(page)}>{label}</button>
            </li>
          ))}
          <li>
            <button className="mobile-cta" onClick={() => go('contact')}>Start a Project</button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export function Footer({ navigate }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo-text">WEB<span className="ar">نا</span></div>
            <div className="footer-tagline">We build digital structures that stand.</div>
          </div>
          <div className="footer-right">
            <div className="footer-copy">© 2026 WEBNA. All rights reserved.</div>
            <div className="footer-loc">Est. 2026 · London, UK</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
