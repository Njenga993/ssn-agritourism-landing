// About.tsx - Fully SEO Optimized
import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from "../components/StructuredData";
import "../styles/aboutpage.css";

// Optimized image imports with lazy loading hints
import agri001 from "../assets/ecology.jpeg";
import agroecology from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import seedSovereignty from "../assets/agri001.jpg";
import communityEngagement from "../assets/seed-ambasadors.webp";
import culturalExchange from "../assets/holding.webp";
import regenerativeTravel from "../assets/hero_1.webp";
import permaculture from "../assets/permculture.jpeg";
import foodSovereignty from "../assets/n.webp";
import forestGardens from "../assets/n.webp";

/* ── Intersection Observer hook for scroll reveals ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "50px" }, // Improved performance
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// Experience data with SEO-optimized descriptions
const experiences = [
  {
    title: "Agroecology",
    description:
      "Farming systems that work in harmony with biodiversity, soil health, and natural ecological cycles.",
    longDescription:
      "Learn how Kenyan farmers integrate ecological principles into food production, creating resilient agricultural systems that work with nature, not against it.",
    image: agroecology,
  },
  {
    title: "Seed Sovereignty",
    description:
      "How farmers preserve indigenous seed varieties and maintain community seed systems.",
    longDescription:
      "Discover the critical role of indigenous seed banks and farmer-led conservation in preserving Kenya's agricultural biodiversity for future generations.",
    image: seedSovereignty,
  },
  {
    title: "Community Engagement",
    description:
      "Time with rural communities, learning directly from farmers and local leaders.",
    longDescription:
      "Immerse yourself in rural Kenyan life through meaningful exchanges with farmers, elders, and community organizations working toward food sovereignty.",
    image: communityEngagement,
  },
  {
    title: "Cultural Exchange",
    description:
      "Traditional food, farming rituals, and cultural heritage rooted in land stewardship.",
    longDescription:
      "Experience the deep connection between Kenyan culture and agriculture through traditional food preparation, farming ceremonies, and oral histories.",
    image: culturalExchange,
  },
  {
    title: "Regenerative Travel",
    description:
      "Travel experiences designed to restore ecosystems while supporting local livelihoods.",
    longDescription:
      "Participate in travel that actively regenerates landscapes, supports rural economies, and leaves a positive impact on host communities.",
    image: regenerativeTravel,
  },
  {
    title: "Permaculture",
    description:
      "Ecological design systems that create resilient landscapes and sustainable food production.",
    longDescription:
      "Explore permaculture design principles applied to Kenyan farming systems, creating self-sustaining agricultural ecosystems that mimic nature.",
    image: permaculture,
  },
  {
    title: "Food Sovereignty",
    description:
      "How communities protect local food systems and agricultural independence.",
    longDescription:
      "Understand the movement for food sovereignty in Kenya and how communities are reclaiming control over their food systems and agricultural policies.",
    image: foodSovereignty,
  },
  {
    title: "Food Forests",
    description:
      "Multi-layered forest gardens producing food while regenerating ecosystems.",
    longDescription:
      "Walk through multi-story food forests that produce abundant harvests while building soil, capturing carbon, and supporting biodiversity.",
    image: forestGardens,
  },
];

// Optimized Experience Card with lazy loading and proper alt text
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="experience-card"
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
      data-visible={visible}
      itemScope
      itemType="https://schema.org/EducationalOccupationalProgram"
    >
      <div className="card-image-wrap">
        <img
          src={exp.image}
          alt={`${exp.title} - Agroecology experience in Kenya`}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
        />
        <span
          className="card-index"
          aria-label={`Experience ${index + 1} of 8`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="card-body">
        <h3 itemProp="name">{exp.title}</h3>
        <p itemProp="description">{exp.description}</p>
        <span className="card-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </div>
  );
}

const About = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const introReveal = useReveal(0.15);
  const philoReveal = useReveal(0.15);
  const impactReveal = useReveal(0.15);
  const ctaReveal = useReveal(0.2);

  // Optimized parallax effect with passive scrolling
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        // Limit transform for performance
        const yOffset = Math.min(window.scrollY * 0.28, 150);
        heroRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Structured data for the eight pathways
  const eightPathwaysStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eight Pathways of Agroecology Experience",
    description:
      "Immersive learning experiences in agroecology, seed sovereignty, and cultural exchange in rural Kenya",
    numberOfItems: 8,
    itemListElement: experiences.map((exp, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "EducationalOccupationalProgram",
        name: exp.title,
        description: exp.longDescription,
        occupationalLearningSetting: "Rural Kenya, Nakuru County",
        timeToComplete: "Varies by program",
      },
    })),
  };

  return (
    <>
      {/* Main SEO Component */}
      <SEO
        title="About Us | Seed , Food & Culture Tourism - Seed Savers Network Kenya"
        description="Discover agroecology, seed sovereignty, and indigenous food systems in rural Kenya. Since 2009, we've connected travelers with 400+ communities preserving traditional farming knowledge and biodiversity."
        canonicalUrl="/about"
        ogImage="/og-about.jpg"
        ogType="website"
        publishedTime="2009-01-01"
      />

      {/* Organization Schema Markup */}
      <OrganizationStructuredData />
      <WebsiteStructuredData />

      {/* Eight Pathways Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(eightPathwaysStructuredData)}
      </script>

      {/* FAQ Structured Data for common questions */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Ecology, Food and Culture Tourism?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A subsection of Seed Savers Network Kenya connecting travelers with landscapes, communities, and knowledge systems that sustain food and biodiversity across rural Kenya.",
              },
            },
            {
              "@type": "Question",
              name: "Where is this located in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our programs are based in Nakuru County, Kenya, approximately 2.5 hours from Nairobi, with partner communities across rural Kenya.",
              },
            },
            {
              "@type": "Question",
              name: "How long has Seed Savers Network been operating?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Since 2009, with over 15 years of stewardship in seed sovereignty and agroecology.",
              },
            },
          ],
        })}
      </script>

      {/* Breadcrumb navigation for SEO */}
      <nav aria-label="Breadcrumb" className="about-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
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
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name" aria-current="page">
              About Us
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <section
        className="about-page"
        aria-label="About Ecology, Food and Culture Tourism"
      >
        {/* ── HERO SECTION with SEO enhancements ── */}
        <div className="about-hero">
          <div className="hero-img-wrap">
            <img
              src={agri001}
              alt="Ecology farming landscape in rural Kenya showing sustainable agriculture practices"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
          </div>
          <div className="about-hero-overlay">
            <p className="hero-eyebrow">
              Seed Savers Network Kenya | Est. 2009
            </p>
            <h1>
              <span>Seeds,</span>
              <span>Food</span>
              <span>&amp; Culture Tourism</span>
            </h1>
            <p className="hero-sub">
              A journey into agroecology, indigenous food systems,
              <br />
              and living community knowledge in rural Kenya.
            </p>
            <a
              href="#story"
              className="hero-scroll-cue"
              aria-label="Scroll to learn our story"
            >
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
            </a>
          </div>
          <div className="hero-bottom-rule" />
        </div>

        {/* ── STORY SECTION ── */}
        <div
          id="story"
          ref={introReveal.ref}
          className={`about-intro-section ${introReveal.visible ? "revealed" : ""}`}
        >
          <div className="about-container intro-layout">
            <div className="intro-label">
              <span>Our Story Since 2009</span>
            </div>
            <div className="intro-text">
              <p className="intro-lead">
                <strong>Seeds, Food and Culture Tourism</strong> is an
                initiative of <strong>Seed Savers Network Kenya</strong> —
                connecting travelers with the landscapes, communities, and
                knowledge systems that sustain food and biodiversity across
                rural Kenya.
              </p>
              <p>
                Across rural Kenya, farmers have preserved indigenous crops,
                traditional agricultural practices, and ecological knowledge for
                generations. These systems offer powerful insights into
                resilience, sustainability, and cultural identity.
              </p>
              <p>
                Through immersive travel, visitors participate in real farming
                activities, cultural exchanges, and community initiatives that
                strengthen <strong>seed sovereignty</strong>
                and rural livelihoods across{" "}
                <strong>400+ partner communities</strong>.
              </p>
            </div>
          </div>
          <div className="intro-divider" />
        </div>

        {/* ── PHILOSOPHY SECTION ── */}
        <div
          ref={philoReveal.ref}
          className={`about-philosophy ${philoReveal.visible ? "revealed" : ""}`}
        >
          <div className="about-container philo-layout">
            <div className="philo-image-wrap">
              <img
                src={permaculture}
                alt="Permaculture farm design in Nyeri County, Kenya showing sustainable land management"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              <div className="philo-caption">
                Nyeri County, Kenya — Permaculture Demonstration Farm
              </div>
            </div>
            <div className="philo-text">
              <span className="section-label">Our Philosophy</span>
              <h2>
                Land. People.
                <br />
                Knowledge.
              </h2>
              <p>
                The health of ecosystems, communities, and cultures are deeply
                interconnected. Sustainable agriculture is not only about food
                production but about preserving biodiversity, knowledge, and the
                relationships between people and land.
              </p>
              <p>
                By reconnecting travelers with small-scale farmers and
                agroecological landscapes, the program offers a deeper
                understanding of how resilient food systems are built — and why
                they matter for Kenya's agricultural future.
              </p>
            </div>
          </div>
        </div>

        {/* ── EXPERIENCES SECTION ── */}
        <div className="about-experiences">
          <div className="about-container">
            <div className="experiences-header">
              <span className="section-label">Eight Pathways of Learning</span>
              <h2>
                Experiences Rooted in
                <br />
                Land and Culture
              </h2>
              <p className="experiences-subhead">
                Discover the core pillars of our agroecology tourism programs,
                each designed to deepen your understanding of sustainable
                farming and cultural heritage in Kenya.
              </p>
            </div>
            <div className="experience-grid">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ── IMPACT SECTION ── */}
        <div
          ref={impactReveal.ref}
          className={`about-impact ${impactReveal.visible ? "revealed" : ""}`}
        >
          <div className="about-container impact-layout">
            <div className="impact-text">
              <span className="section-label">Why It Matters</span>
              <h2>Generations of Knowledge at Risk</h2>
              <p>
                Small-scale farmers hold centuries of knowledge about
                biodiversity, climate resilience, and sustainable land
                management. Protecting this knowledge is essential for future
                food systems in Kenya and beyond.
              </p>
              <p>
                By connecting visitors with communities preserving these
                traditions, Ecology, Food and Culture Tourism supports efforts
                to protect seeds, landscapes, and cultural heritage for those
                who will inherit the land.
              </p>
              <div className="impact-stats">
                <div className="stat">
                  <strong>3000+</strong>
                  <span>Indigenous Seed Varieties</span>
                  <small>Preserved in community seed banks</small>
                </div>
                <div className="stat">
                  <strong>400+</strong>
                  <span>Partner Communities</span>
                  <small>Across rural Kenya</small>
                </div>
                <div className="stat">
                  <strong>17+</strong>
                  <span>Years of Stewardship</span>
                  <small>Since 2009</small>
                </div>
              </div>
            </div>
            <div className="impact-image-wrap">
              <img
                src={foodSovereignty}
                alt="Food sovereignty farming in Kenya - Community members tending indigenous crops"
                loading="lazy"
                decoding="async"
                width="600"
                height="500"
              />
            </div>
          </div>
        </div>

        {/* ── CTA SECTION ── */}
        <div
          ref={ctaReveal.ref}
          className={`about-cta ${ctaReveal.visible ? "revealed" : ""}`}
        >
          <div className="cta-texture" aria-hidden="true" />
          <div className="about-container cta-inner">
            <span className="section-label light">Begin Your Journey</span>
            <h2>
              A Different Kind
              <br />
              of Travel Awaits
            </h2>
            <p>
              Experience agriculture, culture, and ecology through the people
              who live and nurture these landscapes every day in rural Kenya.
            </p>
            <a
              href="/packages"
              className="cta-btn"
              aria-label="Explore our agroecology tourism programs"
            >
              Explore Programs
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
