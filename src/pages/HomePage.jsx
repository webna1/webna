import { useEffect } from 'react';

const CLIENTS = [
  'Al-Sheikh Furniture',
  'MagicTeam',
  'Awji Burger',
  'Dogo',
  'Twisted',
  'Modern Kitchen',
];

const FEATURED_WORK = [
  {
    num: '01',
    name: 'Al-Sheikh Furniture',
    category: 'E-Commerce · Brand',
    desc: 'Bilingual furniture retail platform — product catalogue, store locator, WhatsApp integration.',
    tags: ['React', 'Vite', 'i18n'],
    url: 'https://webna1.github.io/al-sheikh-furniture/',
    accent: '#c8a96e',
  },
  {
    num: '02',
    name: 'MagicTeam Agency',
    category: 'Business Website · Brand',
    desc: 'High-impact agency site with immersive animations, spark cursor, testimonials, multi-page SPA.',
    tags: ['React', 'Vite', 'CSS Animations'],
    url: 'https://webna1.github.io/magic-team/',
    accent: '#cc44dd',
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery',  sub: 'Goals & audience mapping' },
  { num: '02', title: 'Blueprint', sub: 'Wireframes & signed scope' },
  { num: '03', title: 'Build',     sub: 'Sprint-based construction' },
  { num: '04', title: 'Launch',    sub: 'QA, deploy & handover' },
];

export default function HomePage({ navigate }) {
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
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-scanlines" />
        <div className="hero-overlay-l" />
        <div className="hero-overlay-b" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot" />
              <span className="badge-text">Now accepting new projects — 2026</span>
            </div>

            <h1 className="hero-headline">
              <span className="l1">WE DON'T</span>
              <span className="l2">BUILD WEBSITES.</span>
              <span className="l3">WE BUILD STRUCTURES.</span>
            </h1>

            <p className="hero-arabic" dir="rtl">نبني الحضور الرقمي كما يُبنى الهيكل المتين</p>

            <p className="hero-body">
              WEBNA is a digital construction agency. We design and engineer websites
              for businesses that understand the difference between a page and a presence
              — built to last, built to perform.
            </p>

            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => navigate('contact')}>Start Building</button>
              <button className="btn-secondary" onClick={() => navigate('work')}>See our work →</button>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">34+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2.8×</div>
              <div className="stat-label">Avg. Traffic Growth</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">96%</div>
              <div className="stat-label">Client Retention</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-bar" />
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <div id="marquee">
        <div className="marquee-track">
          {['Web Design','Development','Brand Identity','E-Commerce','SEO & Performance','CMS Solutions',
            'Web Design','Development','Brand Identity','E-Commerce','SEO & Performance','CMS Solutions'].map((item, i) => (
            <span key={i}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CLIENT LOGOS ─────────────────────────────── */}
      <section className="clients-section fade-up">
        <div className="container">
          <p className="clients-label">Brands we've built for</p>
          <div className="clients-grid">
            {CLIENTS.map(name => (
              <div key={name} className="client-name">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: '100px 0 0' }}>
        <div className="container">
          <div className="section-label fade-up"><span>Selected Work</span></div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '0.01em', transitionDelay: '0.05s' }}>
              STRUCTURES<br />WE'VE BUILT
            </h2>
            <button className="btn-secondary fade-up" onClick={() => navigate('work')} style={{ transitionDelay: '0.1s', marginBottom: '6px' }}>
              All work →
            </button>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {FEATURED_WORK.map((p, i) => (
              <div key={p.num} className="work-row fade-up" style={{ transitionDelay: `${0.1 + i * 0.12}s` }}>
                <div className="work-row-meta">
                  <span className="work-num">{p.num}</span>
                  <span className="work-category">{p.category}</span>
                </div>
                <div className="work-row-main">
                  <h3 className="work-title">{p.name}</h3>
                  <p className="work-desc">{p.desc}</p>
                  <div className="service-tags" style={{ marginTop: '16px' }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="work-row-cta">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-link" style={{ '--work-accent': p.accent }}>
                    <span>View Site</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-label fade-up"><span>How We Work</span></div>
              <h2 className="fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '0.01em', transitionDelay: '0.05s' }}>
                THE BUILD<br />PROCESS
              </h2>
            </div>
            <button className="btn-secondary fade-up" onClick={() => navigate('process')} style={{ marginBottom: '6px', transitionDelay: '0.1s' }}>
              Full breakdown →
            </button>
          </div>

          <div className="process-strip">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.num} className="process-strip-item fade-up" style={{ transitionDelay: `${0.05 + i * 0.08}s` }}>
                <div className="process-strip-num">{s.num}</div>
                <div className="process-strip-divider" />
                <div className="process-strip-title">{s.title}</div>
                <div className="process-strip-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section id="cta">
        <div className="cta-bg" />
        <div className="cta-vignette" />
        <div className="container cta-inner fade-up">
          <div className="section-label cta-label"><span>Start Here</span></div>
          <h2 className="cta-heading">
            LET'S LAY YOUR<br /><span className="accent">FOUNDATION</span>
          </h2>
          <p className="cta-sub">
            You've seen how we work. Now let's build something that lasts.
            Reach out and we'll set up a discovery call.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')}>Get in Touch</button>
        </div>
      </section>
    </>
  );
}
