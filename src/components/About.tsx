// About.tsx
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
      className={`heritage-section ${visible ? "heritage-section--visible" : ""}`}
    >
      {/* Decorative elements */}
      <div className="heritage-section__pattern">
        <div className="heritage-section__circle heritage-section__circle--1"></div>
        <div className="heritage-section__circle heritage-section__circle--2"></div>
        <div className="heritage-section__leaf heritage-section__leaf--1"></div>
        <div className="heritage-section__leaf heritage-section__leaf--2"></div>
      </div>

      <div className="heritage-container">
        {/* Header */}
        <div className="heritage-header">
          <span className="heritage-header__subtitle">Our Story</span>
          <h2 className="heritage-header__title">
            What is <span className="heritage-header__highlight">Agritourism?</span>
          </h2>
          <div className="heritage-header__divider">
            <span className="heritage-header__line"></span>
            <span className="heritage-header__icon">✦</span>
            <span className="heritage-header__line"></span>
          </div>
        </div>

        {/* Traditional Left Image - Right Text Layout */}
        <div className="heritage-story">
          <div className="heritage-story__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" 
              alt="Farming landscape with community members"
              className="heritage-story__image"
              loading="lazy"
            />
            <div className="heritage-story__image-border"></div>
            <div className="heritage-story__image-accent"></div>
          </div>
          
          <div className="heritage-story__content">
            <div className="heritage-story__quote-mark" aria-hidden="true">"</div>
            <p className="heritage-story__text">
              Agritourism at Seed Savers Network Kenya is a form of responsible
              travel that immerses visitors in agroecological farming,
              indigenous food systems, cultural exchange, and rural
              livelihoods — while strengthening seed sovereignty and
              community resilience.
            </p>
          </div>
        </div>

        {/* Cards Section with Wooden Background */}
        <div className="heritage-cards-wrapper">
          <div className="heritage-cards__wooden-bg">
            <div className="heritage-cards__wooden-overlay"></div>
          </div>
          
          <div className="heritage-cards__header">
            <h3 className="heritage-cards__title">Experiences That Await You</h3>
            <p className="heritage-cards__subtitle">Eight unique pathways to connect with the land</p>
          </div>

          <div className="heritage-cards__grid">
            {experienceCards.map((card, index) => (
              <div 
                key={index} 
                className="heritage-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="heritage-card__image-wrapper">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    className="heritage-card__image"
                    loading="lazy"
                  />
                  <div className="heritage-card__image-overlay"></div>
                </div>
                <div className="heritage-card__content">
                  <h4 className="heritage-card__title">{card.title}</h4>
                  <p className="heritage-card__description">{card.description}</p>
                  <span className="heritage-card__number">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="heritage-cta">
          <div className="heritage-cta__content">
            <h3 className="heritage-cta__title">Begin Your Journey</h3>
            <p className="heritage-cta__text">Ready to experience agroecology firsthand?</p>
            <a href="#packages" className="heritage-cta__button">
              <span>Explore Programs</span>
              <span className="heritage-cta__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;