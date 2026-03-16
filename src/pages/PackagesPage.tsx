import React, { useState, useEffect, useRef } from 'react';
import '../styles/packages-page.css';

// Import images
import authenticFarmStays from '../assets/holding.webp';
import Global from '../assets/Global.jpeg';
import traditionalCuisine from '../assets/n.webp';
import communityConnections from '../assets/hero_1.webp';
import seedBank from '../assets/kikopey.webp';
import indigenousSeeds from '../assets/seeds.webp';
import communityMeetings from '../assets/cb.webp';
import agroecology from '../assets/conference-room.webp';
import traditionalFarming from '../assets/agri002.jpg';
import Principles from '../assets/winowing.webp';
import indigenousSeedBiodiversity from '../assets/solo.jpeg';
import natureLandscape from '../assets/downloa_elemend.jpeg';

const packagesData = [
  {
    id: 1,
    title: "Global Fellowship Package",
    shortDescription: "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    heroImage: Global,
    duration: "Minimum 2 weeks",
    location: "Nakuru & Surrounding Counties",
    groupSize: "6-12 participants",
    category: "individual",
    price: "From USD 433",
    priceNote: "Includes accommodation, meals, transport, and farm visits. Price varies with group size and itinerary.",
    experiences: [
      { 
        title: "Seed Bank Visits", 
        description: "Explore community seed banks, learn conservation techniques, and understand seed sovereignty movements.",
        image: seedBank
      },
      { 
        title: "Indigenous Seeds Workshop", 
        description: "Hands-on experience with indigenous seed varieties, selection, and traditional preservation methods.",
        image: indigenousSeeds
      },
      { 
        title: "Community Meetings", 
        description: "Participate in farmer group meetings, discuss challenges, and share solutions in agroecology.",
        image: communityMeetings
      }
    ],
    includes: [
      "Agroecology & climate-resilient farming methods",
      "Hands-on farming (planting, weeding, harvesting, milking)",
      "Indigenous seed practices & community seed banking",
      "Community engagement & knowledge-sharing",
      "Live with a host farming family"
    ],
    keyFeatures: [
      "Direct farmer-to-farmer knowledge exchange",
      "Visit multiple farming communities",
      "Participatory learning approach",
      "Cultural immersion and homestay options",
      "Supports seed sovereignty initiatives"
    ],
    targetAudience: [
      "Farmers and agricultural professionals",
      "Agroecology practitioners",
      "Seed sovereignty advocates",
      "Agricultural students and researchers",
      "Sustainable agriculture enthusiasts"
    ]
  },
  {
    id: 2,
    title: "Conference & Learning Exchange",
    shortDescription: "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    heroImage: agroecology,
    duration: "2-4 hours/ Day ",
    location: "SSN Agroecology Learning Centre",
    groupSize: "50-60 participants",
    category: "institution",
    price: "Flexible (pricing varies)",
    priceNote: "Comprehensive program including all meals, accommodation, training materials, and field trips.",
    experiences: [
      { 
        title: "Agroecology Principles", 
        description: "Learn core principles, design thinking, and practical applications of agroecological systems.",
        image: Principles
      },
      { 
        title: "Traditional Farming Systems", 
        description: "Study indigenous farming knowledge, intercropping systems, and natural resource management.",
        image: traditionalFarming
      }
    ],
    includes: [
      "Expert-led workshops and seminars",
      "Field visits to model farms",
      "Training materials and resources",
      "Practical hands-on sessions",
      "Accommodation and all meals",
      "Local transportation"
    ],
    keyFeatures: [
      "Intensive learning program",
      "Expert facilitators and practitioners",
      "Blend of theory and practice",
      "Visit successful agroecology farms",
      "Networking opportunities"
    ],
    targetAudience: [
      "Agricultural institutions",
      "University students and faculty",
      "NGO staff and development workers",
      "Policy makers and agricultural advisors",
      "Sustainable agriculture professionals"
    ]
  },
  {
    id: 3,
    title: "Solo & Small-Group Agritourism",
    shortDescription: "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    heroImage: indigenousSeedBiodiversity,
    duration: "Half-day to multi-day",
    location: "SSN Landscape Communities",
    groupSize: "1 - unlimited",
    category: "specialized",
    price: "70-100 USD per day/person",
    priceNote: "Example price includes accommodation, full board, transport, and activities. Final pricing tailored to your needs.",
    experiences: [
      { 
        title: "Indigenous Seed & Biodiversity", 
        description: "Experience seed selection, cleaning, drying, and storage. Visit community seed banks and learn about agrobiodiversity and seed sovereignty.",
        image: indigenousSeedBiodiversity
      },
      { 
        title: "Nature & Landscape", 
        description: "Guided walks within and around the SSN landscape. Optional excursions to nearby ecological and cultural sites by arrangement.",
        image: natureLandscape
      }
    ],
    includes: [
      "Accommodation (SSN centre or host family)",
      "Full board meals",
      "Transport",
      "Hands-on activities",
      "Cultural exchange",
      "Flexible scheduling"
    ],
    keyFeatures: [
      "Authentic, non-commercial experiences",
      "Direct learning from farmers",
      "Flexible and ethical engagement",
      "Supports grassroots agroecology",
      "Can be learning-focused, relaxed retreat, or mixed program"
    ],
    targetAudience: [
      "Solo travelers and slow-travel enthusiasts",
      "Couples and families",
      "Small groups of friends or clubs",
      "Researchers, writers, photographers",
      "Diaspora visitors reconnecting with heritage"
    ]
  }
];

const PackagesPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const heroImageRef = useRef<HTMLImageElement | null>(null);

  // Parallax effect on hero image
  useEffect(() => {
    const onScroll = () => {
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPackages = activeFilter === 'all' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === activeFilter);

  // Scroll to packages section when clicking hero button
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="journey-portal">
      {/* Hero Section - Magazine Style */}
      <header className="journey-portal__hero">
        <img 
          ref={heroImageRef}
          src={Global} 
          alt="Ecology, Food and Culture Tourism" 
          className="journey-portal__hero-image"
        />
        <div className="journey-portal__hero-overlay"></div>
        <div className="journey-portal__hero-content">
          <span className="journey-portal__hero-eyebrow">Seed Savers Network Kenya</span>
          <h1 className="journey-portal__hero-title">
            <span className="journey-portal__hero-title-line">Ecology, Food</span>
            <span className="journey-portal__hero-title-line">&amp; Culture</span>
            <span className="journey-portal__hero-title-line">Tourism Packages</span>
          </h1>
          <p className="journey-portal__hero-subtitle">
            Community-led experiences designed for individuals, institutions, 
            and small groups seeking immersive agroecological learning in Kenya.
          </p>
          <button onClick={scrollToPackages} className="journey-portal__hero-scroll">
            <span>Explore Packages</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Filter Section */}
      <section className="journey-portal__filter">
        <div className="journey-portal__filter-container">
          <div className="journey-portal__filter-header">
            <span className="section-label">Curated Experiences</span>
            <h2 className="journey-portal__filter-title">Choose Your Path</h2>
            <p className="journey-portal__filter-subtitle">
              Three ways to engage with agroecology and community knowledge
            </p>
          </div>
          <div className="journey-portal__filter-buttons">
            <button 
              className={`journey-portal__filter-button ${activeFilter === 'all' ? 'journey-portal__filter-button--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Programs
            </button>
            <button 
              className={`journey-portal__filter-button ${activeFilter === 'individual' ? 'journey-portal__filter-button--active' : ''}`}
              onClick={() => setActiveFilter('individual')}
            >
              Individual Fellowship
            </button>
            <button 
              className={`journey-portal__filter-button ${activeFilter === 'institution' ? 'journey-portal__filter-button--active' : ''}`}
              onClick={() => setActiveFilter('institution')}
            >
              Conference & Learning
            </button>
            <button 
              className={`journey-portal__filter-button ${activeFilter === 'specialized' ? 'journey-portal__filter-button--active' : ''}`}
              onClick={() => setActiveFilter('specialized')}
            >
              Solo & Small Groups
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section id="packages" className="journey-portal__grid-section">
        <div className="journey-portal__grid">
          {filteredPackages.map((pkg, index) => (
            <article 
              key={pkg.id} 
              className={`journey-card ${expandedId === pkg.id ? 'journey-card--expanded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="journey-card__header" onClick={() => handleToggleExpand(pkg.id)}>
                <div className="journey-card__image-wrapper">
                  <img 
                    src={pkg.heroImage} 
                    alt={pkg.title} 
                    className="journey-card__image"
                    loading="lazy"
                  />
                  <span className="journey-card__badge">
                    {pkg.category === 'individual' ? 'Individual' : 
                     pkg.category === 'institution' ? 'Institution' : 'Small Group'}
                  </span>
                </div>
                <div className="journey-card__overlay">
                  <h3 className="journey-card__title">{pkg.title}</h3>
                </div>
              </div>
              
              <div className="journey-card__body">
                <p className="journey-card__description">{pkg.shortDescription}</p>
                
                <div className="journey-card__details">
                  <div className="journey-card__detail">
                    <span className="journey-card__detail-label">Duration</span>
                    <span className="journey-card__detail-text">{pkg.duration}</span>
                  </div>
                  <div className="journey-card__detail">
                    <span className="journey-card__detail-label">Location</span>
                    <span className="journey-card__detail-text">{pkg.location}</span>
                  </div>
                  <div className="journey-card__detail">
                    <span className="journey-card__detail-label">Group Size</span>
                    <span className="journey-card__detail-text">{pkg.groupSize}</span>
                  </div>
                </div>
                
                <div className="journey-card__price-section">
                  <span className="journey-card__price">{pkg.price}</span>
                  {pkg.priceNote && (
                    <p className="journey-card__price-note">{pkg.priceNote}</p>
                  )}
                </div>

                <button 
                  className="journey-card__expand-button"
                  onClick={() => handleToggleExpand(pkg.id)}
                >
                  {expandedId === pkg.id ? 'Show Less' : 'View Full Details'}
                  <span className={`journey-card__expand-icon ${expandedId === pkg.id ? 'journey-card__expand-icon--rotated' : ''}`}>▼</span>
                </button>
              </div>

              {/* Expanded Content */}
              <div className="journey-card__expanded">
                <div className="journey-card__expanded-inner">
                  {/* Quick Overview */}
                  <div className="journey-card__overview">
                    <h4 className="journey-card__section-title">Overview</h4>
                    <div className="journey-card__overview-grid">
                      <div className="journey-card__overview-item">
                        <h5>Focus</h5>
                        <p>{pkg.title}</p>
                      </div>
                      <div className="journey-card__overview-item">
                        <h5>Duration</h5>
                        <p>{pkg.duration}</p>
                      </div>
                      <div className="journey-card__overview-item">
                        <h5>Location</h5>
                        <p>{pkg.location}</p>
                      </div>
                      <div className="journey-card__overview-item">
                        <h5>Starting From</h5>
                        <p>{pkg.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  {pkg.keyFeatures && (
                    <div className="journey-card__key-features">
                      <h4 className="journey-card__section-title">Key Features</h4>
                      <div className="journey-card__features-grid">
                        {pkg.keyFeatures.map((feature, index) => (
                          <div key={index} className="journey-card__feature-card">
                            <span className="journey-card__feature-icon">→</span>
                            <p>{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Target Audience */}
                  {pkg.targetAudience && (
                    <div className="journey-card__target-audience">
                      <h4 className="journey-card__section-title">Perfect For</h4>
                      <div className="journey-card__audience-grid">
                        {pkg.targetAudience.map((audience, index) => (
                          <div key={index} className="journey-card__audience-card">
                            <span className="journey-card__audience-icon">•</span>
                            <p>{audience}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Experiences */}
                  <div className="journey-card__experiences">
                    <h4 className="journey-card__section-title">Experiences & Activities</h4>
                    <div className="journey-card__experiences-grid">
                      {pkg.experiences.map((exp, index) => (
                        <div key={index} className="journey-card__experience-card">
                          <div className="journey-card__experience-image-wrapper">
                            <img 
                              src={exp.image} 
                              alt={exp.title} 
                              className="journey-card__experience-image"
                              loading="lazy"
                            />
                          </div>
                          <div className="journey-card__experience-content">
                            <h5 className="journey-card__experience-title">
                              <span className="journey-card__experience-number">0{index + 1}</span>
                              {exp.title}
                            </h5>
                            <p className="journey-card__experience-description">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="journey-card__includes">
                    <h4 className="journey-card__section-title">What's Included</h4>
                    <div className="journey-card__includes-grid">
                      {pkg.includes.map((item, index) => (
                        <div key={index} className="journey-card__include-item">
                          <span className="journey-card__include-icon">✓</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Booking CTA */}
                  <div className="journey-card__booking">
                    <a 
                      href={`mailto:info@seedsaverskenya.org?subject=Package Inquiry - ${pkg.title}`} 
                      className="journey-card__book-button"
                    >
                      Inquire About This Package
                    </a>
                    <p className="journey-card__booking-note">
                      Custom packages available — Contact us for personalized experiences
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="journey-values">
        <div className="journey-values__container">
          <div className="journey-values__header">
            <span className="journey-values__eyebrow">Our Commitment</span>
            <h2 className="journey-values__title">Why Choose Seed Savers Network</h2>
            <p className="journey-values__subtitle">
              Experience authentic agroecology with Kenya's trusted grassroots institution
            </p>
          </div>
          <div className="journey-values__grid">
            <div className="journey-values__card">
              <img 
                src={authenticFarmStays} 
                alt="Authentic farm stays" 
                className="journey-values__card-image"
                loading="lazy"
              />
              <h3 className="journey-values__card-title">Authentic Experiences</h3>
              <p className="journey-values__card-text">
                Non-commercial, community-led experiences with direct learning from farmers and practitioners. Support grassroots agroecology and seed conservation.
              </p>
            </div>

            <div className="journey-values__card">
              <img 
                src={traditionalCuisine} 
                alt="Traditional cuisine" 
                className="journey-values__card-image"
                loading="lazy"
              />
              <h3 className="journey-values__card-title">Food & Culture</h3>
              <p className="journey-values__card-text">
                Prepare and share traditional meals using locally grown produce. Experience indigenous recipes and genuine cultural exchange with host communities.
              </p>
            </div>

            <div className="journey-values__card">
              <img 
                src={communityConnections} 
                alt="Community connections" 
                className="journey-values__card-image"
                loading="lazy"
              />
              <h3 className="journey-values__card-title">Decades of Trust</h3>
              <p className="journey-values__card-text">
                A national grassroots institution trusted by farmers, researchers, and international partners for leadership in agroecology and seed conservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;