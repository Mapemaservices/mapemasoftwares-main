// Sitemap generation utilities

import { generateLocationRoutes } from '@/data/locations';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://mapemasoftwares.co.ke';
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticUrls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/locations`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];

  // Generate location-based URLs
  const locationRoutes = generateLocationRoutes();
  const locationUrls: SitemapUrl[] = locationRoutes.map(route => ({
    loc: `${baseUrl}${route.path}`,
    lastmod: currentDate,
    changefreq: route.type === 'county' ? 'weekly' : 'monthly' as const,
    priority: route.type === 'county' ? '0.8' : '0.7'
  }));

  // Combine all URLs
  const allUrls = [...staticUrls, ...locationUrls];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export const generateRobotsTxt = (): string => {
  const robotsTxt = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://mapemasoftwares.co.ke/sitemap.xml

# Crawl-delay for non-essential bots
User-agent: *
Crawl-delay: 1

# Block access to admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow access to important files
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /*.css
Allow: /*.js`;

  return robotsTxt;
};

// Function to save sitemap as downloadable file (for development)
export const downloadSitemap = () => {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Function to save robots.txt as downloadable file (for development)
export const downloadRobotsTxt = () => {
  const robotsContent = generateRobotsTxt();
  const blob = new Blob([robotsContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'robots.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};