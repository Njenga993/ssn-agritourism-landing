import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type:
    | "Organization"
    | "WebSite"
    | "LocalBusiness"
    | "TouristAttraction"
    | "NGO";
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(baseData)}</script>
    </Helmet>
  );
};

// Export the specific components that Aboutpage.tsx is looking for
export const OrganizationStructuredData = () => {
  const organizationData = {
    name: "Seed Savers Network Kenya",
    url: "https://agro-tourism.seedsaverskenya.org",
    logo: "https://agro-tourism.seedsaverskenya.org/Agroecology Logo.png",
    description:
      "Connecting travelers with agroecology, indigenous food systems, and community knowledge in rural Kenya.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "Kenya",
    },
    foundingDate: "2009",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@seedsaverskenya.org",
      availableLanguage: ["English", "Swahili"],
    },
  };

  return <StructuredData type="NGO" data={organizationData} />;
};

export const WebsiteStructuredData = () => {
  const websiteData = {
    name: "Seed Savers Network Kenya",
    url: "https://agro-tourism.seedsaverskenya.org",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://agro-tourism.seedsaverskenya.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData type="WebSite" data={websiteData} />;
};

export const TourPackagesData = ({ packages }: { packages?: any[] }) => {
  const tourData = {
    name: "Agroecology Tourism Experiences",
    description:
      "Immersive agroecology and cultural exchange programs in rural Kenya",
    offers: packages || [
      {
        "@type": "Offer",
        name: "Global Fellowship Package",
        description: "2-week immersive agritourism program",
        price: "433",
        priceCurrency: "USD",
      },
    ],
  };

  return <StructuredData type="TouristAttraction" data={tourData} />;
};

export default StructuredData;
