import React, { useState, useEffect } from 'react';

export interface TestimonialItem {
  author: string;
  role: string;
  company: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Maximum step index (for 9 testimonials displaying 4 per row, max shift is length - 4 = 5)
  const maxIndex = Math.max(0, testimonials.length - 4);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '10px 0 30px 0' }}
    >
      {/* 4-Cards Slider Track */}
      <div 
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 26.5}%)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          gap: '24px'
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="glass-card testimonial-card-item"
            style={{
              padding: '28px',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(15,23,42,0.05)',
              border: idx === currentIndex ? '2px solid var(--brand-green)' : '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div>
              <div style={{ color: 'var(--brand-green)', marginBottom: '12px', display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                “{t.quote}”
              </p>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>{t.author}</strong>
              <span style={{ color: 'var(--brand-green)', fontSize: '0.8rem', fontWeight: 600 }}>{t.role} · {t.company}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls: Centered Dots & Arrows Below */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        
        {/* Centered Dots Pagination */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '999px',
                background: idx === currentIndex ? 'var(--brand-green)' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Centered Navigation Arrows */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid var(--border-subtle)',
              color: '#0f172a',
              fontSize: '1.3rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand-green)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            ‹
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--brand-green)',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.3rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(5,150,105,0.3)',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ›
          </button>
        </div>

      </div>
    </div>
  );
};
