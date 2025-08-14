import React, { useEffect, useState } from 'react';
import { generateRobotsTxt } from '@/utils/sitemap';

const RobotsPage = () => {
  const [robotsContent, setRobotsContent] = useState<string>('');

  useEffect(() => {
    // Generate robots.txt content on component mount
    const content = generateRobotsTxt();
    setRobotsContent(content);
    
    // Set proper content type for plain text
    const head = document.head || document.getElementsByTagName('head')[0];
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Type');
    meta.setAttribute('content', 'text/plain; charset=utf-8');
    head.appendChild(meta);
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '12px', padding: '20px' }}>
      {robotsContent}
    </div>
  );
};

export default RobotsPage;