// About.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/aboutpage.css";

import agri001 from "../assets/ecology.jpeg";
import agroecology from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import seedSovereignty from "../assets/agri001.jpg";
import communityEngagement from "../assets/seed-ambasadors.webp";
import culturalExchange from "../assets/holding.webp";
import regenerativeTravel from "../assets/hero_1.webp";
import permaculture from "../assets/permculture.jpeg";
import foodSovereignty from "../assets/n.webp";
import forestGardens from "../assets/n.webp";

/* ── tiny hook: fire once when element enters viewport ── */
function useReveal(threshold = 0.15) {
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

const experiences = [
  { title: "Agroecology",        description: "Farming systems that work in harmony with biodiversity, soil health, and natural ecological cycles.", image: agroecology },
  { title: "Seed Sovereignty",   description: "How farmers preserve indigenous seed varieties and maintain community seed systems.", image: seedSovereignty },
  { title: "Community Engagement", description: "Time with rural communities, learning directly from farmers and local leaders.", image: communityEngagement },
  { title: "Cultural Exchange",  description: "Traditional food, farming rituals, and cultural heritage rooted in land stewardship.", image: culturalExchange },
  { title: "Regenerative Travel", description: "Travel experiences designed to restore ecosystems while supporting local livelihoods.", image: regenerativeTravel },
  { title: "Permaculture",       description: "Ecological design systems that create resilient landscapes and sustainable food production.", image: permaculture },
  { title: "Food Sovereignty",   description: "How communities protect local food systems and agricultural independence.", image: foodSovereignty },
  { title: "Food Forests",       description: "Multi-layered forest gardens producing food while regenerating ecosystems.", image: forestGardens },
];

/* ── EXPERIENCE CARD with individual reveal ── */
function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="experience-card"
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
      data-visible={visible}
    >
      <div className="card-image-wrap">
        <img src={exp.image} alt={exp.title} />
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="card-body">
        <h3>{exp.title}</h3>
        <p>{exp.description}</p>
        <span className="card-arrow">→</span>
      </div>
    </div>
  );
}

const About = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const introReveal   = useReveal(0.15);
  const philoReveal   = useReveal(0.15);
  const impactReveal  = useReveal(0.15);
  const ctaReveal     = useReveal(0.2);

  /* parallax on hero image */
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about-page">

      {/* ── HERO ── */}
      <div className="about-hero">
        <div className="hero-img-wrap">
          <img  src={agri001} alt="Ecology farming landscape" />
        </div>
        <div className="about-hero-overlay">
          <p className="hero-eyebrow">Seed Savers Network Kenya</p>
          <h1>
            <span>Ecology,</span>
            <span>Food</span>
            <span>&amp; Culture</span>
          </h1>
          <p className="hero-sub">
            A journey into agroecology, indigenous food systems,<br />
            and living community knowledge.
          </p>
          <a href="#story" className="hero-scroll-cue">
            <span>Discover</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
        <div className="hero-bottom-rule" />
      </div>

      {/* ── STORY ── */}
      <div id="story" ref={introReveal.ref} className={`about-intro-section ${introReveal.visible ? "revealed" : ""}`}>
        <div className="about-container intro-layout">
          <div className="intro-label">
            <span>Our Story</span>
          </div>
          <div className="intro-text">
            <p className="intro-lead">
              Ecology, Food and Culture Tourism is an initiative of Seed Savers Network Kenya —
              connecting travelers with the landscapes, communities, and knowledge systems
              that sustain food and biodiversity.
            </p>
            <p>
              Across rural Kenya, farmers have preserved indigenous crops,
              traditional agricultural practices, and ecological knowledge for generations.
              These systems offer powerful insights into resilience, sustainability, and cultural identity.
            </p>
            <p>
              Through immersive travel, visitors participate in real farming activities,
              cultural exchanges, and community initiatives that strengthen seed sovereignty
              and rural livelihoods.
            </p>
          </div>
        </div>
        <div className="intro-divider" />
      </div>

      {/* ── PHILOSOPHY ── */}
      <div ref={philoReveal.ref} className={`about-philosophy ${philoReveal.visible ? "revealed" : ""}`}>
        <div className="about-container philo-layout">
          <div className="philo-image-wrap">
            <img src={permaculture} alt="Permaculture farm design" />
            <div className="philo-caption">Nyeri County, Kenya</div>
          </div>
          <div className="philo-text">
            <span className="section-label">Philosophy</span>
            <h2>Land. People.<br />Knowledge.</h2>
            <p>
              The health of ecosystems, communities, and cultures are deeply
              interconnected. Sustainable agriculture is not only about food production
              but about preserving biodiversity, knowledge, and the relationships
              between people and land.
            </p>
            <p>
              By reconnecting travelers with small-scale farmers and agroecological landscapes,
              the program offers a deeper understanding of how resilient food systems are built —
              and why they matter.
            </p>
          </div>
        </div>
      </div>

      {/* ── EXPERIENCES ── */}
      <div className="about-experiences">
        <div className="about-container">
          <div className="experiences-header">
            <span className="section-label">Eight Pathways</span>
            <h2>Experiences Rooted in<br />Land and Culture</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── IMPACT ── */}
      <div ref={impactReveal.ref} className={`about-impact ${impactReveal.visible ? "revealed" : ""}`}>
        <div className="about-container impact-layout">
          <div className="impact-text">
            <span className="section-label">Why It Matters</span>
            <h2>Generations of Knowledge at Risk</h2>
            <p>
              Small-scale farmers hold centuries of knowledge about biodiversity,
              climate resilience, and sustainable land management.
              Protecting this knowledge is essential for future food systems.
            </p>
            <p>
              By connecting visitors with communities preserving these traditions,
              Ecology, Food and Culture Tourism supports efforts to protect seeds,
              landscapes, and cultural heritage for those who will inherit the land.
            </p>
            <div className="impact-stats">
              <div className="stat">
                <strong>300+</strong>
                <span>Indigenous seed varieties</span>
              </div>
              <div className="stat">
                <strong>40+</strong>
                <span>Partner communities</span>
              </div>
              <div className="stat">
                <strong>15+</strong>
                <span>Years of stewardship</span>
              </div>
            </div>
          </div>
          <div className="impact-image-wrap">
            <img src={foodSovereignty} alt="Food sovereignty farming" />
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div ref={ctaReveal.ref} className={`about-cta ${ctaReveal.visible ? "revealed" : ""}`}>
        <div className="cta-texture" />
        <div className="about-container cta-inner">
          <span className="section-label light">Begin Here</span>
          <h2>A Different Kind<br />of Travel</h2>
          <p>
            Experience agriculture, culture, and ecology through the
            people who live and nurture these landscapes every day.
          </p>
          <a href="#packages" className="cta-btn">
            Explore Programs
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;