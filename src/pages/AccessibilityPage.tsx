import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';
import {
  Accessibility,
  CheckCircle2,
  Eye,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight
} from '../components/ui/Icons';

export const AccessibilityPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* Dedicated Accessibility Hero Banner */}
        <section style={{
          padding: '90px 0 70px 0',
          background: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative'
        }}>
          <div className="container">
            <div style={{ maxWidth: '850px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span className="badge">
                  <Accessibility size={16} color="var(--brand-green)" /> Flagship Testing Feature
                </span>
                <span className="badge" style={{ background: '#fef3c7', borderColor: '#f59e0b', color: '#b45309' }}>
                  WCAG 2.1 AA/AAA & VPAT Certified
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', color: '#0f172a' }}>
                Enterprise <span className="text-gradient">Accessibility Testing (A11y)</span> & Digital Inclusion
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '36px' }}>
                At <strong style={{ color: '#0f172a' }}>Magnum Quality Assurance</strong>, we ensure your web, mobile, and desktop applications are 100% accessible to every user — including individuals with visual, auditory, physical, and cognitive impairments. Guaranteed compliance with ADA Title III, Section 508, EN 301 549, and EAA regulations.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
                  Request A11y Audit <ArrowRight size={18} />
                </a>
                <Link to="/services/software-development/qa-services" className="btn-secondary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
                  Full QA Suite Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Accessibility Audit Dimensions */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
              <span className="badge" style={{ marginBottom: '14px' }}>Complete Coverage</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                Our 4 Pillars of <span className="text-gradient">A11y Verification</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
                  <Eye size={28} color="var(--brand-green)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Visual Accessibility</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Screen reader testing across NVDA, JAWS, and VoiceOver. Verification of color contrast ratios (minimum 4.5:1), font resizing up to 200% without breakage, and non-color dependent status cues.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
                  <Zap size={28} color="var(--brand-green)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Motor & Keyboard Control</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  100% keyboard navigable interfaces without keyboard traps. Visible focus indicators, logical tab ordering, skip-to-content shortcuts, and switch-device compatibility.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
                  <Smartphone size={28} color="var(--brand-green)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Auditory & Media A11y</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Synchronized closed captioning, audio descriptions for media, transcript generation, and visual flash rate control to prevent photosensitive seizures (WCAG 2.3.1).
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
                  <ShieldCheck size={28} color="var(--brand-green)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Cognitive & Operability</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Consistent navigation patterns, clear error identification with plain language recovery suggestions, customizable session timeouts, and reduced motion settings.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Live Conformance Matrix & VPAT Deliverables */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
              
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>Compliance Assurance</span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
                  VPAT 2.4 Reports & <span className="text-gradient">Legal Defense</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Our certified IAAP (International Association of Accessibility Professionals) auditors generate comprehensive Voluntary Product Accessibility Templates (VPAT) required for government tenders, enterprise contracts, and legal ADA compliance.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem', display: 'block' }}>Automated CI/CD Pa11y & Axe Core Integration</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Continuous accessibility regression testing in pull requests preventing new violations.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem', display: 'block' }}>Real Native Assistive Tech Testing</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Audits conducted on actual hardware using iOS VoiceOver, Android TalkBack, and Windows NVDA.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem', display: 'block' }}>European Accessibility Act (EAA 2025) Ready</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Ensure EU market entry without penalties under mandatory EN 301 549 standards.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
                  A11y Conformance Benchmark
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '14px 18px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>WCAG 2.1 Level AA</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Standard Commercial Requirement</span>
                    </div>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.875rem' }}>100% Compliant</span>
                  </div>

                  <div style={{ padding: '14px 18px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>ADA Title III & Section 508</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>US Federal & Government Standard</span>
                    </div>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.875rem' }}>Full Audit Validated</span>
                  </div>

                  <div style={{ padding: '14px 18px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>Keyboard Trap Prevention</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Modal, Menu & Form Navigation</span>
                    </div>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.875rem' }}>Zero Traps</span>
                  </div>

                  <div style={{ padding: '14px 18px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>Axe-Core Automated Score</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Continuous Integration Rule Set</span>
                    </div>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.875rem' }}>100 / 100</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form for A11y Audits */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};
