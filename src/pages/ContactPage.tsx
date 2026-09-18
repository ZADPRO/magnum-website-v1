import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import {
  Globe,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles
} from '../components/ui/Icons';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <main style={{ flex: 1 }}>
        
        {/* Contact Hero Banner */}
        <section style={{
          padding: '90px 0 70px 0',
          background: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
              <span className="badge" style={{ marginBottom: '16px' }}>
                <Sparkles size={16} color="var(--brand-green)" /> Get In Touch
              </span>

              <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', color: '#0f172a' }}>
                Let's Discuss Your <span className="text-gradient">Software & QA Goals</span>
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                Whether you need dedicated QA engineers, automated accessibility audits, AI consulting, or custom software development — our senior engineering team is ready to assist. <strong>We respond within 1 business day.</strong>
              </p>

              {/* Guarantees Bar */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={18} color="var(--brand-green)" /> 24-Hour Initial Consultation
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={18} color="var(--brand-green)" /> Strict NDA Protected
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={18} color="var(--brand-green)" /> 48-Hour Demo Available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Office Locations Grid */}
        <section style={{ padding: '80px 0', background: '#ffffff' }} data-aos="fade-up">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
              <span className="badge" style={{ marginBottom: '14px' }}>Global Presence</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
                Our Delivery Hubs & <span className="text-gradient">Regional Offices</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
              
              <div className="glass-card" style={{ padding: '32px' }} data-aos="fade-up" data-aos-delay="100">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Globe size={24} color="var(--brand-green)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Zurich, Switzerland</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  DACH Regional HQ & Executive Engineering Consulting.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                  📍 Bahnhofstrasse 45, 8001 Zürich<br />
                  ✉️ swiss@magnumqa.com
                </div>
              </div>

              <div className="glass-card" style={{ padding: '32px' }} data-aos="fade-up" data-aos-delay="200">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Globe size={24} color="var(--brand-green)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Warsaw, Poland</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Primary EU Delivery Center & R&D Hub (400+ Engineers).
                </p>
                <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                  📍 Aleje Jerozolimskie 180, Warsaw<br />
                  ✉️ warsaw@magnumqa.com
                </div>
              </div>

              <div className="glass-card" style={{ padding: '32px' }} data-aos="fade-up" data-aos-delay="300">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Globe size={24} color="var(--brand-green)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Frankfurt, Germany</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Central European Enterprise & Automotive Division.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                  📍 Mainzer Landstraße 50, Frankfurt<br />
                  ✉️ de@magnumqa.com
                </div>
              </div>

              <div className="glass-card" style={{ padding: '32px' }} data-aos="fade-up" data-aos-delay="400">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Globe size={24} color="var(--brand-green)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>New York, USA</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  North American Client Success & FinTech Practice.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                  📍 500 5th Avenue, New York, NY<br />
                  ✉️ usa@magnumqa.com
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{ padding: '60px 0 90px 0', background: 'var(--bg-secondary)' }} data-aos="fade-up">
          <ContactForm />
        </section>

      </main>

      <Footer />
    </div>
  );
};
