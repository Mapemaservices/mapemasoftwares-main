import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import SEOHead from '@/components/SEO/SEOHead';
import { kenyaCounties } from '@/data/locations';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/utils/structuredData';
import { MapPin, Building, Users, Phone, Mail } from 'lucide-react';

const LocationsIndex = () => {
  const pageTitle = 'Service Locations - Software Development Across Kenya | Mapema Softwares';
  const pageDescription = 'Professional software development, web design, mobile apps, and digital marketing services available across all 47 counties in Kenya. Find technology solutions in your area.';
  const keywords = [
    'software development Kenya',
    'web development all counties Kenya',
    'mobile app development Kenya',
    'digital marketing services Kenya',
    'IT services Kenya counties',
    'technology solutions Kenya',
    'custom software Kenya',
    'website design Kenya locations'
  ];
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://mapemasoftwares.co.ke' },
    { name: 'Locations', url: 'https://mapemasoftwares.co.ke/locations' }
  ];

  const structuredData = [
    generateOrganizationSchema(),
    generateBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl="https://mapemasoftwares.co.ke/locations"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background/95 to-background/90">
            <div className="container mx-auto px-4">
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Locations</span>
              </nav>

              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Technology Services <span className="text-gradient">Across Kenya</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professional software development, web design, mobile apps, and digital marketing services 
                  available in all 47 counties across Kenya. Find expert technology solutions in your area.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="card-modern text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">47</div>
                    <div className="text-muted-foreground">Counties Served</div>
                  </div>
                  <div className="card-modern text-center">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">290+</div>
                    <div className="text-muted-foreground">Subcounties Covered</div>
                  </div>
                  <div className="card-modern text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+254704186906"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +254 704 186 906
                  </a>
                  <a
                    href="mailto:info@mapemasoftwares.co.ke"
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Counties Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Counties We <span className="text-gradient">Serve</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Click on any county to view available services and subcounties in your area.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {kenyaCounties.map((county) => (
                  <Link
                    key={county.slug}
                    to={`/locations/${county.slug}`}
                    className="card-service group hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {county.name}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {county.capital}
                        </p>
                      </div>
                      <Building className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Population:</span>
                        <span className="font-medium text-foreground">{county.population.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subcounties:</span>
                        <span className="font-medium text-foreground">{county.subcounties.length}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-2">Main Industries:</div>
                      <div className="flex flex-wrap gap-1">
                        {county.mainIndustries.slice(0, 3).map((industry, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-primary font-medium text-sm group-hover:underline">
                      View Services →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Services Available <span className="text-gradient">Nationwide</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive technology solutions available in every county across Kenya.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-modern text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Website Development</h3>
                  <p className="text-muted-foreground text-sm">Professional websites for businesses in all counties</p>
                </div>
                
                <div className="card-modern text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Mobile Apps</h3>
                  <p className="text-muted-foreground text-sm">iOS and Android apps for nationwide reach</p>
                </div>
                
                <div className="card-modern text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Digital Marketing</h3>
                  <p className="text-muted-foreground text-sm">SEO and marketing for local visibility</p>
                </div>
                
                <div className="card-modern text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Custom Software</h3>
                  <p className="text-muted-foreground text-sm">Tailored solutions for every industry</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contact us today to discuss your technology needs. We serve businesses 
                across all counties in Kenya with professional IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254704186906"
                  className="btn-hero bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +254 704 186 906
                </a>
                <a
                  href="mailto:info@mapemasoftwares.co.ke"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingContactButton />
      </div>
    </>
  );
};

export default LocationsIndex;