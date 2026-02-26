import { useEffect, useRef, useState } from "react";
import "../styles/packages.css";

// ✅ Proper local image imports
import fellowshipImage from "../assets/ecology.jpeg";
import conferenceImage from "../assets/conference-room.webp";
import soloImage from "../assets/solo.jpeg";

const Packages = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const packages = [
    {
      id: 1,
      title: "Global Fellowship Package",
      image: fellowshipImage,
      description: "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
      duration: "Min. 2 weeks",
      locations: "Nakuru County (near Gilgil & Lake Elementaita)",
      groupSize: "Individual",
      price: "From USD 433",
      priceNote: "2 weeks: USD 433 | 3 weeks: EUR 548",
      experiences: [
        "Hands-on farming (planting, weeding, harvesting, milking)",
        "Indigenous seed practices & community seed banking",
        "Agroecology & climate-resilient farming methods",
        "Community engagement & knowledge-sharing",
        "Live with a host farming family"
      ],
      includes: [
        "Airport Pickup",
        "Project Orientation",
        "Accommodation",
        "3 Meals Daily",
        "In-Country Support"
      ],
      formUrl: "https://forms.gle/your-fellowship-form",
      targetAudience: "Students, researchers & professionals"
    },
    {
      id: 2,
      title: "Conference & Learning Exchange",
      image: conferenceImage,
      description: "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
      duration: "2-4 hours",
      locations: "SSN Agroecology Learning Centre",
      groupSize: "Flexible (pricing varies)",
      price: "Custom Quote",
      experiences: [
        "School programs: basic agriculture & seed saving",
        "University sessions: seed banking & food forest design",
        "Professional delegations: policy & development exchanges",
        "Practical demonstrations & dialogue",
        "Direct interaction with practitioners"
      ],
      includes: [
        "Structured learning environment",
        "Expert facilitators",
        "Practical demonstrations",
        "Flexible programming",
        "Meals available on request"
      ],
      formUrl: "https://forms.gle/your-conference-form",
      featured: true,
      targetAudience: "Schools, universities & professional groups"
    },
    {
      id: 3,
      title: "Solo & Small-Group Agritourism",
      image: soloImage,
      description: "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
      duration: "Half-day to multi-day",
      locations: "Nakuru County (near Gilgil & Lake Elementaita)",
      groupSize: "1-12 people",
      price: "70-100 USD/day",
      priceNote: "Example price includes accommodation, meals, transport & activities",
      experiences: [
        "Hands-on farming & agroecology",
        "Indigenous seed & biodiversity experiences",
        "Traditional food preparation & cultural exchange",
        "Guided nature walks",
        "Community-led experiences"
      ],
      includes: [
        "Accommodation (centre or host family)",
        "Full board meals",
        "Transport",
        "Hands-on activities",
        "Cultural exchange"
      ],
      formUrl: "https://forms.gle/your-solo-form",
      targetAudience: "Solo travelers, couples, families & small groups"
    }
  ];

  return (
    <section
      id="packages"
      ref={sectionRef}
      className={`journey-section ${visible ? "journey-section--visible" : ""}`}
    >
      <div className="journey-container">
        <div className="journey-header">
          <h2 className="journey-header__title">Our Ecology, Food and Culture Tourism Packages</h2>
          <p className="journey-header__subtitle">
  A subsection of Seed Savers Network Kenya offering authentic, community-led experiences designed
   for individuals, institutions, and small groups seeking immersive agroecological learning in 
   Kenya.
</p>
        </div>

        <div className="experience-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`experience-card ${pkg.featured ? 'experience-card--featured' : ''}`}>
              {pkg.featured && <span className="experience-card__badge">Most Popular</span>}
              
              <div className="experience-card__media">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="experience-card__image"
                  loading="lazy"
                />
              </div>

              <div className="experience-card__content">
                <h3 className="experience-card__title">{pkg.title}</h3>
                <p className="experience-card__description">{pkg.description}</p>
                
                <div className="experience-card__specs">
                  <div className="spec-item">
                    <span className="spec-item__icon" aria-hidden="true">📅</span>
                    <span className="spec-item__text">{pkg.duration}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-item__icon" aria-hidden="true">📍</span>
                    <span className="spec-item__text">{pkg.locations}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-item__icon" aria-hidden="true">👥</span>
                    <span className="spec-item__text">{pkg.groupSize}</span>
                  </div>
                  <div className="spec-item spec-item--price">
                    <span className="spec-item__icon" aria-hidden="true">💰</span>
                    <span className="spec-item__text">{pkg.price}</span>
                  </div>
                </div>

                {pkg.priceNote && (
                  <p className="experience-card__price-note">{pkg.priceNote}</p>
                )}

                <div className="experience-card__audience">
                  <span className="audience-badge">{pkg.targetAudience}</span>
                </div>

                <div className="experience-card__activities">
                  <h4 className="activities-title">Key Experiences</h4>
                  <ul className="activities-list">
                    {pkg.experiences.map((exp, index) => (
                      <li key={index} className="activities-list__item">
                        <span className="activities-list__check" aria-hidden="true">✓</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-card__includes">
                  <h4 className="includes-title">What's Included</h4>
                  <ul className="includes-list">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="includes-list__item">
                        <span className="includes-list__bullet" aria-hidden="true">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-card__actions">
                  <a href="/packages" className="experience-card__button experience-card__button--secondary">
                    Learn More
                  </a>
                  <a
                    href={pkg.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card__button experience-card__button--primary"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-footer">
          <a href="/packages" className="journey-footer__link">
            View All Package Details
            <span className="journey-footer__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;