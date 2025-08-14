
import React from 'react';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse float-premium" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000 float-premium" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl float-premium delay-500" />
          <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-primary-light/20 rounded-full blur-xl float-premium delay-700" />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-accent rotate-45 animate-pulse opacity-60" />
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-primary rounded-full animate-bounce opacity-50" />
        <div className="absolute top-1/3 left-32 w-3 h-3 bg-white rotate-45 animate-pulse opacity-70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white mb-10 hover:bg-white/20 transition-all duration-400 group cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
                <Star className="w-4 h-4 fill-accent text-accent" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Leading Technology Solutions Provider
              </span>
              <Sparkles className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          {/* Ultra Modern Heading */}
          <div className="mb-8">
            <h1 className="text-ultra-large font-black text-white mb-4 leading-none tracking-tight">
              <span className="block">Empowering</span>
              <span className="block text-gradient-hero">Businesses</span>
              <span className="block">with Digital</span>
              <span className="block bg-gradient-to-r from-accent via-accent-light to-orange-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
          </div>

          {/* Modern Subtitle */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
            <p className="relative text-xl sm:text-2xl lg:text-3xl text-white/95 font-light max-w-4xl mx-auto leading-relaxed">
              Transform your business with{' '}
              <span className="font-semibold text-accent">cutting-edge technology solutions</span>
              . From custom software development to digital marketing, we're your{' '}
              <span className="font-semibold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                trusted partner
              </span>{' '}
              in digital transformation.
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={scrollToServices}
              className="btn-hero group relative overflow-hidden min-w-[280px] text-lg font-bold"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Zap className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Explore Our Services
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glass min-w-[280px] text-lg font-semibold group"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Get Free Consultation
              </span>
            </Button>
          </div>

          {/* Ultra Modern Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Projects Delivered', icon: '🚀' },
              { number: '30+', label: 'Services Offered', icon: '⚡' },
              { number: '24/7', label: 'Support Available', icon: '🛡️' },
              { number: '99%', label: 'Client Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="card-glass text-center hover-lift group cursor-pointer"
                style={{ '--index': index } as any}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 text-glow">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ultra Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-white/70 text-sm font-medium">Scroll Down</div>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-2 h-4 bg-gradient-to-b from-accent to-accent-light rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
