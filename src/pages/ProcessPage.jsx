import { useEffect } from 'react';

export default function ProcessPage({ navigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: '01', label: '01 · Discovery',
      title: 'DISCOVERY\nCALL',
      body: 'We map your goals, audience, and competitive landscape. This is where the foundation gets poured.',
    },
    {
      num: '02', label: '02 · Blueprint',
      title: 'BLUEPRINT\n& SCOPE',
      body: "Wireframes, sitemaps, and a full project scope. You sign off on the blueprint before a single pixel is built.",
    },
    {
      num: '03', label: '03 · Build',
      title: 'BUILD\n& REVIEW',
      body: 'We construct in sprints with regular review checkpoints. Transparent, iterative, no black-box development.',
    },
    {
      num: '04', label: '04 · Launch',
      title: 'LAUNCH\n& HANDOVER',
      body: 'We deploy, run final QA, and hand over a fully documented, maintained structure — ready to perform.',
    },
  ];

  return (
    <section id="process" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="process-intro fade-up">
          <div>
            <div className="section-label"><span>How We Work</span></div>
            <h1 className="process-heading">THE BUILD<br />PROCESS</h1>
          </div>
          <p className="process-desc">
            Every structure follows a methodology. No guesswork, no surprises — just
            a clear construction sequence from discovery through to handover.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step fade-up" key={step.num} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="step-num-bg">{step.num}</div>
              <div className="step-label">{step.label}</div>
              <div className="step-title">
                {step.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </div>
              <p className="step-body">{step.body}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '80px 0 40px', textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('contact')}>Start the Process</button>
        </div>
      </div>
    </section>
  );
}
