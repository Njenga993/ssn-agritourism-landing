// About.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/about.css";

// ✅ Imported images from assets folder
import agri001 from "../assets/ecology.jpeg";
import agroecology from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import seedSovereignty from "../assets/agri001.jpg";
import communityEngagement from "../assets/seed-ambasadors.webp";
import culturalExchange from "../assets/holding.webp";
import regenerativeTravel from "../assets/hero_1.webp";
import permaculture from "../assets/agri002.jpg";
import foodSovereignty from "../assets/n.webp";
import forestGardens from "../assets/images+forest.jpeg";

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
      imageUrl: agroecology
    },
    {
      title: "Seed Sovereignty",
      description: "Engage with indigenous seed systems and community-led conservation.",
      imageUrl: seedSovereignty
    },
    {
      title: "Community Engagement",
      description: "Build meaningful relationships with local farmers and rural communities.",
      imageUrl: communityEngagement
    },
    {
      title: "Cultural Exchange",
      description: "Experience indigenous food, traditions, and authentic rural life.",
      imageUrl: culturalExchange
    },
    {
      title: "Regenerative Travel",
      description: "Travel that gives back to the land and communities while minimizing impact.",
      imageUrl: regenerativeTravel
    },
    {
      title: "Permaculture",
      description: "Discover design systems that mimic natural ecosystems for sustainability.",
      imageUrl: permaculture
    },
    {
      title: "Food Sovereignty",
      description: "Support local food systems and traditional knowledge preservation.",
      imageUrl: foodSovereignty
    },
    {
      title: "Food Forest",
      description: "Explore multi-story food forests combining trees, shrubs, and perennial plants.",
      imageUrl: forestGardens
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
            What is <span className="heritage-header__highlight">Ecology, Food and Culture Tourism?</span>
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
              src={agri001}
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
  Ecology, Food and Culture Tourism  is a subsection of Seed Savers Network Kenya, designed as a form of responsible 
  travel that immerses visitors in agroecological farming, indigenous food systems, cultural 
  exchange, and rural livelihoods — while strengthening seed sovereignty and community resilience.
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