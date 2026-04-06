// PackagesPage.tsx - Fully SEO Optimized
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/packages-page.css";

// Import images (keeping your existing imports)
import authenticFarmStays from "../assets/holding.webp";
import Global from "../assets/Global.jpeg";
import traditionalCuisine from "../assets/n.webp";
import communityConnections from "../assets/hero_1.webp";
import seedBank from "../assets/kikopey.webp";
import indigenousSeeds from "../assets/seeds.webp";
import communityMeetings from "../assets/cb.webp";
import agroecology from "../assets/conference-room.webp";
import traditionalFarming from "../assets/agri002.jpg";
import Principles from "../assets/winowing.webp";
import indigenousSeedBiodiversity from "../assets/solo.jpeg";
import natureLandscape from "../assets/downloa_elemend.jpeg";

const packagesData = [
  {
    id: 1,
    title: "Global Fellowship Package",
    shortDescription:
      "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    heroImage: Global,
    duration: "Minimum 2 weeks",
    location: "Nakuru & Surrounding Counties",
    groupSize: "6-12 participants",
    category: "individual",
    price: "From USD 433",
    priceValue: 433,
    priceCurrency: "USD",
    priceNote:
      "Includes accommodation, meals, transport, and farm visits. Price varies with group size and itinerary.",
    experiences: [
      {
        title: "Seed Bank Visits",
        description:
          "Explore community seed banks, learn conservation techniques, and understand seed sovereignty movements.",
        image: seedBank,
      },
      {
        title: "Indigenous Seeds Workshop",
        description:
          "Hands-on experience with indigenous seed varieties, selection, and traditional preservation methods.",
        image: indigenousSeeds,
      },
      {
        title: "Community Meetings",
        description:
          "Participate in farmer group meetings, discuss challenges, and share solutions in agroecology.",
        image: communityMeetings,
      },
    ],
    includes: [
      "Agroecology & climate-resilient farming methods",
      "Hands-on farming (planting, weeding, harvesting, milking)",
      "Indigenous seed practices & community seed banking",
      "Community engagement & knowledge-sharing",
      "Live with a host farming family",
    ],
    keyFeatures: [
      "Direct farmer-to-farmer knowledge exchange",
      "Visit multiple farming communities",
      "Participatory learning approach",
      "Cultural immersion and homestay options",
      "Supports seed sovereignty initiatives",
    ],
    targetAudience: [
      "Farmers and agricultural professionals",
      "Agroecology practitioners",
      "Seed sovereignty advocates",
      "Agricultural students and researchers",
      "Sustainable agriculture enthusiasts",
    ],
  },
  {
    id: 2,
    title: "Conference & Learning Exchange",
    shortDescription:
      "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    heroImage: agroecology,
    duration: "2-4 hours/ Day ",
    location: "SSN Agroecology Learning Centre",
    groupSize: "50-60 participants",
    category: "institution",
    price: "Custom Quote",
    priceValue: null,
    priceCurrency: "USD",
    priceNote:
      "Comprehensive program including all meals, accommodation, training materials, and field trips.",
    experiences: [
      {
        title: "Agroecology Principles",
        description:
          "Learn core principles, design thinking, and practical applications of agroecological systems.",
        image: Principles,
      },
      {
        title: "Traditional Farming Systems",
        description:
          "Study indigenous farming knowledge, intercropping systems, and natural resource management.",
        image: traditionalFarming,
      },
    ],
    includes: [
      "Expert-led workshops and seminars",
      "Field visits to model farms",
      "Training materials and resources",
      "Practical hands-on sessions",
      "Accommodation and all meals",
      "Local transportation",
    ],
    keyFeatures: [
      "Intensive learning program",
      "Expert facilitators and practitioners",
      "Blend of theory and practice",
      "Visit successful agroecology farms",
      "Networking opportunities",
    ],
    targetAudience: [
      "Agricultural institutions",
      "University students and faculty",
      "NGO staff and development workers",
      "Policy makers and agricultural advisors",
      "Sustainable agriculture professionals",
    ],
  },
  {
    id: 3,
    title: "Solo & Small-Group Agritourism",
    shortDescription:
      "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    heroImage: indigenousSeedBiodiversity,
    duration: "Half-day to multi-day",
    location: "SSN Landscape Communities",
    groupSize: "1 - unlimited",
    category: "specialized",
    price: "70-100 USD per day/person",
    priceMin: 70,
    priceMax: 100,
    priceCurrency: "USD",
    priceNote:
      "Example price includes accommodation, full board, transport, and activities. Final pricing tailored to your needs.",
    experiences: [
      {
        title: "Indigenous Seed & Biodiversity",
        description:
          "Experience seed selection, cleaning, drying, and storage. Visit community seed banks and learn about agrobiodiversity and seed sovereignty.",
        image: indigenousSeedBiodiversity,
      },
      {
        title: "Nature & Landscape",
        description:
          "Guided walks within and around the SSN landscape. Optional excursions to nearby ecological and cultural sites by arrangement.",
        image: natureLandscape,
      },
    ],
    includes: [
      "Accommodation (SSN centre or host family)",
      "Full board meals",
      "Transport",
      "Hands-on activities",
      "Cultural exchange",
      "Flexible scheduling",
    ],
    keyFeatures: [
      "Authentic, non-commercial experiences",
      "Direct learning from farmers",
      "Flexible and ethical engagement",
      "Supports grassroots agroecology",
      "Can be learning-focused, relaxed retreat, or mixed program",
    ],
    targetAudience: [
      "Solo travelers and slow-travel enthusiasts",
      "Couples and families",
      "Small groups of friends or clubs",
      "Researchers, writers, photographers",
      "Diaspora visitors reconnecting with heritage",
    ],
  },
];

const PackagesPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const heroImageRef = useRef<HTMLImageElement | null>(null);

  // Parallax effect on hero image
  useEffect(() => {
    const onScroll = () => {
      if (heroImageRef.current) {
        const yOffset = Math.min(window.scrollY * 0.28, 150);
        heroImageRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPackages =
    activeFilter === "all"
      ? packagesData
      : packagesData.filter((pkg) => pkg.category === activeFilter);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate structured data for all tour packages
  const generateTourPackagesStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Agroecology Tourism Packages in Kenya",
      description:
        "Immersive agroecology and cultural exchange programs offered by Seed Savers Network Kenya",
      numberOfItems: packagesData.length,
      itemListElement: packagesData.map((pkg, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: pkg.title,
          description: pkg.shortDescription,
          duration: pkg.duration,
          itinerary: {
            "@type": "ItemList",
            itemListElement: pkg.experiences.map((exp, expIdx) => ({
              "@type": "ListItem",
              position: expIdx + 1,
              item: {
                "@type": "TouristAttraction",
                name: exp.title,
                description: exp.description,
              },
            })),
          },
          offers: pkg.priceValue
            ? {
                "@type": "Offer",
                price: pkg.priceValue,
                priceCurrency: pkg.priceCurrency || "USD",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString().split("T")[0],
              }
            : pkg.priceMin
              ? {
                  "@type": "Offer",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: pkg.priceMin,
                    maxPrice: pkg.priceMax,
                    priceCurrency: pkg.priceCurrency,
                  },
                }
              : null,
          provider: {
            "@type": "Organization",
            name: "Seed Savers Network Kenya",
            url: "https://agro-tourism.seedsaverskenya.org",
          },
        },
      })),
    };
  };

  return (
    <>
      {/* Main SEO Component */}
      <Helmet>
        <html lang="en" />

        {/* Primary Meta Tags */}
        <title>
          Agroecology Tourism Packages | Seed Savers Network Kenya - Farm-Based
          Learning Experiences
        </title>
        <meta
          name="title"
          content="Agroecology Tourism Packages | Seed Savers Network Kenya - Farm-Based Learning Experiences"
        />
        <meta
          name="description"
          content="Explore 3 unique agroecology tourism packages in Kenya: Global Fellowship (from $433), Institutional Learning Exchange, and Solo Agritourism. Hands-on farming, seed sovereignty, and cultural exchange with 400+ communities."
        />
        <meta
          name="keywords"
          content="agroecology tourism packages Kenya, agritourism Kenya, seed sovereignty tours, farm learning experiences, Global Fellowship Kenya, institutional agroecology programs, solo agritourism Kenya, Seed Savers Network packages, sustainable farming tours Africa"
        />
        <meta name="author" content="Seed Savers Network Kenya" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://agro-tourism.seedsaverskenya.org/packages"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://agro-tourism.seedsaverskenya.org/packages"
        />
        <meta
          property="og:title"
          content="Agroecology Tourism Packages - Seed Savers Network Kenya"
        />
        <meta
          property="og:description"
          content="Immersive agroecology and cultural exchange programs in rural Kenya. Global Fellowship from $433, Institutional Programs, and Solo Agritourism experiences."
        />
        <meta
          property="og:image"
          content="https://agro-tourism.seedsaverskenya.org/og-packages.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Agroecology tourism packages in Kenya - Farm-based learning experiences"
        />
        <meta property="og:site_name" content="Seed Savers Network Kenya" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://agro-tourism.seedsaverskenya.org/packages"
        />
        <meta
          name="twitter:title"
          content="Agroecology Tourism Packages - Seed Savers Network Kenya"
        />
        <meta
          name="twitter:description"
          content="Explore 3 unique agroecology packages in Kenya. Global Fellowship, Institutional Programs, and Solo Agritourism experiences."
        />
        <meta
          name="twitter:image"
          content="https://agro-tourism.seedsaverskenya.org/og-packages.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Agroecology tourism packages Kenya"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2d5a27" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateTourPackagesStructuredData())}
        </script>

        {/* Price Range Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Agroecology Tourism Packages",
            description:
              "Immersive farm-based learning experiences in rural Kenya",
            brand: {
              "@type": "Brand",
              name: "Seed Savers Network Kenya",
            },
            offers: packagesData
              .filter((p) => p.priceValue)
              .map((pkg) => ({
                "@type": "Offer",
                name: pkg.title,
                price: pkg.priceValue,
                priceCurrency: pkg.priceCurrency,
                availability: "https://schema.org/InStock",
                validThrough: new Date(
                  new Date().setFullYear(new Date().getFullYear() + 1),
                )
                  .toISOString()
                  .split("T")[0],
              })),
          })}
        </script>
      </Helmet>

      <div className="journey-portal">
        {/* Hero Section - Magazine Style */}
        <header className="journey-portal__hero">
          <img
            ref={heroImageRef}
            src={Global}
            alt="Ecology, Food and Culture Tourism - Agroecology experiences in rural Kenya"
            className="journey-portal__hero-image"
            fetchPriority="high"
          />
          <div
            className="journey-portal__hero-overlay"
            aria-hidden="true"
          ></div>
          <div className="journey-portal__hero-content">
            <span className="journey-portal__hero-eyebrow">
              Seed Savers Network Kenya | Est. 2009
            </span>
            <h1 className="journey-portal__hero-title">
              <span className="journey-portal__hero-title-line">
                Ecology, Food
              </span>
              <span className="journey-portal__hero-title-line">
                &amp; Culture
              </span>
              <span className="journey-portal__hero-title-line">
                Tourism Packages
              </span>
            </h1>
            <p className="journey-portal__hero-subtitle">
              Community-led experiences designed for individuals, institutions,
              and small groups seeking immersive agroecological learning in
              Kenya.
            </p>
            <button
              onClick={scrollToPackages}
              className="journey-portal__hero-scroll"
              aria-label="Scroll to view agroecology tourism packages"
            >
              <span>Explore Packages</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        </header>

        {/* Filter Section */}
        <section
          className="journey-portal__filter"
          aria-label="Filter agroecology packages by type"
        >
          <div className="journey-portal__filter-container">
            <div className="journey-portal__filter-header">
              <span className="section-label">
                Curated Experiences Since 2009
              </span>
              <h2 className="journey-portal__filter-title">
                Choose Your Learning Path
              </h2>
              <p className="journey-portal__filter-subtitle">
                Three ways to engage with agroecology, seed sovereignty, and
                community knowledge in rural Kenya
              </p>
            </div>
            <div className="journey-portal__filter-buttons" role="tablist">
              <button
                className={`journey-portal__filter-button ${activeFilter === "all" ? "journey-portal__filter-button--active" : ""}`}
                onClick={() => setActiveFilter("all")}
                role="tab"
                aria-selected={activeFilter === "all"}
              >
                All Programs
              </button>
              <button
                className={`journey-portal__filter-button ${activeFilter === "individual" ? "journey-portal__filter-button--active" : ""}`}
                onClick={() => setActiveFilter("individual")}
                role="tab"
                aria-selected={activeFilter === "individual"}
              >
                Global Fellowship
              </button>
              <button
                className={`journey-portal__filter-button ${activeFilter === "institution" ? "journey-portal__filter-button--active" : ""}`}
                onClick={() => setActiveFilter("institution")}
                role="tab"
                aria-selected={activeFilter === "institution"}
              >
                Institutional Programs
              </button>
              <button
                className={`journey-portal__filter-button ${activeFilter === "specialized" ? "journey-portal__filter-button--active" : ""}`}
                onClick={() => setActiveFilter("specialized")}
                role="tab"
                aria-selected={activeFilter === "specialized"}
              >
                Solo & Small Groups
              </button>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section
          id="packages"
          className="journey-portal__grid-section"
          aria-label="Available agroecology tourism packages"
        >
          <div className="journey-portal__grid">
            {filteredPackages.map((pkg, index) => (
              <article
                key={pkg.id}
                className={`journey-card ${expandedId === pkg.id ? "journey-card--expanded" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope
                itemType="https://schema.org/TouristTrip"
              >
                <div
                  className="journey-card__header"
                  onClick={() => handleToggleExpand(pkg.id)}
                >
                  <div className="journey-card__image-wrapper">
                    <img
                      src={pkg.heroImage}
                      alt={`${pkg.title} - Agroecology tourism experience in Kenya`}
                      className="journey-card__image"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="journey-card__badge">
                      {pkg.category === "individual"
                        ? "Global Fellowship"
                        : pkg.category === "institution"
                          ? "Institutional Program"
                          : "Small Group Experience"}
                    </span>
                  </div>
                  <div className="journey-card__overlay">
                    <h3 className="journey-card__title" itemProp="name">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <div className="journey-card__body">
                  <p
                    className="journey-card__description"
                    itemProp="description"
                  >
                    {pkg.shortDescription}
                  </p>

                  <div className="journey-card__details">
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-label">
                        Duration
                      </span>
                      <span
                        className="journey-card__detail-text"
                        itemProp="duration"
                      >
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-label">
                        Location
                      </span>
                      <span
                        className="journey-card__detail-text"
                        itemProp="location"
                      >
                        {pkg.location}
                      </span>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-label">
                        Group Size
                      </span>
                      <span className="journey-card__detail-text">
                        {pkg.groupSize}
                      </span>
                    </div>
                  </div>

                  <div
                    className="journey-card__price-section"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <span className="journey-card__price" itemProp="price">
                      {pkg.price}
                    </span>
                    <meta
                      itemProp="priceCurrency"
                      content={pkg.priceCurrency || "USD"}
                    />
                    {pkg.priceNote && (
                      <p className="journey-card__price-note">
                        {pkg.priceNote}
                      </p>
                    )}
                  </div>

                  <button
                    className="journey-card__expand-button"
                    onClick={() => handleToggleExpand(pkg.id)}
                    aria-expanded={expandedId === pkg.id}
                    aria-label={`${expandedId === pkg.id ? "Show less" : "View full details"} for ${pkg.title}`}
                  >
                    {expandedId === pkg.id ? "Show Less" : "View Full Details"}
                    <span
                      className={`journey-card__expand-icon ${expandedId === pkg.id ? "journey-card__expand-icon--rotated" : ""}`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                </div>

                {/* Expanded Content */}
                <div className="journey-card__expanded">
                  <div className="journey-card__expanded-inner">
                    {/* Quick Overview */}
                    <div className="journey-card__overview">
                      <h4 className="journey-card__section-title">
                        Program Overview
                      </h4>
                      <div className="journey-card__overview-grid">
                        <div className="journey-card__overview-item">
                          <h5>Focus Area</h5>
                          <p>{pkg.title}</p>
                        </div>
                        <div className="journey-card__overview-item">
                          <h5>Time Commitment</h5>
                          <p>{pkg.duration}</p>
                        </div>
                        <div className="journey-card__overview-item">
                          <h5>Learning Location</h5>
                          <p>{pkg.location}</p>
                        </div>
                        <div className="journey-card__overview-item">
                          <h5>Investment</h5>
                          <p>{pkg.price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    {pkg.keyFeatures && (
                      <div className="journey-card__key-features">
                        <h4 className="journey-card__section-title">
                          Key Program Features
                        </h4>
                        <div className="journey-card__features-grid">
                          {pkg.keyFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className="journey-card__feature-card"
                            >
                              <span
                                className="journey-card__feature-icon"
                                aria-hidden="true"
                              >
                                →
                              </span>
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Target Audience */}
                    {pkg.targetAudience && (
                      <div className="journey-card__target-audience">
                        <h4 className="journey-card__section-title">
                          Ideal For
                        </h4>
                        <div className="journey-card__audience-grid">
                          {pkg.targetAudience.map((audience, idx) => (
                            <div
                              key={idx}
                              className="journey-card__audience-card"
                            >
                              <span
                                className="journey-card__audience-icon"
                                aria-hidden="true"
                              >
                                •
                              </span>
                              <p>{audience}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experiences */}
                    <div className="journey-card__experiences">
                      <h4 className="journey-card__section-title">
                        Learning Experiences & Activities
                      </h4>
                      <div className="journey-card__experiences-grid">
                        {pkg.experiences.map((exp, idx) => (
                          <div
                            key={idx}
                            className="journey-card__experience-card"
                          >
                            <div className="journey-card__experience-image-wrapper">
                              <img
                                src={exp.image}
                                alt={exp.title}
                                className="journey-card__experience-image"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="journey-card__experience-content">
                              <h5 className="journey-card__experience-title">
                                <span className="journey-card__experience-number">
                                  0{idx + 1}
                                </span>
                                {exp.title}
                              </h5>
                              <p className="journey-card__experience-description">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="journey-card__includes">
                      <h4 className="journey-card__section-title">
                        Package Inclusions
                      </h4>
                      <div className="journey-card__includes-grid">
                        {pkg.includes.map((item, idx) => (
                          <div key={idx} className="journey-card__include-item">
                            <span
                              className="journey-card__include-icon"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking CTA */}
                    <div className="journey-card__booking">
                      <a
                        href={`mailto:info@seedsaverskenya.org?subject=Package%20Inquiry%20-%20${encodeURIComponent(pkg.title)}&body=I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}.%20Please%20send%20me%20more%20information%20about%20pricing%20and%20availability.`}
                        className="journey-card__book-button"
                        aria-label={`Inquire about ${pkg.title}`}
                      >
                        Request Information
                      </a>
                      <p className="journey-card__booking-note">
                        Custom packages available — Contact us for personalized
                        agroecology experiences
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="journey-values"
          aria-label="Why choose Seed Savers Network for agroecology tourism"
        >
          <div className="journey-values__container">
            <div className="journey-values__header">
              <span className="journey-values__eyebrow">Since 2009</span>
              <h2 className="journey-values__title">
                Why Choose Seed Savers Network Kenya
              </h2>
              <p className="journey-values__subtitle">
                Experience authentic agroecology with Kenya's trusted grassroots
                institution
              </p>
            </div>
            <div className="journey-values__grid">
              <div className="journey-values__card">
                <img
                  src={authenticFarmStays}
                  alt="Authentic farm stays with local communities in rural Kenya"
                  className="journey-values__card-image"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="journey-values__card-title">
                  Authentic Community Experiences
                </h3>
                <p className="journey-values__card-text">
                  Non-commercial, community-led experiences with direct learning
                  from farmers and practitioners. Support grassroots agroecology
                  and seed conservation across 400+ communities.
                </p>
              </div>

              <div className="journey-values__card">
                <img
                  src={traditionalCuisine}
                  alt="Traditional Kenyan cuisine and food culture experience"
                  className="journey-values__card-image"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="journey-values__card-title">
                  Food Sovereignty & Culture
                </h3>
                <p className="journey-values__card-text">
                  Prepare and share traditional meals using locally grown
                  indigenous produce. Experience authentic recipes and genuine
                  cultural exchange with host farming communities.
                </p>
              </div>

              <div className="journey-values__card">
                <img
                  src={communityConnections}
                  alt="Community connections and seed sovereignty network in Kenya"
                  className="journey-values__card-image"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="journey-values__card-title">
                  17+ Years of Trusted Stewardship
                </h3>
                <p className="journey-values__card-text">
                  A national grassroots institution trusted by farmers,
                  researchers, and international partners for leadership in
                  agroecology and seed conservation since 2009.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PackagesPage;
