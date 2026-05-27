import { useEffect } from 'react';

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'hello@webna.agency',
    href: 'mailto:hello@webna.agency',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="1" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+44 7000 000000',
    href: 'tel:+447000000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@webna.agency',
    href: 'https://instagram.com/webna.agency',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'facebook.com/webna',
    href: 'https://facebook.com/webna',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
    <section style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '72px' }}>
      <div className="cta-bg" style={{ position: 'fixed' }} />

      <div className="container">
        {/* Heading */}
        <div className="fade-up" style={{ padding: '80px 0 72px' }}>
          <div className="section-label"><span>Get In Touch</span></div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 8vw, 120px)',
            lineHeight: 0.92,
            letterSpacing: '0.01em',
            marginBottom: '24px',
          }}>
            LET'S LAY YOUR<br /><span style={{ color: 'var(--accent-live)' }}>FOUNDATION</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--dim)', maxWidth: '480px', lineHeight: 1.7 }}>
            Ready to build? Reach out through any channel below and we'll set up a discovery call within 24 hours.
          </p>
        </div>

        {/* Contact cards */}
        <div className="contact-grid">
          {CONTACT_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="contact-card-icon">{item.icon}</div>
              <div className="contact-card-label">{item.label}</div>
              <div className="contact-card-value">{item.value}</div>
              <div className="contact-card-arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9h12M11 5l4 4-4 4" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="fade-up" style={{
          marginTop: '80px',
          padding: '40px 0',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '80px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
            Based in London, UK · Available globally · Responds within 24h
          </p>
          <div className="hero-badge" style={{ margin: 0, animation: 'none', opacity: 1 }}>
            <div className="badge-dot" />
            <span className="badge-text">Currently accepting new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
