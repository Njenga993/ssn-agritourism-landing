// MediaAndStoriesPage.tsx - Fully SEO Optimized
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../styles/media-and-stories-page.css";

// Import images from assets folder
import heroImage from "../assets/hero_1.webp";

// Gallery photos
import photo1 from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import photo2 from "../assets/cb.webp";
import photo3 from "../assets/agri002.jpg";
import photo4 from "../assets/solo.jpeg";
import photo5 from "../assets/hero_1.webp";
import photo6 from "../assets/holding.webp";
import photo7 from "../assets/kikopey.webp";
import photo8 from "../assets/seeds.webp";
import photo9 from "../assets/seed-ambasadors.webp";
import photo10 from "../assets/ecology.jpeg";
import photo11 from "../assets/permculture.jpeg";
import photo12 from "../assets/winowing.webp";

// People avatars
import annaAvatar from "../assets/hero_1.webp";
import michaelAvatar from "../assets/hero_1.webp";
import claireAvatar from "../assets/hero_1.webp";
import kenjiAvatar from "../assets/hero_1.webp";
import fatimaAvatar from "../assets/hero_1.webp";
import davidAvatar from "../assets/hero_1.webp";
import sarahAvatar from "../assets/sab.jpeg";

// Video thumbnails
import videoThumb1 from "../assets/hero_1.webp";
import videoThumb2 from "../assets/solo.jpeg";
import videoThumb3 from "../assets/kikopey.webp";
import videoThumb4 from "../assets/n.webp";

// --- DATA with enhanced SEO metadata ---
const allPhotos = [
  {
    id: 1,
    src: photo1,
    alt: "Women cultivating crops in green fields using sustainable agroecology methods",
    category: "farm-life",
    location: "Nakuru County, Kenya",
    date: "March 2024",
    description:
      "Local farmers practicing sustainable agriculture and soil conservation techniques",
  },
  {
    id: 2,
    src: photo2,
    alt: "Community seed bank meeting at Seed Savers Network Kenya",
    category: "community",
    location: "Gilgil, Nakuru County",
    date: "February 2024",
    description:
      "Farmers gather to share and preserve indigenous seed varieties",
  },
  {
    id: 3,
    src: photo3,
    alt: "Traditional farming techniques demonstration at SSN Learning Centre",
    category: "workshop",
    location: "SSN Learning Centre, Kenya",
    date: "January 2024",
    description:
      "Learning indigenous agricultural practices passed down through generations",
  },
  {
    id: 4,
    src: photo4,
    alt: "International visitors touring demonstration farm at Seed Savers Network",
    category: "community",
    location: "Demonstration Farm, Kenya",
    date: "March 2024",
    description:
      "Global Fellowship participants learning agroecology in action",
  },
  {
    id: 5,
    src: photo5,
    alt: "Seed Savers Network headquarters overlooking Lake Elementaita",
    category: "landscape",
    location: "Lake Elementaita, Kenya",
    date: "December 2023",
    description:
      "Beautiful landscape of our conservation area and learning center",
  },
  {
    id: 6,
    src: photo6,
    alt: "Farmer displaying indigenous harvest from partner farm",
    category: "people",
    location: "Partner Farm, Kenya",
    date: "February 2024",
    description: "Celebrating biodiversity and food sovereignty",
  },
  {
    id: 7,
    src: photo7,
    alt: "Seed bank storage facility at SSN Headquarters preserving 3000+ varieties",
    category: "facility",
    location: "SSN Headquarters, Kenya",
    date: "January 2024",
    description: "State-of-the-art seed conservation facility",
  },
  {
    id: 8,
    src: photo8,
    alt: "School children learning about indigenous seed varieties",
    category: "education",
    location: "School Program, Kenya",
    date: "March 2024",
    description: "Educational outreach for next generation of seed stewards",
  },
  {
    id: 9,
    src: photo9,
    alt: "Seed ambassadors program participants sharing knowledge",
    category: "people",
    location: "Training Centre, Kenya",
    date: "February 2024",
    description: "Community leaders trained in seed sovereignty",
  },
  {
    id: 10,
    src: photo10,
    alt: "Ecology and biodiversity conservation at SSN landscape",
    category: "landscape",
    location: "Conservation Area, Kenya",
    date: "January 2024",
    description: "Protecting indigenous ecosystems and biodiversity",
  },
  {
    id: 11,
    src: photo11,
    alt: "Permaculture design workshop at SSN Learning Centre",
    category: "workshop",
    location: "Learning Centre, Kenya",
    date: "February 2024",
    description: "Hands-on permaculture training for sustainable farming",
  },
  {
    id: 12,
    src: photo12,
    alt: "Traditional winnowing of indigenous grains",
    category: "farm-life",
    location: "Partner Farm, Kenya",
    date: "March 2024",
    description: "Preserving traditional post-harvest techniques",
  },
];

