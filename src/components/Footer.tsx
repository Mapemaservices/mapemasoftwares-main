import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = `#${sectionId}`;
      }
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Mapema Softwares
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. From custom software development 
              to comprehensive digital marketing, we're your trusted technology partner.
            </p>
            
            <div className="space-y-3">
              <a 
                href="tel:+254704186906" 
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                +254 704 186 906
              </a>
              <a 
                href="mailto:info@mapemasoftwares.co.ke" 
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                info@mapemasoftwares.co.ke
              </a>
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-3" />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Website Development</li>
              <li className="text-white/80">Mobile App Development</li>
              <li className="text-white/80">E-commerce Solutions</li>
              <li className="text-white/80">Digital Marketing</li>
              <li className="text-white/80">Custom Software</li>
              <li className="text-white/80">ERP Systems</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a
                href="https://facebook.com/mapema.softwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mapema_softwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mapema.softwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mapema-softwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254704186906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            
            <div className="text-white/80 text-sm text-center sm:text-right">
              <p>&copy; 2024 Mapema Softwares. All rights reserved.</p>
              <p className="mt-1">Proudly serving businesses across Kenya and beyond.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;