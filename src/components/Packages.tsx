// Packages.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/packages.css";

import fellowshipImage from "../assets/ecology.jpeg";
import conferenceImage from "../assets/conference-room.webp";
import soloImage from "../assets/solo.jpeg";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const packages = [
  {
    id: 1,
    index: "01",
    title: "Global Fellowship",
    subtitle: "Immersive Learning Program",
    image: fellowshipImage,
    tag: "International Immersion",
    featured: false,
    description:
      "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    duration: "Minimum 2 weeks",
    durationDetail: "Flexible 2–4 week programs",
    location: "Nakuru County",
    locationDetail: "Host farming communities",
    groupSize: "Individual",
    groupDetail: "Solo travelers & researchers",
    price: "From USD 433",
    priceDetail: "2 weeks: USD 433 · 3 weeks: EUR 548",
    experiences: [
      "Hands-on farming — planting, weeding, harvesting",
      "Indigenous seed practices & community seed banking",
      "Agroecology & climate-resilient farming methods",
      "Community engagement & knowledge-sharing",
      "Live with a host farming family",
    ],
    includes: ["Airport Pickup", "Project Orientation", "Accommodation", "3 Meals Daily", "In-Country Support"],
    formUrl: "https://forms.gle/your-fellowship-form",
    audience: "Students, researchers & professionals",
    availability: "Year-round enrollment",
  },
  {
    id: 2,
    index: "02",
    title: "Conference & Learning Exchange",
    subtitle: "Institutional Programs",
    image: conferenceImage,
    tag: "Group Experience",
    featured: true,
    description:
      "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    duration: "2–4 hours",
    durationDetail: "Half-day to full-day sessions",
    location: "SSN Learning Centre",
    locationDetail: "Dedicated training facility",
    groupSize: "Flexible groups",
    groupDetail: "10–100+ participants",
    price: "Custom Quote",
    priceDetail: "Pricing varies by group size & program",
    experiences: [
      "School programs — basic agriculture & seed saving",
      "University sessions — seed banking & food forest design",
      "Professional delegations — policy & development exchanges",
      "Practical demonstrations & dialogue",
      "Direct interaction with practitioners",
    ],
    includes: ["Structured learning environment", "Expert facilitators", "Practical demonstrations", "Flexible programming", "Meals on request"],
    formUrl: "https://forms.gle/your-conference-form",
    audience: "Schools, universities & professional groups",
    availability: "By arrangement",
  },
  {
    id: 3,
    index: "03",
    title: "Solo & Small-Group Agritourism",
    subtitle: "Tailored Experiences",
    image: soloImage,
    tag: "Personal Journey",
    featured: false,
    description:
      "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    duration: "Half-day to multi-day",
    durationDetail: "Flexible itineraries",
    location: "Nakuru County",
    locationDetail: "Multiple farm locations",
    groupSize: "1–12 people",
    groupDetail: "Intimate group settings",
    price: "70–100 USD/day",
    priceDetail: "Includes accommodation, meals, transport & activities",
    experiences: [
      "Hands-on farming & agroecology",
      "Indigenous seed & biodiversity experiences",
      "Traditional food preparation & cultural exchange",
      "Guided nature walks",
      "Community-led experiences",
    ],
    includes: ["Accommodation", "Full board meals", "Transport", "Hands-on activities", "Cultural exchange"],
    formUrl: "https://forms.gle/your-solo-form",
    audience: "Solo travelers, couples, families & small groups",
    availability: "Daily departures",
  },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      ref={ref}
      className={`pk-card ${pkg.featured ? "pk-card--featured" : ""}`}
      data-visible={visible}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image Section */}
      <div className="pk-card__img-section">
        <div className="pk-card__img">
          <img src={pkg.image} alt={pkg.title} loading="lazy" />
          {pkg.featured && (
            <span className="pk-card__featured-badge">Most Popular</span>
          )}
          <span className="pk-card__img-tag">{pkg.tag}</span>
          <span className="pk-card__img-number">{pkg.index}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="pk-card__content">
        {/* Header */}
        <header className="pk-card__header">
          <div className="pk-card__header-top">
            <span className="pk-card__category">{pkg.subtitle}</span>
            <span className="pk-card__availability">{pkg.availability}</span>
          </div>
          <h3 className="pk-card__title">{pkg.title}</h3>
        </header>

        {/* Description */}
        <p className="pk-card__description">{pkg.description}</p>

        {/* Quick Stats */}
        <div className="pk-card__stats">
          <div className="pk-stat">
            <span className="pk-stat__label">Duration</span>
            <span className="pk-stat__value">{pkg.duration}</span>
            <span className="pk-stat__detail">{pkg.durationDetail}</span>
          </div>
          <div className="pk-stat">
            <span className="pk-stat__label">Location</span>
            <span className="pk-stat__value">{pkg.location}</span>
            <span className="pk-stat__detail">{pkg.locationDetail}</span>
          </div>
          <div className="pk-stat">
            <span className="pk-stat__label">Group Size</span>
            <span className="pk-stat__value">{pkg.groupSize}</span>
            <span className="pk-stat__detail">{pkg.groupDetail}</span>
          </div>
        </div>

        {/* Price Box */}
        <div className="pk-card__price-box">
          <div className="pk-price__main">
            <span className="pk-price__label">Investment</span>
            <span className="pk-price__value">{pkg.price}</span>
          </div>
          <p className="pk-price__detail">{pkg.priceDetail}</p>
        </div>

        {/* Expandable Details */}
        <div className="pk-card__expandable">
          <button
            className={`pk-expand-toggle ${expanded ? "pk-expand-toggle--open" : ""}`}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <span className="pk-expand-toggle__text">
              {expanded ? "Show Less" : "View Program Details"}
            </span>
            <span className="pk-expand-toggle__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
              </svg>
            </span>
          </button>

          <div className={`pk-expand-content ${expanded ? "pk-expand-content--open" : ""}`}>
            <div className="pk-expand-grid">
              {/* Experiences Column */}
              <div className="pk-expand-col">
                <h4 className="pk-expand-heading">
                  <span className="pk-expand-heading__icon">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="8" cy="8" r="6"/>
                      <path d="M8 4v4l3 2"/>
                    </svg>
                  </span>
                  Core Experiences
                </h4>
                <ul className="pk-expand-list">
                  {pkg.experiences.map((item, i) => (
                    <li key={i} className="pk-expand-list__item">
                      <span className="pk-expand-list__marker">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="6" cy="6" r="3"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes Column */}
              <div className="pk-expand-col">
                <h4 className="pk-expand-heading">
                  <span className="pk-expand-heading__icon">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8l3.5 3.5L13 4.5"/>
                    </svg>
                  </span>
                  What's Included
                </h4>
                <ul className="pk-expand-list">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="pk-expand-list__item pk-expand-list__item--included">
                      <span className="pk-expand-list__marker pk-expand-list__marker--check">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Audience */}
            <div className="pk-expand-audience">
              <span className="pk-expand-audience__label">Ideal For</span>
              <span className="pk-expand-audience__value">{pkg.audience}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pk-card__actions">
          
          <a href="/packages" className="pk-btn pk-btn--secondary">
            Compare Programs
          </a>
        </div>
      </div>
    </article>
  );
}

