import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path, schema }) => {
  const siteName = "Petflix Junction";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://www.petflixjunction.com";
  const url = `${siteUrl}${path || ''}`;
  const defaultDescription = "Professional pet grooming, bathing, and spa services at your doorstep. Pamper your furry friends with Petflix Junction.";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
