import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Database,
  Cloud,
  Users,
  TrendingUp,
  ArrowRight
} from '../components/ui/Icons';
import home3Img from '../assets/home/home3.png';

interface GenericServicePageProps {
  title: string;
  category: string;
  path?: string;
}

export const GenericServicePage: React.FC<GenericServicePageProps> = ({ title, category }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const capabilitiesList = [
    {
      title: 'Domain Architecture & Roadmap',
      desc: 'In-depth assessment of existing tech stacks, data readiness, security boundaries, and step-by-step engineering blueprints.',
      icon: <Zap size={26} color="var(--brand-green)" />
    },
    {
      title: 'Senior Engineering Delivery',
      desc: 'Dedicated senior software engineers, QA automation leads, and cloud architects working directly within your workflows.',
      icon: <Users size={26} color="var(--brand-green)" />
    },
    {
      title: 'Automated QA & Quality Assurance',
      desc: 'Rigorous unit, integration, performance, and accessibility (A11y WCAG 2.1) automated testing baked into CI/CD pipelines.',
      icon: <ShieldCheck size={26} color="var(--brand-green)" />
    },
    {
      title: 'Cloud & Infrastructure Modernization',
      desc: 'Cloud-native refactoring, containerization (Kubernetes/Docker), serverless setup, and microservices decoupling.',
      icon: <Cloud size={26} color="var(--brand-green)" />
    },
    {
      title: 'Enterprise Data & Analytics',
      desc: 'Data engineering, data warehouse migration, RAG AI vector stores, and real-time operational dashboards.',
      icon: <Database size={26} color="var(--brand-green)" />
    },
    {
      title: 'Continuous Support & SLA Operations',
      desc: 'Proactive 24/7 system monitoring, performance tuning, security patching, and guaranteed uptime SLAs.',
      icon: <TrendingUp size={26} color="var(--brand-green)" />
    }
  ];

  const faqs = [
    {
      q: `How fast can Magnum Quality Assurance kick off a ${title} engagement?`,
      a: `We typically onboard senior engineers or initiate project discovery within 5 to 10 business days following scope alignment and NDA execution.`
    },
    {
      q: `How do you guarantee quality and security during ${title} delivery?`,
      a: `All our processes are ISO 27001 certified and GDPR-compliant. We apply automated test suites, static code analysis, and accessibility checks on every pull request.`
    },
    {
      q: `Can we integrate Magnum QA specialists into our existing team?`,
      a: `Yes. We provide both fully managed end-to-end project delivery and team augmentation where our specialists join your daily Standups, Jira boards, and Slack channels.`
    },
    {
      q: `What pricing models do you offer for ${title}?`,
      a: `We offer flexible Time & Materials (T&M) rates, dedicated monthly team retainers, and fixed-price milestone delivery for defined project scopes.`
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>
        
        {/* Dynamic Enhanced Page Hero */}
        <section style={{
          padding: '90px 0 70px 0',
          background: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Content */}
              <div data-aos="fade-up">
                {/* Breadcrumbs */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
                  <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
                  <span>/</span>
                  <span>{category}</span>
                  <span>/</span>
                  <span style={{ color: 'var(--brand-green)', fontWeight: 700 }}>{title}</span>
                </div>

                <span className="badge" style={{ marginBottom: '16px' }}>
                  <Sparkles size={16} color="var(--brand-green)" /> Enterprise {category} Division
                </span>

                <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '20px', lineHeight: 1.15 }}>
                  {title} <span className="text-gradient">Solutions & Engineering</span>
                </h1>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  At <strong style={{ color: '#0f172a' }}>Magnum Quality Assurance</strong>, we help enterprise organizations design, build, and optimize scalable <strong style={{ color: '#0f172a' }}>{title.toLowerCase()}</strong> solutions. Leveraging over 19 years of software engineering expertise and ISO 27001 certified delivery standards, we ensure your products perform with unmatched reliability and security.
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                  Whether you are replacing legacy infrastructure, expanding your engineering velocity, or instituting continuous QA standards, our EU-based senior teams deliver measurable ROI focused on your strategic business outcomes.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="#contact" className="btn-primary" style={{ padding: '14px 28px' }}>
                    Discuss {title} Project <ArrowRight size={18} />
                  </a>
                  <Link to="/services/software-development/qa-services" className="btn-secondary" style={{ padding: '14px 28px' }}>
                    Explore Flagship QA Suite
                  </Link>
                </div>
              </div>

              {/* Right Column: home3.png Image filling empty space */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-left">
                <img
                  src={home3Img}
                  alt={`${title} Solutions`}
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    maxHeight: '400px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Key Metrics Bar */}
        <section style={{ padding: '40px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="responsive-stats-grid">
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>19+ Years</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Software Delivery Track Record</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-green)' }}>600+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Senior EU Engineers</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>ISO 27001</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Security Certified</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-green)' }}>99.9% SLA</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Production Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Capabilities Matrix (6 Modules) */}
        <section style={{ padding: '90px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px auto' }}>
              <span className="badge" style={{ marginBottom: '14px' }}>Capabilities</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                Comprehensive <span className="text-gradient">{title}</span> Services
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '12px' }}>
                Engineered for speed, security, and seamless integration into enterprise ecosystems.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {capabilitiesList.map((cap, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '32px', background: '#ffffff' }} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
                    {cap.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{cap.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>{cap.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-green)', fontWeight: 600, fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} color="var(--brand-green)" /> Deliverable Validated
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4-Stage Delivery Process */}
        <section style={{ padding: '90px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }} data-aos="fade-up">
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px auto' }}>
              <span className="badge" style={{ marginBottom: '14px' }}>Execution Blueprint</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                How We Deliver <span className="text-gradient">{title}</span> Excellence
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { step: '01', title: 'Audit & Discovery', text: 'We analyze your requirements, tech stack, data pipelines, and compliance prerequisites.' },
                { step: '02', title: 'Architecture & PoC', text: 'We design clear solution blueprints, security boundaries, and rapid 48-hour prototypes.' },
                { step: '03', title: 'Agile Engineering & QA', text: 'Senior engineers build clean code supported by continuous automated test coverage.' },
                { step: '04', title: 'Deployment & SLA', text: 'Zero-downtime deployment, performance tuning, and 24/7 operational maintenance.' }
              ].map((s, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '32px', background: '#ffffff', position: 'relative' }} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--brand-green)', opacity: 0.8, marginBottom: '12px' }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Frequently Asked Questions (FAQ Accordion) */}
        <section style={{ padding: '90px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span className="badge" style={{ marginBottom: '14px' }}>FAQ</span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="glass-card" 
                      style={{ padding: '24px', background: '#ffffff', cursor: 'pointer' }}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>{faq.q}</h3>
                        <span style={{ fontSize: '1.2rem', color: 'var(--brand-green)', fontWeight: 700 }}>{isOpen ? '−' : '+'}</span>
                      </div>

                      {isOpen && (
                        <p style={{ marginTop: '14px', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65, paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div id="contact" data-aos="fade-up">
          <ContactForm />
        </div>

      </main>

      <Footer />
    </div>
  );
};
