// Home.tsx - Fully SEO Optimized
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import LocationTrust from "../components/LocationTrust";

const Home = () => {
  // Track page view for analytics (optional)
  useEffect(() => {
    // You can add analytics tracking here
    // Example: window.gtag('event', 'page_view', { page_path: '/' });

    // Update last modified date in localStorage for sitemap
    localStorage.setItem("last_visit", new Date().toISOString());
  }, []);

  // Structured data for the homepage
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: " Seed, Food & Culture Tourism - Seed Savers Network Kenya",
    description:
      "Immersive agroecology tourism in Kenya. Experience seed sovereignty, indigenous food systems, and community resilience. Farm-based learning with 3000+ seed varieties across 400+ communities.",
    url: "https://agro-tourism.seedsaverskenya.org/",
    mainEntity: {
      "@type": "TouristAttraction",
      name: "Agroecology Tourism Experiences",
      description:
        "Authentic, community-led agroecological learning experiences across rural Kenya",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gilgil",
        addressRegion: "Nakuru County",
        addressCountry: "Kenya",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Farm-based Learning",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Seed Sovereignty Workshops",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Cultural Exchange Programs",
          value: true,
        },
      ],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://agro-tourism.seedsaverskenya.org/og-home.jpg",
      caption: "Agroecology farming in rural Kenya",
    },
  };

  // FAQ Structured Data for common questions
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is agroecology tourism?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agroecology tourism is responsible travel that immerses visitors in sustainable farming practices, indigenous food systems, cultural exchange, and rural livelihoods while strengthening seed sovereignty and community resilience in Kenya.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Seed Savers Network Kenya located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in Gilgil, Nakuru County, Kenya, approximately 2.5 hours from Nairobi. Our programs operate across 400+ partner communities throughout rural Kenya.",
        },
      },
      {
        "@type": "Question",
        name: "What types of tourism packages do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer three main packages: Global Fellowship Package (2+ weeks immersive program), Institutional Programs (2-4 hour learning exchanges), and Solo & Small-Group Agritourism (half-day to multi-day customized experiences).",
        },
      },
      {
        "@type": "Question",
        name: "How many seed varieties have you preserved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seed Savers Network Kenya has preserved over 3000+ indigenous seed varieties across 400+ partner communities in rural Kenya.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an agroecology tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book through our contact page at https://agro-tourism.seedsaverskenya.org/contact. Advance booking is recommended for farm visits and immersive programs.",
        },
      },
    ],
  };

  // LocalBusiness structured data for better local SEO
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Seed Food & Culture Tourism",
    image: "https://agro-tourism.seedsaverskenya.org/Agroecology Logo.png",
    description:
      "Immersive agroecology tourism and farm-based learning experiences in rural Kenya",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gilgil",
      addressLocality: "Nakuru County",
      addressCountry: "Kenya",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-0.7833",
      longitude: "36.3667",
    },
    url: "https://agro-tourism.seedsaverskenya.org/",
    telephone: "+254XXXXXXXXX",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/seedsaverskenya",
      "https://twitter.com/seedsaverskenya",
      "https://www.instagram.com/seedsaverskenya",
    ],
  };

  return (
    <>
      {/* Main SEO Component */}
      <Helmet>
        <html lang="en" />

        {/* Primary Meta Tags */}
        <title>
          Home | Seed, Food & Culture Tourism | Seed Savers Network Kenya -
          Agroecology Travel Experiences
        </title>
        <meta
          name="title"
          content="Ecology, Food & Culture Tourism | Seed Savers Network Kenya - Agroecology Travel Experiences"
        />
        <meta
          name="description"
          content="Immersive agroecology tourism in Kenya. Experience seed sovereignty, indigenous food systems, and community resilience. Join our Global Fellowship from $433 or customize your agritourism journey."
        />
        <meta
          name="keywords"
          content="agroecology tourism Kenya, seed sovereignty, agritourism Kenya, ecological farming tours, food sovereignty, permaculture Kenya, cultural exchange Kenya, sustainable travel Africa, farm-based learning, Seed Savers Network"
        />
        <meta name="author" content="Seed Savers Network Kenya" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://agro-tourism.seedsaverskenya.org/"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://agro-tourism.seedsaverskenya.org/"
        />
        <meta
          property="og:title"
          content="Seed, Food & Culture Tourism - Seed Savers Network Kenya"
        />
        <meta
          property="og:description"
          content="Immerse yourself in agroecology, seed sovereignty, and indigenous food systems in rural Kenya. Farm-based learning experiences with 3000+ seed varieties across 400+ communities."
        />
        <meta
          property="og:image"
          content="https://agro-tourism.seedsaverskenya.org/og-home.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Agroecology farming and cultural exchange in rural Kenya"
        />
        <meta property="og:site_name" content="Seed Savers Network Kenya" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://agro-tourism.seedsaverskenya.org/"
        />
        <meta
          name="twitter:title"
          content="Ecology, Food & Culture Tourism - Seed Savers Network Kenya"
        />
        <meta
          name="twitter:description"
          content="Immersive agroecology tourism in Kenya. Experience seed sovereignty, indigenous food systems, and community resilience."
        />
        <meta
          name="twitter:image"
          content="https://agro-tourism.seedsaverskenya.org/og-home.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Agroecology farming in rural Kenya"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2d5a27" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Seed Savers Kenya" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="KE-19" />
        <meta name="geo.placename" content="Gilgil, Nakuru County" />
        <meta name="geo.position" content="-0.7833;36.3667" />
        <meta name="ICBM" content="-0.7833, 36.3667" />

        {/* Verification Tags (Add your verification codes) */}
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />

        {/* Structured Data Scripts */}
        <script type="application/ld+json">
          {JSON.stringify(homeStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/hero-bg.jpg" type="image/jpeg" />
      </Helmet>

      {/* Main Content */}
      <main id="main-content" className="home-page">
        {/* Breadcrumb navigation for SEO */}
        <nav
          aria-label="Breadcrumb"
          className="home-breadcrumb"
          style={{ display: "none" }}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a href="/" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section aria-label="Hero - Agroecology Tourism Introduction">
          <Hero />
        </section>

        {/* About Section */}
        <section aria-label="About Seed Savers Network Kenya and Agroecology Tourism">
          <About />
        </section>

        {/* Packages Section */}
        <section aria-label="Agroecology Tourism Packages and Programs">
          <Packages />
        </section>

        {/* Testimonials Section */}
        <section aria-label="Testimonials from travelers and program participants">
          <Testimonials />
        </section>

        {/* Location & Trust Section */}
        <section aria-label="Location information and trust signals for Seed Savers Kenya">
          <LocationTrust />
        </section>
      </main>
    </>
  );
};

export default Home;
