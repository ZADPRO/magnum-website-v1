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
  Award
} from '../components/ui/Icons';

import home4Img from '../assets/home/home4.png';

export const AccessibilityPage: React.FC = () => {

  const accessibilityServices = [
    {
      title: 'Automated Accessibility Testing',
      desc: 'We use automated accessibility testing tools (Axe-Core, Pa11y, Lighthouse) to evaluate your digital assets rapidly, identifying non-compliance issues faster and with lower overhead.',
      icon: <Bot size={28} />
    },
    {
      title: 'Manual Accessibility Testing',
      desc: 'Our certified WCAG auditors manually execute complex user journeys with screen readers, keyboard-only navigation, and assistive hardware to catch semantic and context-sensitive flaws.',
      icon: <Eye size={28} />
    },
    {
      title: 'Alignment with International Standards',
      desc: 'We align your application with regional and global regulations, including WCAG 2.1 AA/AAA, RGAA (Référentiel Général d’Amélioration de l’Accessibilité), EAA, and ADA Title III.',
      icon: <Globe size={28} />
    },
    {
      title: 'Web Application Accessibility Testing',
      desc: 'Comprehensive audits of readability, text scaling up to 200%, color contrast (4.5:1 ratio), ARIA semantics, multimedia captions, keyboard focus, and form input accessibility.',
      icon: <FileText size={28} />
    },
    {
      title: 'Native & Hybrid Mobile App Testing',
      desc: 'Dedicated audits for Android (TalkBack) and iOS (VoiceOver) mobile applications using RAAM (Référentiel d’Accessibilité pour les Applications Mobiles) standards and switch control devices.',
      icon: <Smartphone size={28} />
    },
    {
      title: 'Detailed VPAT & RGAA Reports',
      desc: 'At the end of every campaign, we deliver VPAT 2.4 (Voluntary Product Accessibility Template) and RGAA-compliant audit reports, complete with code snippets and remediation steps.',
      icon: <Award size={28} />
    }
  ];

  const addedValueBenefits = [
    {
      number: '01',
      title: 'Improve User Experience for All Users',
      desc: 'Clear visual contrast, logical focus management, and readable typography enhance the digital experience for every visitor, not just those with disabilities.'
    },
    {
      number: '02',
      title: 'Comply with Government Requirements',
      desc: 'Ensure compliance with the European Accessibility Act (EAA), US ADA Title III, Section 508, and EU EN 301 549 standards to mitigate legal litigation risks.'
    },
    {
      number: '03',
      title: 'Ethical & Social Responsibility Standards',
      desc: 'Demonstrate active corporate social responsibility by removing digital barriers and ensuring equal access for individuals of all physical and cognitive abilities.'
    },
    {
      number: '04',
      title: 'Broaden Your Market Audience',
      desc: 'Tap into over 1 billion people worldwide living with disabilities (15% of global population according to WHO), unlocking significant untapped market potential.'
    },
    {
      number: '05',
      title: 'RGAA & EAA Certification Readiness',
      desc: 'Receive formal documentation aligned with Référentiel Général d’Amélioration de l’Accessibilité Web (RGAA) to win public sector and enterprise contracts.'
    }
  ];

  const engagementFormulas = [
    {
      title: 'ONE-SHOT FORMULA',
      tag: 'One-Time Audit',
      desc: 'Benefit from a unique, comprehensive assessment of the accessibility of your websites, portals, or mobile applications. Ideal for one-off compliance checks or release gate audits.'
    },
    {
      title: 'CONTINUOUS FORMULA',
      tag: 'Continuous CI/CD Monitoring',
      desc: 'Integrate automated accessibility regression testing into your CI/CD pipelines for continuous monitoring and optimization as new code features are deployed.'
    },
    {
      title: 'MAGNUM QA FACTORY',
      tag: 'Flexible On-Demand Credits',
      desc: 'Access specialized accessibility, functional, and automation testers starting from 1 day with no long-term commitment. Use credits flexibly across any project scope.'
    }
  ];

  const accessibilityChallenges = [
    'Offer applications seamlessly to all users, including those with special needs.',
    'Guarantee compatibility with native assistive technologies (VoiceOver, TalkBack, NVDA, JAWS, Braille readers).',
    'Achieve long-term ROI savings by detecting and resolving accessibility flaws early in development.',
    'Optimize user interface ergonomics, readability, and interaction speed for all site visitors.',
    'Broaden your customer base with an inclusive digital presence that builds brand loyalty.'
  ];

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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
              
              {/* Left Column: Hero Content */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <span className="badge" style={{ background: '#ecfdf5', color: 'var(--brand-emerald)', border: '1px solid rgba(16,185,129,0.25)' }}>
                    <Accessibility size={16} color="var(--brand-emerald)" /> Digital Inclusion & Compliance
                  </span>
                  <span className="badge" style={{ background: '#fef3c7', borderColor: '#f59e0b', color: '#b45309' }}>
                    WCAG 2.1 AA/AAA & EAA Ready
                  </span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px', color: '#0f172a' }}>
                  Ensure That Your Applications Are <span className="text-gradient">Accessible to Everyone</span>
                </h1>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                  Europe is moving towards mandatory digital accessibility with the European Commission Accessibility Act (EAA). Our specialized testing services are designed to help enterprise companies get up to speed quickly, particularly regarding the Référentiel Général d’Amélioration de l’Accessibilité Web (RGAA) and WCAG 2.1 AA/AAA standards.
                </p>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                  According to the World Health Organization (WHO), over 15% of the world’s population lives with disabilities affecting their interaction with digital devices. Accessibility testing by Magnum QA ensures inclusion, legal compliance, enhanced UX, brand reputation, and risk management.
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

              {/* Right Column: home4.png Assistive Tech Image */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={home4Img}
                  alt="Magnum QA Digital Accessibility Testing & Assistive Device Testing"
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Core Accessibility Testing Services */}
        <section style={{ padding: '90px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Our Services in <span className="text-gradient">Accessibility Testing</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We deliver end-to-end digital accessibility verification combining automated scanner tools, manual expert audits, native assistive technologies, and formal compliance reporting.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {accessibilityServices.map((service, idx) => (
                <div key={idx} className="glass-card" data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"} style={{
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
                    <div className="card-icon-badge">
                      {service.icon}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Added Value - Benefits of Accessibility Testing */}
        <section style={{ padding: '90px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Added Value: The Benefits of <span className="text-gradient">Accessibility Testing</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Investing in accessibility testing today delivers major competitive, financial, and ethical advantages for your organization:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
              {addedValueBenefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="glass-card"
                  style={{
                    padding: '24px 32px',
                    background: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px'
                  }}
                >
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: 'var(--brand-emerald)',
                    background: 'rgba(16,185,129,0.1)',
                    padding: '10px 18px',
                    borderRadius: '14px',
                    flexShrink: 0
                  }}>
                    {benefit.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Formulas Tailored to Your Needs */}
        <section style={{ padding: '90px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Formulas Tailored to <span className="text-gradient">Your Project Needs</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We offer flexible engagement models designed to match your immediate timeline, compliance goals, and engineering setup.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
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
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      background: 'rgba(16,185,129,0.1)',
                      color: 'var(--brand-emerald)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      display: 'inline-block',
                      marginBottom: '16px'
                    }}>
                      {formula.tag}
                    </span>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                      {formula.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {formula.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Bookmarklets & Tools Section */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div className="glass-card" style={{
              padding: '44px',
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  Simplify Your Accessibility Tests with Our Free Bookmarklets
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  We’ve created free, easy-to-use accessibility bookmarklets based on RAWeb and WCAG 2.1 standards. Add them to your browser bookmarks bar to identify contrast, heading hierarchy, and focus issues in a single click.
                </p>
                <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem', borderRadius: '999px' }}>
                  Request Bookmarklet Suite <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Answers to Software Testing Challenges */}
        <section style={{ padding: '90px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Answers to Software <span className="text-gradient">Testing Challenges</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                The goal of accessibility testing is to proactively identify obstacles hindering optimal digital experiences for all users:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1050px', margin: '0 auto' }}>
              {accessibilityChallenges.map((challenge, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '28px',
                  background: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ background: 'var(--brand-emerald)', color: '#ffffff', padding: '6px', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={18} color="#ffffff" />
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section for Accessibility Audit Inquiries */}
        <div id="contact">
          <ContactForm />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
