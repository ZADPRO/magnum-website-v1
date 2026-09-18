import React from 'react';

export const WhyTrustScalo: React.FC = () => {
  return (
    <section id="company" style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>Proven Track Record</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
            Why Trust <span className="text-gradient">Magnum Quality Assurance?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            We bring structured quality engineering, certified testing talent, and measurable SLA guarantees to every software engineering engagement.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          
          <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              🏆
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Profound QA Expertise</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Over two decades of experience delivering enterprise software testing, manual QA, performance engineering, and test automation globally.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              🎓
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>60+ ISTQB QA Specialists</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Senior quality engineers holding ISTQB Foundation & Advanced certifications, trained in modern test automation frameworks and Agile pipelines.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              ⚙️
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>MQMS Measurement System</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Proprietary Magnum Quality Management System aligned with ISO 25010 benchmarks to ensure clear quality tracking and defect prevention.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              📈
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>SLA & Metric Guarantees</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Transparent test coverage KPIs, defect density tracking, and SLA commitments to maintain zero surprise bugs in production builds.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
