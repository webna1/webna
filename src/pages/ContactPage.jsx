import { useEffect } from 'react';

export default function ContactPage() {
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
        <a href="mailto:hello@webna.agency" className="btn-primary">Get in Touch</a>
      </div>
    </section>
  );
}
