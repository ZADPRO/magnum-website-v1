import React from 'react';
import { Link } from '../../router/RouterContext';
import { servicesMegaMenuData } from '../../router/routesData';
import logoFooter from '../../assets/logo/MQA-03.png';
import favIcon from '../../assets/logo/fav.png';

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
          
          {/* Brand Info with Logo MQA-03.png */}
          <div>
            <Link to="/services/software-development/qa-services" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <img
                src={logoFooter}
                alt="Magnum Quality Assurance Logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = favIcon;
                }}
                style={{ height: '56px', maxWidth: '240px', objectFit: 'contain', display: 'block' }}
              />
            </Link>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>
              Magnum Quality Assurance is a global software engineering and QA partner providing software testing, test automation, AI consulting, and digital transformation services.
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
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Software Dev</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              {servicesMegaMenuData[1].children.map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: c.isFullPage ? 'var(--brand-emerald)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: c.isFullPage ? 700 : 400 }}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consulting & Design */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Consulting</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              {servicesMegaMenuData[0].children.slice(0, 5).map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Cloud */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px' }}>Data & Cloud</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              {servicesMegaMenuData[2].children.map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {c.title}
                  </Link>
                </li>
              ))}
              {servicesMegaMenuData[3].children.slice(0, 2).map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {c.title}
                  </Link>
                </li>
              ))}
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
            © {new Date().getFullYear()} Magnum Quality Assurance. All rights reserved. Enterprise Software Engineering & Quality Division.
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
