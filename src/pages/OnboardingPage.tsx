import Header from '@/components/Header';
import React, { useState } from "react";

const OnboardingPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [form, setForm] = useState({
    businessName: "",
    tagline: "",
    description: "",
    mission: "",
    vision: "",
    values: "",
    targetAudience: "",
    websiteGoals: "",
    domainOwned: "",
    domainAccess: "",
    hosting: "",
    style: "",
    branding: "",
    exampleWebsites: "",
    contentText: "",
    productDescriptions: "",
    images: "",
    videos: "",
    websiteType: "",
    features: "",
    specialRequests: "",
    currentSystems: "",
    socialLinks: "",
    emails: "",
    seo: "",
    legal: "",
    compliance: "",
    budget: "",
    deadline: "",
    maintenance: ""
  });
  const [uploads, setUploads] = useState<{
    images: FileList | null;
    videos: FileList | null;
    documents: FileList | null;
  }>({
    images: null,
    videos: null,
    documents: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      setUploads({ ...uploads, [e.target.name]: (e.target as HTMLInputElement).files });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Sections for the form
  const sections = [
    "Business Information",
    "Domain & Hosting",
    "Design Preferences",
    "Content",
    "Functional Requirements",
    "Technical Details",
    "Legal/Policy",
    "Budget & Timeline",
    "Maintenance"
  ];

  // --- Telegram Integration ---
  const TELEGRAM_BOT_TOKEN = "7473229254:AAH6gQtxqyY32NpHpWiQ7v0GSXRxMM8UVX8";
  const TELEGRAM_CHAT_ID = "5287071616";
  
  const sendToTelegram = async (form: any) => {
    const message = `\n<b>New Onboarding Submission</b>\nCompany: ${form.businessName}\nContact: ${form.contact}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.websiteType}\nBudget: ${form.budget}`;
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML"
      })
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Send text message
      const text = Object.entries(form)
        .map(([k, v]) => `<b>${k}:</b> ${v}`)
        .join("\n");
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML"
        })
      });
      
      // Send files (if any)
      for (const key of Object.keys(uploads)) {
        const files = uploads[key as keyof typeof uploads];
        if (files) {
          for (let i = 0; i < files.length; i++) {
            const fileForm = new FormData();
            fileForm.append('chat_id', TELEGRAM_CHAT_ID);
            fileForm.append('document', files[i]);
            await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
              method: "POST",
              body: fileForm
            });
          }
        }
      }
      
      setSuccess(true);
    } catch (err: any) {
      setError("Failed to submit form. Please try again.");
    }
    setLoading(false);
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Submission Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for completing the onboarding form. We'll contact you soon to discuss your project.</p>
          <button 
            onClick={() => setSuccess(false)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-8 px-2 sm:px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Welcome to Our Onboarding Process</h1>
            <p className="text-gray-600 text-base sm:text-lg">Help us understand your business needs to create the perfect website</p>
          </div>

          {/* Progress bar */}
          <div className="mb-8 sm:mb-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex min-w-[600px] sm:min-w-0 justify-between mb-2 gap-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded transition ${currentSection === index ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 bg-transparent'}`}
                  style={{ minWidth: 90 }}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-0.5 sm:p-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <form onSubmit={handleSubmit} className="p-3 sm:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{sections[currentSection]}</h2>
                <div className="w-12 h-1 bg-indigo-600 rounded"></div>
              </div>
              
              {/* Business Information */}
              {currentSection === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                    <input 
                      name="businessName" 
                      value={form.businessName} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Enter your business name" 
                      required 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                    <input 
                      name="tagline" 
                      value={form.tagline} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Your catchy tagline (optional)" 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description of Services/Products *</label>
                    <textarea 
                      name="description" 
                      value={form.description} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Describe what you offer" 
                      rows={3} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mission</label>
                    <input 
                      name="mission" 
                      value={form.mission} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Your company mission (optional)" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vision</label>
                    <input 
                      name="vision" 
                      value={form.vision} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Your company vision (optional)" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Values</label>
                    <input 
                      name="values" 
                      value={form.values} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Your company values (optional)" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience *</label>
                    <input 
                      name="targetAudience" 
                      value={form.targetAudience} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Who are your customers?" 
                      required 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Goals for the Website *</label>
                    <input 
                      name="websiteGoals" 
                      value={form.websiteGoals} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="What do you want to achieve with your website?" 
                      required 
                    />
                  </div>
                </div>
              )}
              
              {/* Domain & Hosting */}
              {currentSection === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Do you own a domain? *</label>
                    <select 
                      name="domainOwned" 
                      value={form.domainOwned} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Domain Access Details (if yes)</label>
                    <input 
                      name="domainAccess" 
                      value={form.domainAccess} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Where is your domain registered?" 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hosting *</label>
                    <select 
                      name="hosting" 
                      value={form.hosting} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="I have hosting">I have hosting</option>
                      <option value="I need hosting setup">I need hosting setup</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                </div>
              )}
              
              {/* Design Preferences */}
              {currentSection === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Style *</label>
                    <select 
                      name="style" 
                      value={form.style} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      required
                    >
                      <option value="">Select a style</option>
                      <option value="Modern">Modern</option>
                      <option value="Minimal">Minimal</option>
                      <option value="Professional">Professional</option>
                      <option value="Creative">Creative</option>
                      <option value="Bold">Bold</option>
                      <option value="Elegant">Elegant</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branding Guidelines</label>
                    <input 
                      name="branding" 
                      value={form.branding} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Logo, colors, fonts, etc." 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Example Websites You Like</label>
                    <textarea 
                      name="exampleWebsites" 
                      value={form.exampleWebsites} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="List websites you like and what you like about them" 
                      rows={3} 
                    />
                  </div>
                </div>
              )}
              
              {/* Content - Remaining sections would follow similar pattern */}
              {currentSection === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Text for Pages</label>
                    <textarea 
                      name="contentText" 
                      value={form.contentText} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Content for Home, About, etc. pages" 
                      rows={3} 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service Descriptions</label>
                    <textarea 
                      name="productDescriptions" 
                      value={form.productDescriptions} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Describe your products or services" 
                      rows={3} 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Images (Links or Description)</label>
                    <input 
                      name="images" 
                      value={form.images} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Links to images or description" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        name="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">Drag images or click to browse</p>
                      {/* Image preview */}
                      {uploads.images && uploads.images.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3 justify-center">
                          {Array.from(uploads.images).map((file, idx) => (
                            <img
                              key={idx}
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border"
                              style={{ maxWidth: '100%' }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Videos (Links or Description)</label>
                    <input 
                      name="videos" 
                      value={form.videos} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                      placeholder="Links to videos or description" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Videos</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        name="videos"
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16v16m16-16v16M14 8h20a2 2 0 012 2v28a2 2 0 01-2 2H14a2 2 0 01-2-2V10a2 2 0 012-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">Drag videos or click to browse</p>
                      {/* Video file list */}
                      {uploads.videos && uploads.videos.length > 0 && (
                        <ul className="mt-3 text-left text-xs text-gray-700 break-words">
                          {Array.from(uploads.videos).map((file, idx) => (
                            <li key={idx} className="truncate max-w-[120px] sm:max-w-xs">{file.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        name="documents"
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                        multiple
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">Drag documents or click to browse</p>
                      {/* Document file list */}
                      {uploads.documents && uploads.documents.length > 0 && (
                        <ul className="mt-3 text-left text-xs text-gray-700 break-words">
                          {Array.from(uploads.documents).map((file, idx) => (
                            <li key={idx} className="truncate max-w-[120px] sm:max-w-xs">{file.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Functional Requirements */}
              {currentSection === 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type of Website *</label>
                    <select
                      name="websiteType"
                      value={form.websiteType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="Business">Business</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Blog">Blog</option>
                      <option value="Booking">Booking</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Required Features *</label>
                    <textarea
                      name="features"
                      value={form.features}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. contact form, online store, booking, blog, gallery, newsletter, chat, etc."
                      rows={3}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Integrations Needed</label>
                    <input
                      name="currentSystems"
                      value={form.currentSystems}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. payment gateways, CRM, ERP, email marketing, analytics, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={form.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Multi-language, accessibility, custom features, etc."
                      rows={2}
                    />
                  </div>
                </div>
              )}

              {/* Technical Details */}
              {currentSection === 5 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Media Links</label>
                    <input
                      name="socialLinks"
                      value={form.socialLinks}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Links to Facebook, Instagram, Twitter, LinkedIn, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emails to Connect</label>
                    <input
                      name="emails"
                      value={form.emails}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. info@domain.com, support@domain.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">SEO Requirements</label>
                    <textarea
                      name="seo"
                      value={form.seo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Keywords, locations, meta tags, Google Analytics, etc."
                      rows={2}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Analytics & Tracking</label>
                    <input
                      name="analytics"
                      value={form.analytics || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Google Analytics, Facebook Pixel, Hotjar, etc."
                    />
                  </div>
                </div>
              )}

              {/* Legal/Policy */}
              {currentSection === 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Policy & Terms *</label>
                    <textarea
                      name="legal"
                      value={form.legal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Do you have a privacy policy, terms of service, refund/return policy? If not, do you need help drafting them?"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Compliance Requirements</label>
                    <input
                      name="compliance"
                      value={form.compliance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. GDPR, KRA, industry-specific, etc."
                    />
                  </div>
                </div>
              )}

              {/* Budget & Timeline */}
              {currentSection === 7 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. KES 50,000 - 200,000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
                    <input
                      name="paymentMethod"
                      value={form.paymentMethod || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="M-Pesa, Bank Transfer, Card, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deadline or Key Launch Date *</label>
                    <input
                      name="deadline"
                      value={form.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="E.g. 30th September 2025"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Maintenance */}
              {currentSection === 8 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ongoing Support & Maintenance *</label>
                    <textarea
                      name="maintenance"
                      value={form.maintenance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Do you need ongoing support, updates, backups, or training? Please specify."
                      rows={3}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
                <button 
                  type="button" 
                  onClick={prevSection} 
                  disabled={currentSection === 0}
                  className={`px-6 py-3 rounded-lg font-medium ${currentSection === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Previous
                </button>
                
                {currentSection < sections.length - 1 ? (
                  <button 
                    type="button" 
                    onClick={nextSection} 
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-75"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : "Submit Onboarding"}
                  </button>
                )}
              </div>
              
              {error && (
                <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  {error}
                </div>
              )}
            </form>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>Your information is secure and will only be used to create your website.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingPage;