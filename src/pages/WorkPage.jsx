import { useEffect } from 'react';

const PROJECTS = [
  {
    id: 'al-sheikh',
    num: '01',
    name: 'Al-Sheikh Furniture',
    category: 'E-Commerce · Brand',
    year: '2025',
    desc: 'Full digital presence for a premium furniture retailer — bilingual (AR/EN) catalogue, store locator, WhatsApp integration, and product showcase built to convert browsers into buyers.',
    tags: ['React', 'Vite', 'Leaflet', 'i18n', 'WhatsApp API'],
    url: 'https://webna1.github.io/al-sheikh-furniture/',
    accent: '#c8a96e',
  },
  {
    id: 'magic-team',
    num: '02',
    name: 'MagicTeam Agency',
    category: 'Business Website · Brand',
    year: '2025',
    desc: 'High-impact agency website for a creative & marketing firm — immersive custom cursor with particle sparks, animated service sections, testimonials, and a full multi-page SPA.',
    tags: ['React', 'Vite', 'CSS Animations', 'Custom Cursor', 'SPA'],
    url: 'https://webna1.github.io/magic-team/',
    accent: '#cc44dd',
  },
];

export default function WorkPage({ navigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
      <div className="container">

        {/* Page heading */}
        <div style={{ padding: '72px 0 80px' }}>
          <div className="section-label"><span>Selected Work</span></div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 8vw, 120px)',
            lineHeight: 0.92,
            letterSpacing: '0.01em',
            marginBottom: '20px',
          }}>
            STRUCTURES<br />WE'VE BUILT
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--dim)', maxWidth: '480px', lineHeight: 1.7 }}>
            Every project is a precision build — designed to perform, engineered to last.
            More coming as we keep constructing.
          </p>
        </div>

        {/* Project list */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="work-row fade-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="work-row-meta">
                <span className="work-num">{p.num}</span>
                <span className="work-category">{p.category}</span>
                <span className="work-year">{p.year}</span>
              </div>

              <div className="work-row-main">
                <h2 className="work-title">{p.name}</h2>
                <p className="work-desc">{p.desc}</p>
                <div className="service-tags" style={{ marginTop: '20px' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              <div className="work-row-cta">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-link"
                  style={{ '--work-accent': p.accent }}
                >
                  <span>View Site</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More coming CTA */}
        <div style={{
          padding: '80px 0',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', letterSpacing: '0.03em', marginBottom: '8px' }}>
              YOUR PROJECT NEXT?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--dim)' }}>Every structure starts with a conversation.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('contact')}>Start a Project</button>
        </div>
      </div>
    </section>
  );
}
