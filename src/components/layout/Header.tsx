import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState('EN');

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.4rem',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
          }}>
            S
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
            scalo<span style={{ color: 'var(--brand-green)' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          
          {/* Services Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: activeDropdown === 'services' ? 'var(--brand-emerald)' : 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: 'var(--font-family)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 0'
            }}>
              Services
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {activeDropdown === 'services' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-150px',
                width: '680px',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '24px',
                background: '#ffffff',
                boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand-emerald)', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>Software Development</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Custom Development</a></li>
                    <li><a href="#" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>QA & Testing Services ★</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Web Development</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Mobile App Development</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Cloud & DevOps</a></li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>Team Extension</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Staff Augmentation</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Dedicated QA Teams</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>IT Contracting</a></li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand-emerald)', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>Consulting & Audit</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>QA Process Audit</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Accessibility Audit</a></li>
                    <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Architecture Review</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: activeDropdown === 'industries' ? 'var(--brand-emerald)' : 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: 'var(--font-family)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 0'
            }}>
              Industries
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {activeDropdown === 'industries' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                width: '260px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: '#ffffff',
                boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
                border: '1px solid var(--border-subtle)'
              }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['FinTech & Banking', 'E-Commerce & Retail', 'Healthcare & MedTech', 'Manufacturing & Industry 4.0', 'Automotive', 'SaaS & Technology'].map(item => (
                    <li key={item}>
                      <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="#case-studies" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Case Studies</a>
          <a href="#company" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Company</a>
          <a href="#insights" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Insights</a>

        </nav>

        {/* Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Language Toggle */}
          <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-subtle)' }}>
            {['EN', 'DE', 'PL'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? 'var(--brand-green)' : 'none',
                  color: lang === l ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-family)'
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Schedule a Workshop
          </a>
        </div>

      </div>
    </header>
  );
};
