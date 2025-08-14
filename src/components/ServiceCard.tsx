
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Service } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (open: boolean) => {
    setIsOpen(open);
    console.log(`Dropdown for ${service.title} is now`, open ? 'open' : 'closed');
  };
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Box;

  return (
    <Card className="card-service group interactive-card border-none">
  <Collapsible open={isOpen} onOpenChange={handleToggle}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative p-4 bg-gradient-primary rounded-xl shadow-medium group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Premium Service</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 pb-8">
            <div className="space-y-8">
              {/* Premium Description */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                <div className="pl-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Methods Section */}
              <div className="card-glass p-6 rounded-xl">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3 pulse-modern" />
                  How We Deliver Excellence
                </h4>
                <div className="grid gap-3">
                  {service.methods.map((method, index) => (
                    <div key={index} className="flex items-start group/item hover:bg-white/50 p-3 rounded-lg transition-colors duration-200">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium leading-relaxed">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Benefits Section */}
              <div className="card-glass p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent-light rounded-full mr-3 animate-pulse" />
                  Business Impact & Benefits
                </h4>
                <div className="grid gap-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start group/item hover:bg-white/50 p-3 rounded-lg transition-colors duration-200">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm text-muted-foreground font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium FAQs Section */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-success to-green-400 rounded-full mr-3 status-dot" />
                  Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="card-modern p-4 hover-lift cursor-pointer group/faq">
                      <h5 className="text-base font-bold text-foreground mb-2 group-hover/faq:text-primary transition-colors duration-200">
                        Q: {faq.question}
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A: {faq.answer}
                      </p>
                      <div className="absolute top-4 right-4 opacity-0 group-hover/faq:opacity-100 transition-opacity duration-200">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ultra Premium CTA */}
              <div className="pt-6 border-t border-gradient-to-r from-transparent via-border to-transparent">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full btn-primary text-base py-4 group/cta relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Sparkles className="mr-3 w-5 h-5 group-hover/cta:rotate-180 transition-transform duration-500" />
                    Get Custom Quote for {service.title}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/cta:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ServiceCard;