const Packages = () => {
  const headReveal = useReveal(0.15);
  const gridReveal = useReveal(0.08);
  const ctaReveal = useReveal(0.2);

  return (
    <section id="packages" className="pk">
      {/* Masthead */}
      <div className="pk__masthead">
        <span className="pk__masthead-label">Programs</span>
        <span className="pk__masthead-rule" />
        <span className="pk__masthead-vol">Three ways to experience Kenya</span>
      </div>

      {/* Headline Block */}
      <div
        ref={headReveal.ref}
        className={`pk__head ${headReveal.visible ? "pk__head--on" : ""}`}
      >
        <div className="pk__head-inner">
          <div className="pk__head-left">
            <span className="pk__head-overline">Curated Journeys</span>
            <h2 className="pk__headline">
              <span className="pk__headline-line">Ecology,</span>
              <span className="pk__headline-line">
                <em>Food &amp; Culture</em>
              </span>
              <span className="pk__headline-line">Tourism Programs</span>
            </h2>
          </div>
          <div className="pk__head-right">
            <p className="pk__standfirst">
              Authentic, community-led experiences designed for individuals, 
              institutions, and small groups seeking immersive agroecological 
              learning across rural Kenya.
            </p>
            <div className="pk__head-stats">
              <div className="pk-head-stat">
                <span className="pk-head-stat__number">3</span>
                <span className="pk-head-stat__label">Program Types</span>
              </div>
              <div className="pk-head-stat">
                <span className="pk-head-stat__number">5+</span>
                <span className="pk-head-stat__label">Years Running</span>
              </div>
              <div className="pk-head-stat">
                <span className="pk-head-stat__number">200+</span>
                <span className="pk-head-stat__label">Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div
        ref={gridReveal.ref}
        className={`pk__grid ${gridReveal.visible ? "pk__grid--on" : ""}`}
      >
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        ref={ctaReveal.ref}
        className={`pk__cta ${ctaReveal.visible ? "pk__cta--on" : ""}`}
      >
        <div className="pk__cta-content">
          <div className="pk__cta-text">
            <span className="pk__cta-overline">Not Sure Which Program Fits?</span>
            <h3 className="pk__cta-heading">
              We'll help you find the right experience
            </h3>
            <p className="pk__cta-description">
              Speak with our program coordinator to discuss your interests, 
              timeline, and learning goals. We'll recommend the program that 
              best matches your needs.
            </p>
          </div>
          <div className="pk__cta-actions">
            <a href="/contact" className="pk-btn pk-btn--primary pk-btn--large">
              Schedule a Call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/packages" className="pk-btn pk-btn--secondary pk-btn--large">
              Download Program Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;