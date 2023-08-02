import React from "react";
import { Helmet } from 'react-helmet';

const Seo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
  ogSiteName,
  ogImage,
  twitterCard,
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  children,
}) => {

  // Get the current URL if running in a browser context
  const ogUrl =
    typeof window !== "undefined" ? window.location.pathname : null;
  const siteUrl = window.location.origin;
  const ogSiteNameDefault = `DishIs Technology`;
  const ogTypeDefault = `article`;
  const twitterCardDefault = `summary_large_image`;

  const seoMeta = {
    title,
    description,
    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogType: ogType || ogTypeDefault,
    ogUrl: `${siteUrl}${ogUrl}`,
    ogSiteName: ogSiteName || ogSiteNameDefault,
    ogImage: `${siteUrl}${ogImage}`,
    twitterCard: twitterCard || twitterCardDefault,
    twitterCreator,
    twitterTitle: twitterTitle || title,
    twitterDescription: twitterDescription || description,
    twitterImage: `${siteUrl}${twitterImage}`,
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peerbits",
    description: seoMeta.description,
    alternateName: "DishIs.technology",
    url: `${siteUrl}`,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://instagram.com//",
      "https://www.linkedin.com/company/",
      "https://www.pinterest.com//",
      "https://www.youtube.com/channel/",
      "https://www.facebook.com//",
      "https://twitter.com/",
      "https://dribbble.com/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="og:title" content={seoMeta.ogTitle} />
        <meta name="og:description" content={seoMeta.ogDescription} />
        <meta name="og:type" content={seoMeta.ogType} />
        <meta name="og:site_name" content={seoMeta.ogSiteName} />
        <meta name="og:image" content={seoMeta.ogImage} />
        <meta name="twitter:card" content={seoMeta.twitterCard} />
        <meta name="twitter:creator" content={seoMeta.twitterCreator} />
        <meta name="twitter:title" content={seoMeta.twitterTitle} />
        <meta name="twitter:description" content={seoMeta.twitterDescription} />
        <meta name="twitter:image" content={seoMeta.twitterImage} />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {children}
      </Helmet>
    </>
  );
};

export default Seo;
