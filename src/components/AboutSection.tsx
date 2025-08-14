import React from 'react';
import { CheckCircle, Users, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through innovative technology solutions that drive growth and success."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships through exceptional service and support."
    },
    {
      icon: Zap,
      title: "Innovation-First",
      description: "Staying ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge."
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Rigorous testing and quality assurance processes ensure reliable, scalable, and secure solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary mb-6">
              <span className="text-sm font-medium">About Mapema Softwares</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Technology Partner
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Mapema Softwares, we believe technology should empower, not complicate. Since our founding, 
              we've been dedicated to transforming businesses across Kenya and beyond with innovative digital solutions 
              that drive real results.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From startups to enterprises, we've delivered over 500 successful projects spanning custom software 
              development, mobile applications, e-commerce platforms, and comprehensive digital marketing strategies. 
              Our team of expert developers, designers, and consultants work closely with you to understand your 
              unique challenges and deliver solutions that exceed expectations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">500+ Successful Projects Delivered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">24/7 Technical Support & Maintenance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Expert Team of Certified Professionals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Cutting-Edge Technology Solutions</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4 shadow-soft">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
            Why Choose Mapema Softwares?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</div>
              <div className="text-muted-foreground text-sm">
                Consistently exceeding client expectations with quality solutions and exceptional service.
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Services Offered</div>
              <div className="text-muted-foreground text-sm">
                Comprehensive technology solutions under one roof, from development to marketing.
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Years Experience</div>
              <div className="text-muted-foreground text-sm">
                Deep industry expertise and proven track record of successful project delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;