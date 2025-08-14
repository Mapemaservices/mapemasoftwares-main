
import React from 'react';
import { Sparkles, Zap, Target, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/3 via-transparent to-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Modern Header */}
        <div className="text-center mb-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-lg rounded-full border border-primary/20 text-primary mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
              </div>
              <span className="text-lg font-bold">Our Premium Services</span>
              <Zap className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Ultra Modern Heading */}
          <h2 className="text-display font-black text-foreground mb-8 leading-tight">
            <span className="block">Comprehensive</span>
            <span className="block text-gradient-hero">Digital Solutions</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4">
              for Modern Businesses
            </span>
          </h2>
          
          {/* Enhanced Description */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl" />
            <p className="relative text-xl text-muted-foreground leading-relaxed px-8 py-6">
              From <span className="font-semibold text-primary">custom software development</span> to{' '}
              <span className="font-semibold text-accent">digital marketing excellence</span>, we offer{' '}
              <span className="font-bold text-foreground">30+ specialized services</span> designed to transform your business with cutting-edge technology solutions.
            </p>
          </div>

          {/* Service Categories Preview */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Development', 'Design', 'Marketing', 'Consulting'].map((category, index) => (
              <div key={index} className="card-glass px-6 py-3 hover-glow cursor-pointer group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {category}
                </span>
                <Target className="inline-block ml-2 w-4 h-4 text-accent group-hover:rotate-90 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Ultra Modern Services Grid */}
        <div className="relative">
          {/* Gradient Overlay for Scrollable Area */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          
          <div className="max-h-[900px] overflow-y-auto scrollbar-modern pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="fade-in-up stagger-animation"
                  style={{ '--index': index } as any}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ultra Premium Bottom CTA */}
        <div className="mt-20">
          <div className="card-modern text-center p-12 bg-gradient-to-br from-card via-primary/2 to-accent/2 border-2 border-primary/10 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gradient-primary rounded-2xl shadow-large group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Don't See What You{' '}
                <span className="text-gradient">Need?</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We specialize in <span className="font-semibold text-primary">custom solutions</span> tailored to your unique business requirements. 
                Let's collaborate to transform your innovative ideas into powerful digital realities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-hero group/cta"
                >
                  <span className="relative z-10 flex items-center">
                    <Target className="mr-3 w-6 h-6 group-hover/cta:rotate-90 transition-transform duration-300" />
                    Request Custom Solution
                    <ArrowRight className="ml-3 w-6 h-6 group-hover/cta:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
                
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline group/cta2"
                >
                  <span className="flex items-center">
                    <Zap className="mr-3 w-5 h-5 group-hover/cta2:rotate-12 transition-transform duration-300" />
                    Learn More About Us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
