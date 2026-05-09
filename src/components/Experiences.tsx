import { useEffect, useRef, useState } from "react";
import "../styles/experiences.css";

const Experiences = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const experiences = [
    {
      id: 1,
      number: "01",
      title: "Hands-On Agroecology",
      subtitle: "Regenerative Practices",
      description:
        "Work alongside farmers in regenerative fields, learn sustainable planting methods, soil restoration, composting systems, and biodiversity conservation.",
      stats: { label: "Farmers Trained", value: "200+" },
      color: "#4A7C59",
    },
    {
      id: 2,
      number: "02",
      title: "Seed Conservation & Indigenous Knowledge",
      subtitle: "Preserving Heritage",
      description:
        "Engage in seed selection, preservation techniques, and storytelling traditions that protect indigenous varieties for future generations.",
      stats: { label: "Seed Varieties", value: "50+" },
      color: "#8B5E3C",
    },
    {
      id: 3,
      number: "03",
      title: "Cultural & Culinary Exchange",
      subtitle: "Shared Traditions",
      description:
        "Share traditional meals, local recipes, and cultural dialogue that deepen connection and mutual learning.",
      stats: { label: "Traditional Recipes", value: "100+" },
      color: "#C97C3F",
    },
  ];

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className={`experiences-section ${visible ? "show" : ""}`}
    >
      <div className="experiences-container">
        {/* Header with decorative elements */}
        <div className="experiences-header">
          <span className="header-badge">Our Experiences</span>
          <h2>
            What You Will
            <span className="highlight"> Experience</span>
          </h2>
          <div className="header-line"></div>
          <p className="experiences-intro">
            More than a visit — an immersion into agroecology, culture, and
            community resilience.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="experiences-grid">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`experience-card ${exp.id % 2 === 0 ? "card-reverse" : ""}`}
              style={{ borderColor: exp.color }}
            >
              <div className="card-number">{exp.number}</div>
              
              <div className="card-content">
                <div className="card-visual">
                  <div className="image-placeholder">
                    <div className="placeholder-icon">
                      {exp.id === 1 && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      )}
                      {exp.id === 2 && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      )}
                      {exp.id === 3 && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/>
                          <line x1="6" y1="1" x2="6" y2="4"/>
                          <line x1="10" y1="1" x2="10" y2="4"/>
                          <line x1="14" y1="1" x2="14" y2="4"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="stats-badge">
                    <span className="stats-value">{exp.stats.value}</span>
                    <span className="stats-label">{exp.stats.label}</span>
                  </div>
                </div>

                <div className="card-text">
                  <span className="card-subtitle">{exp.subtitle}</span>
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                  
                  <div className="card-features">
                    <span className="feature-tag">✓ Sustainable</span>
                    <span className="feature-tag">✓ Interactive</span>
                    <span className="feature-tag">✓ Guided</span>
                  </div>

                  <button className="learn-more-btn" aria-label={`Learn more about ${exp.title}`}>
                    Explore Experience
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cta-section">
          <p>Ready to transform your understanding of sustainable agriculture?</p>
          <button className="cta-button">
            Book Your Experience Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;