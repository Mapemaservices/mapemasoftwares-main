import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400); // Wait for navigation/render
      setIsMenuOpen(false);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else {
        window.location.hash = `#${sectionId}`;
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-gradient-hero">
              Mapema Softwares
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/onboarding"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Onboarding
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a 
                href="tel:+254704186906" 
                className="flex items-center hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" />
                +254 704 186 906
              </a>
              <a 
                href="mailto:info@mapemasoftwares.co.ke" 
                className="flex items-center hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-1" />
                info@mapemasoftwares.co.ke
              </a>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-medium">
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Link
                to="/projects"
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/onboarding"
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Onboarding
              </Link>
              <div className="pt-4 border-t border-border/50">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a 
                    href="tel:+254704186906" 
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +254 704 186 906
                  </a>
                  <a 
                    href="mailto:info@mapemasoftwares.co.ke" 
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    info@mapemasoftwares.co.ke
                  </a>
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full mt-4"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;