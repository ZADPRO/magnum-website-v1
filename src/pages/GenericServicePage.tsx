import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Link } from '../router/RouterContext';

interface GenericServicePageProps {
  title: string;
  category: string;
  path?: string;
}

export const GenericServicePage: React.FC<GenericServicePageProps> = ({ title, category }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>
        
        {/* Page Hero */}
        <section style={{ padding: '80px 0 60px 0', background: 'var(--gradient-glow)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
              <Link to="/services/software-development/qa-services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-muted)' }}>{category}</span>
              <span>/</span>
              <span style={{ color: 'var(--brand-emerald)', fontWeight: 600 }}>{title}</span>
            </div>

            <div style={{ maxWidth: '800px' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>Magnum QA {category} Services</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                {title} <span className="text-gradient">Solutions</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Accelerate your digital transformation with Magnum Quality Assurance’s enterprise-grade {title.toLowerCase()} engineering. Our certified domain experts deliver tailored architecture, robust execution, and seamless integration.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#contact" className="btn-primary">
                  Discuss {title} Project
                </a>
                <Link to="/services/software-development/qa-services" className="btn-secondary">
                  Explore QA Services
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Capabilities Overview */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                Key Capabilities & Deliverables
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Structured methodology designed for scalability, security, and high performance.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { name: 'Strategic Roadmap & Design', desc: 'Comprehensive domain assessment, technical architecture specification, and clear execution milestones.' },
                { name: 'Senior Engineering Delivery', desc: 'Dedicated senior engineers trained in modern tech stacks, CI/CD pipelines, and Agile practices.' },
                { name: 'Quality & Security Compliance', desc: 'ISO 25010 standard quality validation, security auditing, and continuous regression testing.' },
                { name: 'Scalable Operations', desc: 'Seamless system integration, containerized deployment, and sub-second performance optimization.' }
              ].map((cap, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '28px', background: '#ffffff' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '16px' }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{cap.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cap.desc}</p>
                </div>
              ))}
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
