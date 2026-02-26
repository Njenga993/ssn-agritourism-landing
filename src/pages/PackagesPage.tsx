import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/packages-page.css';


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
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleToggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPackages = activeFilter === 'all' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="journey-portal">
      {/* Hero Section */}
      <header ref={heroRef} className={`journey-portal__hero ${heroInView ? 'journey-portal__hero--visible' : ''}`}>
        <div className="journey-portal__hero-overlay"></div>
        <div className="journey-portal__hero-particles"></div>
        <div className="journey-portal__hero-content">
          <h1 className="journey-portal__hero-title">
            Our Ecology, Food and Culture  <span className="journey-portal__hero-highlight">Tourism Packages</span>
          </h1>
          <p className="journey-portal__hero-subtitle">
            A subsection of Seed Savers Network Kenya offering authentic, community-led experiences designed for individuals, institutions, and small groups seeking immersive agroecological learning in Kenya.
          </p>
          {/*<div className="journey-portal__hero-buttons">
            <a href="#packages-grid" className="journey-portal__hero-button journey-portal__hero-button--primary">
              Explore Packages
            </a>
            <a href="#expectations" className="journey-portal__hero-button journey-portal__hero-button--secondary">
              Learn More
            </a>
          </div>*/}
        </div>
      </header>

      {/* Main Content */}
      <main className="journey-portal__main">
        {/* Filter Section */}
        <section className="journey-portal__filter">
          <div className="journey-portal__filter-container">
            <h2 className="journey-portal__filter-title">Choose Your Experience</h2>
            <div className="journey-portal__filter-buttons">
              <button 
                className={`journey-portal__filter-button ${activeFilter === 'all' ? 'journey-portal__filter-button--active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Experiences
              </button>
              <button 
                className={`journey-portal__filter-button ${activeFilter === 'individual' ? 'journey-portal__filter-button--active' : ''}`}
                onClick={() => setActiveFilter('individual')}
              >
                For Individuals
              </button>
              <button 
                className={`journey-portal__filter-button ${activeFilter === 'institution' ? 'journey-portal__filter-button--active' : ''}`}
                onClick={() => setActiveFilter('institution')}
              >
                For Institutions
              </button>
              <button 
                className={`journey-portal__filter-button ${activeFilter === 'specialized' ? 'journey-portal__filter-button--active' : ''}`}
                onClick={() => setActiveFilter('specialized')}
              >
                Small Groups
              </button>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section id="packages-grid" className="journey-portal__grid-section">
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
                    <div className="journey-card__image-overlay"></div>
                  </div>
                  <div className="journey-card__overlay">
                    <div className="journey-card__badge">{pkg.category}</div>
                    <h3 className="journey-card__title">{pkg.title}</h3>
                  </div>
                </div>
                
                <div className="journey-card__body">
                  <p className="journey-card__description">{pkg.shortDescription}</p>
                  
                  <div className="journey-card__details">
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon">📅</span>
                      <div>
                        <span className="journey-card__detail-label">Duration</span>
                        <span className="journey-card__detail-text">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon">📍</span>
                      <div>
                        <span className="journey-card__detail-label">Location</span>
                        <span className="journey-card__detail-text">{pkg.location}</span>
                      </div>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon"></span>
                      <div>
                        <span className="journey-card__detail-label">Group Size</span>
                        <span className="journey-card__detail-text">{pkg.groupSize}</span>
                      </div>
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

                {/* Expanded Content - Redesigned */}
                <div className="journey-card__expanded">
                  <div className="journey-card__expanded-inner">
                    {/* Quick Overview */}
                    <div className="journey-card__overview">
                      <h4 className="journey-card__section-title">Package Overview</h4>
                      <div className="journey-card__overview-grid">
                        <div className="journey-card__overview-item">
                          <span className="journey-card__overview-icon"></span>
                          <div>
                            <h5>Focus</h5>
                            <p>{pkg.title}</p>
                          </div>
                        </div>
                        <div className="journey-card__overview-item">
                          <span className="journey-card__overview-icon"></span>
                          <div>
                            <h5>Duration</h5>
                            <p>{pkg.duration}</p>
                          </div>
                        </div>
                        <div className="journey-card__overview-item">
                          <span className="journey-card__overview-icon"></span>
                          <div>
                            <h5>Location</h5>
                            <p>{pkg.location}</p>
                          </div>
                        </div>
                        <div className="journey-card__overview-item">
                          <span className="journey-card__overview-icon"></span>
                          <div>
                            <h5>Price</h5>
                            <p>{pkg.price}</p>
                          </div>
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
                              <span className="journey-card__feature-icon">✓</span>
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
                              <span className="journey-card__audience-icon"></span>
                              <p>{audience}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experiences/Activities */}
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
                              <div className="journey-card__experience-overlay"></div>
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

                    {/* What's Excluded - Optional, can be added back if needed 
                    {pkg.excludes && (
                      <div className="journey-card__excludes">
                        <h4 className="journey-card__section-title">What's Not Included</h4>
                        <div className="journey-card__excludes-grid">
                          {pkg.excludes.map((item, index) => (
                            <div key={index} className="journey-card__exclude-item">
                              <span className="journey-card__exclude-icon">✗</span>
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}*/}
                    
                    // Replace this section in the expanded content:
<div className="journey-card__booking">
  <a 
    href={`mailto:info@seedsaverskenya.org?subject=Package Inquiry - ${pkg.title}`} 
    className="journey-card__book-button"
  >
    Inquire About This Package
  </a>
  <p className="journey-card__booking-note">
    Custom packages available - Contact us for personalized experiences
  </p>
</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What to Expect Section */}
        <section id="expectations" className="journey-expectations">
          <div className="journey-expectations__container">
            <div className="journey-expectations__header">
              <h2 className="journey-expectations__title">Why Choose Seed Savers Network</h2>
              <p className="journey-expectations__subtitle">
                Experience authentic agroecology with Kenya's trusted grassroots institution
              </p>
            </div>
            <div className="journey-expectations__grid">
              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src={authenticFarmStays} 
                    alt="Authentic farm stays" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                  <div className="journey-expectations__image-overlay"></div>
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon"></span>
                  <h3 className="journey-expectations__card-title">Authentic Experiences</h3>
                  <p className="journey-expectations__text">
                    Non-commercial, community-led experiences with direct learning from farmers and practitioners. Support grassroots agroecology and seed conservation.
                  </p>
                
                </div>
              </div>

              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src={traditionalCuisine} 
                    alt="Traditional cuisine" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                  <div className="journey-expectations__image-overlay"></div>
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon"></span>
                  <h3 className="journey-expectations__card-title">Food & Culture</h3>
                  <p className="journey-expectations__text">
                    Prepare and share traditional meals using locally grown produce. Experience indigenous recipes and genuine cultural exchange with host communities.
                  </p>
                
                </div>
              </div>

              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src={communityConnections} 
                    alt="Community connections" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                  <div className="journey-expectations__image-overlay"></div>
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon"></span>
                  <h3 className="journey-expectations__card-title">Years of Trust</h3>
                  <p className="journey-expectations__text">
                    A national grassroots institution trusted by farmers, researchers, and international partners for leadership in agroecology and seed conservation.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section 
        <section className="journey-testimonials">
          <div className="journey-testimonials__container">
            <h2 className="journey-testimonials__title">What Our Visitors Say</h2>
            <div className="journey-testimonials__grid">
              <div className="journey-testimonials__card">
                <div className="journey-testimonials__quote">"</div>
                <p className="journey-testimonials__text">
                  The farmer-to-farmer exchange was transformative. I learned practical agroecology techniques that I've implemented back home.
                </p>
                <div className="journey-testimonials__author">
                  <div className="journey-testimonials__avatar"></div>
                  <div>
                    <h5>Sarah Mitchell</h5>
                    <span>Agricultural Researcher</span>
                  </div>
                </div>
              </div>
              <div className="journey-testimonials__card">
                <div className="journey-testimonials__quote">"</div>
                <p className="journey-testimonials__text">
                  An authentic cultural experience that connected me with Kenya's agricultural heritage. The homestay was incredible!
                </p>
                <div className="journey-testimonials__author">
                  <div className="journey-testimonials__avatar"></div>
                  <div>
                    <h5>David Chen</h5>
                    <span>Sustainable Tourism Advocate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Final CTA Section 
        <section className="journey-cta">
          <div className="journey-cta__container">
            <div className="journey-cta__content">
              <h2 className="journey-cta__title">Ready to Start Your Journey?</h2>
              <p className="journey-cta__text">
                Have questions or want to customize a package? We're here to help create your perfect agritourism experience.
              </p>
              <div className="journey-cta__buttons">
                <a 
                  href="mailto:info@seedsaverskenya.org?subject=Package Inquiry" 
                  className="journey-cta__button journey-cta__button--primary"
                >
                  Get In Touch
                </a>
                <a 
                  href="tel:+254123456789" 
                  className="journey-cta__button journey-cta__button--secondary"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="journey-cta__visual">
              <div className="journey-cta__pattern"></div>
            </div>
          </div>
        </section>*/}
      </main>
    </div>
  );
};

export default PackagesPage;