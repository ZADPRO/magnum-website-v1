import React from 'react';

export const AccessibilityQA: React.FC = () => {
  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(16,185,129,0.06) 50%, var(--bg-primary) 100%)',
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Visual Accessibility Audit Card */}
          <div className="glass-card" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-glow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '2rem' }}>♿</span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>Accessibility (A11y) Audit</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>WCAG 2.1 Level AA / AAA Benchmark</p>
                </div>
              </div>
              <span className="badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#047857', border: '1px solid #10b981' }}>
                VPAT READY
              </span>
            </div>

            {/* Checklist of Accessibility Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Screen Reader Compatibility (NVDA/JAWS/VoiceOver)</span>
                  <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.85rem' }}>100% Passed</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#10b981' }} />
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Keyboard Navigation & Tab Order Focus</span>
                  <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.85rem' }}>Zero Traps</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#10b981' }} />
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Color Contrast Ratios (4.5:1 / 3:1)</span>
                  <span style={{ color: '#047857', fontWeight: 700, fontSize: '0.85rem' }}>AAA Conformance</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#059669' }} />
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>ADA Title III & Section 508 Legal Safeguard</span>
                  <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.85rem' }}>Fully Compliant</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#047857' }} />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Description & Value proposition */}
          <div>
            <span className="badge" style={{ marginBottom: '16px' }}>Specialized Service Module</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2, color: '#0f172a' }}>
              Inclusive Digital Products with <br />
              <span className="text-gradient">Accessibility Testing</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Ensure your web, mobile, and SaaS products cater seamlessly to every user regardless of visual, auditory, motor, or cognitive abilities. Scalo’s accessibility testing services combine automated scanning (axe-core, WAVE, Pa11y) with expert manual reviews to guarantee compliance with global legal frameworks.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>📜 VPAT Documentation</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Formal Voluntary Product Accessibility Template for government & enterprise procurements.</p>
              </div>
              <div>
                <h4 style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>⚡ Automated CI Checks</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Continuous accessibility regression testing built directly into your GitHub / GitLab CI pipeline.</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              Schedule Accessibility Audit
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
