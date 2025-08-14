// Structured Data (JSON-LD) generators for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mapema Softwares",
  "alternateName": "Mapema Software Solutions",
  "url": "https://mapemasoftwares.co.ke",
  "logo": "https://mapemasoftwares.co.ke/logo.png",
  "image": "https://mapemasoftwares.co.ke/og-image.jpg",
  "description": "Professional software development, web design, mobile apps, and digital marketing services in Kenya. Custom technology solutions for businesses across all counties.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nairobi",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "addressCountry": "KE"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+254704186906",
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"],
      "areaServed": "KE"
    }
  ],
  "sameAs": [
    "https://facebook.com/mapema.softwares",
    "https://twitter.com/mapema_softwares",
    "https://instagram.com/mapema.softwares",
    "https://linkedin.com/company/mapema-softwares"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Website Development",
        "description": "Custom website design and development services"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "iOS and Android mobile application development"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "SEO, social media marketing, and online advertising services"
      }
    }
  ]
});

export const generateLocalBusinessSchema = (county: string, subcounty?: string) => {
  const areaServed = subcounty ? `${subcounty}, ${county} County` : `${county} County`;
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mapemasoftwares.co.ke/locations/${county.toLowerCase().replace(/\s+/g, '-')}${subcounty ? `/${subcounty.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
    "name": "Mapema Softwares",
    "image": "https://mapemasoftwares.co.ke/og-image.jpg",
    "description": `Professional software development, web design, mobile apps, and digital marketing services in ${areaServed}, Kenya.`,
    "url": `https://mapemasoftwares.co.ke/locations/${county.toLowerCase().replace(/\s+/g, '-')}${subcounty ? `/${subcounty.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
    "telephone": "+254704186906",
    "email": "info@mapemasoftwares.co.ke",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": county,
      "addressCountry": "Kenya"
    },
    "areaServed": {
      "@type": "State",
      "name": areaServed
    },
    "serviceType": [
      "Software Development",
      "Web Development", 
      "Mobile App Development",
      "Digital Marketing",
      "E-commerce Development",
      "Custom Software Solutions",
      "ERP Systems",
      "CRM Systems"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "KES, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, M-Pesa",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00"
  };
};

export const generateServiceSchema = (serviceName: string, description: string, county?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Mapema Softwares",
    "url": "https://mapemasoftwares.co.ke"
  },
  "areaServed": county ? {
    "@type": "State", 
    "name": `${county} County, Kenya`
  } : {
    "@type": "Country",
    "name": "Kenya"
  },
  "serviceType": serviceName,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "KES",
    "description": `Professional ${serviceName.toLowerCase()} services${county ? ` in ${county} County` : ' in Kenya'}`
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mapema Softwares",
  "alternateName": "Mapema Software Solutions",
  "url": "https://mapemasoftwares.co.ke",
  "description": "Professional software development, web design, mobile apps, and digital marketing services across Kenya",
  "publisher": {
    "@type": "Organization",
    "name": "Mapema Softwares"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mapemasoftwares.co.ke/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});