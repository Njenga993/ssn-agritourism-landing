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
  },
  {
    title: "Seed Sovereignty",
    description:
      "How farmers preserve indigenous seed varieties and maintain community seed systems.",
    image: seedSovereignty,
  },
  {
    title: "Community Engagement",
    description:
      "Time with rural communities, learning directly from farmers and local leaders.",
    image: communityEngagement,
  },
  {
    title: "Cultural Exchange",
    description:
      "Traditional food, farming rituals, and cultural heritage rooted in land stewardship.",
    image: culturalExchange,
  },
  {
    title: "Regenerative Travel",
    description:
      "Travel experiences designed to restore ecosystems while supporting local livelihoods.",
    image: regenerativeTravel,
  },
  {
    title: "Permaculture",
    description:
      "Ecological design systems that create resilient landscapes and sustainable food production.",
    image: permaculture,
  },
  {
    title: "Food Sovereignty",
    description:
      "How communities protect local food systems and agricultural independence.",
    image: foodSovereignty,
  },
  {
    title: "Cooking and Cuisine",
    description:
      " Hands-on cooking sessions with local farmers, learning to prepare traditional dishes using indigenous ingredients.",
    image: forestGardens,
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.08);
  return (
    <div
      ref={ref}
      className="ab-card"
      data-visible={visible}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="ab-card__img">
        <img src={exp.image} alt={exp.title} loading="lazy" />
        <span className="ab-card__idx">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="ab-card__body">
        <h3 className="ab-card__title">{exp.title}</h3>
        <p className="ab-card__desc">{exp.description}</p>
        <span className="ab-card__arrow">→</span>
      </div>
    </div>
  );
}

const About = () => {
  const storyReveal = useReveal(0.12);
  const philoReveal = useReveal(0.12);
  const gridReveal = useReveal(0.08);
  const ctaReveal = useReveal(0.2);

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

      {/* ── EXPERIENCES GRID ── */}
      <div className="ab__grid-section">
        <div className="ab__masthead">
          <span className="ab__masthead-label">Eight Pathways</span>
          <span className="ab__masthead-rule" />
        </div>
        <div className="ab__grid-headline">
          <h2>
            Experiences Rooted in
            <br />
            <em>Land and Culture</em>
          </h2>
        </div>
        <div
          ref={gridReveal.ref}
          className={`ab__grid ${gridReveal.visible ? "ab__grid--on" : ""}`}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
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
      </div>
    </section>
  );
};

export default About;
