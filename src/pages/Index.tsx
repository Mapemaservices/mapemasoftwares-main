import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import PopupCard from '@/components/PopupCard';
import SEOHead from '@/components/SEO/SEOHead';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/utils/structuredData';

const Index = () => {
  const structuredData = [generateOrganizationSchema(), generateWebsiteSchema()];
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 7000); // auto-close after 7 seconds
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <SEOHead
        title="Mapema Softwares - Professional Software Development & Digital Marketing in Kenya"
        description="Leading software development, web design, mobile apps, and digital marketing services across Kenya. Custom technology solutions for businesses in all 47 counties."
        keywords={[
          'software development Kenya',
          'web development Kenya',
          'mobile app development Kenya',
          'digital marketing Kenya',
          'custom software Kenya',
          'website design Kenya',
          'IT services Kenya',
          'technology solutions Kenya'
        ]}
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingContactButton />
        <PopupCard
          open={showPopup}
          onClose={() => setShowPopup(false)}
          title="Welcome to Mapema Softwares!"
        >
          <p className="text-lg text-center text-muted-foreground">Empowering your business with beautiful digital solutions. 🚀</p>
        </PopupCard>
      </div>
    </>
  );
};

export default Index;
