import React, { useState, useEffect } from 'react';

import client1 from '../../assets/clients/01.png';
import client2 from '../../assets/clients/02.png';
import client3 from '../../assets/clients/03.png';
import client4 from '../../assets/clients/04.png';
import client5 from '../../assets/clients/05.png';
import client6 from '../../assets/clients/06.png';
import client7 from '../../assets/clients/07.png';
import client8 from '../../assets/clients/08.png';

const clientLogos = [
  { id: 1, src: client1, alt: 'Client Partner 1' },
  { id: 2, src: client2, alt: 'Client Partner 2' },
  { id: 3, src: client3, alt: 'Client Partner 3' },
  { id: 4, src: client4, alt: 'Client Partner 4' },
  { id: 5, src: client5, alt: 'Client Partner 5' },
  { id: 6, src: client6, alt: 'Client Partner 6' },
  { id: 7, src: client7, alt: 'Client Partner 7' },
  { id: 8, src: client8, alt: 'Client Partner 8' },
];

export const ClientLogosCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, clientLogos.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const stepPercent = 100 / visibleCount;

  return (
    <div style={{ padding: '28px 0', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 12px' }}>
        
        {/* Scalosoft Style Floating Pill Container */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            background: '#ffffff',
            borderRadius: '999px',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
            border: '1px solid var(--border-subtle)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Clients"
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '1.8rem',
              fontWeight: 300,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brand-emerald)';
              e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.background = 'none';
            }}
          >
            ‹
          </button>

          {/* Carousel Track Container */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                transform: `translateX(-${currentIndex * stepPercent}%)`,
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  style={{
                    flex: `0 0 ${stepPercent}%`,
                    minWidth: `${stepPercent}%`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 12px',
                    boxSizing: 'border-box'
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      maxHeight: '40px',
                      maxWidth: '130px',
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(20%) opacity(0.9)',
                      transition: 'filter 0.3s ease, transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(20%) opacity(0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Clients"
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '1.8rem',
              fontWeight: 300,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brand-emerald)';
              e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.background = 'none';
            }}
          >
            ›
          </button>

        </div>

      </div>
    </div>
  );
};
