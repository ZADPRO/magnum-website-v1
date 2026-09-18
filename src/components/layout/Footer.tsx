import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 0 32px 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Info */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#ffffff'
              }}>
                S
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                scalo<span style={{ color: 'var(--brand-green)' }}>.</span>
              </span>
            </a>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>
              Scalo is a global software engineering and QA partner providing software testing, test automation, and digital transformation services.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              {['LinkedIn', 'Twitter', 'GitHub', 'Clutch'].map(net => (
                <a key={net} href="#" style={{
                  padding: '6px 12px',
                  background: '#f8fafc',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: '#0f172a',
                  textDecoration: 'none',
                  fontWeight: 600,
                  border: '1px solid var(--border-subtle)'
                }}>
                  {net}
                </a>
              ))}
            </div>
          </div>

          {/* Software Services */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Custom Development</a></li>
              <li><a href="#" style={{ color: 'var(--brand-emerald)', textDecoration: 'none', fontWeight: 700 }}>Software QA & Testing</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Accessibility Audits</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Web & Mobile Apps</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>DevOps & Cloud</a></li>
            </ul>
          </div>

          {/* Key Disciplines */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>QA Testing</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Test Automation</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Performance Testing</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Security Testing</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Accessibility (A11y)</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>API & Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Scalo</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Leadership</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>SQMS Quality Standard</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Careers</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>News & Insights</a></li>
            </ul>
          </div>

          {/* Standards & Certs */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Standards</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span className="badge" style={{ fontSize: '0.75rem' }}>ISTQB Certified</span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>ISO 25010 Model</span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>WCAG 2.1 Compliant</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            © {new Date().getFullYear()} Scalo. All rights reserved. Software Testing & Quality Assurance Division.
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Notice</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
