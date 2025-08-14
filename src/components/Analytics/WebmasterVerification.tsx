import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebmasterVerificationProps {
  googleSiteVerification?: string;
  bingVerification?: string;
  yandexVerification?: string;
  facebookDomainVerification?: string;
}

const WebmasterVerification: React.FC<WebmasterVerificationProps> = ({
  googleSiteVerification = 'your-google-site-verification-code',
  bingVerification = 'your-bing-verification-code',
  yandexVerification = 'your-yandex-verification-code',
  facebookDomainVerification = 'your-facebook-domain-verification-code'
}) => {
  return (
    <Helmet>
      {/* Search Engine Verification Meta Tags */}
      <meta name="google-site-verification" content={googleSiteVerification} />
      <meta name="msvalidate.01" content={bingVerification} />
      <meta name="yandex-verification" content={yandexVerification} />
      <meta name="facebook-domain-verification" content={facebookDomainVerification} />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.country" content="Kenya" />
      <meta name="geo.placename" content="Kenya" />
      <meta name="ICBM" content="-1.286389, 36.817223" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default WebmasterVerification;