import { useEffect } from 'react';

export default function AboutPage({ navigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ paddingTop: '120px' }}>
      <div className="container">
        {/* Page heading */}
        <div className="page-hero" style={{ padding: '72px 0 80px', maxWidth: '100%' }}>
          <div className="section-label page-hero-label"><span>Who We Are</span></div>
          <h1 className="page-hero-heading">WHERE WEB<br />MEETS <span style={{ color: 'var(--accent-live)', fontFamily: 'var(--font-arabic)', fontWeight: 400 }}>بناء</span></h1>
          <p className="page-hero-sub">
            We're a digital construction agency built on a simple belief: every digital
            presence should be engineered with the same precision as a physical structure.
          </p>
        </div>

        <div className="about-grid">
          <div className="fade-up">
            <div className="about-body">
              <p>
                WEBNA is built on a simple belief: every digital presence should be
                engineered with the same precision as a physical structure. Our name says
                it all — <strong style={{ color: 'var(--text)', fontWeight: 400 }}>WEB</strong> meets{' '}
                <strong style={{ color: 'var(--accent-live)', fontFamily: 'var(--font-arabic)', fontWeight: 400 }}>بناء</strong>,
                the Arabic word for building.
              </p>
              <p>
                We don't ship templates. We architect digital foundations — coded with
                intention, designed to convert, and built to outlast the trends.
              </p>
              <p style={{ marginTop: '16px' }}>
                Every project starts with a discovery call, progresses through a
                signed-off blueprint, and is built in transparent sprints. No black-box
                development. No surprise scope creep.
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <button className="btn-primary" onClick={() => navigate('contact')}>Work With Us</button>
            </div>
          </div>

          <div className="about-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="about-watermark">بناء</div>
            <div className="pillars-grid">
              <div className="pillar">
                <span className="pillar-num">01</span>
                <div className="pillar-title">FOUNDATION<br />FIRST</div>
              </div>
              <div className="pillar">
                <span className="pillar-num">02</span>
                <div className="pillar-title">PRECISION<br />BUILD</div>
              </div>
              <div className="pillar">
                <span className="pillar-num">03</span>
                <div className="pillar-title">DESIGNED<br />TO CONVERT</div>
              </div>
              <div className="pillar">
                <span className="pillar-num">04</span>
                <div className="pillar-title">BUILT<br />TO SCALE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
