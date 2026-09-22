import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { ClientLogosCarousel } from '../components/sections/ClientLogosCarousel';
import {
  Accessibility,
  Bot,
  Code,
  Database,
  Cloud,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Eye,
  Settings,
  FileText
} from '../components/ui/Icons';

import homeBg from '../assets/BG/home_bg.jpeg';
import home2Img from '../assets/home/home2.png';
import home3Img from '../assets/home/home3.png';

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

  // Types of Software Tests We Conduct (Scalo QA Test Types)
  const typesOfTests = [
    {
      title: 'Unit Tests',
      desc: 'We verify the correctness of the code in isolation to ensure component-level integrity.',
      icon: <Code size={28} />
    },
    {
      title: 'Integration Tests',
      desc: 'We ensure individual modules work together seamlessly and form a complete software product.',
      icon: <Settings size={28} />
    },
    {
      title: 'Functional Tests',
      desc: 'We identify and suggest missing or enhanced features based strictly on product requirements.',
      icon: <CheckCircle2 size={28} />
    },
    {
      title: 'Usability Tests',
      desc: 'We assess the app’s user-friendliness, UI layout, accessibility, and user goal achievement.',
      icon: <Eye size={28} />
    },
    {
      title: 'Compatibility Tests',
      desc: 'We check product compatibility across platforms, operating systems, browsers, and network setups.',
      icon: <Globe size={28} />
    },
    {
      title: 'Performance Tests',
      desc: 'We measure system speed, latency, database bottlenecks, and performance under realistic load.',
      icon: <Zap size={28} />
    },
    {
      title: 'Regression Tests',
      desc: 'We confirm that existing app features remain functional after adding new code or features.',
      icon: <RefreshCw size={28} />
    },
    {
      title: 'Acceptance Tests',
      desc: 'We validate product quality, business requirements, and satisfaction with actual end-users.',
      icon: <Award size={28} />
    },
    {
      title: 'QA Automation Tests',
      desc: 'We use automation tools (Playwright, Cypress, Selenium) to execute test suites and reduce manual effort.',
      icon: <Bot size={28} />
    },
    {
      title: 'Accessibility Testing (A11y)',
      desc: 'Screen reader audits (NVDA/JAWS/VoiceOver), keyboard focus checks, and WCAG 2.1 AA/AAA compliance.',
      icon: <Accessibility size={28} />
    },
    {
      title: 'Penetration & Security',
      desc: 'Ethical hacking, OWASP Top 10 vulnerability scanning, API security testing, and compliance protection.',
      icon: <ShieldCheck size={28} />
    }
  ];

  // Areas of Software Testing Services (ISO 25010 Quality Pillars)
  const areasOfTesting = [
    {
      title: 'Functional Sustainability',
      desc: 'Your product will work as intended, meeting user expectations through rigorous testing. Enjoy peace of mind knowing your software delivers value consistently.',
      icon: <CheckCircle2 size={26} />
    },
    {
      title: 'Performance Efficiency',
      desc: 'Experience a fast, efficient, scalable product that performs optimally in various conditions. Resolve performance issues before they impact user satisfaction.',
      icon: <Zap size={26} />
    },
    {
      title: 'Usability & Accessibility',
      desc: 'Delight your users with software that is easy to learn, operate, and access. Your product will be recognized as an inclusive, satisfying solution.',
      icon: <Accessibility size={26} />
    },
    {
      title: 'Security Protection',
      desc: 'Rest easy with reliable data protection, penetration testing, and activity tracking. Your software’s security will instill total confidence.',
      icon: <ShieldCheck size={26} />
    },
    {
      title: 'Multi-Platform Compatibility',
      desc: 'Integrate your system with others to avoid conflicts and enable information exchange. Improve efficiency and adaptability across your whole tech ecosystem.',
      icon: <Globe size={26} />
    },
    {
      title: 'Data Reliability',
      desc: 'Count on a solid and trustworthy system that performs well in various situations. Your software will demonstrate maturity and swift recovery.',
      icon: <Database size={26} />
    },
    {
      title: 'Maintainability',
      desc: 'Future-proof your software with a system that is easy to update and adapt. Benefit from a modular, reusable design that simplifies improvements.',
      icon: <Settings size={26} />
    },
    {
      title: 'Portability & Cloud Integration',
      desc: 'Run your software effortlessly across different platforms and environments. Enjoy a flexible, scalable solution on-premises or in the cloud.',
      icon: <Cloud size={26} />
    }
  ];

  // 4-Step Delivery Process
  const deliverySteps = [
    {
      step: '01',
      title: 'Goal Recognition & Test Planning',
      desc: 'We begin by getting to know your project inside out. We review your requirements, design a test plan, set clear criteria for quality, and select the best tools and techniques for testing.'
    },
    {
      step: '02',
      title: 'Setting Up the Testing Environment',
      desc: 'We prepare the test environment with essential components, methods, and conditions for testing. We also create detailed test cases and scenarios to cover all aspects of your software.'
    },
    {
      step: '03',
      title: 'Performing Tests & Reporting Results',
      desc: 'We execute various manual and automated tests to check if your software meets expectations and standards. We report any errors found and suggest actionable improvements.'
    },
    {
      step: '04',
      title: 'Quality-Integrated Delivery',
      desc: 'We embed quality assurance throughout your software lifecycle via CI/CD tools, ensuring continuous testing and delivery. We prioritize tasks per quality and business needs.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* Hero Section: Centered Minimalist Layout with Asset home_bg.jpeg as Full Background */}
        <section style={{
          position: 'relative',
          padding: '40px 0 60px 0',
          overflow: 'hidden',
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 80px)'
        }}>
          {/* Extremely light subtle overlay for crystal clear background visibility */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.15)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1360px', margin: '0 auto' }} data-aos="fade-up">
            
            {/* Main Centered Headline */}
            <h1 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.25,
              letterSpacing: '-1px',
              color: '#0f172a',
              marginBottom: '24px',
              width: '100%'
            }}>
              Unleash the Power of Quality with <br />
              <span className="text-gradient">Software Testing & QA Services by Magnum QA</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '860px',
              margin: '0 auto 36px auto'
            }}>
              Achieve the highest product quality with our QA services experts. Quality Assurance goes beyond code quality—it is paramount for crafting software that offers a superior user experience and reinforces the value of your product.
            </p>

            {/* Centered Pill Action CTA Button - End of Hero Section */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--gradient-brand)',
                color: '#ffffff',
                padding: '12px 14px 12px 28px',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '1.05rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(16,185,129,0.3)',
                transition: 'transform 0.2s ease, boxShadow 0.2s ease'
              }}>
                <span>Get a QA Consultation</span>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-emerald)'
                }}>
                  <ArrowRight size={20} color="var(--brand-emerald)" />
                </div>
              </Link>

              <Link to="/services/software-development/accessibility-testing" className="btn-secondary" style={{ borderRadius: '999px', padding: '14px 28px', fontSize: '1rem' }}>
                Explore Accessibility QA
              </Link>
            </div>

          </div>
        </section>

        {/* Client Logos Automatic Carousel between Hero & Secondary Hero */}
        <ClientLogosCarousel />

        {/* Secondary Hero Section: Achieve the Highest Product Quality with home2.png */}
        <section style={{ padding: '90px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
              
              {/* Left Column: Content */}
              <div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '20px' }}>
                  Achieve the Highest Product Quality with Our <span className="text-gradient">QA Services Experts</span>
                </h2>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                  Quality Assurance goes beyond just code quality and is paramount for crafting software that offers a superior user experience and reinforces the value of your product.
                </p>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Our software QA services experts have the skills and expertise to ensure that your new digital products meet your requirements, integrate well with your existing setup, and are highly user-friendly.
                </p>
              </div>

              {/* Right Column: Clean PNG Image without shadow or background border */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={home2Img}
                  alt="Achieve the Highest Product Quality with Our QA Services Experts"
                  style={{
                    width: '100%',
                    maxWidth: '560px',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Types of Software Tests We Conduct */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Types of Software Tests <span className="text-gradient">We Conduct</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our experienced test engineers utilize advanced methodologies and modern tooling to thoroughly test your software across every layer.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px'
            }}>
              {typesOfTests.map((test, index) => (
                <div key={index} className="glass-card" data-aos={index % 2 === 0 ? "flip-right" : "flip-left"} style={{
                  flex: '1 1 calc(25% - 21px)',
                  minWidth: '270px',
                  maxWidth: '340px',
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
                      {test.icon}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                      {test.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {test.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Can You Trust Magnum QA? */}
        <section style={{ padding: '90px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0f172a' }}>
                Why Can You Trust <span className="text-gradient">Magnum QA</span>?
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {[
                { title: 'Profound Expertise in QA Field', desc: 'Over 19 years dedicated strictly to quality engineering and software testing.' },
                { title: 'Over 60 Senior QA Engineers', desc: 'Battle-tested engineers, SDETs, and certified accessibility auditors on board.' },
                { title: 'Proven Best Practices', desc: 'Standardized workflows aligned with international ISTQB testing standards.' },
                { title: 'Performance-Driven Metrics', desc: 'Clear KPI tracking for code coverage, defect density, and release velocity.' },
                { title: 'Advanced Measurement (SQMS)', desc: 'Magnum Quality Management System inspired by the ISO 25010 framework.' }
              ].map((trust, i) => (
                <div key={i} className="glass-card" style={{
                  flex: '1 1 calc(33.333% - 24px)',
                  minWidth: '280px',
                  maxWidth: '340px',
                  padding: '28px',
                  background: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-emerald)', color: '#ffffff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.1rem' }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{trust.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{trust.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Areas of Software Testing Services (ISO 25010 Pillars) */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                Areas of Software <span className="text-gradient">Testing Services</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We offer tailored software quality assurance services that match your needs. Whether you need to test functionality, usability, security, or compatibility, we have the tools and expertise to help.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px'
            }}>
              {areasOfTesting.map((area, idx) => (
                <div key={idx} className="glass-card" data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"} style={{
                  flex: '1 1 calc(25% - 21px)',
                  minWidth: '260px',
                  maxWidth: '340px',
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  boxSizing: 'border-box'
                }}>
                  <div className="card-icon-badge">
                    {area.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{area.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{area.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* How We Deliver Software Testing & QA Services (2-Column Layout with home3.png - 100% Full Width) */}
        <section style={{ padding: '80px 0', background: '#ffffff', minHeight: '80vh', display: 'flex', alignItems: 'center' }} data-aos="fade-up">
          <div className="deliver-section-container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                How We Deliver <span className="text-gradient">Testing & QA Services</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                Our 4-step delivery model embeds quality assurance directly into your software engineering lifecycle.
              </p>
            </div>

            <div className="deliver-grid-2col">
              
              {/* Left Column: Image home3.png */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={home3Img}
                  alt="How We Deliver Software Testing & QA Services"
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    maxHeight: '65vh',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Right Column: 4 Delivery Steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {deliverySteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="glass-card"
                    style={{
                      padding: '20px 24px',
                      background: '#f8fafc',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{
                      fontSize: '1.3rem',
                      fontWeight: 900,
                      color: 'var(--brand-emerald)',
                      background: 'rgba(16,185,129,0.1)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      {stepItem.step}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                        {stepItem.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* Our Expertise & SQMS Quality System Quote */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            <div className="glass-card" style={{
              padding: '40px',
              background: '#ffffff',
              border: '2px solid var(--brand-green)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '960px',
              margin: '0 auto'
            }}>
              
              <blockquote style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.3rem)', fontWeight: 600, color: '#0f172a', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                “We are passionate about quality at Magnum QA. Our Quality Management System (SQMS) is inspired by the ISO 25010 framework, which defines quality as the alignment of a system with the needs of stakeholders. To ensure the best quality, we constantly grow our QA Engineers’ skills and confirm their competence through globally respected certifications such as ISTQB.”
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-emerald)', color: '#ffffff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  RC
                </div>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: '#0f172a', display: 'block' }}>Rafał Chwastek</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Software Solutions Architect, Magnum QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Strategies for Delivering Software Testing */}
        <section style={{ padding: '100px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Our Proven Strategies for <span className="text-gradient">Software Testing</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" data-aos="flip-right" data-aos-delay="100" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div className="card-icon-badge">
                  <CheckCircle2 size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Quality Control at Every Step</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  We believe quality is a continuous process throughout the development lifecycle. We implement quality control measures at each stage:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#0f172a' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Enforcing code coverage rules in automated builds</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Automated unit test creation & execution</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Automated test runs for CI/CD deployment</span>
                  </div>
                </div>
              </div>

              <div className="glass-card" data-aos="flip-up" data-aos-delay="200" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div className="card-icon-badge">
                  <FileText size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Test Scenarios Documentation</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  We document every test in clear test scenarios, describing how to conduct the test and what to verify.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#0f172a' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Functional & non-functional requirements</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Performance, security & reliability scenarios</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Tailored to your specific business goals</span>
                  </div>
                </div>
              </div>

              <div className="glass-card" data-aos="flip-left" data-aos-delay="300" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
                <div className="card-icon-badge">
                  <TrendingUp size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Quality Monitoring & Evaluation</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  We use metrics and key indicators to constantly evaluate system quality and optimize delivery.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#0f172a' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Real-time defect tracking & early fixes</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Time-to-market optimization</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={16} color="var(--brand-green)" />
                    <span>Clear quality metrics aligned with business ROI</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Client Testimonials Carousel */}
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
                What Our Clients <span className="text-gradient">Tell Us</span>
              </h2>
            </div>

            <TestimonialsCarousel testimonials={testimonialsData} />

          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

      </main>

      <Footer />
    </div>
  );
};
