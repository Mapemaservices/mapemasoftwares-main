import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Smartphone } from 'lucide-react';
import ContactModal from './ContactModal';


const FloatingContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Contact Buttons Horizontal Group */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex gap-4 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-large hover:shadow-glow transition-all duration-300 pulse-glow"
          aria-label="WhatsApp"
        >
          <Smartphone className="w-6 h-6" />
        </a>
        <a
          href="tel:0798362654"
          className="bg-blue-500 text-white p-4 rounded-full shadow-large hover:shadow-glow transition-all duration-300 pulse-glow"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-accent text-white p-4 rounded-full shadow-large hover:shadow-glow transition-all duration-300 pulse-glow"
          aria-label="Contact Us"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingContactButton;