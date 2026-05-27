export default function HomePage({ navigate }) {
  return (
    <>
      {/* HERO */}
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
              <button className="btn-secondary" onClick={() => navigate('services')}>See our services →</button>
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

      {/* MARQUEE */}
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
    </>
  );
}
