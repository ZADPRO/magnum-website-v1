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
  Database,
  Cloud,
  Users,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Award,
  ChevronRight,
  ArrowRight
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

  const whatWeDoServices = [
    {
      num: '01',
      title: 'AI Consulting',
      desc: 'We help you assess AI opportunities, use cases, data readiness, governance, and ROI before you invest.',
      link: '/ai-solutions',
      icon: <Bot size={28} color="var(--brand-emerald)" />
    },
    {
      num: '02',
      title: 'AI Implementation',
      desc: 'We design and build RAG systems, AI agents, and custom machine learning applications ready for reliable production use.',
      link: '/ai-solutions',
      icon: <Sparkles size={28} color="var(--brand-emerald)" />
    },
    {
      num: '03',
      title: 'AI Engineers',
      desc: 'We provide vetted AI specialists and dedicated teams that can join your project within weeks.',
      link: '/it-outsourcing',
      icon: <Users size={28} color="var(--brand-emerald)" />
    },
    {
      num: '04',
      title: 'IT Staff Nearshoring',
      desc: 'We provide EU-based engineers with modern tooling, AI-assisted workflows, and strong time-zone overlap.',
      link: '/it-outsourcing',
      icon: <Globe size={28} color="var(--brand-emerald)" />
    },
    {
      num: '05',
      title: 'Custom Software Development',
      desc: 'We build custom software around your product goals, technical constraints, and delivery timeline.',
      link: '/services/software-development/custom-software-development',
      icon: <Code size={28} color="var(--brand-emerald)" />
    },
    {
      num: '06',
      title: 'Data Solutions',
      desc: 'We build data platforms, pipelines, analytics layers, and governance frameworks for trusted reporting and AI projects.',
      link: '/services/data/data-analytics',
      icon: <Database size={28} color="var(--brand-emerald)" />
    },
    {
      num: '07',
      title: 'Technology Consulting',
      desc: 'We advise on technology strategy, architecture, modernization, and sequencing for complex software decisions.',
      link: '/services/consulting-design/software-assessment',
      icon: <Zap size={28} color="var(--brand-emerald)" />
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* Hero Section: WOW Factor */}
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
                <Sparkles size={16} color="var(--brand-emerald)" />
                <span>Enterprise Engineering & AI Transformation</span>
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
                <span className="text-gradient">Software Development</span> <br />
                and AI Transformation
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '640px'
              }}>
                At <strong>Magnum Quality Assurance</strong>, we develop custom software and help companies implement AI by building AI engineering teams and delivering AI consulting. Focused on ROI, not hype.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link to="/it-outsourcing" className="btn-primary">
                  Hire AI and Software Developers
                  <ArrowRight size={18} color="#ffffff" />
                </Link>

                <Link to="/contact" className="btn-secondary">
                  Discuss Software Project
                </Link>
              </div>

              {/* Client Recognition Badges */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '16px', fontWeight: 600 }}>
                  Recognized by Global Tech Ratings & Industry Awards
                </p>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0.85, flexWrap: 'wrap' }}>
                  {['Clutch 1000 (2025)', 'Computerworld', 'GoodFirms', 'Forbes Diamonds', 'The Manifest'].map(award => (
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

            {/* Right Column: Highlighted Flagship Feature (Accessibility Testing & QA) */}
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
                  HIGHLIGHTED FEATURE
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.12)', padding: '12px', borderRadius: '16px', display: 'flex' }}>
                    <Accessibility size={32} color="var(--brand-emerald)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Accessibility Testing (A11y)</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>WCAG 2.1 AA/AAA & VPAT Compliance</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  We ensure digital products cater seamlessly to visual, motor, auditory, and cognitive user needs through screen reader audits (NVDA, JAWS, VoiceOver), keyboard focus management, and automated Pa11y regression checks.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Screen Reader Conformance</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>100% Passed</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Keyboard Navigation Focus</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>Zero Traps</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>ADA Title III & Section 508</span>
                    <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>Fully Audited</span>
                  </div>
                </div>

                <Link to="/services/software-development/qa-services" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore QA & Accessibility Suite →
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* What We Do Section (7 Core Services) */}
        <section style={{ padding: '100px 0', background: '#ffffff' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Service Capabilities</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                What We <span className="text-gradient">Do</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We work with companies at different stages: testing an AI idea, modernizing a legacy system, building a new product, or expanding an engineering team.
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
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Full Service Portfolio</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  We deliver cloud, DevOps, QA and testing, MVP development, product design, and more.
                </p>
              </div>

              <Link to="/services/software-development/qa-services" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                See All Services
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
                  Software delivery experience applied to <span className="text-gradient">AI, data, and digital products</span>
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Magnum Quality Assurance is a software engineering company. For more than 19 years, we have built custom software for companies across Europe and the US. Our team of 600+ engineers works from four development centers and has delivered over 750 projects.
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Today, we apply that engineering foundation to AI, data, and software modernization projects. We help companies assess AI opportunities, build production-ready solutions, and manage them responsibly. Security, maintainability, and business value are part of the discussion from the start.
                </p>

                <Link to="/about-us" className="btn-secondary">
                  More About Magnum QA →
                </Link>
              </div>

              {/* Certified Standards & Delivery Highlights */}
              <div className="glass-card" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-glow)' }} data-aos="zoom-in">
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Certified Expertise. Proven Delivery Standards.
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  We combine hands-on engineering experience with ISO 27001 certification and technology partnerships across AWS, Microsoft Azure, and Databricks. This helps us build software, data, and AI solutions that meet enterprise expectations for security, reliability, and long-term maintainability.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>ISO 27001 Certified Security & GDPR Alignment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Cloud size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>AWS & Microsoft Azure Official Tier Partners</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Database size={20} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>Databricks Analytics & AI Ecosystem Specialists</span>
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
                From Our Delivery Floor
              </span>

              <blockquote style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 600, color: '#0f172a', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                “AI transformation is also a software delivery challenge. After 19 years of building enterprise systems, we know how much work sits between a promising idea and a reliable production system. That is the experience our AI experts bring to client projects.”
              </blockquote>

              <div>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', display: 'block' }}>Jakub Stadnik</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Head of Delivery, Magnum Quality Assurance</span>
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
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>years in software delivery</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--brand-emerald)' }}>750+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>projects delivered</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0f172a' }}>600+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 600 }}>engineers</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0f172a' }}>100+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>clients across 13 countries</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--brand-emerald)' }}>95%</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-emerald)', fontWeight: 700 }}>of clients come back</div>
              </div>
            </div>
          </div>
        </section>

        {/* 48-Hour Demo Offer */}
        <section style={{ padding: '90px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            <div className="glass-card responsive-grid-demo" style={{
              padding: '36px',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, #ffffff 100%)',
              border: '2px solid var(--brand-green)',
              borderRadius: 'var(--radius-xl)'
            }}>
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>Rapid Proof-of-Concept</span>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                  Test Your AI Product Concept with a Demo Ready in 48 Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Have an idea for an AI product? We can help you assess its real potential before you invest further. Share the concept with us and, within one business day, we will prepare a focused demo that shows how the idea could work in practice.
                </p>
                <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px' }}>
                  Request a Demo in 48 hours →
                </Link>
              </div>

              <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Engineered Delivery Practices</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Check size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>AI Solutions Built on 19 Years Delivery</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <ShieldCheck size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>Mature Practices & Certified Security</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <TrendingUp size={18} color="var(--brand-green)" />
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>We Measure Value Before We Build</span>
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
                Why Companies Choose <span className="text-gradient">Magnum Quality Assurance</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <Zap size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>AI Solutions Built on Software Delivery Experience</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Our AI advice doesn't stop at the strategy level. Because we've spent 19 years shipping enterprise software, we know what it takes to get from a working prototype to something that runs reliably in production.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <ShieldCheck size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Mature Delivery Practices, Certified Partnerships</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Our work is supported by ISO 27001 certification, GDPR-aligned processes, and long-standing partnerships with AWS, Microsoft Azure, and Databricks. Security and governance are part of how we work from the start.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '12px', display: 'inline-flex', marginBottom: '20px' }}>
                  <TrendingUp size={26} color="var(--brand-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>We Measure Value Before We Build</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  If a use case is unlikely to pay off at your scale or with your data, we will say so and help you look for a stronger one. That is what ROI-focused means in practice.
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
                <span className="badge" style={{ marginBottom: '12px' }}>Latest Updates</span>
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
                  Business Insight · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  Vehicle-To-Grid (V2G): How Electric Vehicles Are Becoming Grid Assets
                </h3>
                <Link to="/blog" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Read More →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  Business Insight · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  UX as a Growth Driver in Asset and Wealth Management
                </h3>
                <Link to="/blog" style={{ color: 'var(--brand-emerald)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Read More →
                </Link>
              </div>

              <div className="glass-card" style={{ padding: '32px', background: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-emerald)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  Tech Insight · 2026
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  How a Unified Data Lake Reduces Regulatory, Operational & AI Risk in Finance
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
