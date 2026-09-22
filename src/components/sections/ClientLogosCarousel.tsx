import React from 'react';

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

// Duplicated logos array for seamless infinite linear marquee scroll
const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export const ClientLogosCarousel: React.FC = () => {
  return (
    <div style={{ padding: '28px 0', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Scalosoft Style Expanded Width Floating Pill Container - Infinite Auto Scroll (No Arrows/Borders/Shadows) */}
        <div 
          style={{
            background: '#ffffff',
            borderRadius: '999px',
            boxShadow: 'none',
            border: 'none',
            padding: '16px 24px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div className="infinite-carousel-track">
            {duplicatedLogos.map((logo, idx) => (
              <div key={idx} className="carousel-logo-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxHeight: '44px',
                    maxWidth: '140px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(20%) opacity(0.9)',
                    transition: 'filter 0.3s ease, transform 0.3s ease'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
