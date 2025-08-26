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
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 7000); // auto-close after 7 seconds
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // PWA install prompt for mobile
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    }
  };

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
      <div className="min-h-screen pt-20 lg:pt-24">
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
        {showInstallBanner && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-4 z-50 flex flex-col items-center animate-fade-in">
            <span className="font-semibold mb-2">Install this app on your phone!</span>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
              onClick={handleInstallClick}
            >
              Add to Home Screen
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
