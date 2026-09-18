import React, { useState } from 'react';
import { Link, useRouter } from '../../router/RouterContext';
import { servicesMegaMenuData, mainNavRoutes } from '../../router/routesData';
import logoNavbar from '../../assets/logo/MQA-02.png';
import favIcon from '../../assets/logo/fav.png';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string>('software-development');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [expandedMobileSub, setExpandedMobileSub] = useState<string | null>('services');

  const activeSubData = servicesMegaMenuData.find(s => s.id === activeSubcategory) || servicesMegaMenuData[0];

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#ffffff', borderBottom: '1px solid var(--border-subtle)', boxShadow: '0 2px 16px rgba(15,23,42,0.04)' }}>
      <div className="container" style={{ height: '84px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo - Maximized & Prominently Visible */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logoNavbar}
            alt="Magnum Quality Assurance Logo"
            onError={(e) => {
              (e.target as HTMLImageElement).src = favIcon;
            }}
            style={{
              height: '64px',
              maxWidth: '240px',
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

        {/* Right Desktop CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem', borderRadius: '999px' }}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Mobile Menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#0f172a',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: 1
          }}
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Plan B Style Full Mobile Overlay Drawer */}
      {isMobileOpen && (
        <div className="mobile-drawer" style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '380px',
          height: '100vh',
          background: '#0f172a',
          zIndex: 9999,
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.6)'
        }}>
          <div>
            {/* Mobile Drawer Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
              <span style={{ color: 'var(--brand-green)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px' }}>MAGNUM QA</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav Links List matching planb-theeventguide.ch style */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <Link
                to="/"
                onClick={() => setIsMobileOpen(false)}
                style={{
                  color: currentPath === '/' ? 'var(--brand-green)' : '#ffffff',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                HOME
              </Link>

              {/* SERVICES Accordion */}
              <div>
                <button
                  onClick={() => setExpandedMobileSub(expandedMobileSub === 'services' ? null : 'services')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: currentPath.startsWith('/services') ? 'var(--brand-green)' : '#ffffff',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'var(--font-family)'
                  }}
                >
                  <span>SERVICES</span>
                  <span style={{ fontSize: '1rem', color: 'var(--brand-green)' }}>{expandedMobileSub === 'services' ? '▲' : '▼'}</span>
                </button>

                {expandedMobileSub === 'services' && (
                  <div style={{ marginTop: '16px', paddingLeft: '14px', borderLeft: '2px solid var(--brand-green)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {servicesMegaMenuData.map(sub => (
                      <div key={sub.id}>
                        <div style={{ color: 'var(--brand-green)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                          {sub.title}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px' }}>
                          {sub.children.map(child => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setIsMobileOpen(false)}
                              style={{
                                color: child.isFullPage ? '#6ee7b7' : '#cbd5e1',
                                fontSize: '0.9rem',
                                fontWeight: child.isFullPage ? 700 : 400,
                                textDecoration: 'none'
                              }}
                            >
                              {child.title} {child.isFullPage && '★'}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Nav Items */}
              {mainNavRoutes.map(route => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    color: currentPath === route.path ? 'var(--brand-green)' : '#ffffff',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {route.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Mobile Action CTA */}
          <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '32px' }}>
            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', textAlign: 'center', fontSize: '1rem', padding: '14px 20px' }}
            >
              Contact Magnum QA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

