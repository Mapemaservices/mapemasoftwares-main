import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Smartphone, UserPlus } from 'lucide-react';
import ContactModal from './ContactModal';
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();
  return (
    <>
      {/* Floating Contact Buttons Horizontal Group */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex gap-4 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
  {/* Only chat and onboarding buttons remain */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-accent text-white p-4 rounded-full shadow-large hover:shadow-glow transition-all duration-300 pulse-glow"
          aria-label="Contact Us"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate('/onboarding')}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-large hover:shadow-glow transition-all duration-300 pulse-glow flex items-center gap-2"
          aria-label="Client Onboarding"
        >
          <UserPlus className="w-6 h-6" />
          <span className="font-semibold">Onboarding</span>
        </button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingContactButton;