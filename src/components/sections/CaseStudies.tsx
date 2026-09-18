import React from 'react';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'How to Benefit from Using Agile Test Automation',
      industry: 'Finance & FinTech',
      tech: 'Web API, JUnit, JBehave, Java',
      outcome: 'Reduced manual testing cycle times by 65% and enabled daily automated release runs.',
      link: '#'
    },
    {
      title: 'Using Test Automation to Accelerate Product Development',
      industry: 'SaaS & Enterprise Tech',
      tech: 'Microservices, REST, Spring, Java',
      outcome: 'Accelerated feature release velocity by 40% while maintaining 99.9% product uptime.',
      link: '#'
    },
    {
      title: 'How Agile QA Improved International Team Cooperation',
      industry: 'Global Banking',
      tech: 'REST, Selenium, Web API, SoapUI',
      outcome: 'Standardized QA metrics across 4 cross-border engineering teams and unified sprint testing.',
      link: '#'
    }
  ];

  return (
    <section id="case-studies" style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>Client Success Stories</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
            Proven Results in <span className="text-gradient">Action</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Discover how Scalo helped enterprise clients transform quality assurance, reduce defect remediation costs, and accelerate release frequency.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--brand-emerald)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px',
                  display: 'block'
                }}>
                  {cs.industry}
                </span>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.4 }}>
                  {cs.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  <strong style={{ color: '#0f172a' }}>Outcome:</strong> {cs.outcome}
                </p>
              </div>

              <div>
                <div style={{
                  padding: '10px 14px',
                  background: '#f8fafc',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <strong style={{ color: '#0f172a' }}>Tech:</strong> {cs.tech}
                </div>

                <a href={cs.link} style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  Read Full Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
