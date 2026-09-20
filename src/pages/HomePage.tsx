import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import {
  Sparkles,
  Accessibility,
  Bot,
  Code,
  Users,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  ChevronRight,
  ArrowRight,
  Smartphone,
  CheckCircle2,
  Target
} from '../components/ui/Icons';

export const HomePage: React.FC = () => {

  const testimonialsData = [
    {
      author: 'Jacek Hewko',
      role: 'Director',
      company: 'Enterprise Client',
      quote: 'Good quality staff straight away without our need to do many hours of interviewing and reviews. Magnum QA’s contractors blended well into our teams and were prompt at learning about our environment. They showed great effectiveness at delivering value towards critical product features.'
    },
    {
      author: 'Jessi Lichtenecker',
      role: 'Project Manager',
      company: 'Technology Partner',
      quote: 'Magnum QA has successfully implemented the system’s UI design and different features. Their team has demonstrated good project management and team fit. Known for their agility, they adapt to changing project needs with ease.'
    },
    {
      author: 'Xavier Aguera',
      role: 'Head of Product',
      company: 'Digital Enterprise',
      quote: 'Magnum QA really tries to make the engagement as good for the client as possible. It’s clear they believe that their success is related to ours. They’re thoughtful and always go the extra mile to make sure things are going well.'
    },
    {
      author: 'Adam Polkowski',
      role: 'Project Lead',
      company: 'mBank',
      quote: 'Project work carried out by Magnum QA specialists always meets the Bank’s expectations. We rate our cooperation with Magnum QA highly. We appreciate commitment, professional approach and quick response for any changes and our needs.'
    },
    {
      author: 'Eran Dvey Aharon',
      role: 'Engineering Lead',
      company: 'FinTech Group',
      quote: 'They’re engaged, talented, and easy to work with. The team was significantly more productive and submitted better-quality deliverables in less time.'
    },
    {
      author: 'Piotr Ligeza',
      role: 'VP of Technology',
      company: 'Software Enterprise',
      quote: 'The Magnum QA team is always responsive when it comes to addressing our needs. They are genuinely trying to understand your needs and deliver the best possible quality within the given budget.'
    },
    {
      author: 'Łukasz Fido',
      role: 'Delivery Manager',
      company: 'Global SaaS',
      quote: 'We’re very happy with their ability to deliver. They are a reliable partner who understands our needs and delivers high quality solutions that assist our clients in everyday work.'
    },
    {
      author: 'Artur Bukowski',
      role: 'IT Director',
      company: 'Crif',
      quote: 'I feel confident working with them, knowing that they’ll be willing to help if an unforeseen situation comes up. Involvement of Magnum QA provides us with instant access to necessary technological competences.'
    },
    {
      author: 'William Conaghan',
      role: 'Commercial Lead',
      company: 'Finance Corp',
      quote: 'They’re super professional in all aspects of the project. They understand the commercials on their side and our side, making technical delivery smooth and predictable.'
    }
  ];

  // Highlighted Core Testing Specializations
  const primaryTestingSpecializations = [
    {
      id: 'accessibility',
      title: 'Accessibility Testing (A11y)',
      tagline: 'WCAG 2.1 AA/AAA & VPAT Compliance',
      description: 'Comprehensive evaluation of digital products for users with visual, auditory, motor, and cognitive impairments using screen readers (NVDA, JAWS, VoiceOver), keyboard focus verification, and Pa11y automated checks.',
      icon: <Accessibility size={32} color="var(--brand-emerald)" />,
      metrics: '100% WCAG Conformance Rate',
      features: ['Screen Reader Audits (NVDA/JAWS)', 'Keyboard Traps & Focus State Verification', 'Color Contrast & ARIA Markup Audits', 'VPAT Certification & Compliance Reports'],
      link: '/services/software-development/accessibility-testing'
    },
    {
      id: 'automation',
      title: 'Test Automation & CI/CD',
      tagline: 'Speed Up Releases with 90%+ Test Coverage',
      description: 'End-to-end test automation frameworks built with Playwright, Cypress, Selenium, and Appium seamlessly integrated into GitHub Actions, GitLab, and Jenkins pipelines for continuous quality regression.',
      icon: <Bot size={32} color="var(--brand-emerald)" />,
      metrics: '70% Faster Release Cycles',
      features: ['Playwright & Cypress E2E Frameworks', 'Parallel Cross-Browser Execution', 'CI/CD Pipeline Integration', 'Self-Healing Automated Test Scripts'],
      link: '/services/software-development/qa-services'
    },
    {
      id: 'penetration',
      title: 'Penetration & Security Testing',
      tagline: 'OWASP Top 10 & Vulnerability Remediation',
      description: 'Rigorous penetration testing and ethical hacking to identify security vulnerabilities, SQL injection, XSS, authentication bypasses, and data leak vectors across web, API, and cloud infrastructure.',
      icon: <ShieldCheck size={32} color="var(--brand-emerald)" />,
      metrics: 'Zero Zero-Day Vulnerabilities',
      features: ['OWASP Top 10 Vulnerability Audits', 'API & Cloud Infrastructure Pen Testing', 'Static & Dynamic Code Analysis (SAST/DAST)', 'Compliance Support (ISO 27001, SOC 2, GDPR)'],
      link: '/services/software-development/qa-services'
    },
    {
      id: 'performance',
      title: 'Performance & Load Testing',
      tagline: 'High-Throughput Scalability & Stress Testing',
      description: 'Simulate tens of thousands of concurrent users with Apache JMeter, K6, and Locust to uncover bottlenecks, optimize database queries, evaluate server response times, and guarantee 99.99% uptime.',
      icon: <Zap size={32} color="var(--brand-emerald)" />,
      metrics: 'Up to 50k+ Concurrent Users Simulated',
      features: ['Stress, Spike & Endurance Testing', 'Latency & Database Bottleneck Profiling', 'JMeter & K6 Test Script Generation', 'Real-Time Server Resource Monitoring'],
      link: '/services/software-development/qa-services'
    },
    {
      id: 'mobile',
      title: 'Mobile App QA (iOS & Android)',
      tagline: 'Real Device Cloud & Native Performance Testing',
      description: 'Rigorous mobile QA across hundreds of physical smartphones and tablets to test touch gestures, network fluctuation (3G/4G/5G/Offline), memory leaks, battery consumption, and OS version compatibility.',
      icon: <Smartphone size={32} color="var(--brand-emerald)" />,
      metrics: '500+ Device & OS Combinations',
      features: ['Native iOS (Swift) & Android (Kotlin) QA', 'Real Device Cloud Testing (BrowserStack)', 'Network Fluctuation & Offline Mode QA', 'Memory & Battery Consumption Audits'],
      link: '/services/software-development/qa-services'
    },
    {
      id: 'api',
      title: 'API & Integration Testing',
      tagline: 'REST, GraphQL, gRPC & Microservices Validation',
      description: 'Validate backend logic, data contracts, payload structures, authentication tokens, and service-to-service communication using Postman, REST Assured, and Karate Frameworks.',
      icon: <Code size={32} color="var(--brand-emerald)" />,
      metrics: '100% Contract Integrity',
      features: ['Postman & REST Assured Automation', 'GraphQL & gRPC Schema Validation', 'Mock Server & Fault Injection Testing', 'Security & Rate Limiting Verification'],
      link: '/services/software-development/qa-services'
    }
  ];

  const whatWeDoServices = [
    {
      num: '01',
      title: 'Software Testing & QA Services',
      desc: 'Our primary core expertise: End-to-end Manual QA, Test Automation, Accessibility (A11y), Penetration Testing, and Performance Engineering.',
      link: '/services/software-development/qa-services',
      icon: <CheckCircle2 size={28} color="var(--brand-emerald)" />
    },
    {
      num: '02',
      title: 'Accessibility Testing (A11y)',
      desc: 'Dedicated WCAG 2.1 AA/AAA auditing, VPAT certification, and screen reader testing to ensure your digital products are 100% accessible to all users.',
      link: '/services/software-development/accessibility-testing',
      icon: <Accessibility size={28} color="var(--brand-emerald)" />
    },
    {
      num: '03',
      title: 'Penetration & Security Testing',
      desc: 'Ethical penetration testing, OWASP Top 10 vulnerability scanning, API security testing, and compliance readiness (ISO 27001, SOC 2).',
      link: '/services/software-development/qa-services',
      icon: <ShieldCheck size={28} color="var(--brand-emerald)" />
    },
    {
      num: '04',
      title: 'Test Automation & CI/CD',
      desc: 'Custom automated testing frameworks using Playwright, Cypress, and Selenium to accelerate your deployment pipelines without compromising quality.',
      link: '/services/software-development/qa-services',
      icon: <Bot size={28} color="var(--brand-emerald)" />
    },
    {
      num: '05',
      title: 'Dedicated QA Engineers',
      desc: 'We provide vetted senior QA engineers, SDETs, and accessibility auditors who seamlessly integrate into your sprint cycles within days.',
      link: '/it-outsourcing',
      icon: <Users size={28} color="var(--brand-emerald)" />
    },
    {
      num: '06',
      title: 'AI & Data Testing',
      desc: 'Specialized QA for AI/ML models, RAG pipelines, and data analytics systems—verifying prompt accuracy, data integrity, and model robustness.',
      link: '/ai-solutions',
      icon: <Sparkles size={28} color="var(--brand-emerald)" />
    },
    {
      num: '07',
      title: 'Custom Software Development',
      desc: 'Full-cycle custom software development built from the ground up with quality assurance embedded into every single sprint.',
      link: '/services/software-development/custom-software-development',
      icon: <Code size={28} color="var(--brand-emerald)" />
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* Hero Section: Primary Focus on Software Testing & Quality Assurance */}
        <section style={{
          position: 'relative',
          padding: '90px 0 110px 0',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 10%, rgba(16,185,129,0.12) 0%, rgba(255,255,255,1) 70%)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container responsive-grid-hero" data-aos="fade-up">
            
            {/* Left Column: Hero Text */}
            <div>
              <div className="badge" style={{ marginBottom: '20px' }}>
                <Target size={16} color="var(--brand-emerald)" />
                <span>Primary Focus: Enterprise Software Testing & Quality Assurance</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: '#0f172a',
                marginBottom: '24px'
              }}>
                Global Leader in <br />
                <span className="text-gradient">Software Testing & QA</span> <br />
                & Quality Engineering
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '640px'
              }}>
                At <strong>Magnum Quality Assurance</strong>, software testing is our primary passion and core competency. From <strong>Accessibility Testing (A11y)</strong> and <strong>Test Automation</strong> to <strong>Penetration Testing</strong>, <strong>Performance QA</strong>, and <strong>Mobile App Validation</strong>, we deliver zero-defect software confidence to global enterprises.
              </p>

              {/* Quick Badge List of Key Testing Capabilities */}
              <div style={{ display: 'flex', gap: '10px 16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {['Accessibility Testing (WCAG 2.1)', 'Automated QA & CI/CD', 'Penetration & Security', 'Performance & Load Testing', 'Mobile & API Testing'].map(cap => (
                  <span key={cap} style={{
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: '#065f46',
                    background: 'rgba(16,185,129,0.1)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(16,185,129,0.25)'
                  }}>
                    <CheckCircle2 size={14} color="var(--brand-emerald)" />
                    {cap}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link to="/services/software-development/qa-services" className="btn-primary">
                  Explore Software Testing Services
                  <ArrowRight size={18} color="#ffffff" />
                </Link>

                <Link to="/services/software-development/accessibility-testing" className="btn-secondary">
                  Accessibility Testing (A11y)
                </Link>
              </div>

              {/* Client Recognition Badges */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '16px', fontWeight: 600 }}>
                  Recognized Global QA & Software Quality Leader
                </p>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', opacity: 0.9, flexWrap: 'wrap' }}>
                  {['Clutch Top QA Leader', 'ISO 27001 Certified', 'WCAG 2.1 AA Compliant', 'Forbes Diamonds', 'GoodFirms Top Testers'].map(award => (
                    <span key={award} style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      background: '#f8fafc',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-subtle)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Award size={14} color="var(--brand-emerald)" />
                      {award}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Highlighted Flagship Feature (Accessibility & Core Testing Showcase) */}
            <div style={{ position: 'relative' }}>
              
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
                  PRIMARY SPECIALIZATION
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.12)', padding: '12px', borderRadius: '16px', display: 'flex' }}>
                    <Accessibility size={32} color="var(--brand-emerald)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Accessibility Testing (A11y)</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>WCAG 2.1 AA/AAA & VPAT Certification</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  We ensure software products cater seamlessly to visual, motor, auditory, and cognitive user needs through screen reader audits (NVDA, JAWS, VoiceOver), keyboard focus management, contrast checks, and Pa11y regression pipelines.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Screen Reader Conformance</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>100% Passed</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Keyboard Traps & Focus</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>Zero Traps</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>ADA Title III & Section 508</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>Fully Audited</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link to="/services/software-development/accessibility-testing" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}>
                    A11y Audit Service →
                  </Link>
                  <Link to="/services/software-development/qa-services" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                    All QA Services
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Dedicated Section: Comprehensive Software Testing & QA Suite */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>
                <CheckCircle2 size={16} color="var(--brand-emerald)" />
                Core Testing Disciplines
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Our Core Focus: <span className="text-gradient">Software Testing & QA Suite</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Magnum QA specializes in full-spectrum quality engineering. Whether you need accessibility compliance, fast automated regression test suites, penetration security audits, or high-concurrency load testing, our certified QA engineers have you covered.
              </p>
            </div>

            {/* Grid of 6 Major Testing Types */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
              {primaryTestingSpecializations.map((spec) => (
                <div key={spec.id} className="glass-card" style={{
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ background: 'rgba(16,185,129,0.1)', padding: '14px', borderRadius: '16px', display: 'inline-flex' }}>
                        {spec.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#065f46', background: '#ecfdf5', padding: '4px 10px', borderRadius: '999px' }}>
                        {spec.metrics}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      {spec.title}
                    </h3>
                    
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-emerald)', marginBottom: '14px' }}>
                      {spec.tagline}
                    </p>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {spec.description}
                    </p>

                    {/* Features list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {spec.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#0f172a', fontWeight: 500 }}>
                          <Check size={16} color="var(--brand-green)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={spec.link} style={{
                    color: 'var(--brand-emerald)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    <span>Learn More About {spec.title.split(' ')[0]} Testing</span>
                    <ChevronRight size={16} color="var(--brand-emerald)" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* What We Do Section (All Services) */}
        <section style={{ padding: '100px 0', background: '#ffffff' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Complete Engineering Services</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Full Range of <span className="text-gradient">Services & Solutions</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Beyond our flagship Software Testing & QA practices, we provide end-to-end software development, AI implementation, and IT staff outsourcing.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '48px' }}>
              {whatWeDoServices.map(service => (
                <div key={service.num} className="glass-card" style={{ padding: '32px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
                        {service.icon}
                      </div>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-emerald)' }}>{service.num}</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {service.desc}
                    </p>
                  </div>

                  <Link to={service.link} style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>Explore</span>
                    <ChevronRight size={16} color="var(--brand-emerald)" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Full Portfolio Banner */}
            <div style={{
              background: '#f8fafc',
              padding: '28px 36px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Full Quality Engineering & QA Capabilities</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Explore dedicated QA teams, accessibility audits (A11y), automated test frameworks, and penetration testing.
                </p>
              </div>

              <Link to="/services/software-development/qa-services" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                See All QA & Testing Services
              </Link>
            </div>

          </div>
        </section>

        {/* Who We Are Section */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div className="responsive-grid-2col">
              
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>Who We Are</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '20px', color: '#0f172a', lineHeight: 1.25 }}>
                  19+ Years of Excellence in <span className="text-gradient">Software Testing & Quality Engineering</span>
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Magnum Quality Assurance is a global software testing and quality engineering leader. For over 19 years, our core focus has been helping enterprises, SaaS companies, and financial institutions launch flawless digital products with total confidence.
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Our team of 600+ certified QA engineers, SDETs, penetration testers, and accessibility specialists work from four delivery centers. From initial accessibility audits (WCAG 2.1) to continuous test automation and penetration security testing, we embed quality at every stage of the software lifecycle.
                </p>

                <Link to="/about-us" className="btn-secondary">
                  More About Magnum QA →
                </Link>
              </div>

              {/* Certified Standards & Delivery Highlights */}
              <div className="glass-card" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-glow)' }} data-aos="zoom-in">
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Certified Testing Standards & Rigorous QA Processes
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  We combine ISTQB certified testing methodologies with ISO 27001 security compliance and WCAG 2.1 AA/AAA accessibility standards. This guarantees your software meets the highest enterprise demands for safety, speed, and usability.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>ISO 27001 Certified Security & OWASP Pen Testing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Accessibility size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>WCAG 2.1 AA/AAA & VPAT Accessibility Compliance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Bot size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>ISTQB Certified Test Automation & SDET Specialists</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Executive Quote Section */}
        <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div className="glass-card" style={{
              padding: '36px',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, #ffffff 100%)',
              border: '1px solid var(--border-glow)',
              textAlign: 'center',
              maxWidth: '960px',
              margin: '0 auto'
            }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--brand-emerald)', letterSpacing: '1px', fontWeight: 700, marginBottom: '16px', display: 'block' }}>
                From Our Quality Engineering Leadership
              </span>

              <blockquote style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 600, color: '#0f172a', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                “Software testing is not an afterthought—it is the foundation of user trust. At Magnum QA, our primary focus is ensuring that every application we test is completely accessible, ultra-performant, impenetrable, and automated for rapid continuous delivery.”
              </blockquote>

              <div>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', display: 'block' }}>Jakub Stadnik</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Head of Quality Assurance & Testing Delivery, Magnum QA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Magnum QA in Numbers */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                Magnum QA <span className="text-gradient">in Numbers</span>
              </h2>
            </div>

            <div className="responsive-stats-grid">
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0f172a' }}>19+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>years in software testing & QA</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--brand-emerald)' }}>750+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>QA projects & audits completed</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0f172a' }}>600+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>QA engineers & SDETs</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0f172a' }}>100+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>enterprise clients across 13 countries</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--brand-emerald)' }}>95%</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 700 }}>client retention & repeat QA engagements</div>
              </div>
            </div>
          </div>
        </section>

        {/* 48-Hour Free QA & Accessibility Audit Offer */}
        <section style={{ padding: '90px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            <div className="glass-card responsive-grid-demo" style={{
              padding: '36px',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, #ffffff 100%)',
              border: '2px solid var(--brand-green)',
              borderRadius: 'var(--radius-xl)'
            }}>
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>Complimentary QA Audit</span>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                  Get a Free Software Testing & Accessibility Audit Report in 48 Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Unsure about your software's test coverage, accessibility WCAG compliance, or security vulnerabilities? Send us your URL or product demo, and our senior QA team will deliver a initial vulnerability & accessibility diagnostic report within two business days.
                </p>
                <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px' }}>
                  Request Free QA & A11y Audit Report →
                </Link>
              </div>

              <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>What Your Audit Includes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Check size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>WCAG 2.1 Accessibility (A11y) Diagnostic</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Check size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>OWASP Security & Penetration Vulnerability Scan</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Check size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>Automation ROI & Test Architecture Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Companies Choose Magnum Quality Assurance */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Core Differentiators</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Why Companies Choose <span className="text-gradient">Magnum QA</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <Target size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Testing-First Mentality</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Unlike generic dev shops, software testing and quality assurance is our primary focus. We treat quality, accessibility, performance, and security as first-class citizens from day one.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <ShieldCheck size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>ISO 27001 & WCAG Compliant</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Our QA workflows strictly align with ISO 27001 security standards, GDPR data compliance, and WCAG 2.1 AA/AAA accessibility guidelines to protect your brand reputation.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <TrendingUp size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Accelerated Time-to-Market</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  With custom CI/CD automation pipelines and experienced SDETs, we reduce release cycle times by up to 70% while maintaining zero critical production defects.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Client Testimonials Section */}
        <section style={{ padding: '100px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Client Feedback</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                What Our Clients <span className="text-gradient">Tell Us</span>
              </h2>
            </div>

            {/* Sliding Interactive Testimonials Carousel */}
            <TestimonialsCarousel testimonials={testimonialsData} />

          </div>
        </section>

        {/* News & Insights */}
        <section style={{ padding: '90px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge" style={{ marginBottom: '12px' }}>Latest QA & Tech Insights</span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                  What's New at <span className="text-gradient">Magnum Quality Assurance</span>
                </h2>
              </div>

              <Link to="/blog" className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
                All News & Insights →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  QA & Accessibility · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  Why WCAG 2.1 Accessibility Testing is Vital for Enterprise Legal Compliance & UX
                </h3>
                <Link to="/blog" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Read More →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  Test Automation · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  Playwright vs Cypress in 2026: Choosing the Best End-to-End Testing Framework
                </h3>
                <Link to="/blog" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Read More →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  Penetration Testing · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  Top 10 API Security Vulnerabilities and How Pen Testing Protects Modern Cloud Apps
                </h3>
                <Link to="/blog" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Read More →
                </Link>
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
