import React, { useState } from 'react';
import { Link, useRouter } from '../../router/RouterContext';
import { servicesMegaMenuData, mainNavRoutes } from '../../router/routesData';
import logoNavbar from '../../assets/logo/MQA-02.png';
import favIcon from '../../assets/logo/fav.png';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string>('consulting-design');

  const activeSubData = servicesMegaMenuData.find(s => s.id === activeSubcategory) || servicesMegaMenuData[0];

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#ffffff', borderBottom: '1px solid var(--border-subtle)', boxShadow: '0 2px 16px rgba(15,23,42,0.04)' }}>
      <div className="container" style={{ height: '84px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo - Prominent & Clearly Visible */}
        <Link to="/services/software-development/qa-services" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src={logoNavbar}
            alt="Magnum Quality Assurance Logo"
            onError={(e) => {
              (e.target as HTMLImageElement).src = favIcon;
            }}
            style={{
              height: '58px',
              maxWidth: '220px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          
          {/* Services Mega Menu */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: activeMenu === 'services' || currentPath.startsWith('/services') ? 'var(--brand-emerald)' : 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: 'var(--font-family)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 0',
              borderBottom: activeMenu === 'services' || currentPath.startsWith('/services') ? '2px solid var(--brand-emerald)' : '2px solid transparent'
            }}>
              Services
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* 2-Column Subcategory Mega Dropdown */}
            {activeMenu === 'services' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-120px',
                width: '780px',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: '#ffffff',
                boxShadow: '0 20px 50px rgba(15,23,42,0.12)',
                border: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '24px'
              }}>
                
                {/* Left Column: Subcategories List */}
                <div style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {servicesMegaMenuData.map(sub => {
                    const isSelected = sub.id === activeSubcategory;
                    return (
                      <button
                        key={sub.id}
                        onMouseEnter={() => setActiveSubcategory(sub.id)}
                        onClick={() => setActiveSubcategory(sub.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          color: isSelected ? 'var(--brand-emerald)' : 'var(--text-primary)',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.9rem',
                          fontFamily: 'var(--font-family)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s'
                        }}
                      >
                        <span>{sub.title}</span>
                        <span style={{ color: isSelected ? 'var(--brand-emerald)' : 'var(--text-muted)', fontSize: '0.9rem' }}>›</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Children Links Grid */}
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--brand-emerald)', letterSpacing: '1px', marginBottom: '16px', fontWeight: 700 }}>
                    {activeSubData.title}
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                    {activeSubData.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setActiveMenu(null)}
                        style={{
                          color: child.isFullPage ? 'var(--brand-emerald)' : 'var(--text-secondary)',
                          fontWeight: child.isFullPage ? 700 : 500,
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          transition: 'color 0.2s',
                          display: 'block',
                          padding: '4px 0'
                        }}
                      >
                        {child.title} {child.isFullPage && '★'}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          {mainNavRoutes.map(route => (
            <Link
              key={route.path}
              to={route.path}
              style={{
                color: currentPath === route.path ? 'var(--brand-emerald)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
            >
              {route.title}
            </Link>
          ))}

        </nav>

        {/* Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Primary Contact CTA */}
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem', borderRadius: '999px' }}>
            Contact
          </Link>
        </div>

      </div>
    </header>
  );
};
