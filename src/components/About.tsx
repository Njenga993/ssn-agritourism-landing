import { useEffect, useRef, useState } from "react";
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

  const experienceCards = [
    {
      title: "Agroecology",
      description: "Learn regenerative farming practices rooted in biodiversity and soil health.",
      imageUrl: "https://images.unsplash.com/photo-1592982538628-3543b5ab33a8?w=600&h=400&fit=crop"
    },
    {
      title: "Seed Sovereignty",
      description: "Engage with indigenous seed systems and community-led conservation.",
      imageUrl: "https://images.unsplash.com/photo-1592849649363-57a268638d10?w=600&h=400&fit=crop"
    },
    {
      title: "Community Engagement",
      description: "Build meaningful relationships with local farmers and rural communities.",
      imageUrl: "https://images.unsplash.com/photo-1628668146493-4a706bcd1c2a?w=600&h=400&fit=crop"
    },
    {
      title: "Cultural Exchange",
      description: "Experience indigenous food, traditions, and authentic rural life.",
      imageUrl: "https://images.unsplash.com/photo-1516749396381-5e7e9453f3a5?w=600&h=400&fit=crop"
    },
    {
      title: "Regenerative Travel",
      description: "Travel that gives back to the land and communities while minimizing impact.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
    },
    {
      title: "Permaculture",
      description: "Discover design systems that mimic natural ecosystems for sustainability.",
      imageUrl: "https://images.unsplash.com/photo-1585435557343-3b3d4d3a822a?w=600&h=400&fit=crop"
    },
    {
      title: "Food Sovereignty",
      description: "Support local food systems and traditional knowledge preservation.",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
    },
    {
      title: "Forest Gardens",
      description: "Explore multi-story food forests combining trees, shrubs, and perennial plants.",
      imageUrl: "https://images.unsplash.com/photo-1540289497509-74468690b6d5?w=600&h=400&fit=crop"
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
        <div className="decoration-circle "></div>
        <div className="decoration-circle "></div>
        <div className="decoration-leaf leaf-1"></div>
        <div className="decoration-leaf leaf-2"></div>
      </div>

      <div className="about-container">
        {/* Section header */}
        <div className="section-header">
          <span className="section-subtitle"></span>
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

        {/* Experience Cards Grid with Wooden Background */}
        <div className="about-grid-wrapper">
          <div className="about-grid">
            {experienceCards.map((card, index) => (
              <div 
                key={index} 
                className="about-card"
              >
                <div className="card-image-wrapper">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
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