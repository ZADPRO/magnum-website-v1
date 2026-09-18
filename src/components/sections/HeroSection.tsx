import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 0 100px 0',
      overflow: 'hidden',
      background: 'var(--gradient-glow)'
    }}>
      {/* Background Radial Sphere Accent */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
        
        {/* Left Column: Text Content */}
        <div>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a>
            <span>/</span>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</a>
            <span>/</span>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Software Development</a>
            <span>/</span>
            <span style={{ color: 'var(--brand-emerald)', fontWeight: 600 }}>QA Services</span>
          </div>

          {/* Social Proof / Clutch Badge */}
          <div className="badge" style={{ marginBottom: '24px' }}>
            <span style={{ color: '#059669', fontSize: '1rem' }}>★★★★★</span>
            <strong style={{ color: '#0f172a' }}>4.7 / 5</strong>
            <span>reviewed on Clutch (33 reviews)</span>
          </div>

          {/* Headline H1 */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: '20px',
            color: '#0f172a'
          }}>
            Software Testing & <br />
            <span className="text-gradient">Quality Assurance Services</span>
          </h1>

          {/* Subheading Statement */}
          <p style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--brand-emerald)',
            marginBottom: '16px'
          }}>
            Unleash the Power of Quality with Software Testing & Quality Assurance Services by Magnum Quality Assurance.
          </p>

          {/* Paragraph */}
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            marginBottom: '36px',
            maxWidth: '620px',
            lineHeight: 1.7
          }}>
            Magnum Quality Assurance offers comprehensive QA and software testing services designed to ensure your application performs flawlessly, scales seamlessly, and delivers superior user satisfaction. From initial test planning to continuous automated CI/CD runs, our certified ISTQB engineers help eliminate bugs early and accelerate your time-to-market.
          </p>

          {/* CTA Group */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              Schedule a Workshop with Magnum QA
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact" className="btn-secondary">
              Contact us
            </a>
          </div>

          {/* Key Stat Highlights */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>60+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>ISTQB Senior QA Engineers</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-emerald)' }}>99.8%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Defect-Free Release Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>ISO 25010</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>Quality Model Standard</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Dashboard Mockup */}
        <div style={{ position: 'relative' }}>
          <div className="glass-card animate-float" style={{ padding: '32px', position: 'relative', overflow: 'hidden', background: '#ffffff', border: '1px solid var(--border-subtle)', boxShadow: '0 20px 40px rgba(15,23,42,0.08)' }}>
            
            {/* Header of dashboard */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span className="badge" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>MQMS Active</span>
            </div>

            {/* Test Run Pipeline Status */}
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#0f172a', fontWeight: 700 }}>Continuous QA Pipeline Execution</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {[
                { name: 'Unit & Logic Suite', count: '1,420 tests', pass: '100% Passed', color: '#10b981' },
                { name: 'API & Integration Pipeline', count: '580 tests', pass: '100% Passed', color: '#10b981' },
                { name: 'WCAG 2.1 Accessibility Audit', count: '120 criteria', pass: 'AA / AAA Pass', color: '#059669' },
                { name: 'Cross-Browser & Mobile Load', count: '84 platforms', pass: '100% Passed', color: '#10b981' },
                { name: 'Performance Stress Test (JMeter)', count: '50k virtual users', pass: '0.12s Latency', color: '#047857' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#f8fafc',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                    <span style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 600 }}>{item.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.count}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: item.color }}>{item.pass}</span>
                  </div>
                </div>
              ))}

            </div>

            {/* Floating Quality Badge */}
            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.08) 100%)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(16,185,129,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#10b981',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>ISTQB Certified Process</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Verified Build Sign-off</div>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#059669', letterSpacing: '0.5px' }}>READY TO DEPLOY</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
