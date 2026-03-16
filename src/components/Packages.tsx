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
    subtitle: "Package",
    image: fellowshipImage,
    tag: "International Immersion",
    description:
      "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    duration: "Min. 2 weeks",
    location: "Nakuru County",
    groupSize: "Individual",
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
  },
  {
    id: 2,
    index: "02",
    title: "Conference &",
    subtitle: "Learning Exchange",
    image: conferenceImage,
    tag: "Institutional Programs",
    featured: true,
    description:
      "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    duration: "2–4 hours",
    location: "SSN Learning Centre",
    groupSize: "Flexible",
    price: "Custom Quote",
    priceDetail: "Pricing varies by group & program type",
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
  },
  {
    id: 3,
    index: "03",
    title: "Solo & Small-Group",
    subtitle: "Agritourism",
    image: soloImage,
    tag: "Tailored Experience",
    description:
      "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    duration: "Half-day to multi-day",
    location: "Nakuru County",
    groupSize: "1–12 people",
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* image */}
      <div className="pk-card__img">
        <img src={pkg.image} alt={pkg.title} loading="lazy" />
        <div className="pk-card__img-veil" />
        {pkg.featured && <span className="pk-card__featured-tag">Most Popular</span>}
        <span className="pk-card__tag">{pkg.tag}</span>
      </div>

      {/* head */}
      <div className="pk-card__head">
        <span className="pk-card__num">{pkg.index}</span>
        <div className="pk-card__title-wrap">
          <h3 className="pk-card__title">{pkg.title}</h3>
          <span className="pk-card__title-sub">{pkg.subtitle}</span>
        </div>
      </div>

      {/* specs row */}
      <div className="pk-card__specs">
        <div className="pk-spec">
          <span className="pk-spec__label">Duration</span>
          <span className="pk-spec__val">{pkg.duration}</span>
        </div>
        <div className="pk-spec">
          <span className="pk-spec__label">Location</span>
          <span className="pk-spec__val">{pkg.location}</span>
        </div>
        <div className="pk-spec">
          <span className="pk-spec__label">Group</span>
          <span className="pk-spec__val">{pkg.groupSize}</span>
        </div>
        <div className="pk-spec pk-spec--price">
          <span className="pk-spec__label">Price</span>
          <span className="pk-spec__val">{pkg.price}</span>
        </div>
      </div>

      {pkg.priceDetail && (
        <p className="pk-card__price-note">{pkg.priceDetail}</p>
      )}

      {/* desc */}
      <p className="pk-card__desc">{pkg.description}</p>

      {/* expandable */}
      <button
        className={`pk-card__toggle ${expanded ? "pk-card__toggle--open" : ""}`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{expanded ? "Hide details" : "What's included"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={`pk-card__drawer ${expanded ? "pk-card__drawer--open" : ""}`}>
        <div className="pk-drawer-inner">
          <div className="pk-drawer-col">
            <h4 className="pk-drawer-heading">Experiences</h4>
            <ul className="pk-list">
              {pkg.experiences.map((e, i) => (
                <li key={i} className="pk-list__item">
                  <span className="pk-list__dot" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="pk-drawer-col">
            <h4 className="pk-drawer-heading">Includes</h4>
            <ul className="pk-list">
              {pkg.includes.map((inc, i) => (
                <li key={i} className="pk-list__item pk-list__item--check">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="pk-check">
                    <path d="M3 8l3.5 3.5L13 4.5" />
                  </svg>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* audience */}
      <p className="pk-card__audience">{pkg.audience}</p>

      {/* actions */}
      <div className="pk-card__actions">
        <a href="/packages" className="pk-btn pk-btn--ghost">
          Learn More
        </a>
        <a
          href={pkg.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pk-btn pk-btn--fill"
        >
          Inquire Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}

const Packages = () => {
  const headReveal  = useReveal(0.15);
  const gridReveal  = useReveal(0.08);
  const footReveal  = useReveal(0.2);

  return (
    <section id="packages" className="pk">

      {/* ── MASTHEAD ── */}
      <div className="pk__masthead">
        <span className="pk__masthead-label">Programs</span>
        <span className="pk__masthead-rule" />
        <span className="pk__masthead-vol">Three ways to experience Kenya</span>
      </div>

      {/* ── HEADLINE BLOCK ── */}
      <div
        ref={headReveal.ref}
        className={`pk__head ${headReveal.visible ? "pk__head--on" : ""}`}
      >
        <div className="pk__head-left">
          <p className="pk__kicker">Our Packages</p>
          <h2 className="pk__headline">
            <span>Ecology, Food</span>
            <span><em>&amp; Culture</em></span>
            <span>Tourism</span>
          </h2>
        </div>
        <p className="pk__standfirst">
          Authentic, community-led experiences designed for individuals, institutions,
          and small groups seeking immersive agroecological learning across rural Kenya.
        </p>
      </div>

      {/* ── GRID ── */}
      <div
        ref={gridReveal.ref}
        className={`pk__grid ${gridReveal.visible ? "pk__grid--on" : ""}`}
      >
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>

      {/* ── FOOTER ── */}
      <div
        ref={footReveal.ref}
        className={`pk__footer ${footReveal.visible ? "pk__footer--on" : ""}`}
      >
        <div className="pk__footer-inner">
          <span className="pk__footer-rule" />
          <a href="/packages" className="pk__footer-link">
            View All Package Details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="pk__footer-rule" />
        </div>
      </div>

    </section>
  );
};

export default Packages;