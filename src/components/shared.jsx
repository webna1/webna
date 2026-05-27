import { useEffect } from 'react';

export function Navbar({ currentPage, navigate }) {
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

  return (
    <nav id="main-nav">
      <button className="nav-logo" onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'none' }}>
        <div className="nav-logo-text">WEB<span className="ar">نا</span></div>
        <div className="nav-logo-pipe" />
        <div className="nav-logo-sub">Web Agency</div>
      </button>
      <ul className="nav-links">
        <li><button className={currentPage === 'about'    ? 'active' : ''} onClick={() => navigate('about')}>About</button></li>
        <li><button className={currentPage === 'services' ? 'active' : ''} onClick={() => navigate('services')}>Services</button></li>
        <li><button className={currentPage === 'process'  ? 'active' : ''} onClick={() => navigate('process')}>Process</button></li>
        <li><button className="nav-cta" onClick={() => navigate('contact')}>Start a Project</button></li>
      </ul>
    </nav>
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
            <div className="footer-copy">© 2025 WEBNA. All rights reserved.</div>
            <div className="footer-loc">Est. 2023 · Global</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
