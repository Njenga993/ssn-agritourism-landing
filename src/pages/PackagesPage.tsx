// PackagesPage.tsx - Redesigned with Editorial Detail Panel
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/packages-page.css";

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
    tagline: "For researchers, students & professionals",
    shortDescription:
      "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    heroImage: Global,
    duration: "Minimum 2 weeks",
    location: "Nakuru & Surrounding Counties",
    groupSize: "6–12 participants",
    category: "individual",
    categoryLabel: "Global Fellowship",
    price: "From USD 433",
    priceValue: 433,
    priceCurrency: "USD",
    priceNote: "Includes accommodation, meals, transport & farm visits",
    accentColor: "#2d4a22",
    stat: { value: "400+", label: "Communities" },
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
    tagline: "For schools, universities & delegations",
    shortDescription:
      "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    heroImage: agroecology,
    duration: "2–4 hours / Day",
    location: "SSN Agroecology Learning Centre",
    groupSize: "50–60 participants",
    category: "institution",
    categoryLabel: "Institutional Program",
    price: "Custom Quote",
    priceValue: null,
    priceCurrency: "USD",
    priceNote: "Comprehensive program including all meals, accommodation & field trips",
    accentColor: "#1c1410",
    stat: { value: "17+", label: "Years trusted" },
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
    tagline: "For individuals, couples & families",
    shortDescription:
      "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    heroImage: indigenousSeedBiodiversity,
    duration: "Half-day to multi-day",
    location: "SSN Landscape Communities",
    groupSize: "1–unlimited",
    category: "specialized",
    categoryLabel: "Small Group Experience",
    price: "70–100 USD / person / day",
    priceMin: 70,
    priceMax: 100,
    priceCurrency: "USD",
    priceNote: "Includes accommodation, full board, transport & all activities",
    accentColor: "#4a7c3f",
    stat: { value: "100%", label: "Customizable" },
    experiences: [
      {
        title: "Indigenous Seed & Biodiversity",
        description:
          "Experience seed selection, cleaning, drying, and storage. Visit community seed banks and learn about agrobiodiversity.",
        image: indigenousSeedBiodiversity,
      },
      {
        title: "Nature & Landscape",
        description:
          "Guided walks within and around the SSN landscape. Optional excursions to nearby ecological and cultural sites.",
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
      "Learning-focused or relaxed retreat",
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

type TabKey = "overview" | "experiences" | "includes";

const PackagesPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

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

  const handleSelectPackage = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setActiveTab("overview");
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 80);
    }
  };

  const filteredPackages =
    activeFilter === "all"
      ? packagesData
      : packagesData.filter((pkg) => pkg.category === activeFilter);

  const selectedPkg = packagesData.find((p) => p.id === selectedId) ?? null;

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const generateTourPackagesStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Agroecology Tourism Packages in Kenya",
    description: "Immersive agroecology and cultural exchange programs offered by Seed Savers Network Kenya",
    numberOfItems: packagesData.length,
    itemListElement: packagesData.map((pkg, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TouristTrip",
        name: pkg.title,
        description: pkg.shortDescription,
        duration: pkg.duration,
        provider: {
          "@type": "Organization",
          name: "Seed Savers Network Kenya",
          url: "https://agro-tourism.seedsaverskenya.org",
        },
      },
    })),
  });

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Packages | Seed Savers Network Kenya - Farm-Based Learning Experiences</title>
        <meta name="description" content="Explore 3 unique agroecology tourism packages in Kenya: Global Fellowship (from $433), Institutional Learning Exchange, and Solo Agritourism." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://agro-tourism.seedsaverskenya.org/packages" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agro-tourism.seedsaverskenya.org/packages" />
        <meta property="og:title" content="Agroecology Tourism Packages - Seed Savers Network Kenya" />
        <meta property="og:description" content="Immersive agroecology and cultural exchange programs in rural Kenya." />
        <meta property="og:image" content="https://agro-tourism.seedsaverskenya.org/og-packages.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#2d5a27" />
        <script type="application/ld+json">{JSON.stringify(generateTourPackagesStructuredData())}</script>
      </Helmet>

      <div className="journey-portal">

        {/* ── HERO (untouched) ── */}
        <header className="journey-portal__hero">
          <img
            ref={heroImageRef}
            src={Global}
            alt="Ecology, Food and Culture Tourism - Agroecology experiences in rural Kenya"
            className="journey-portal__hero-image"
            fetchPriority="high"
          />
          <div className="journey-portal__hero-overlay" aria-hidden="true" />
          <div className="journey-portal__hero-content">
            <span className="journey-portal__hero-eyebrow">Seed Savers Network Kenya | Est. 2009</span>
            <h1 className="journey-portal__hero-title">
              <span className="journey-portal__hero-title-line">Seeds, Food</span>
              <span className="journey-portal__hero-title-line">&amp; Culture</span>
              <span className="journey-portal__hero-title-line">Tourism Packages</span>
            </h1>
            <p className="journey-portal__hero-subtitle">
              Community-led experiences designed for individuals, institutions, and small groups seeking immersive agroecological learning in Kenya.
            </p>
            <button onClick={scrollToPackages} className="journey-portal__hero-scroll" aria-label="Scroll to view agroecology tourism packages">
              <span>Explore Packages</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── FILTER ── */}
        <section className="journey-portal__filter" aria-label="Filter packages by type">
          <div className="journey-portal__filter-container">
            <div className="journey-portal__filter-header">
              <span className="section-label">Curated Experiences Since 2009</span>
              <h2 className="journey-portal__filter-title">Choose Your Learning Path</h2>
              <p className="journey-portal__filter-subtitle">
                Three ways to engage with agroecology, seed sovereignty, and community knowledge in rural Kenya
              </p>
            </div>
            <div className="journey-portal__filter-buttons" role="tablist">
              {[
                { key: "all", label: "All Programs" },
                { key: "individual", label: "Global Fellowship" },
                { key: "institution", label: "Institutional Programs" },
                { key: "specialized", label: "Solo & Small Groups" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className={`journey-portal__filter-button ${activeFilter === key ? "journey-portal__filter-button--active" : ""}`}
                  onClick={() => { setActiveFilter(key); setSelectedId(null); }}
                  role="tab"
                  aria-selected={activeFilter === key}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES GRID + DETAIL PANEL ── */}
        <section id="packages" className="journey-portal__grid-section" aria-label="Available agroecology tourism packages">

          {/* Trust bar */}
          <div className="journey-trust-bar">
            <div className="journey-trust-bar__inner">
              {[
                { icon: "", text: "400+ Communities Supported" },
                { icon: "", text: "International Partnerships" },
                { icon: "", text: "Non-Commercial & Ethical" },
                { icon: "", text: "17 Years of Expertise" },
              ].map(({ icon, text }) => (
                <div key={text} className="journey-trust-bar__item">
                  <span className="journey-trust-bar__icon">{icon}</span>
                  <span className="journey-trust-bar__text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="journey-portal__grid-wrapper">
            <div className="journey-portal__grid">
              {filteredPackages.map((pkg, index) => (
                <article
                  key={pkg.id}
                  className={`pkg-card ${selectedId === pkg.id ? "pkg-card--selected" : ""}`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                  itemScope
                  itemType="https://schema.org/TouristTrip"
                >
                  {/* Image */}
                  <div className="pkg-card__visual">
                    <img
                      src={pkg.heroImage}
                      alt={`${pkg.title} — agroecology experience in Kenya`}
                      className="pkg-card__image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pkg-card__visual-overlay" />
                    <span className="pkg-card__badge">{pkg.categoryLabel}</span>
                    <div className="pkg-card__stat">
                      <span className="pkg-card__stat-value">{pkg.stat.value}</span>
                      <span className="pkg-card__stat-label">{pkg.stat.label}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="pkg-card__body">
                    <p className="pkg-card__tagline">{pkg.tagline}</p>
                    <h3 className="pkg-card__title" itemProp="name">{pkg.title}</h3>
                    <p className="pkg-card__desc" itemProp="description">{pkg.shortDescription}</p>

                    <div className="pkg-card__meta">
                      <div className="pkg-card__meta-item">
                        <span className="pkg-card__meta-label">Duration</span>
                        <span className="pkg-card__meta-value">{pkg.duration}</span>
                      </div>
                      <div className="pkg-card__meta-item">
                        <span className="pkg-card__meta-label">Group</span>
                        <span className="pkg-card__meta-value">{pkg.groupSize}</span>
                      </div>
                      <div className="pkg-card__meta-item">
                        <span className="pkg-card__meta-label">Location</span>
                        <span className="pkg-card__meta-value">{pkg.location}</span>
                      </div>
                    </div>

                    <div className="pkg-card__price-row">
                      <div>
                        <span className="pkg-card__price">{pkg.price}</span>
                        <span className="pkg-card__price-note">{pkg.priceNote}</span>
                      </div>
                    </div>

                    <button
                      className={`pkg-card__cta ${selectedId === pkg.id ? "pkg-card__cta--active" : ""}`}
                      onClick={() => handleSelectPackage(pkg.id)}
                      aria-expanded={selectedId === pkg.id}
                      aria-label={selectedId === pkg.id ? `Close details for ${pkg.title}` : `View full details for ${pkg.title}`}
                    >
                      <span>{selectedId === pkg.id ? "Close Details" : "View Full Package"}</span>
                      <span className={`pkg-card__cta-arrow ${selectedId === pkg.id ? "pkg-card__cta-arrow--up" : ""}`}>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M8 3v10M3 8l5 5 5-5" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* ── DETAIL PANEL ── */}
            {selectedPkg && (
              <div
                className="pkg-detail-panel"
                ref={panelRef}
                role="region"
                aria-label={`Full details for ${selectedPkg.title}`}
              >
                {/* Panel header */}
                <div className="pkg-detail-panel__header" style={{ "--pkg-accent": selectedPkg.accentColor } as React.CSSProperties}>
                  <div className="pkg-detail-panel__header-left">
                    <span className="pkg-detail-panel__badge">{selectedPkg.categoryLabel}</span>
                    <h2 className="pkg-detail-panel__title">{selectedPkg.title}</h2>
                    <p className="pkg-detail-panel__tagline">{selectedPkg.tagline}</p>
                  </div>
                  <div className="pkg-detail-panel__header-right">
                    <div className="pkg-detail-panel__price-block">
                      <span className="pkg-detail-panel__price">{selectedPkg.price}</span>
                      <span className="pkg-detail-panel__price-note">{selectedPkg.priceNote}</span>
                    </div>
                    <a
                      href={`mailto:info@seedsaverskenya.org?subject=Package%20Inquiry%20-%20${encodeURIComponent(selectedPkg.title)}&body=I'm%20interested%20in%20the%20${encodeURIComponent(selectedPkg.title)}.%20Please%20send%20me%20more%20information.`}
                      className="pkg-detail-panel__book-btn"
                    >
                      Request Information →
                    </a>
                  </div>
                  <button
                    className="pkg-detail-panel__close"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close package details"
                  >
                    ✕
                  </button>
                </div>

                {/* Tabs */}
                <div className="pkg-detail-panel__tabs">
                  {(["overview", "experiences", "includes"] as TabKey[]).map((tab) => (
                    <button
                      key={tab}
                      className={`pkg-detail-panel__tab ${activeTab === tab ? "pkg-detail-panel__tab--active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "overview" && "Program Overview"}
                      {tab === "experiences" && `Experiences (${selectedPkg.experiences.length})`}
                      {tab === "includes" && `What's Included (${selectedPkg.includes.length})`}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="pkg-detail-panel__body">

                  {/* ── OVERVIEW TAB ── */}
                  {activeTab === "overview" && (
                    <div className="pkg-detail-panel__overview">
                      <div className="pkg-detail-panel__overview-image-col">
                        <img
                          src={selectedPkg.heroImage}
                          alt={selectedPkg.title}
                          className="pkg-detail-panel__overview-image"
                        />
                        <div className="pkg-detail-panel__stats-strip">
                          <div className="pkg-detail-panel__stat-block">
                            <span className="pkg-detail-panel__stat-label">Duration</span>
                            <span className="pkg-detail-panel__stat-value">{selectedPkg.duration}</span>
                          </div>
                          <div className="pkg-detail-panel__stat-block">
                            <span className="pkg-detail-panel__stat-label">Group Size</span>
                            <span className="pkg-detail-panel__stat-value">{selectedPkg.groupSize}</span>
                          </div>
                          <div className="pkg-detail-panel__stat-block">
                            <span className="pkg-detail-panel__stat-label">Location</span>
                            <span className="pkg-detail-panel__stat-value">{selectedPkg.location}</span>
                          </div>
                          <div className="pkg-detail-panel__stat-block">
                            <span className="pkg-detail-panel__stat-label">Investment</span>
                            <span className="pkg-detail-panel__stat-value">{selectedPkg.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pkg-detail-panel__overview-content-col">
                        <div className="pkg-detail-panel__section">
                          <h3 className="pkg-detail-panel__section-title">About This Program</h3>
                          <p className="pkg-detail-panel__section-text">{selectedPkg.shortDescription}</p>
                        </div>

                        <div className="pkg-detail-panel__section">
                          <h3 className="pkg-detail-panel__section-title">Key Program Features</h3>
                          <ul className="pkg-detail-panel__feature-list">
                            {selectedPkg.keyFeatures.map((f, i) => (
                              <li key={i} className="pkg-detail-panel__feature-item">
                                <span className="pkg-detail-panel__feature-check">✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pkg-detail-panel__section">
                          <h3 className="pkg-detail-panel__section-title">Ideal For</h3>
                          <div className="pkg-detail-panel__audience-grid">
                            {selectedPkg.targetAudience.map((a, i) => (
                              <div key={i} className="pkg-detail-panel__audience-chip">
                                <span className="pkg-detail-panel__audience-dot" />
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── EXPERIENCES TAB ── */}
                  {activeTab === "experiences" && (
                    <div className="pkg-detail-panel__experiences">
                      {selectedPkg.experiences.map((exp, i) => (
                        <div key={i} className="pkg-detail-panel__exp-card">
                          <div className="pkg-detail-panel__exp-image-wrap">
                            <img
                              src={exp.image}
                              alt={exp.title}
                              className="pkg-detail-panel__exp-image"
                              loading="lazy"
                            />
                            <span className="pkg-detail-panel__exp-number">0{i + 1}</span>
                          </div>
                          <div className="pkg-detail-panel__exp-content">
                            <h3 className="pkg-detail-panel__exp-title">{exp.title}</h3>
                            <p className="pkg-detail-panel__exp-desc">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ── INCLUDES TAB ── */}
                  {activeTab === "includes" && (
                    <div className="pkg-detail-panel__includes">
                      <div className="pkg-detail-panel__includes-grid">
                        {selectedPkg.includes.map((item, i) => (
                          <div key={i} className="pkg-detail-panel__include-card">
                            <span className="pkg-detail-panel__include-icon">✓</span>
                            <p className="pkg-detail-panel__include-text">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="pkg-detail-panel__includes-note">
                        <p>Custom additions available — tell us what matters to you and we'll build around your goals.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Panel footer CTA */}
                <div className="pkg-detail-panel__footer">
                  <div className="pkg-detail-panel__footer-left">
                    <p className="pkg-detail-panel__footer-heading">Ready to join us in Kenya?</p>
                    <p className="pkg-detail-panel__footer-sub">Our team responds within 48 hours to discuss your custom program.</p>
                  </div>
                  <div className="pkg-detail-panel__footer-actions">
                    <a
                      href={`mailto:info@seedsaverskenya.org?subject=Package%20Inquiry%20-%20${encodeURIComponent(selectedPkg.title)}&body=I'm%20interested%20in%20the%20${encodeURIComponent(selectedPkg.title)}.%20Please%20send%20me%20more%20information.`}
                      className="pkg-detail-panel__footer-cta"
                    >
                      Request Information
                    </a>
                    <button
                      className="pkg-detail-panel__footer-close"
                      onClick={() => setSelectedId(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="journey-values" aria-label="Why choose Seed Savers Network for agroecology tourism">
          <div className="journey-values__container">
            <div className="journey-values__header">
              <span className="journey-values__eyebrow">Since 2009</span>
              <h2 className="journey-values__title">Why Choose Seed Savers Network Kenya</h2>
              <p className="journey-values__subtitle">Experience authentic agroecology with Kenya's trusted grassroots institution</p>
            </div>
            <div className="journey-values__grid">
              {[
                { img: authenticFarmStays, alt: "Authentic farm stays with local communities in rural Kenya", title: "Authentic Community Experiences", text: "Non-commercial, community-led experiences with direct learning from farmers and practitioners. Support grassroots agroecology and seed conservation across 400+ communities." },
                { img: traditionalCuisine, alt: "Traditional Kenyan cuisine and food culture experience", title: "Food Sovereignty & Culture", text: "Prepare and share traditional meals using locally grown indigenous produce. Experience authentic recipes and genuine cultural exchange with host farming communities." },
                { img: communityConnections, alt: "Community connections and seed sovereignty network in Kenya", title: "17+ Years of Trusted Stewardship", text: "A national grassroots institution trusted by farmers, researchers, and international partners for leadership in agroecology and seed conservation since 2009." },
              ].map(({ img, alt, title, text }) => (
                <div key={title} className="journey-values__card">
                  <img src={img} alt={alt} className="journey-values__card-image" loading="lazy" decoding="async" />
                  <h3 className="journey-values__card-title">{title}</h3>
                  <p className="journey-values__card-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PackagesPage;