const allVideos = [
  {
    id: 101,
    embedUrl: "https://www.youtube.com/embed/7Isnch3jVCU",
    title: "Seed Savers Network Learning Center Tour",
    description:
      "Virtual tour of our agroecology learning center and seed bank facilities in Nakuru County, Kenya",
    duration: "4:32",
    date: "March 2024",
    views: "1.2K",
    thumbnail: videoThumb1,
  },
  {
    id: 102,
    embedUrl: "https://www.youtube.com/embed/0I7e5QyA2d0",
    title: "A Day in the Life at Seed Savers Kenya",
    description:
      "Experience daily farm activities, community engagement, and seed conservation work",
    duration: "8:15",
    date: "February 2024",
    views: "3.4K",
    thumbnail: videoThumb2,
  },
  {
    id: 103,
    embedUrl: "https://www.youtube.com/embed/hjIpKa0hkZs",
    title: "Community Conference & Learning Exchange",
    description:
      "Highlights from our institutional programs and knowledge sharing events",
    duration: "6:47",
    date: "January 2024",
    views: "892",
    thumbnail: videoThumb3,
  },
  {
    id: 104,
    embedUrl: "https://www.youtube.com/embed/hLDigBo1qoM",
    title: "Indigenous Seed Saving Techniques Workshop",
    description:
      "Traditional methods of seed selection, cleaning, drying, and storage",
    duration: "12:23",
    date: "December 2023",
    views: "2.1K",
    thumbnail: videoThumb4,
  },
];

const allTestimonials = [
  {
    id: 201,
    name: "Anna Müller",
    location: "Germany",
    type: "Researcher",
    quote:
      "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.",
    image: annaAvatar,
    program: "Global Fellowship",
    date: "March 2024",
  },
  {
    id: 202,
    name: "Michael Johnson",
    location: "United States",
    type: "Institutional",
    quote:
      "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.",
    image: michaelAvatar,
    program: "Learning Exchange",
    date: "February 2024",
  },
  {
    id: 203,
    name: "Claire Dubois",
    location: "France",
    type: "Tourist",
    quote:
      "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way.",
    image: claireAvatar,
    program: "Solo Package",
    date: "January 2024",
  },
  {
    id: 204,
    name: "Kenji Tanaka",
    location: "Japan",
    type: "Student",
    quote:
      "As an agricultural student, this experience was invaluable. It's one thing to read about permaculture, and another to see it thriving in practice.",
    image: kenjiAvatar,
    program: "Global Fellowship",
    date: "March 2024",
  },
  {
    id: 205,
    name: "Fatima Al-Fassi",
    location: "Morocco",
    type: "Partner",
    quote:
      "Our partnership with Seed Savers Kenya has been instrumental in our own seed bank projects. The knowledge exchange is truly bidirectional.",
    image: fatimaAvatar,
    program: "Institutional",
    date: "February 2024",
  },
  {
    id: 206,
    name: "David O'Connell",
    location: "Ireland",
    type: "Volunteer",
    quote:
      "Volunteering here gave me a sense of purpose. The work is tangible, the community is welcoming, and the impact is real and lasting.",
    image: davidAvatar,
    program: "Volunteer Program",
    date: "January 2024",
  },
  {
    id: 207,
    name: "Dr. Sarah Kimani",
    location: "Kenya",
    type: "Researcher",
    quote:
      "The Seed Savers Network isn't just preserving seeds — they're preserving knowledge, culture, and hope for future generations.",
    image: sarahAvatar,
    program: "Research Partnership",
    date: "December 2023",
  },
];

