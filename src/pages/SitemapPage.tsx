import React, { useEffect, useState } from 'react';
import { generateSitemap } from '@/utils/sitemap';

const SitemapPage = () => {
  const [sitemapXml, setSitemapXml] = useState<string>('');

  useEffect(() => {
    // Generate sitemap on component mount
    const xml = generateSitemap();
    setSitemapXml(xml);
    
    // Set proper content type for XML
    const head = document.head || document.getElementsByTagName('head')[0];
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Type');
    meta.setAttribute('content', 'application/xml; charset=utf-8');
    head.appendChild(meta);
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '12px' }}>
      {sitemapXml}
    </div>
  );
};

export default SitemapPage;