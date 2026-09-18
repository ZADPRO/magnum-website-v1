import React, { useState } from 'react';
import { PartyPopper } from '../ui/Icons';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    nda: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{
          padding: '48px',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          maxWidth: '960px',
          margin: '0 auto',
          background: '#ffffff',
          boxShadow: '0 25px 50px rgba(15,23,42,0.06)'
        }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px' }}>Schedule a Consultation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
              Ready to Elevate Your <span className="text-gradient">Product Quality?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Contact our QA leadership today to schedule a technical workshop or request a customized QA quotation.
            </p>
          </div>

          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '48px 24px',
              background: 'rgba(16,185,129,0.1)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #10b981'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <PartyPopper size={48} color="var(--brand-emerald)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Thank You for Reaching Out!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                Our Senior QA Director will review your project requirements and get back to you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              
              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    color: '#0f172a',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    color: '#0f172a',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    color: '#0f172a',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    color: '#0f172a',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Project Overview / QA Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your application, testing scope, desired automation tools, or accessibility goals..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    color: '#0f172a',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  id="nda"
                  checked={formData.nda}
                  onChange={e => setFormData({ ...formData, nda: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--brand-green)' }}
                />
                <label htmlFor="nda" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', cursor: 'pointer' }}>
                  I request a Non-Disclosure Agreement (NDA) before sharing detailed project documentation.
                </label>
              </div>

              <div style={{ gridColumn: '1 / -1', marginTop: '12px' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                  Send Consultation Request
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
