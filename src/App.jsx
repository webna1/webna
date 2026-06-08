import { useState, useCallback, useEffect } from 'react';
import { Navbar, Footer } from './components/shared';
import ComingSoon from './components/ComingSoon';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import './index.css';

const UNDER_CONSTRUCTION = true;

function useWebNACursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = -200, my = -200, rx = -200, ry = -200;
    let rafId;

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onOver = (e) => {
      if (e.target.matches('a, button, [role="button"], .pillar, .service-card, .step')) {
        dot.style.width  = '12px';
        dot.style.height = '12px';
        ring.style.width  = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(96,165,250,0.6)';
      }
    };
    const onOut = (e) => {
      if (e.target.matches('a, button, [role="button"], .pillar, .service-card, .step')) {
        dot.style.width  = '8px';
        dot.style.height = '8px';
        ring.style.width  = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(37,99,235,0.5)';
      }
    };
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };
    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);
  useWebNACursor();

  const navigate = useCallback((p) => {
    setPage(p);
    setPageKey(k => k + 1);
    setTimeout(() => window.scrollTo({ top: 0 }), 10);
  }, []);

  if (UNDER_CONSTRUCTION) return <ComingSoon />;

  const pageMap = {
    home:     <HomePage    navigate={navigate} />,
    about:    <AboutPage   navigate={navigate} />,
    services: <ServicesPage navigate={navigate} />,
    process:  <ProcessPage navigate={navigate} />,
    work:     <WorkPage    navigate={navigate} />,
    contact:  <ContactPage navigate={navigate} />,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#080a0e' }}>
      <Navbar currentPage={page} navigate={navigate} />
      <main key={pageKey} className="page-enter">
        {pageMap[page] || pageMap.home}
      </main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}
