import React from 'react';

export const TechStackSQMS: React.FC = () => {
  const tools = [
    { name: 'Cypress', category: 'Automation' },
    { name: 'Selenium', category: 'Automation' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'SoapUI', category: 'API Testing' },
    { name: 'Apache JMeter', category: 'Performance' },
    { name: 'K6', category: 'Load Testing' },
    { name: 'axe-core', category: 'Accessibility' },
    { name: 'Pa11y', category: 'Accessibility' },
    { name: 'Jira', category: 'Bug Tracking' },
    { name: 'TestRail', category: 'Test Management' },
    { name: 'Allure', category: 'Reporting' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'Jenkins', category: 'DevOps' },
    { name: 'Docker', category: 'Containers' }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: MQMS Framework details */}
          <div>
            <span className="badge" style={{ marginBottom: '16px' }}>MQMS Quality Standard</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2, color: '#0f172a' }}>
              Magnum Quality <br />
              <span className="text-gradient">Management System</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              The Magnum Quality Management System (MQMS) provides a rigorous, standardized framework for organizing QA teams, defining test metrics, and guaranteeing ISO 25010 compliance across every product build.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brand-green)', fontSize: '1.2rem', fontWeight: 800 }}>✓</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>ISTQB Advanced Level Certified Lead Engineers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brand-green)', fontSize: '1.2rem', fontWeight: 800 }}>✓</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Zero Defect Leakage SLA Frameworks</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brand-green)', fontSize: '1.2rem', fontWeight: 800 }}>✓</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Continuous Security & Accessibility Audit Pipelines</span>
              </div>
            </div>

            <a href="#contact" className="btn-secondary">
              Learn More About MQMS
            </a>
          </div>

          {/* Right Column: Tooling Pills Grid */}
          <div className="glass-card" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              QA Tooling & Frameworks
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
              We leverage modern enterprise quality automation tools across all technology stacks.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {tools.map((t, idx) => (
                <div key={idx} style={{
                  background: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#047857', background: 'rgba(16,185,129,0.12)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                    {t.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