const MediaAndStoriesPage = () => {
  const [activeTab, setActiveTab] = useState<"gallery" | "stories">("gallery");
  const [galleryFilter, setGalleryFilter] = useState<
    "all" | "photos" | "videos"
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    type: "photo" | "video";
    src: string;
    title?: string;
    metadata?: any;
  } | null>(null);
  const [testimonialFilter, setTestimonialFilter] = useState<string>("all");
  const heroImageRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect on hero
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

  const photoCategories = ["all", ...new Set(allPhotos.map((p) => p.category))];

  const filteredGalleryItems = () => {
    let items = [];
    if (galleryFilter === "photos") items = allPhotos;
    else if (galleryFilter === "videos") items = allVideos;
    else items = [...allPhotos, ...allVideos];

    if (selectedCategory !== "all" && galleryFilter !== "videos") {
      items = items.filter(
        (item) => "category" in item && item.category === selectedCategory,
      );
    }
    return items;
  };

  const filteredTestimonials = () => {
    if (testimonialFilter === "all") return allTestimonials;
    return allTestimonials.filter((t) => t.type === testimonialFilter);
  };

  const testimonialTypes = [
    "all",
    ...new Set(allTestimonials.map((t) => t.type)),
  ];

  const openLightbox = (
    type: "photo" | "video",
    src: string,
    metadata?: any,
  ) => {
    setLightbox({ isOpen: true, type, src, ...metadata });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  // Generate structured data for gallery images
  const generateImageGalleryStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Seed Savers Network Kenya - Agroecology Gallery",
      description:
        "Photos from our agroecology programs, seed conservation work, and community engagement in Kenya",
      url: "https://agro-tourism.seedsaverskenya.org/gallery",
      numberOfItems: allPhotos.length,
      image: allPhotos.map((photo) => ({
        "@type": "ImageObject",
        contentUrl: `https://agro-tourism.seedsaverskenya.org${photo.src}`,
        name: photo.alt,
        description: photo.description,
        keywords: `${photo.category}, agroecology, Kenya, seed sovereignty`,
        contentLocation: {
          "@type": "Place",
          name: photo.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: photo.location.split(",")[0],
            addressCountry: "KE",
          },
        },
        dateCreated: photo.date,
        creator: {
          "@type": "Organization",
          name: "Seed Savers Network Kenya",
        },
      })),
    };
  };

  // Generate structured data for videos
  const generateVideoStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "VideoGallery",
      name: "Agroecology Educational Videos",
      description:
        "Educational videos about seed sovereignty, agroecology, and sustainable farming in Kenya",
      video: allVideos.map((video) => ({
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: `https://agro-tourism.seedsaverskenya.org${video.thumbnail}`,
        uploadDate: video.date,
        duration: video.duration,
        embedUrl: video.embedUrl,
        interactionStatistic: {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WatchAction",
          userInteractionCount: video.views,
        },
      })),
    };
  };

  // Generate structured data for testimonials
  const generateTestimonialsStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Visitor Testimonials - Seed Savers Network Kenya",
      description:
        "Real experiences from participants in our agroecology programs",
      numberOfItems: allTestimonials.length,
      itemListElement: allTestimonials.map((testimonial, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: testimonial.name,
            nationality: testimonial.location,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody: testimonial.quote,
          datePublished: testimonial.date,
          itemReviewed: {
            "@type": "TouristTrip",
            name: testimonial.program,
            provider: {
              "@type": "Organization",
              name: "Seed Savers Network Kenya",
            },
          },
        },
      })),
    };
  };

  return (
    <>
      <Helmet>
        <html lang="en" />

        {/* Primary Meta Tags */}
        <title>Gallery | Seeds, Food & Culture - Tourism Experiences</title>
        <meta
          name="title"
          content="Gallery & Visitor Stories | Seed Savers Network Kenya - Agroecology Tourism"
        />
        <meta
          name="description"
          content="Explore authentic photos, videos, and testimonials from our agroecology programs in Kenya. See Global Fellowship participants, seed conservation, and community experiences. 3000+ seed varieties, 400+ communities."
        />
        <meta
          name="keywords"
          content="agroecology gallery Kenya, seed savers photos, agroecology tourism videos, visitor testimonials Kenya, seed conservation images, farm life Kenya, community seed bank photos, agroecology education, sustainable farming Kenya"
        />
        <meta name="author" content="Seed Savers Network Kenya" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://agro-tourism.seedsaverskenya.org/gallery"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://agro-tourism.seedsaverskenya.org/gallery"
        />
        <meta
          property="og:title"
          content="Gallery & Visitor Stories - Seed Savers Network Kenya"
        />
        <meta
          property="og:description"
          content="Explore authentic moments from our agroecology programs: photos, videos, and testimonials from participants in Kenya's seed sovereignty movement."
        />
        <meta
          property="og:image"
          content="https://agro-tourism.seedsaverskenya.org/og-gallery.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Seed Savers Network Kenya gallery - Agroecology in action"
        />
        <meta property="og:site_name" content="Seed Savers Network Kenya" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://agro-tourism.seedsaverskenya.org/gallery"
        />
        <meta
          name="twitter:title"
          content="Gallery & Visitor Stories - Seed Savers Network Kenya"
        />
        <meta
          name="twitter:description"
          content="Authentic photos, videos, and testimonials from agroecology programs in Kenya"
        />
        <meta
          name="twitter:image"
          content="https://agro-tourism.seedsaverskenya.org/og-gallery.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Seed Savers Network Kenya gallery"
        />

        {/* Additional SEO */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2d5a27" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateImageGalleryStructuredData())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateVideoStructuredData())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateTestimonialsStructuredData())}
        </script>

        {/* Aggregate Rating Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Seed Savers Network Kenya Agroecology Programs",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "47",
              bestRating: "5",
              worstRating: "1",
            },
            review: allTestimonials.slice(0, 3).map((t) => ({
              "@type": "Review",
              author: t.name,
              reviewBody: t.quote,
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            })),
          })}
        </script>
      </Helmet>

      <main className="media-stories-page">
        {/* Hero Section - Magazine Style */}
        <section
          className="media-hero"
          aria-label="Gallery and stories hero section"
        >
          <div className="hero-img-wrap" ref={heroImageRef}>
            <img
              src={heroImage}
              alt="Seed Savers Network Kenya - Agroecology and seed conservation"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-content">
            <Link to="/" className="back-link" aria-label="Return to home page">
              <span aria-hidden="true">←</span> Back to Home
            </Link>
            <span className="hero-eyebrow">
              Seed Savers Network Kenya | Est. 2009
            </span>
            <h1 className="hero-title">
              <span className="hero-title-line">Our Visual Stories</span>
              <span className="hero-title-line">& Community Voices</span>
            </h1>
            <p className="hero-subtitle">
              Experience the journey through the eyes of our community — from
              hands-on farming to cultural exchanges and seed sovereignty in
              action across 400+ communities in Kenya.
            </p>
            <div className="hero-scroll-cue">
              <span>Discover More</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section
          className="tab-navigation"
          aria-label="Content navigation tabs"
        >
          <div className="tab-container">
            <div className="tabs" role="tablist">
              <button
                className={`tab ${activeTab === "gallery" ? "active" : ""}`}
                onClick={() => setActiveTab("gallery")}
                role="tab"
                aria-selected={activeTab === "gallery"}
                aria-label="View photo and video gallery"
              >
                Visual Gallery
              </button>
              <button
                className={`tab ${activeTab === "stories" ? "active" : ""}`}
                onClick={() => setActiveTab("stories")}
                role="tab"
                aria-selected={activeTab === "stories"}
                aria-label="Read visitor testimonials and stories"
              >
                Visitor Stories
              </button>
            </div>
          </div>
        </section>

        <div className="media-container">
          {/* GALLERY TAB */}
          {activeTab === "gallery" && (
            <section
              className="gallery-section fade-in"
              aria-label="Photo and video gallery"
            >
              <div className="section-header">
                <span className="section-label">Visual Archive Since 2009</span>
                <h2>Moments from the Field</h2>
                <p>
                  Authentic glimpses into our programs, farms, and community
                  life across rural Kenya
                </p>
              </div>

              {/* Filter Controls */}
              <div className="gallery-controls">
                <div className="media-type-filters">
                  <button
                    className={`media-filter ${galleryFilter === "all" ? "active" : ""}`}
                    onClick={() => setGalleryFilter("all")}
                    aria-label="Show all media"
                  >
                    All Media
                  </button>
                  <button
                    className={`media-filter ${galleryFilter === "photos" ? "active" : ""}`}
                    onClick={() => setGalleryFilter("photos")}
                    aria-label="Show only photos"
                  >
                    Photos ({allPhotos.length})
                  </button>
                  <button
                    className={`media-filter ${galleryFilter === "videos" ? "active" : ""}`}
                    onClick={() => setGalleryFilter("videos")}
                    aria-label="Show only videos"
                  >
                    Videos ({allVideos.length})
                  </button>
                </div>

                {galleryFilter !== "videos" && (
                  <div className="category-filters">
                    {photoCategories.map((cat) => (
                      <button
                        key={cat}
                        className={`category-filter ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                        aria-label={`Filter by ${cat === "all" ? "all categories" : cat}`}
                      >
                        {cat === "all"
                          ? "All Categories"
                          : cat.charAt(0).toUpperCase() +
                            cat.slice(1).replace("-", " ")}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Gallery Grid */}
              <div className="gallery-grid">
                {filteredGalleryItems().map((item) => {
                  if ("embedUrl" in item) {
                    return (
                      <div
                        key={item.id}
                        className="gallery-card video-card"
                        onClick={() =>
                          openLightbox("video", item.embedUrl, {
                            title: item.title,
                          })
                        }
                        role="button"
                        tabIndex={0}
                        aria-label={`Play video: ${item.title}`}
                      >
                        <div className="card-media">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="play-button" aria-hidden="true">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon
                                points="5 3 19 12 5 21 5 3"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <span className="video-duration">
                            {item.duration}
                          </span>
                        </div>
                        <div className="card-info">
                          <h3>{item.title}</h3>
                          <div className="meta">
                            <span>{item.date}</span>
                            <span>{item.views} views</span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={item.id}
                        className="gallery-card photo-card"
                        onClick={() =>
                          openLightbox("photo", item.src, {
                            alt: item.alt,
                            location: item.location,
                            date: item.date,
                            description: item.description,
                          })
                        }
                        role="button"
                        tabIndex={0}
                        aria-label={`View photo: ${item.alt}`}
                      >
                        <div className="card-media">
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="card-category">
                            {item.category.replace("-", " ")}
                          </span>
                        </div>
                        <div className="card-info">
                          <h3>{item.alt}</h3>
                          <div className="meta">
                            <span>📍 {item.location}</span>
                            <span>📅 {item.date}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              {filteredGalleryItems().length === 0 && (
                <div className="no-results">
                  <p>No media found matching your criteria</p>
                </div>
              )}
            </section>
          )}

          {/* STORIES TAB */}
          {activeTab === "stories" && (
            <section
              className="stories-section fade-in"
              aria-label="Visitor testimonials and stories"
            >
              <div className="section-header">
                <span className="section-label">
                  Community Voices Since 2009
                </span>
                <h2>Stories From Our Visitors</h2>
                <p>
                  Real experiences from researchers, travelers, and partners
                  from around the world
                </p>
              </div>

              {/* Featured Story */}
              <div className="featured-story">
                <div className="featured-content">
                  <span className="featured-badge">Featured Story</span>
                  <blockquote>
                    "The Seed Savers Network isn't just preserving seeds —
                    they're preserving knowledge, culture, and hope for future
                    generations."
                  </blockquote>
                  <div className="featured-author">
                    <img
                      src={sarahAvatar}
                      alt="Dr. Sarah Kimani - Research Partner"
                      loading="lazy"
                    />
                    <div>
                      <strong>Dr. Sarah Kimani</strong>
                      <span>Research Partner, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter */}
              <div className="stories-filter">
                <span className="filter-label">Filter by visitor type:</span>
                <div className="filter-buttons">
                  {testimonialTypes.map((type) => (
                    <button
                      key={type}
                      className={`story-filter-btn ${testimonialFilter === type ? "active" : ""}`}
                      onClick={() => setTestimonialFilter(type)}
                      aria-label={`Filter testimonials by ${type}`}
                    >
                      {type === "all" ? "All Stories" : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="testimonials-grid">
                {filteredTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-card"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <div className="testimonial-header">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} from ${testimonial.location}`}
                        className="testimonial-avatar"
                        loading="lazy"
                      />
                      <div>
                        <h3 itemProp="author">{testimonial.name}</h3>
                        <p className="testimonial-meta">
                          {testimonial.location} • {testimonial.type}
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p itemProp="reviewBody">"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-footer">
                      <span className="program-badge" itemProp="itemReviewed">
                        {testimonial.program}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Lightbox */}
        {lightbox?.isOpen && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                ×
              </button>

              {lightbox.type === "photo" ? (
                <>
                  <img
                    src={lightbox.src}
                    alt={lightbox.metadata?.alt || "Gallery image"}
                    className="lightbox-image"
                  />
                  {lightbox.metadata && (
                    <div className="lightbox-meta">
                      <p className="lightbox-caption">
                        {lightbox.metadata.alt}
                      </p>
                      <p className="lightbox-description">
                        {lightbox.metadata.description}
                      </p>
                      <div className="lightbox-details">
                        <span>📍 {lightbox.metadata.location}</span>
                        <span>📅 {lightbox.metadata.date}</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <iframe
                    src={lightbox.src}
                    title={lightbox.title || "Video player"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="lightbox-video"
                  ></iframe>
                  {lightbox.title && (
                    <div className="lightbox-meta">
                      <p className="lightbox-caption">{lightbox.title}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default MediaAndStoriesPage;
