// About.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/about.css";

import agri001 from "../assets/ecology.jpeg";
import agroecology from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import seedSovereignty from "../assets/agri001.jpg";
import communityEngagement from "../assets/seed-ambasadors.webp";
import culturalExchange from "../assets/holding.webp";
import regenerativeTravel from "../assets/hero_1.webp";
import permaculture from "../assets/permculture.jpeg";
import foodSovereignty from "../assets/n.webp";
import forestGardens from "../assets/cooking.png";
import Cooking from "../assets/cooking.png";

/* ── tiny reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const experiences = [
  {
    title: "Agroecology",
    description:
      "Farming systems that work in harmony with biodiversity, soil health, and natural ecological cycles.",
    image: agroecology,
    icon: "",
    category: "farming",
  },
  {
    title: "Seed Sovereignty",
    description:
      "How farmers preserve indigenous seed varieties and maintain community seed systems.",
    image: seedSovereignty,
    icon: "",
    category: "knowledge",
  },
  {
    title: "Community Engagement",
    description:
      "Time with rural communities, learning directly from farmers and local leaders.",
    image: communityEngagement,
    icon: "",
    category: "people",
  },
  {
    title: "Cultural Exchange",
    description:
      "Traditional food, farming rituals, and cultural heritage rooted in land stewardship.",
    image: culturalExchange,
    icon: "",
    category: "culture",
  },
  {
    title: "Regenerative Travel",
    description:
      "Travel experiences designed to restore ecosystems while supporting local livelihoods.",
    image: regenerativeTravel,
    icon: "",
    category: "travel",
  },
  {
    title: "Permaculture",
    description:
      "Ecological design systems that create resilient landscapes and sustainable food production.",
    image: permaculture,
    icon: "",
    category: "farming",
  },
  {
    title: "Food Sovereignty",
    description:
      "How communities protect local food systems and agricultural independence.",
    image: foodSovereignty,
    icon: "",
    category: "food",
  },
  {
    title: "Cooking & Cuisine",
    description:
      "Hands-on cooking sessions with local farmers, learning to prepare traditional dishes using indigenous ingredients.",
    image: forestGardens,
    icon: "",
    category: "food",
  },
];

// Featured pathway component (hero card)
function FeaturedPathway({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  
  return (
    <div
      ref={ref}
      className={`eight-featured ${visible ? "eight-featured--visible" : ""}`}
    >
      <div className="eight-featured__image-wrapper">
        <img src={exp.image} alt={exp.title} loading="lazy" />
        <div className="eight-featured__overlay">
          <span className="eight-featured__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="eight-featured__icon">{exp.icon}</span>
        </div>
      </div>
      
      <div className="eight-featured__content">
        <div className="eight-featured__tag">Featured Pathway</div>
        <h3 className="eight-featured__title">{exp.title}</h3>
        <p className="eight-featured__description">{exp.description}</p>
        
        <div className="eight-featured__stats">
          <div className="eight-featured__stat">
            <span className="eight-featured__stat-value">500+</span>
            <span className="eight-featured__stat-label">Visitors</span>
          </div>
          <div className="eight-featured__stat">
            <span className="eight-featured__stat-value">4.9</span>
            <span className="eight-featured__stat-label">Rating</span>
          </div>
          
        </div>

        
      </div>
    </div>
  );
}

// Grid card component (redesigned)
function PathwayCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, visible } = useReveal(0.08);
  
  return (
    <div
      ref={ref}
      className={`eight-card ${visible ? "eight-card--visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 75}ms` }}
      data-category={exp.category}
    >
      <div className="eight-card__inner">
        <div className="eight-card__icon-wrapper">
          <span className="eight-card__icon">{exp.icon}</span>
          <span className="eight-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        
        <div className="eight-card__image-wrapper">
          <img src={exp.image} alt={exp.title} loading="lazy" />
          <div className="eight-card__image-shine"></div>
        </div>
        
        <div className="eight-card__content">
          <h3 className="eight-card__title">{exp.title}</h3>
          <p className="eight-card__description">{exp.description}</p>
          
          <div className="eight-card__bottom">
            <span className="eight-card__category">{exp.category}</span>
            <span className="eight-card__arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  const storyReveal = useReveal(0.12);
  const philoReveal = useReveal(0.12);
 
  
  const [activeFilter, setActiveFilter] = useState("All Pathways");

  const filteredExperiences = activeFilter === "All Pathways" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter.toLowerCase());

  return (
    <section id="about" className="ab">
      {/* ── MASTHEAD RULE ── */}
      <div className="ab__masthead">
        <span className="ab__masthead-label">Our Story</span>
        <span className="ab__masthead-rule" />
        <span className="ab__masthead-vol">
          Vol. I — Seed Savers Network Kenya
        </span>
      </div>

      {/* ── HEADLINE BLOCK ── */}
      <div className="ab__headline-block">
        <div className="ab__headline-wrap">
          <p className="ab__kicker">What is</p>
          <h2 className="ab__headline">
            <span>Seeds,</span>
            <span>
              <em>Food</em>
            </span>
            <span>&amp; Culture Tourism</span>
          </h2>
        </div>
        <p className="ab__standfirst">
          A subsection of Seed Savers Network Kenya — connecting travelers with
          the landscapes, communities, and knowledge systems that sustain food
          and biodiversity across rural Kenya.
        </p>
      </div>

      {/* ── STORY SPREAD ── */}
      <div
        ref={storyReveal.ref}
        className={`ab__spread ${storyReveal.visible ? "ab__spread--on" : ""}`}
      >
        <div className="ab__spread-img">
          <img
            src={agri001}
            alt="Farming landscape with community members"
            loading="lazy"
          />
          <span className="ab__spread-caption">Nyeri County, Kenya</span>
        </div>
        <div className="ab__spread-text">
          <span className="ab__pull-num">01</span>
          <blockquote className="ab__pull">
            Responsible travel that immerses visitors in agroecological farming,
            indigenous food systems, cultural exchange, and rural livelihoods —
            while strengthening seed sovereignty and community resilience.
          </blockquote>
          <div className="ab__byline-rule" />
          <p className="ab__body-text">
            Across rural Kenya, farmers have preserved indigenous crops,
            traditional agricultural practices, and ecological knowledge for
            generations. These systems offer powerful insights into resilience,
            sustainability, and cultural identity.
          </p>
          <p className="ab__body-text">
            Through immersive travel, visitors participate in real farming
            activities, cultural exchanges, and community initiatives that
            directly strengthen seed sovereignty and rural livelihoods.
          </p>
        </div>
      </div>

      {/* ── PHILOSOPHY STRIP ── */}
      <div
        ref={philoReveal.ref}
        className={`ab__philo ${philoReveal.visible ? "ab__philo--on" : ""}`}
      >
        <div className="ab__philo-inner">
          <div className="ab__philo-label">
            <span>Philosophy</span>
          </div>
          <div className="ab__philo-body">
            <h3 className="ab__philo-heading">
              Land. People.
              <br />
              <em>Knowledge.</em>
            </h3>
            <p>
              The health of ecosystems, communities, and cultures are deeply
              interconnected. Sustainable agriculture is not only about food
              production — it is about preserving biodiversity, knowledge, and
              the relationships between people and land.
            </p>
          </div>
          <div className="ab__philo-img">
            <img src={Cooking} alt="Permaculture design" loading="lazy" />
          </div>
        </div>
      </div>

      {/* ── EIGHT PATHWAYS (REDESIGNED) ── */}
      <div className="eight-pathways">
        {/* Section Header */}
        <div className="eight-header">
          <div className="eight-header__top-line">
            <span className="eight-header__overline">Discover</span>
            <span className="eight-header__divider"></span>
            <span className="eight-header__overline">Eight Pathways</span>
          </div>
          
          <h2 className="eight-header__title">
            <span className="eight-header__title-line">Experiences</span>
            <span className="eight-header__title-line">
              Rooted in{" "}
              <em className="eight-header__title-emphasis">Land</em>
            </span>
            <span className="eight-header__title-line">
              &amp; <em className="eight-header__title-emphasis">Culture</em>
            </span>
          </h2>
          
          <p className="eight-header__description">
            Each pathway offers a unique lens into Kenya's agricultural 
            heritage — from seed saving to cultural cuisine.
          </p>

          {/* Filter Tags */}
          <div className="eight-header__filters">
            {["All Pathways", "Farming", "Knowledge", "Culture", "Food", "Travel", "People"].map((filter) => (
              <button
                key={filter}
                className={`eight-filter ${activeFilter === filter ? "eight-filter--active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Pathways Display */}
        {filteredExperiences.length === 8 && (
          <>
            {/* Featured Pathway (1st item - hero layout) - only show when all are visible */}
            <div className="eight-featured-wrapper">
              <FeaturedPathway exp={filteredExperiences[0]} index={0} />
            </div>

            {/* Pathways Grid (remaining 7 items) */}
            <div className="eight-grid-wrapper">
              <div className="eight-grid">
                {filteredExperiences.slice(1).map((exp, i) => (
                  <PathwayCard key={i} exp={exp} index={i + 1} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Filtered Grid (when showing specific categories) */}
        {filteredExperiences.length !== 8 && (
          <div className="eight-grid-wrapper">
            <div className="eight-grid">
              {filteredExperiences.map((exp, i) => (
                <PathwayCard key={i} exp={exp} index={experiences.indexOf(exp)} />
              ))}
            </div>
          </div>
        )}

        {filteredExperiences.length === 0 && (
          <div className="eight-empty">
            <p>No pathways found for this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="eight-bottom-cta">
          <div className="eight-bottom-cta__content">
            <span className="eight-bottom-cta__kicker">Ready to Begin?</span>
            <h3 className="eight-bottom-cta__heading">
              Choose Your Pathway Into Kenya's Living Agricultural Heritage
            </h3>
            <p className="eight-bottom-cta__text">
              Every experience supports local farmers and strengthens seed sovereignty.
            </p>
            <div className="eight-bottom-cta__actions">
              <a href="/about" className="eight-bottom-cta__btn eight-bottom-cta__btn--primary">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/contact" className="eight-bottom-cta__btn eight-bottom-cta__btn--secondary">
                Speak to a Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── 
      <div
        ref={ctaReveal.ref}
        className={`ab__cta ${ctaReveal.visible ? "ab__cta--on" : ""}`}
      >
        <div className="ab__cta-texture" />
        <div className="ab__cta-inner">
          <span className="ab__cta-kicker">Begin Here</span>
          <h2 className="ab__cta-heading">
            A Different Kind
            <br />
            <em>of Travel</em>
          </h2>
          <p className="ab__cta-sub">
            Experience agriculture, culture, and ecology through the people who
            live and nurture these landscapes every day.
          </p>
          <a href="/packages" className="ab__cta-btn">
            Explore Programs
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>*/}
    </section>
  );
};

export default About;