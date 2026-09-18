import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';

export const HomePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* WOW-Factor Hero Section */}
        <section style={{
          position: 'relative',
          padding: '90px 0 110px 0',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 10%, rgba(16,185,129,0.12) 0%, rgba(255,255,255,1) 70%)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Subtle Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-120px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Hero Content */}
            <div>
              <div className="badge" style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '1rem' }}>✨</span>
                <span>Software Delivery & AI Transformation</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: '#0f172a',
                marginBottom: '24px'
              }}>
                Your Partner for <br />
                <span className="text-gradient">Software Engineering</span> <br />
                & AI Transformation
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '640px'
              }}>
                At <strong>Magnum Quality Assurance</strong>, we build custom enterprise software, engineer continuous QA automation pipelines, and implement production-ready AI systems. Focused on ROI, performance, and zero defect leakage.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link to="/contact" className="btn-primary">
                  Discuss Software Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link to="/services/software-development/qa-services" className="btn-secondary">
                  Explore QA & Accessibility →
                </Link>
              </div>

              {/* Client Trust Logos Banner */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '16px', fontWeight: 600 }}>
                  Trusted by Global Enterprises & Tech Leaders
                </p>

                <div style={{ display: 'flex', gap: '28px', alignItems: 'center', opacity: 0.75, flexWrap: 'wrap' }}>
                  {['ING Bank', 'Santander', 'BNP Paribas', 'Discovery', 'tblx'].map(client => (
                    <span key={client} style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Hero: Highlighted Flagship Feature (Accessibility Testing & QA) */}
            <div style={{ position: 'relative' }}>
              
              {/* Highlighted Feature Badge Card */}
              <div className="glass-card animate-float" style={{
                padding: '36px',
                background: '#ffffff',
                border: '2px solid var(--brand-green)',
                boxShadow: '0 25px 60px rgba(16,185,129,0.18)',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '24px',
                  background: 'var(--gradient-brand)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: '999px',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 14px rgba(16,185,129,0.4)'
                }}>
                  FLAGSHIP FEATURE
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '2.4rem', background: 'rgba(16,185,129,0.12)', padding: '12px', borderRadius: '16px' }}>♿</span>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Accessibility Testing (A11y)</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>WCAG 2.1 AA/AAA & VPAT Conformance</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  We guarantee 100% digital accessibility for visual, motor, auditory, and cognitive user needs through screen reader audits (NVDA, JAWS, VoiceOver), keyboard tab navigation, and automated Pa11y checks.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Screen Reader Compatibility</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>100% Passed</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Keyboard Navigation Focus</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>Zero Traps</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>ADA Title III & Section 508</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>Fully Audited</span>
                  </div>
                </div>

                <Link to="/services/software-development/qa-services" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  View Full QA & Accessibility Suite →
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* Scalo in Numbers Metric Counter Section */}
        <section style={{ padding: '70px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a' }}>19+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>Years Software Delivery</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--brand-emerald)' }}>750+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a' }}>600+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>Senior Engineers</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--brand-emerald)' }}>95%</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Client Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Services Grid */}
        <section style={{ padding: '100px 0', background: '#ffffff' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Full Service Portfolio</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Software Delivery Applied to <span className="text-gradient">AI, Data & Quality</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We work with companies at every stage: building new digital products, implementing AI agents, modernizing legacy systems, or auditing software quality.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🤖</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>AI Consulting & Strategy</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  We help assess AI opportunities, use cases, data readiness, governance frameworks, and expected ROI before you invest.
                </p>
                <Link to="/ai-solutions" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Learn About AI Consulting →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-glow)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>♿</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Software QA & Accessibility</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Complete quality testing, test automation, performance stress testing, and WCAG 2.1 AA/AAA accessibility compliance.
                </p>
                <Link to="/services/software-development/qa-services" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Explore QA & Accessibility Suite ★ →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>💻</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Custom Software Development</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Building custom web, mobile, and cloud software tailored to your product goals, technical constraints, and delivery timelines.
                </p>
                <Link to="/services/software-development/custom-software-development" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Custom Software Services →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Data Platforms & Analytics</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Building trusted data pipelines, analytics layers, data lakes, and governance frameworks for business reporting and AI models.
                </p>
                <Link to="/services/data/data-analytics" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Explore Data Solutions →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>☁️</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Cloud Architecture & DevOps</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Migrating legacy workloads to AWS/Azure, optimizing serverless infrastructure, and configuring continuous delivery pipelines.
                </p>
                <Link to="/services/cloud/cloud-migration" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Cloud Services Overview →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>👥</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Dedicated Development Teams</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Vetted senior software engineers and dedicated QA teams ready to integrate into your engineering organization within weeks.
                </p>
                <Link to="/it-outsourcing" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                  Team Augmentation Details →
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* 48-Hour Demo Offer Section */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="glass-card" style={{
              padding: '48px',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, #ffffff 100%)',
              border: '1px solid var(--border-glow)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '36px',
              alignItems: 'center'
            }}>
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>Fast Proof-of-Concept</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                  Test Your Product Concept with a Demo Ready in 48 Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Have an idea for a software or AI product? We help assess its real potential before you make major investments. Share your brief with us and, within one business day, we prepare a focused prototype demo showing how the product works in practice.
                </p>
                <Link to="/contact" className="btn-primary">
                  Request a Demo in 48 Hours →
                </Link>
              </div>

              <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Why Work With Us?</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 800 }}>✓</span>
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>19+ Years Enterprise Delivery</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 800 }}>✓</span>
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>ISO 27001 Certified & GDPR Compliant</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 800 }}>✓</span>
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>AWS & Microsoft Azure Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

      </main>

      <Footer />
    </div>
  );
};
