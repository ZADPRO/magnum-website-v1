import React from 'react';

export const DeliveryProcess: React.FC = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'Goal Recognition & Test Planning',
      desc: 'Requirement analysis, risk matrix definition, defining Quality KPIs, drafting test strategy documents, and selecting testing frameworks.',
      deliverable: 'Test Strategy & KPI Spec'
    },
    {
      step: 'Step 02',
      title: 'Setting Up Environment & Scenarios',
      desc: 'Configuring isolated staging environments, test data generation, crafting manual test scenarios, and building automated script foundations.',
      deliverable: 'Automated Test Suites'
    },
    {
      step: 'Step 03',
      title: 'Performing Tests & Reporting Results',
      desc: 'Executing test runs across target browsers, devices, and OS versions. Logging defects in Jira with root-cause traces and advising engineers on fixes.',
      deliverable: 'Jira Defect Audit & Trace'
    },
    {
      step: 'Step 04',
      title: 'Quality-Integrated Continuous Delivery',
      desc: 'Embedding continuous test runs directly into CI/CD build pipelines (GitHub Actions, Jenkins, GitLab) for automated release sign-offs.',
      deliverable: 'Continuous CI/CD Sign-off'
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>Structured Delivery Pipeline</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
            How We Deliver <span className="text-gradient">QA Services</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Our 4-step quality delivery pipeline embeds continuous automated testing into your Agile development lifecycle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {steps.map((s, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', background: '#ffffff', position: 'relative' }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#047857',
                background: 'rgba(16,185,129,0.12)',
                padding: '4px 12px',
                borderRadius: '999px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                {s.step}
              </span>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                {s.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {s.desc}
              </p>

              <div style={{
                padding: '8px 12px',
                background: '#f8fafc',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--brand-emerald)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>📄 Output:</span>
                <span>{s.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
