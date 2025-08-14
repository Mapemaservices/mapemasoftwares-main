import React from 'react';
// This page is SEO-optimized for all Kenyan counties.
// It dynamically generates meta tags, canonical URLs, and JSON-LD structured data for each county.
// All county and subcounty routes are included in the sitemap for Google crawling.
// To add more counties, update src/data/locations.ts.
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import ServiceCard from '@/components/ServiceCard';
import SEOHead from '@/components/SEO/SEOHead';
import { services } from '@/data/services';
import { kenyaCounties, getLocationKeywords } from '@/data/locations';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/utils/structuredData';
import { MapPin, Phone, Mail, Users, Building, TrendingUp } from 'lucide-react';

const CountyPage = () => {
  const { countySlug } = useParams();
  const county = kenyaCounties.find(c => c.slug === countySlug);

  if (!county) {
    return <div>County not found</div>;
  }

  const pageTitle = `Software Development & Digital Marketing Services in ${county.name} County`;
  const pageDescription = `Professional software development, web design, mobile apps, and digital marketing services in ${county.name} County, Kenya. Custom solutions for businesses in ${county.capital} and surrounding areas.`;
  const keywords = getLocationKeywords(county.name);
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://mapemasoftwares.co.ke' },
    { name: 'Locations', url: 'https://mapemasoftwares.co.ke/locations' },
    { name: county.name, url: `https://mapemasoftwares.co.ke/locations/${county.slug}` }
  ];

  const structuredData = [
    generateLocalBusinessSchema(county.name),
    generateBreadcrumbSchema(breadcrumbs),
    generateServiceSchema('Software Development', `Custom software development services in ${county.name} County`, county.name)
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={`https://mapemasoftwares.co.ke/locations/${county.slug}`}
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
                <Link to="/locations" className="hover:text-primary transition-colors">Locations</Link>
                <span>/</span>
                <span className="text-foreground">{county.name}</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Technology Solutions in <span className="text-gradient">{county.name} County</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Empowering businesses in {county.capital} and across {county.name} County with cutting-edge 
                    software development, web design, mobile apps, and digital marketing services.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{county.population.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Population</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{county.capital}</div>
                        <div className="text-sm text-muted-foreground">County Capital</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{county.mainIndustries[0]}</div>
                        <div className="text-sm text-muted-foreground">Main Industry</div>
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Mapema Softwares in {county.name}?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Local expertise with deep understanding of {county.name} County business needs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proven track record serving businesses in {county.capital} and surrounding areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Specialized solutions for {county.mainIndustries.join(', ')} industries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 support and maintenance services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Services in <span className="text-gradient">{county.name} County</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive technology solutions tailored for businesses in {county.capital} and across {county.name} County.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 9).map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Subcounties Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Areas We Serve in <span className="text-gradient">{county.name} County</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional technology services available across all subcounties in {county.name}.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {county.subcounties.map((subcounty) => (
                  <Link
                    key={subcounty.slug}
                    to={`/locations/${county.slug}/${subcounty.slug}`}
                    className="card-service text-center group hover:shadow-glow transition-all duration-300"
                  >
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {subcounty.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      View Services →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Business in {county.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get in touch with our {county.name} County technology experts for a free consultation 
                and custom quote for your project.
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

export default CountyPage;