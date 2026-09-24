import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import {
  Accessibility,
  CheckCircle2,
  Eye,
  Smartphone,
  ArrowRight,
  Globe,
  Bot,
  FileText,
  Bookmark,
  Award,
  Layers,
  Search,
  RefreshCw,
  Sparkles,
  ChevronRight
} from '../components/ui/Icons';

import home4Img from '../assets/home/home4.png';

export const AccessibilityPage: React.FC = () => {

  const accessibilityServices = [
    {
      title: 'Automated Accessibility Testing',
      desc: 'We use automated accessibility testing tools (Axe-Core, Pa11y, Lighthouse) to evaluate digital assets rapidly, identifying non-compliance issues faster and with lower overhead.',
      icon: <Bot size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'Manual Accessibility Testing',
      desc: 'Our certified WCAG auditors manually execute complex user journeys with screen readers, keyboard-only navigation, and assistive hardware to catch semantic and context-sensitive flaws.',
      icon: <Eye size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'Alignment with International Standards',
      desc: 'We choose the benchmark and compliance level best suited to regional regulations, including WCAG 2.1 AA/AAA, RGAA (Référentiel Général d’Amélioration de l’Accessibilité), EAA, and ADA Title III.',
      icon: <Globe size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'Web Application Accessibility Testing',
      desc: 'We evaluate application accessibility by examining readability, images, color contrast, navigation, interaction, content structure and semantics, multimedia, and form inputs.',
      icon: <FileText size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'Native & Hybrid Mobile App Testing',
      desc: 'Dedicated audits for Android (TalkBack) and iOS (VoiceOver) mobile applications using RAAM (Référentiel d’Accessibilité pour les Applications Mobiles) standards and switch control devices.',
      icon: <Smartphone size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'Detailed VPAT & RGAA Audit Reports',
      desc: 'At the end of every campaign, we deliver VPAT 2.4 (Voluntary Product Accessibility Template) and RGAA-compliant audit reports, complete with code snippets and remediation steps.',
      icon: <Award size={28} color="var(--brand-emerald)" />
    }
  ];

  const addedValueBenefits = [
    {
      number: '01',
      title: 'Improve the user experience for all users.',
      desc: 'Clear visual contrast, logical focus management, and readable typography enhance the digital experience for every visitor, not just those with disabilities.'
    },
    {
      number: '02',
      title: 'Comply with government requirements.',
      desc: 'Ensure compliance with the European Accessibility Act (EAA), US ADA Title III, Section 508, and EU EN 301 549 standards to mitigate legal litigation risks.'
    },
    {
      number: '03',
      title: 'Meet ethical and social responsibility standards.',
      desc: 'Demonstrate active corporate social responsibility by removing digital barriers and ensuring equal access for individuals of all physical and cognitive abilities.'
    },
    {
      number: '04',
      title: 'Broaden your audience, including people with special needs.',
      desc: 'Tap into over 1 billion people worldwide living with disabilities (15% of global population according to WHO), unlocking significant untapped market potential.'
    },
    {
      number: '05',
      title: 'Comply with government standards - Référentiel Général d’Accessibilité (RGAA).',
      desc: 'Receive formal documentation aligned with RGAA and WCAG standards to win public sector tenders and enterprise contracts across Europe and globally.'
    }
  ];

  const engagementFormulas = [
    {
      title: 'ONE-SHOT FORMULA',
      tag: 'One-Time Audit',
      desc: 'Benefit from a unique assessment of the accessibility of your systems and applications. Ideal for a one-off analysis, compliance check, or release gate audit.',
      icon: <Search size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'CONTINUOUS FORMULA',
      tag: 'Continuous CI/CD Monitoring',
      desc: 'Benefit from continuous monitoring of the accessibility of your solutions, for constant optimization as you deploy new features in CI/CD pipelines.',
      icon: <Layers size={28} color="var(--brand-emerald)" />
    },
    {
      title: 'MAGNUM QA FACTORY',
      tag: 'Flexible On-Demand Credits',
      desc: 'Access specialized accessibility, functional, non-functional, and automation testers starting from 1 day with no long-term commitment. Use credits flexibly across any project scope.',
      icon: <RefreshCw size={28} color="var(--brand-emerald)" />
    }
  ];

  const challengesCompany = [
    'Offer applications seamlessly to all users, including those with special needs.',
    'Guarantee compatibility with native assistive technologies (VoiceOver, TalkBack, NVDA, JAWS).',
    'Achieve long-term ROI savings by detecting and resolving accessibility flaws early in development.',
    'Optimize user interface ergonomics, readability, and interaction speed for all site visitors.'
  ];

  const challengesTesting = [
    'Comprehensive automated and manual audit coverage against WCAG 2.1 AA/AAA.',
    'Formal RGAA (Référentiel Général d’Amélioration de l’Accessibilité) compliance verification.',
    'Detailed VPAT 2.4 reporting for procurement and public sector requirements.',
    'Continuous regression prevention integrated directly into release gates.'
  ];

  const caseStudies = [
    {
      category: 'Banking & Insurance',
      title: 'Accessibility Testing to Guarantee European EAA & RGAA Compliance',
      desc: 'Complete digital accessibility audit and remediation support for online portal & mobile banking apps serving 2M+ active users.'
    },
    {
      category: 'Telecom',
      title: 'End-to-End Assistive Technology Audit for Self-Service Web Applications',
      desc: 'Achieving WCAG 2.1 AA compliance across self-service customer portals using TalkBack, VoiceOver, and keyboard navigation testing.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>
        
        {/* Section 1: Top Page Title Header Banner */}
        <section style={{
          padding: '60px 0 40px 0',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{ textAlign: 'left' }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--brand-emerald)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                Our Services
              </span>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.1,
                margin: 0
              }}>
                Accessibility Testing
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Hero Intro Section (2-Column Template Layout) */}
        <section style={{
          padding: '70px 0',
          background: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'flex-start'
            }}>
              
              {/* Column 1: Subtitle & Heading */}
              <div>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--brand-emerald)',
                  textTransform: 'lowercase',
                  letterSpacing: '0.5px',
                  display: 'inline-block',
                  marginBottom: '12px'
                }}>
                  software testing services
                </span>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: '#0f172a',
                  marginBottom: '20px'
                }}>
                  Ensure that your applications are accessible to everyone.
                </h2>
                <div style={{
                  width: '60px',
                  height: '4px',
                  background: 'var(--brand-emerald)',
                  borderRadius: '2px',
                  marginBottom: '24px'
                }} />
              </div>

              {/* Column 2: Descriptive Paragraph & Action Buttons */}
              <div>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '28px'
                }}>
                  Europe is moving towards <strong>digital accessibility</strong> with <a
                    href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'underline' }}
                  >
                    the European Commission Accessibility Act
                  </a>. Our various services are designed to help companies get <strong>up to speed quickly</strong>, particularly with regard to the <a
                    href="https://accessibilite.public.lu/fr/rgaa4.1.2/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'underline' }}
                  >
                    Référentiel Général d’Amélioration de l’Accessibilité Web (RGAA)
                  </a>. According to the WHO, 15% of the world’s population, with a variety of disabilities, have an influence on interaction with digital devices, aspects verified in our tests. Accessibility ensures inclusion, compliance, UX, reputation, efficiency and risk management in software development.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="#contact" className="btn-primary" style={{ borderRadius: '999px', padding: '14px 28px', fontSize: '0.95rem' }}>
                    <span>Request Accessibility Audit</span>
                    <ArrowRight size={18} color="#ffffff" />
                  </a>

                  <a
                    href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ borderRadius: '999px', padding: '14px 28px', fontSize: '0.95rem' }}
                  >
                    <span>European Accessibility Act (EAA)</span>
                    <Globe size={18} color="var(--brand-emerald)" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Core Accessibility Testing Services (6 Cards Grid) */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div style={{ width: '95vw', maxWidth: '95vw', margin: '0 auto', padding: '0 12px', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Our Services in <span className="text-gradient">Accessibility Testing</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We deliver end-to-end digital accessibility verification combining automated scanner tools, manual expert audits, native assistive technologies, and formal compliance reporting.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px',
              width: '100%',
              margin: '0 auto'
            }}>
              {accessibilityServices.map((service, idx) => (
                <div key={idx} className="glass-card" data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"} style={{
                  flex: '1 1 320px',
                  maxWidth: '380px',
                  minWidth: '290px',
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box'
                }}>
                  <div>
                    <div className="card-icon-badge" style={{ marginBottom: '20px' }}>
                      {service.icon}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Visual Image Feature Highlight Section (home4.png) */}
        <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}>
              {/* Left Column: home4.png Image */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={home4Img}
                  alt="Magnum QA Accessibility Testing & Device Compatibility"
                  style={{
                    width: '100%',
                    maxWidth: '540px',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Right Column: Feature Highlight Text */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span className="badge" style={{ background: '#ecfdf5', color: 'var(--brand-emerald)', border: '1px solid rgba(16,185,129,0.25)' }}>
                    <Sparkles size={16} color="var(--brand-emerald)" /> Inclusive Digital Transformation
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '20px', lineHeight: 1.2 }}>
                  Comprehensive Testing Across All Devices & Screen Readers
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Our QA engineers evaluate web applications, native iOS, Android, and hybrid mobile solutions to guarantee flawless interaction with TalkBack, VoiceOver, NVDA, JAWS, and keyboard navigation.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '100% WCAG 2.1 Level AA & AAA Criterion Verification',
                    'Real-device testing with assistive technology users',
                    'Formal VPAT 2.4 and RGAA certification documentation'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
                      <CheckCircle2 size={18} color="var(--brand-emerald)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary" style={{ padding: '12px 26px', fontSize: '0.9rem', borderRadius: '999px' }}>
                  <span>Book Consultation</span>
                  <ArrowRight size={16} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Added Value Benefits Section */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div style={{ width: '95vw', maxWidth: '95vw', margin: '0 auto', padding: '0 12px', boxSizing: 'border-box' }}>
            
            {/* Center-aligned Section Header */}
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 56px auto' }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--brand-emerald)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                Added Value
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#0f172a',
                marginBottom: '16px'
              }}>
                The Benefits of <span className="text-gradient">Accessibility Testing</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We can help you make your digital products and services accessible. Investing in accessibility testing today has several major advantages, including:
              </p>
            </div>

            {/* Benefit Cards Layout: 95vw width, 3 cards on row 1, 2 centered cards on row 2 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              width: '100%',
              margin: '0 auto'
            }}>
              {addedValueBenefits.map((benefit, idx) => (
                <div
                  key={benefit.number}
                  className="glass-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  style={{
                    flex: '1 1 calc(33.333% - 24px)',
                    maxWidth: 'calc(33.333% - 16px)',
                    minWidth: '300px',
                    padding: '32px 36px',
                    background: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    boxSizing: 'border-box',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ marginBottom: '18px' }}>
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--brand-emerald)',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.2)',
                      padding: '6px 14px',
                      borderRadius: '12px',
                      display: 'inline-block'
                    }}>
                      {benefit.number}.
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', lineHeight: 1.35 }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Formulas Tailored to Your Needs */}
        <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--brand-emerald)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                Flexible Engagement Models
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Formulas Tailored to <span className="text-gradient">Your Needs</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                To provide you with value-added results tailored to your specific needs, we offer several formulas:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {engagementFormulas.map((formula, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '36px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div className="card-icon-badge">
                        {formula.icon}
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        background: 'rgba(16,185,129,0.1)',
                        color: 'var(--brand-emerald)',
                        padding: '6px 14px',
                        borderRadius: '999px'
                      }}>
                        {formula.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                      {formula.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {formula.desc}
                    </p>
                  </div>

                  <a href="#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', borderRadius: '999px', padding: '12px' }}>
                    <span>Request a Quote</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Free Bookmarklets & Tools Section */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Tools & Methods
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginTop: '8px' }}>
                Our Resources in Accessibility Testing
              </h2>
            </div>

            <div className="glass-card" style={{
              padding: '40px',
              background: '#ffffff',
              border: '2px solid var(--brand-emerald)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '960px',
              margin: '0 auto',
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{ background: 'rgba(16,185,129,0.1)', padding: '20px', borderRadius: '20px', color: 'var(--brand-emerald)', flexShrink: 0 }}>
                <Bookmark size={40} />
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  Simplify Your Accessibility Tests with Our Free Bookmarklets
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  We’ve created free, easy-to-use accessibility bookmarklets based on RGAA and WCAG 2.1 standards. Add them to your browser bookmarks bar to identify contrast, heading hierarchy, and focus issues in a single click.
                </p>
                <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem', borderRadius: '999px' }}>
                  <span>Request Bookmarklet Suite</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Answers to Software Testing Challenges */}
        <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Answers to Software <span className="text-gradient">Testing Challenges</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                The goal of accessibility testing is to proactively identify obstacles hindering optimal digital experiences for all users:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1050px', margin: '0 auto' }}>
              
              {/* Column 1: For Your Company */}
              <div className="glass-card" style={{ padding: '32px', background: '#f8fafc', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Accessibility size={22} color="var(--brand-emerald)" /> For Your Company
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {challengesCompany.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="var(--brand-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: For Test Activities */}
              <div className="glass-card" style={{ padding: '32px', background: '#f8fafc', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText size={22} color="var(--brand-emerald)" /> For Test Activities
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {challengesTesting.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="var(--brand-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Section 9: Case Studies Highlights */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Case Studies
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginTop: '8px' }}>
                Accessibility Testing to Guarantee Compliance
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', maxWidth: '960px', margin: '0 auto' }}>
              {caseStudies.map((cs, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--brand-emerald)',
                    background: '#ecfdf5',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    display: 'inline-block',
                    marginBottom: '14px'
                  }}>
                    {cs.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', lineHeight: 1.3 }}>
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {cs.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Contact Form Section */}
        <div id="contact">
          <ContactForm />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
