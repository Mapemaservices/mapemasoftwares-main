export interface Service {
  id: string;
  title: string;
  description: string;
  methods: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "website-design",
    title: "Website Design & Development",
    description: "Professional, responsive websites tailored to your business needs with modern design and optimal performance.",
    methods: [
      "Custom HTML/CSS/JavaScript development",
      "React.js and Next.js frameworks",
      "WordPress and CMS solutions",
      "Mobile-first responsive design",
      "SEO optimization and performance tuning"
    ],
    benefits: [
      "Establish strong online presence",
      "Attract and convert more customers",
      "24/7 business representation",
      "Improved credibility and trust",
      "Better search engine visibility"
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "Typically 2-6 weeks depending on complexity and features required."
      },
      {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer ongoing maintenance packages to keep your site updated and secure."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are built with mobile-first responsive design."
      }
    ],
    icon: "Globe"
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android to engage customers on-the-go.",
    methods: [
      "React Native cross-platform development",
      "Flutter framework implementation",
      "Native iOS (Swift) and Android (Kotlin)",
      "Progressive Web Apps (PWAs)",
      "App Store optimization and deployment"
    ],
    benefits: [
      "Direct customer engagement",
      "Increased brand loyalty",
      "Push notification marketing",
      "Offline functionality",
      "Enhanced user experience"
    ],
    faqs: [
      {
        question: "Which platforms do you develop for?",
        answer: "We develop for both iOS and Android, plus web-based progressive apps."
      },
      {
        question: "How much does app development cost?",
        answer: "Costs vary based on features and complexity. We provide detailed quotes after requirement analysis."
      },
      {
        question: "Do you help with app store submission?",
        answer: "Yes, we handle the entire submission process for both App Store and Google Play."
      }
    ],
    icon: "Smartphone"
  },
  {
    id: "ecommerce",
    title: "E-commerce Store Setup",
    description: "Complete online store solutions with payment integration, inventory management, and sales analytics.",
    methods: [
      "Shopify and WooCommerce platforms",
      "Custom e-commerce development",
      "Payment gateway integration (M-Pesa, PayPal, Stripe)",
      "Inventory management systems",
      "Multi-vendor marketplace setup"
    ],
    benefits: [
      "Expand market reach globally",
      "24/7 sales generation",
      "Automated order processing",
      "Real-time inventory tracking",
      "Customer behavior analytics"
    ],
    faqs: [
      {
        question: "Which payment methods can you integrate?",
        answer: "We integrate M-Pesa, credit cards, PayPal, Stripe, and other local payment solutions."
      },
      {
        question: "Can you migrate my existing store?",
        answer: "Yes, we can migrate from any platform while preserving your data and SEO rankings."
      },
      {
        question: "Do you provide training on store management?",
        answer: "Yes, we provide comprehensive training on managing your online store."
      }
    ],
    icon: "ShoppingCart"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business processes and requirements.",
    methods: [
      "Requirements analysis and planning",
      "Agile development methodology",
      "Full-stack development (MERN, LAMP)",
      "Database design and optimization",
      "Quality assurance and testing"
    ],
    benefits: [
      "Streamlined business processes",
      "Increased operational efficiency",
      "Competitive advantage",
      "Scalable solutions",
      "Cost reduction over time"
    ],
    faqs: [
      {
        question: "How do you ensure software quality?",
        answer: "We follow rigorous testing protocols and quality assurance processes throughout development."
      },
      {
        question: "What technologies do you use?",
        answer: "We use modern tech stacks including React, Node.js, Python, PHP, and cloud platforms."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer maintenance and support packages to keep your software updated."
      }
    ],
    icon: "Code"
  },
  {
    id: "erp-systems",
    title: "ERP Systems",
    description: "Enterprise Resource Planning solutions to integrate and manage your business operations efficiently.",
    methods: [
      "Odoo ERP implementation and customization",
      "SAP Business One deployment",
      "Custom ERP development",
      "Data migration and integration",
      "User training and support"
    ],
    benefits: [
      "Unified business operations",
      "Real-time data visibility",
      "Improved decision making",
      "Reduced operational costs",
      "Enhanced productivity"
    ],
    faqs: [
      {
        question: "Which ERP systems do you work with?",
        answer: "We specialize in Odoo, SAP Business One, and custom ERP solutions."
      },
      {
        question: "How long does ERP implementation take?",
        answer: "Implementation typically takes 3-12 months depending on business size and complexity."
      },
      {
        question: "Can you customize ERP features?",
        answer: "Yes, we customize ERP systems to match your specific business processes."
      }
    ],
    icon: "Building"
  },
  {
    id: "crm-systems",
    title: "CRM Systems",
    description: "Customer Relationship Management solutions to track leads, manage customers, and boost sales.",
    methods: [
      "Salesforce implementation",
      "HubSpot CRM setup",
      "Custom CRM development",
      "Lead management automation",
      "Sales pipeline optimization"
    ],
    benefits: [
      "Better customer relationships",
      "Increased sales conversion",
      "Automated follow-ups",
      "Detailed customer insights",
      "Improved team collaboration"
    ],
    faqs: [
      {
        question: "Which CRM platforms do you recommend?",
        answer: "We recommend HubSpot, Salesforce, or custom solutions based on your needs."
      },
      {
        question: "Can you integrate CRM with existing tools?",
        answer: "Yes, we integrate CRMs with email, accounting, and other business tools."
      },
      {
        question: "Do you provide CRM training?",
        answer: "Yes, we provide comprehensive training for your team on CRM usage."
      }
    ],
    icon: "Users"
  },
  {
    id: "pos-inventory",
    title: "POS & Inventory Systems",
    description: "Point of Sale and inventory management systems for retail and service businesses.",
    methods: [
      "Cloud-based POS systems",
      "Barcode and QR code integration",
      "Real-time inventory tracking",
      "Multi-location management",
      "Sales reporting and analytics"
    ],
    benefits: [
      "Faster checkout process",
      "Accurate inventory tracking",
      "Reduced stock-outs",
      "Better sales insights",
      "Improved customer experience"
    ],
    faqs: [
      {
        question: "Can the POS work offline?",
        answer: "Yes, our POS systems work offline and sync when internet is restored."
      },
      {
        question: "Does it integrate with accounting software?",
        answer: "Yes, we integrate with QuickBooks, Sage, and other accounting platforms."
      },
      {
        question: "Can I manage multiple stores?",
        answer: "Yes, our solutions support multi-location inventory and sales management."
      }
    ],
    icon: "CreditCard"
  },
  {
    id: "school-management",
    title: "School Management Systems",
    description: "Comprehensive school administration software for student records, fees, and academic management.",
    methods: [
      "Student information systems",
      "Fee management and payment tracking",
      "Academic records and transcripts",
      "Teacher and staff management",
      "Parent portal and communication"
    ],
    benefits: [
      "Streamlined school operations",
      "Improved parent communication",
      "Automated fee collection",
      "Better academic tracking",
      "Reduced paperwork"
    ],
    faqs: [
      {
        question: "Can parents access student information?",
        answer: "Yes, we provide parent portals for accessing grades, fees, and school updates."
      },
      {
        question: "Does it handle fee payments?",
        answer: "Yes, integrated with M-Pesa and bank payments for easy fee collection."
      },
      {
        question: "Can it generate report cards?",
        answer: "Yes, automatic generation of transcripts, report cards, and certificates."
      }
    ],
    icon: "GraduationCap"
  },
  {
    id: "lms",
    title: "Learning Management Systems (LMS)",
    description: "Online learning platforms for course delivery, student tracking, and educational content management.",
    methods: [
      "Moodle LMS customization",
      "Custom LMS development",
      "Video streaming integration",
      "Assessment and quiz tools",
      "Certification and badges"
    ],
    benefits: [
      "Remote learning capabilities",
      "Scalable course delivery",
      "Automated assessments",
      "Progress tracking",
      "Cost-effective training"
    ],
    faqs: [
      {
        question: "Can students access courses on mobile?",
        answer: "Yes, our LMS platforms are fully mobile-responsive for any device."
      },
      {
        question: "Does it support video content?",
        answer: "Yes, with integrated video streaming and interactive content features."
      },
      {
        question: "Can it issue certificates?",
        answer: "Yes, automatic certificate generation upon course completion."
      }
    ],
    icon: "BookOpen"
  },
  {
    id: "real-estate",
    title: "Real Estate Listing Platforms",
    description: "Property listing and management platforms for real estate agencies and property developers.",
    methods: [
      "Property listing and search",
      "Virtual tours and galleries",
      "Lead generation and CRM",
      "Payment and booking systems",
      "Agent management tools"
    ],
    benefits: [
      "Increased property visibility",
      "Better lead generation",
      "Streamlined property management",
      "Enhanced customer experience",
      "Automated marketing"
    ],
    faqs: [
      {
        question: "Can clients book property viewings online?",
        answer: "Yes, integrated booking system for scheduling property viewings."
      },
      {
        question: "Does it support virtual tours?",
        answer: "Yes, 360° virtual tours and high-quality image galleries."
      },
      {
        question: "Can multiple agents use the platform?",
        answer: "Yes, multi-agent support with individual dashboards and lead management."
      }
    ],
    icon: "Home"
  },
  {
    id: "booking-reservation",
    title: "Booking & Reservation Systems",
    description: "Online booking platforms for restaurants, hotels, events, and service-based businesses.",
    methods: [
      "Real-time availability checking",
      "Payment processing integration",
      "Automated confirmation emails",
      "Calendar synchronization",
      "Customer management tools"
    ],
    benefits: [
      "24/7 booking availability",
      "Reduced no-shows",
      "Automated scheduling",
      "Better resource management",
      "Improved customer satisfaction"
    ],
    faqs: [
      {
        question: "Can customers reschedule bookings?",
        answer: "Yes, customers can modify or cancel bookings based on your policies."
      },
      {
        question: "Does it send reminder notifications?",
        answer: "Yes, automated SMS and email reminders before appointments."
      },
      {
        question: "Can I set different pricing for different times?",
        answer: "Yes, dynamic pricing based on time slots, seasons, or demand."
      }
    ],
    icon: "Calendar"
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    description: "Creative design services for brand identity, marketing materials, and visual communications.",
    methods: [
      "Brand identity development",
      "Adobe Creative Suite design",
      "Print and digital marketing materials",
      "Social media graphics",
      "Packaging and product design"
    ],
    benefits: [
      "Professional brand image",
      "Increased brand recognition",
      "Better marketing effectiveness",
      "Consistent visual identity",
      "Enhanced customer perception"
    ],
    faqs: [
      {
        question: "Do you provide brand guidelines?",
        answer: "Yes, we create comprehensive brand guidelines for consistent usage."
      },
      {
        question: "Can you design for both print and digital?",
        answer: "Yes, we design for all mediums including print, web, and social media."
      },
      {
        question: "How many design concepts do you provide?",
        answer: "We typically provide 3-5 initial concepts with unlimited revisions."
      }
    ],
    icon: "Palette"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Professional logo design that captures your brand essence and creates lasting impressions.",
    methods: [
      "Brand research and analysis",
      "Concept development and sketching",
      "Digital design and refinement",
      "Multiple format delivery",
      "Brand usage guidelines"
    ],
    benefits: [
      "Unique brand identity",
      "Professional appearance",
      "Memorable brand recognition",
      "Versatile usage across mediums",
      "Timeless design appeal"
    ],
    faqs: [
      {
        question: "How many logo concepts do you provide?",
        answer: "We provide 3-5 unique logo concepts for your selection."
      },
      {
        question: "In what formats will I receive my logo?",
        answer: "You'll receive PNG, JPG, SVG, and EPS formats for all uses."
      },
      {
        question: "Can you trademark my logo?",
        answer: "We can guide you through the trademark process and provide necessary documentation."
      }
    ],
    icon: "Zap"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User interface and experience design for websites and applications that delight users.",
    methods: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and style guides",
      "Usability testing",
      "Design system creation"
    ],
    benefits: [
      "Better user satisfaction",
      "Increased conversion rates",
      "Reduced development costs",
      "Improved accessibility",
      "Competitive advantage"
    ],
    faqs: [
      {
        question: "Do you conduct user testing?",
        answer: "Yes, we conduct usability testing to validate design decisions."
      },
      {
        question: "Can you redesign existing interfaces?",
        answer: "Yes, we specialize in improving existing user interfaces and experiences."
      },
      {
        question: "Do you create design systems?",
        answer: "Yes, we create comprehensive design systems for consistency."
      }
    ],
    icon: "Figma"
  },
  {
    id: "api-integration",
    title: "API Integration Services",
    description: "Seamless integration of third-party services and APIs to enhance your application functionality.",
    methods: [
      "REST and GraphQL API development",
      "Third-party service integration",
      "Data synchronization",
      "Authentication and security",
      "API documentation and testing"
    ],
    benefits: [
      "Enhanced functionality",
      "Improved efficiency",
      "Better data flow",
      "Cost-effective solutions",
      "Scalable architecture"
    ],
    faqs: [
      {
        question: "Which APIs can you integrate?",
        answer: "We integrate payment, social media, mapping, email, and custom APIs."
      },
      {
        question: "Do you create custom APIs?",
        answer: "Yes, we develop custom APIs for your specific business needs."
      },
      {
        question: "How do you ensure API security?",
        answer: "We implement OAuth, JWT, and other security measures for API protection."
      }
    ],
    icon: "Link"
  },
  {
    id: "bulk-sms",
    title: "Bulk SMS Solutions",
    description: "Mass messaging platforms for marketing campaigns, notifications, and customer communication.",
    methods: [
      "SMS gateway integration",
      "Contact list management",
      "Campaign scheduling and automation",
      "Delivery tracking and analytics",
      "Two-way SMS communication"
    ],
    benefits: [
      "Direct customer reach",
      "High open rates",
      "Cost-effective marketing",
      "Instant communication",
      "Automated notifications"
    ],
    faqs: [
      {
        question: "What's the delivery rate for SMS?",
        answer: "Our SMS delivery rate is typically 95-99% depending on the network."
      },
      {
        question: "Can I schedule SMS campaigns?",
        answer: "Yes, you can schedule SMS campaigns for optimal delivery times."
      },
      {
        question: "Do you provide delivery reports?",
        answer: "Yes, detailed delivery reports and analytics are provided."
      }
    ],
    icon: "MessageSquare"
  },
  {
    id: "email-marketing",
    title: "Email Marketing Tools",
    description: "Email campaign management and automation tools for effective customer engagement.",
    methods: [
      "Email template design",
      "List segmentation and management",
      "Automated drip campaigns",
      "A/B testing and optimization",
      "Analytics and reporting"
    ],
    benefits: [
      "Higher ROI than other channels",
      "Personalized communication",
      "Automated customer nurturing",
      "Detailed performance insights",
      "Increased customer retention"
    ],
    faqs: [
      {
        question: "Can you design email templates?",
        answer: "Yes, we create responsive email templates that work across all devices."
      },
      {
        question: "Do you handle email deliverability?",
        answer: "Yes, we optimize for deliverability and monitor sender reputation."
      },
      {
        question: "Can emails be automated?",
        answer: "Yes, we set up automated workflows based on customer behavior."
      }
    ],
    icon: "Mail"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (SEO, SEM, Google Ads)",
    description: "Comprehensive digital marketing strategies to increase online visibility and drive targeted traffic.",
    methods: [
      "Search Engine Optimization (SEO)",
      "Google Ads and PPC campaigns",
      "Social media advertising",
      "Content marketing strategy",
      "Analytics and performance tracking"
    ],
    benefits: [
      "Increased online visibility",
      "Higher quality leads",
      "Better ROI on marketing spend",
      "Improved brand awareness",
      "Competitive advantage"
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO typically shows results in 3-6 months, with continuous improvement over time."
      },
      {
        question: "What's included in Google Ads management?",
        answer: "Campaign setup, keyword research, ad creation, bid management, and optimization."
      },
      {
        question: "Do you provide marketing reports?",
        answer: "Yes, we provide detailed monthly reports on all marketing activities and ROI."
      }
    ],
    icon: "TrendingUp"
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Professional social media management to build brand presence and engage with your audience.",
    methods: [
      "Content creation and curation",
      "Social media strategy development",
      "Community management",
      "Paid social advertising",
      "Performance analytics and reporting"
    ],
    benefits: [
      "Increased brand awareness",
      "Better customer engagement",
      "Lead generation",
      "Improved customer service",
      "Competitive insights"
    ],
    faqs: [
      {
        question: "Which social platforms do you manage?",
        answer: "We manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube."
      },
      {
        question: "Do you create content?",
        answer: "Yes, we create engaging posts, graphics, and videos for your brand."
      },
      {
        question: "How often do you post?",
        answer: "Posting frequency depends on your package, typically 3-15 posts per week."
      }
    ],
    icon: "Share2"
  },
  {
    id: "copywriting",
    title: "Copywriting & Content Creation",
    description: "Persuasive copywriting and content creation for websites, marketing materials, and communications.",
    methods: [
      "Website copy and blog writing",
      "Marketing material creation",
      "SEO content optimization",
      "Email and newsletter writing",
      "Brand voice development"
    ],
    benefits: [
      "Clear brand messaging",
      "Improved conversion rates",
      "Better SEO rankings",
      "Professional communication",
      "Increased engagement"
    ],
    faqs: [
      {
        question: "Do you write in multiple languages?",
        answer: "Yes, we write in English, Swahili, and other local languages."
      },
      {
        question: "Can you match our brand voice?",
        answer: "Yes, we adapt our writing style to match your brand's tone and voice."
      },
      {
        question: "Do you provide SEO-optimized content?",
        answer: "Yes, all content is optimized for search engines and user engagement."
      }
    ],
    icon: "PenTool"
  },
  {
    id: "video-editing",
    title: "Video Editing & Production",
    description: "Professional video editing and production services for marketing, training, and promotional content.",
    methods: [
      "Video editing and post-production",
      "Motion graphics and animations",
      "Color grading and audio mixing",
      "Corporate video production",
      "YouTube and social media optimization"
    ],
    benefits: [
      "Professional video content",
      "Increased engagement rates",
      "Better brand storytelling",
      "Improved marketing effectiveness",
      "Higher conversion rates"
    ],
    faqs: [
      {
        question: "What types of videos do you produce?",
        answer: "We produce promotional, training, testimonial, and social media videos."
      },
      {
        question: "Do you provide filming services?",
        answer: "Yes, we offer complete video production from concept to final delivery."
      },
      {
        question: "What's the typical turnaround time?",
        answer: "Video editing typically takes 5-10 business days depending on complexity."
      }
    ],
    icon: "Video"
  },
  {
    id: "podcast-setup",
    title: "Podcast Setup & Editing",
    description: "Complete podcast production services from setup to editing and distribution.",
    methods: [
      "Podcast setup and configuration",
      "Audio recording and editing",
      "Show notes and transcription",
      "Distribution to major platforms",
      "Podcast marketing and promotion"
    ],
    benefits: [
      "Professional audio quality",
      "Consistent publishing schedule",
      "Increased audience reach",
      "Brand authority building",
      "New marketing channel"
    ],
    faqs: [
      {
        question: "Do you help with podcast hosting?",
        answer: "Yes, we set up hosting and distribute to Spotify, Apple Podcasts, and other platforms."
      },
      {
        question: "Can you edit existing recordings?",
        answer: "Yes, we can edit and enhance your existing audio recordings."
      },
      {
        question: "Do you provide show notes?",
        answer: "Yes, we create detailed show notes and transcriptions for each episode."
      }
    ],
    icon: "Mic"
  },
  {
    id: "domain-hosting",
    title: "Domain Registration & Hosting",
    description: "Domain registration and reliable web hosting services with 99.9% uptime guarantee.",
    methods: [
      "Domain name registration and transfer",
      "Shared and dedicated hosting",
      "SSL certificate installation",
      "Email hosting and setup",
      "Backup and security services"
    ],
    benefits: [
      "Professional online presence",
      "Reliable website performance",
      "Secure data protection",
      "Professional email addresses",
      "24/7 technical support"
    ],
    faqs: [
      {
        question: "What hosting packages do you offer?",
        answer: "We offer shared, VPS, and dedicated hosting based on your needs."
      },
      {
        question: "Do you provide SSL certificates?",
        answer: "Yes, we provide and install SSL certificates for website security."
      },
      {
        question: "What's your uptime guarantee?",
        answer: "We guarantee 99.9% uptime with 24/7 monitoring and support."
      }
    ],
    icon: "Server"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Web Protection",
    description: "Comprehensive cybersecurity solutions to protect your digital assets and customer data.",
    methods: [
      "Security audits and assessments",
      "Firewall and malware protection",
      "SSL/TLS implementation",
      "Data encryption and backup",
      "Security monitoring and response"
    ],
    benefits: [
      "Protected customer data",
      "Reduced security risks",
      "Compliance with regulations",
      "Business continuity",
      "Customer trust and confidence"
    ],
    faqs: [
      {
        question: "How often do you perform security audits?",
        answer: "We recommend quarterly security audits with continuous monitoring."
      },
      {
        question: "Do you provide incident response?",
        answer: "Yes, we offer 24/7 incident response and security breach management."
      },
      {
        question: "Can you help with compliance requirements?",
        answer: "Yes, we help meet GDPR, PCI DSS, and other compliance requirements."
      }
    ],
    icon: "Shield"
  },
  {
    id: "data-backup",
    title: "Data Backup & Disaster Recovery",
    description: "Automated backup solutions and disaster recovery planning to protect your critical business data.",
    methods: [
      "Automated cloud backups",
      "Local and offsite storage",
      "Disaster recovery planning",
      "Data restoration testing",
      "Business continuity planning"
    ],
    benefits: [
      "Data loss prevention",
      "Quick recovery times",
      "Business continuity",
      "Peace of mind",
      "Regulatory compliance"
    ],
    faqs: [
      {
        question: "How often are backups performed?",
        answer: "We can set up daily, hourly, or real-time backups based on your needs."
      },
      {
        question: "Where is data stored?",
        answer: "Data is stored in secure cloud facilities and local backups as required."
      },
      {
        question: "How quickly can data be restored?",
        answer: "Most data can be restored within 1-4 hours depending on the size."
      }
    ],
    icon: "HardDrive"
  },
  {
    id: "chatbot-livechat",
    title: "Chatbot & Live Chat Integration",
    description: "AI-powered chatbots and live chat solutions for 24/7 customer support and engagement.",
    methods: [
      "AI chatbot development",
      "Live chat system integration",
      "Natural language processing",
      "Multi-platform deployment",
      "Analytics and optimization"
    ],
    benefits: [
      "24/7 customer support",
      "Reduced support costs",
      "Faster response times",
      "Lead generation",
      "Improved customer satisfaction"
    ],
    faqs: [
      {
        question: "Can chatbots handle complex queries?",
        answer: "Our AI chatbots handle common queries and escalate complex ones to humans."
      },
      {
        question: "Which platforms do you integrate with?",
        answer: "We integrate with websites, Facebook Messenger, WhatsApp, and mobile apps."
      },
      {
        question: "Do you provide chat analytics?",
        answer: "Yes, detailed analytics on chat performance and customer interactions."
      }
    ],
    icon: "MessageCircle"
  },
  {
    id: "it-support",
    title: "IT Support & System Maintenance",
    description: "Comprehensive IT support and system maintenance to keep your technology running smoothly.",
    methods: [
      "Remote and onsite support",
      "System monitoring and maintenance",
      "Software updates and patches",
      "Hardware troubleshooting",
      "Network administration"
    ],
    benefits: [
      "Reduced downtime",
      "Improved productivity",
      "Cost-effective IT management",
      "Proactive problem solving",
      "Focus on core business"
    ],
    faqs: [
      {
        question: "What response times do you offer?",
        answer: "We offer 4-hour response for critical issues and 24-hour for standard support."
      },
      {
        question: "Do you provide remote support?",
        answer: "Yes, we provide secure remote support for faster issue resolution."
      },
      {
        question: "Can you manage our entire IT infrastructure?",
        answer: "Yes, we offer complete managed IT services for businesses of all sizes."
      }
    ],
    icon: "Settings"
  },
  {
    id: "business-consultancy",
    title: "Business Consultancy & Strategy",
    description: "Strategic business consulting to optimize operations and drive digital transformation.",
    methods: [
      "Business process analysis",
      "Digital transformation planning",
      "Technology strategy development",
      "Performance optimization",
      "Change management"
    ],
    benefits: [
      "Improved business efficiency",
      "Strategic technology adoption",
      "Competitive advantage",
      "Cost optimization",
      "Future-ready operations"
    ],
    faqs: [
      {
        question: "What industries do you consult for?",
        answer: "We work with retail, healthcare, education, manufacturing, and service industries."
      },
      {
        question: "How long do consulting engagements last?",
        answer: "Engagements range from 2-12 months depending on project scope."
      },
      {
        question: "Do you provide implementation support?",
        answer: "Yes, we provide end-to-end support from strategy to implementation."
      }
    ],
    icon: "Briefcase"
  },
  {
    id: "team-training",
    title: "Team Training & Capacity Building",
    description: "Professional training programs to enhance your team's digital skills and capabilities.",
    methods: [
      "Customized training programs",
      "Hands-on workshops",
      "Online learning modules",
      "Certification programs",
      "Ongoing mentorship"
    ],
    benefits: [
      "Enhanced team capabilities",
      "Improved productivity",
      "Better technology adoption",
      "Reduced training costs",
      "Increased job satisfaction"
    ],
    faqs: [
      {
        question: "What topics do you cover in training?",
        answer: "We cover software usage, digital marketing, cybersecurity, and business tools."
      },
      {
        question: "Can training be customized?",
        answer: "Yes, all training programs are tailored to your specific needs and goals."
      },
      {
        question: "Do you provide certificates?",
        answer: "Yes, participants receive certificates upon successful completion."
      }
    ],
    icon: "Users"
  },
  {
    id: "kra-etims",
    title: "KRA eTIMS & Business Compliance Tools",
    description: "Kenya Revenue Authority eTIMS integration and business compliance solutions for tax management.",
    methods: [
      "eTIMS system integration",
      "Tax compliance automation",
      "Invoice and receipt management",
      "VAT return preparation",
      "Audit trail maintenance"
    ],
    benefits: [
      "KRA compliance assurance",
      "Automated tax calculations",
      "Reduced compliance errors",
      "Time-saving automation",
      "Audit-ready documentation"
    ],
    faqs: [
      {
        question: "Is your eTIMS solution KRA approved?",
        answer: "Yes, our solution is fully compliant with KRA eTIMS requirements."
      },
      {
        question: "Can it integrate with existing systems?",
        answer: "Yes, we integrate eTIMS with your existing POS and accounting systems."
      },
      {
        question: "Do you provide training on the system?",
        answer: "Yes, comprehensive training on eTIMS usage and compliance requirements."
      }
    ],
    icon: "FileText"
  }
];