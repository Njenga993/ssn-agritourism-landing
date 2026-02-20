import { useEffect, useRef, useState } from "react";
import { 
  Leaf, 
  Sprout, 
  Users, 
  Globe, 
  Heart, 
  Sun,
  Shield,
  TreePine
} from "lucide-react";
import "../styles/about.css";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      icon: <Leaf className="card-icon" />,
      title: "Agroecology",
      description: "Learn regenerative farming practices rooted in biodiversity, soil health, and ecological harmony.",
      color: "#4CAF50"
    },
    {
      icon: <Sprout className="card-icon" />,
      title: "Seed Sovereignty",
      description: "Engage with indigenous seed systems and community-led conservation initiatives.",
      color: "#8BC34A"
    },
    {
      icon: <Users className="card-icon" />,
      title: "Community Engagement",
      description: "Build meaningful relationships with local farmers and participate in rural livelihoods.",
      color: "#FF9800"
    },
    {
      icon: <Globe className="card-icon" />,
      title: "Cultural Exchange",
      description: "Experience indigenous food, traditions, storytelling, and authentic rural life.",
      color: "#2196F3"
    },
    {
      icon: <Heart className="card-icon" />,
      title: "Regenerative Travel",
      description: "Travel that gives back to the land and communities while minimizing environmental impact.",
      color: "#E91E63"
    },
    {
      icon: <Sun className="card-icon" />,
      title: "Permaculture",
      description: "Discover design systems that mimic natural ecosystems for sustainable food production.",
      color: "#FFC107"
    },
    {
      icon: <Shield className="card-icon" />,
      title: "Food Sovereignty",
      description: "Support local food systems and traditional knowledge preservation.",
      color: "#9C27B0"
    },
    {
      icon: <TreePine className="card-icon" />,
      title: "Forest Gardens",
      description: "Explore multi-story food forests that combine trees, shrubs, and perennial plants.",
      color: "#2E7D32"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "show" : ""}`}
    >
      {/* Decorative background elements */}
      <div className="about-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-leaf leaf-1">🌿</div>
        <div className="decoration-leaf leaf-2">🌱</div>
      </div>

      <div className="about-container">
        {/* Section header */}
        <div className="section-header">
          <span className="section-subtitle">Discover</span>
          <h2>
            What is <span className="text-highlight">Agritourism?</span>
          </h2>
          <div className="title-decoration">
            <span className="line"></span>
            <span className="diamond">✦</span>
            <span className="line"></span>
          </div>
        </div>

        <p className="about-intro">
          <span className="quote-mark">"</span>
          Agritourism at Seed Savers Network Kenya is a form of responsible
          travel that immerses visitors in agroecological farming,
          indigenous food systems, cultural exchange, and rural
          livelihoods — while strengthening seed sovereignty and
          community resilience.
          <span className="quote-mark closing">"</span>
        </p>

        {/* Stats section */}
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2000+</span>
            <span className="stat-label">Visitors Hosted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Partner Farms</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Seed Varieties</span>
          </div>
        </div>

        {/* Features grid */}
        <div className="about-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="about-card"
              style={{ '--card-color': card.color } as React.CSSProperties}
            >
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="card-hover-line"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="about-cta">
          <p className="cta-text">
            Ready to experience agroecology firsthand?
          </p>
          <a href="#packages" className="cta-button">
            Explore Our Programs
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;