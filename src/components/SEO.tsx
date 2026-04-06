// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  publishedTime?: string;
}

const SEO = ({
  title,
  description,
  canonicalUrl = "",
  ogImage = "/og-image.jpg",
  ogType = "website",
  publishedTime,
}: SEOProps) => {
  const siteTitle =
    "Seed Savers Network Kenya | Ecology, Food & Culture Tourism";
  const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;
  const siteUrl = "https://agro-tourism.seedsaverskenya.org";
  const canonical = `${siteUrl}${canonicalUrl}`;
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Seed Savers Network Kenya" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional */}
      <meta name="theme-color" content="#2d5a27" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </Helmet>
  );
};

export default SEO;
