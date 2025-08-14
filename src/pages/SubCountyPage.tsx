import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import ServiceCard from '@/components/ServiceCard';
import SEOHead from '@/components/SEO/SEOHead';
import { services } from '@/data/services';
import { kenyaCounties, getLocationKeywords } from '@/data/locations';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/utils/structuredData';
import { MapPin, Phone, Mail, Building, Users, Star } from 'lucide-react';

const SubCountyPage = () => {
  const { countySlug, subcountySlug } = useParams();
  const county = kenyaCounties.find(c => c.slug === countySlug);
  const subcounty = county?.subcounties.find(sc => sc.slug === subcountySlug);

  if (!county || !subcounty) {
    return <div>Location not found</div>;
  }

  const pageTitle = `Technology Solutions in ${subcounty.name}, ${county.name} - Mapema Softwares`;
  const pageDescription = `Expert software development, website design, mobile app development, and digital marketing services in ${subcounty.name}, ${county.name} County. Professional IT solutions for local businesses.`;
  const keywords = getLocationKeywords(county.name, subcounty.name);
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://mapemasoftwares.co.ke' },
    { name: 'Locations', url: 'https://mapemasoftwares.co.ke/locations' },
    { name: county.name, url: `https://mapemasoftwares.co.ke/locations/${county.slug}` },
    { name: subcounty.name, url: `https://mapemasoftwares.co.ke/locations/${county.slug}/${subcounty.slug}` }
  ];

  const structuredData = [
    generateLocalBusinessSchema(county.name, subcounty.name),
    generateBreadcrumbSchema(breadcrumbs),
    generateServiceSchema('Software Development', `Custom software development services in ${subcounty.name}, ${county.name}`, county.name)
  ];

  const featuredServices = services.slice(0, 6);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={`https://mapemasoftwares.co.ke/locations/${county.slug}/${subcounty.slug}`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-background/95 to-background/90">
            <div className="container mx-auto px-4">
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/locations" className="hover:text-primary transition-colors">Locations</Link>
                <span>/</span>
                <Link to={`/locations/${county.slug}`} className="hover:text-primary transition-colors">{county.name}</Link>
                <span>/</span>
                <span className="text-foreground">{subcounty.name}</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Professional Tech Services in <span className="text-gradient">{subcounty.name}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Leading software development, web design, mobile apps, and digital marketing services 
                    in {subcounty.name}, {county.name} County. Transforming local businesses with cutting-edge technology.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{county.name} County</div>
                        <div className="text-sm text-muted-foreground">County</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{subcounty.name}</div>
                        <div className="text-sm text-muted-foreground">Subcounty</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+254704186906"
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: +254 704 186 906
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

                <div className="card-modern">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Local Expertise in {subcounty.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                        <p className="text-muted-foreground text-sm">Successfully serving businesses in {subcounty.name} and surrounding areas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Local Support</h4>
                        <p className="text-muted-foreground text-sm">On-site consultation and support services available in {subcounty.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Industry Knowledge</h4>
                        <p className="text-muted-foreground text-sm">Deep understanding of {county.name} County business landscape</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Custom Solutions</h4>
                        <p className="text-muted-foreground text-sm">Tailored technology solutions for local business needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Services in <span className="text-gradient">{subcounty.name}</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional technology solutions designed to help businesses in {subcounty.name}, {county.name} County thrive in the digital age.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to={`/locations/${county.slug}`}
                  className="btn-outline"
                >
                  View All Services in {county.name} County
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Businesses in {subcounty.name} Choose Mapema Softwares
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We understand the unique challenges and opportunities of doing business in {subcounty.name}, {county.name} County.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-modern text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Local Team</h3>
                  <p className="text-muted-foreground">
                    Our team understands the local market dynamics and business culture in {subcounty.name}.
                  </p>
                </div>
                
                <div className="card-modern text-center">
                  <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Successful projects completed for businesses across {county.name} County, including {subcounty.name}.
                  </p>
                </div>
                
                <div className="card-modern text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Quality Service</h3>
                  <p className="text-muted-foreground">
                    Committed to delivering high-quality technology solutions that drive business growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started in {subcounty.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contact our technology experts today for a free consultation and discover how we can help 
                your business in {subcounty.name}, {county.name} County succeed online.
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

export default SubCountyPage;