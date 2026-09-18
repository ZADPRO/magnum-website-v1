import React from 'react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { TestTypesSection } from '../components/sections/TestTypesSection';
import { AccessibilityQA } from '../components/sections/AccessibilityQA';
import { WhyTrustScalo } from '../components/sections/WhyTrustScalo';
import { QualityAreas } from '../components/sections/QualityAreas';
import { DeliveryProcess } from '../components/sections/DeliveryProcess';
import { TechStackSQMS } from '../components/sections/TechStackSQMS';
import { CaseStudies } from '../components/sections/CaseStudies';
import { ContactForm } from '../components/sections/ContactForm';
import { Footer } from '../components/layout/Footer';

export const QAServicesPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <TestTypesSection />
        <AccessibilityQA />
        <WhyTrustScalo />
        <QualityAreas />
        <DeliveryProcess />
        <TechStackSQMS />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
