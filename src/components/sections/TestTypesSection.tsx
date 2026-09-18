import React, { useState } from 'react';

interface TestType {
  id: string;
  title: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  keyBenefits: string[];
}

export const testTypesData: TestType[] = [
  {
    id: 'unit',
    title: 'Unit Tests',
    shortDesc: 'Isolated component and function logic verification.',
    fullDesc: 'Verification of individual code components, functions, or modules in isolation to validate that internal logic operates accurately before integration into the master branch.',
    icon: '⚡',
    keyBenefits: ['Early bug identification', 'Simplifies code refactoring', 'Ensures code modularity']
  },
  {
    id: 'integration',
    title: 'Integration Tests',
    shortDesc: 'Inter-service API & database communication validation.',
    fullDesc: 'Verifying that distinct software modules, microservices, and external API interfaces interact smoothly and exchange data reliably without failure.',
    icon: '🔗',
    keyBenefits: ['Seamless API interaction', 'Prevents data sync errors', 'Validates microservice contracts']
  },
  {
    id: 'functional',
    title: 'Functional Tests',
    shortDesc: 'Verification against user stories & business requirements.',
    fullDesc: 'Evaluating the application against functional specification requirements to confirm that features, user workflows, and business rules behave correctly under real-world usage.',
    icon: '🎯',
    keyBenefits: ['Validates feature specifications', 'Ensures correct user flows', 'Eliminates business logic flaws']
  },
  {
    id: 'usability',
    title: 'Usability Tests',
    shortDesc: 'UX clarity, navigational ease, and end-user satisfaction.',
    fullDesc: 'Assessing user interface clarity, user-friendliness, task completion efficiency, and overall digital experience for end users across target demographics.',
    icon: '👁️',
    keyBenefits: ['Higher user retention', 'Intuitive UI navigation', 'Reduces customer support tickets']
  },
  {
    id: 'compatibility',
    title: 'Compatibility Tests',
    shortDesc: 'Cross-browser, OS, device, and screen resolution testing.',
    fullDesc: 'Validating multi-platform, multi-browser, multi-device, and cross-operating system performance to ensure uniform behavior across diverse user environments.',
    icon: '📱',
    keyBenefits: ['Consistent cross-device UX', 'Broad platform support', 'Eliminates rendering glitches']
  },
  {
    id: 'performance',
    title: 'Performance Tests',
    shortDesc: 'Stress, load, latency, and system capacity benchmarking.',
    fullDesc: 'Evaluating system throughput, latency, responsiveness, scalability, and stability under peak traffic and heavy stress conditions using tools like JMeter and K6.',
    icon: '🚀',
    keyBenefits: ['Zero crash under heavy traffic', 'Optimized server throughput', 'Sustained sub-second latency']
  },
  {
    id: 'regression',
    title: 'Regression Tests',
    shortDesc: 'Automated safety checks on existing codebase features.',
    fullDesc: 'Executing automated and manual test suites after code changes or updates to ensure existing functionality remains uncorrupted when new features are deployed.',
    icon: '🔄',
    keyBenefits: ['Risk-free code deployments', 'Protects existing features', 'Accelerates release velocity']
  },
  {
    id: 'acceptance',
    title: 'Acceptance Tests (UAT)',
    shortDesc: 'Pre-launch validation against commercial criteria.',
    fullDesc: 'Validating end-to-end product builds against customer criteria, business KPIs, and release readiness benchmarks prior to commercial production launch.',
    icon: '✅',
    keyBenefits: ['Client sign-off readiness', 'Validates business criteria', 'Prevents post-launch surprises']
  },
  {
    id: 'automation',
    title: 'QA Automation Tests',
    shortDesc: 'Modern scriptable test automation (Cypress, Selenium).',
    fullDesc: 'Leveraging modern automation frameworks (Cypress, Selenium, Postman, SoapUI) to automate repetitive test scripts, increase test coverage, and accelerate release cycles.',
    icon: '🤖',
    keyBenefits: ['Up to 80% faster execution', 'Continuous CI/CD feedback', 'High coverage & repeatability']
  },
  {
    id: 'accessibility',
    title: 'Accessibility Testing (A11y)',
    badge: 'NEW REQUIREMENT',
    shortDesc: 'WCAG 2.1 AA/AAA, ADA & Section 508 compliance testing.',
    fullDesc: 'Validating web, mobile, and digital products against global accessibility standards (WCAG 2.1 AA/AAA, ADA, Section 508, EN 301 549) to ensure full usability for individuals with visual, auditory, motor, or cognitive disabilities.',
    icon: '♿',
    keyBenefits: ['100% WCAG 2.1 Compliance', 'Prevents ADA legal liability', 'Inclusive UI for all users']
  }
];

export const TestTypesSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<TestType>(testTypesData[9]); // Default to Accessibility

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>Comprehensive QA Portfolio</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
            Types of Software Tests <span className="text-gradient">We Conduct</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Magnum Quality Assurance delivers complete quality assurance across 10 specialized testing disciplines to safeguard every layer of your application architecture.
          </p>
        </div>

        {/* 10 Test Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {testTypesData.map((test) => {
            const isSelected = selectedType.id === test.id;

            return (
              <div
                key={test.id}
                onClick={() => setSelectedType(test)}
                className="glass-card"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderColor: isSelected 
                    ? 'var(--brand-green)' 
                    : 'var(--border-subtle)',
                  background: isSelected 
                    ? 'rgba(16,185,129,0.06)' 
                    : '#ffffff',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'var(--shadow-card)',
                  position: 'relative'
                }}
              >
                {test.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'var(--brand-green)',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    {test.badge}
                  </span>
                )}

                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{test.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {test.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {test.shortDesc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Test Detail Modal / Drawer Card */}
        {selectedType && (
          <div style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(16,185,129,0.3)',
            background: '#ffffff',
            boxShadow: '0 20px 40px rgba(15,23,42,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '2.5rem', background: 'rgba(16,185,129,0.1)', padding: '12px', borderRadius: '12px' }}>{selectedType.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>{selectedType.title}</h3>
                  <span style={{ color: 'var(--brand-emerald)', fontSize: '0.9rem', fontWeight: 600 }}>Magnum QA Discipline</span>
                </div>
              </div>

              <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                Request {selectedType.title} Quote
              </a>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedType.fullDesc}
            </p>

            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--brand-emerald)', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>
              Key Value & Deliverables:
            </h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {selectedType.keyBenefits.map((b, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#f8fafc',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <span style={{ color: 'var(--brand-green)', fontWeight: 800 }}>✓</span>
                  <span style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
