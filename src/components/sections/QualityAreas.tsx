import React from 'react';

export const QualityAreas: React.FC = () => {
  const qualityAreas = [
    {
      num: '01',
      title: 'Functional Sustainability',
      desc: 'Software functions reliably according to business specs and retains sustained commercial value over time.'
    },
    {
      num: '02',
      title: 'Performance Efficiency',
      desc: 'Optimized response times, processing throughput, memory usage, and resource consumption under varying loads.'
    },
    {
      num: '03',
      title: 'Usability',
      desc: 'Delivering intuitive user workflows, accessible layouts, clear navigational hierarchies, and engaging user experiences.'
    },
    {
      num: '04',
      title: 'Security',
      desc: 'Safeguarding sensitive user data, implementing robust access control mechanisms, encryption, and vulnerability scanning.'
    },
    {
      num: '05',
      title: 'Compatibility',
      desc: 'Guaranteeing frictionless interoperation across operating systems, screen resolutions, browsers, and APIs.'
    },
    {
      num: '06',
      title: 'Reliability',
      desc: 'Building resilient applications capable of continuous fault-free operation, self-healing, and swift failure recovery.'
    },
    {
      num: '07',
      title: 'Maintainability',
      desc: 'Structuring modular, clean, and testable code architecture that simplifies future refactoring and feature additions.'
    },
    {
      num: '08',
      title: 'Portability',
      desc: 'Ensuring software can be effortlessly deployed across multi-cloud environments (AWS, Azure, GCP), containers, or on-premises.'
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>ISO 25010 Standard Aligned</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
            8 Key Areas of <span className="text-gradient">Software Quality</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Magnum Quality Assurance structures software testing around the international ISO 25010 Quality Model to evaluate every metric of software health.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {qualityAreas.map((area, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px', background: '#ffffff', borderLeft: '4px solid var(--brand-green)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-emerald)', marginBottom: '8px' }}>
                {area.num}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                {area.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
