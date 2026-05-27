import { useEffect } from 'react';

export default function ServicesPage({ navigate }) {
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
    <section id="services" style={{ paddingTop: '120px' }}>
      <div className="container">
        {/* Page heading */}
        <div style={{ padding: '72px 0 0' }}>
          <div className="section-label"><span>What We Offer</span></div>
          <h1 className="page-hero-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 8vw, 120px)', lineHeight: 0.92, letterSpacing: '0.01em', marginBottom: '60px' }}>
            WHAT WE<br />BUILD
          </h1>
        </div>

        <div className="services-header fade-up">
          <h2 className="services-heading">WHAT WE<br />BUILD</h2>
          <p className="services-desc">
            Every engagement starts with a blueprint. Whether you're launching,
            rebuilding, or scaling — we engineer the right structure for the job.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-icon">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="16" height="12" rx="0.5" />
                <line x1="2" y1="7" x2="18" y2="7" />
                <line x1="6" y1="3" x2="6" y2="7" />
                <line x1="7" y1="17" x2="13" y2="17" />
                <line x1="10" y1="15" x2="10" y2="17" />
              </svg>
            </div>
            <div className="service-title">BUSINESS<br />WEBSITES</div>
            <p className="service-body">
              Bespoke web experiences engineered for performance, SEO, and conversion.
              Fast, accessible, and built to grow with your business.
            </p>
            <div className="service-tags">
              <span className="tag">Next.js</span>
              <span className="tag">CMS</span>
              <span className="tag">SEO</span>
            </div>
          </div>

          <div className="service-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="service-icon">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5h14l-1.5 9H4.5L3 5z" />
                <circle cx="7.5" cy="17" r="1" />
                <circle cx="13.5" cy="17" r="1" />
                <line x1="1" y1="3" x2="4" y2="3" />
              </svg>
            </div>
            <div className="service-title">E-COMMERCE</div>
            <p className="service-body">
              Storefronts engineered for revenue — intuitive UX, seamless checkout
              flows, and infrastructure that scales with your catalogue.
            </p>
            <div className="service-tags">
              <span className="tag">Shopify</span>
              <span className="tag">WooCommerce</span>
              <span className="tag">Custom</span>
            </div>
          </div>

          <div className="service-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="service-icon">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="10,2 13,7 18,8 14,12 15,17 10,15 5,17 6,12 2,8 7,7" />
              </svg>
            </div>
            <div className="service-title">BRAND &amp;<br />IDENTITY</div>
            <p className="service-body">
              Visual systems that command attention and communicate authority — from
              the first impression to the lasting mark.
            </p>
            <div className="service-tags">
              <span className="tag">Logo</span>
              <span className="tag">Style Guide</span>
              <span className="tag">Copy</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '80px 0 40px', textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('contact')}>Start a Project</button>
        </div>
      </div>
    </section>
  );
}
