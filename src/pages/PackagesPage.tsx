import React, { useState } from 'react';
import '../styles/packages-page.css';

interface Experience {
  title: string;
  description: string;
  image: string;
}

interface Package {
  id: number;
  title: string;
  category: string;
  heroImage: string;
  shortDescription: string;
  duration: string;
  location: string;
  groupSize: string;
  price: string;
  priceNote?: string;
  experiences: Experience[];
  includes: string[];
  excludes?: string[];
  formUrl: string;
  keyFeatures?: string[];
  targetAudience?: string[];
}

const packagesData: Package[] = [
  {
    id: 1,
    title: "Global Fellowship Package",
    category: 'individual',
    heroImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    shortDescription: "An immersive agritourism and learning program designed for international students, researchers, and professionals interested in sustainable farming systems, agroecology, and community-led sustainability in East Africa.",
    duration: "Minimum 2 weeks (longer stays possible)",
    location: "Nakuru County (near Gilgil and Lake Elementaita)",
    groupSize: "Individual",
    price: "From USD 433",
    priceNote: "2 weeks: USD 433 | 3 weeks: EUR 548 | Additional week: EUR 161",
    experiences: [
      { 
        title: "Hands-On Farming", 
        description: "Participate in daily farming activities including planting, weeding, harvesting, milking, and animal care alongside small-scale farmers.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 
      },
      { 
        title: "Indigenous Seed Practices", 
        description: "Learn seed selection, cleaning, drying, storage, and community seed banking. Understand agrobiodiversity and seed sovereignty.",
        image: "https://images.unsplash.com/photo-1583748159012-ae53b9a0c35d?w=600&q=80" 
      },
      { 
        title: "Community Engagement", 
        description: "Participate in knowledge-sharing sessions with farmer groups and contribute to community-based initiatives.",
        image: "https://images.unsplash.com/photo-1592982537327-a6d3680b8a8a?w=600&q=80" 
      },
      { 
        title: "Agroecology Learning", 
        description: "Gain exposure to climate-resilient farming methods and sustainable agricultural practices.",
        image: "https://images.unsplash.com/photo-1625728683244-3d822d40a5c2?w=600&q=80" 
      }
    ],
    includes: [
      "Pre-Departure Support",
      "Airport Pickup",
      "Project Orientation",
      "Accommodation (SSN centre or host family)",
      "3 Meals Daily",
      "In-Country Support"
    ],
    excludes: [
      "Flights",
      "Visas",
      "Insurance",
      "Vaccination",
      "Personal Expenses"
    ],
    formUrl: "https://forms.gle/your-fellowship-form",
    keyFeatures: [
      "Live and work alongside farmers",
      "Monday-Friday, 5-8 hours daily",
      "Free weekends for rest/travel",
      "18 years and above",
      "Year-round availability"
    ],
    targetAudience: [
      "Agriculture and agroecology students",
      "Food systems researchers",
      "Development studies professionals",
      "Sustainability practitioners",
      "Seed systems and biodiversity enthusiasts"
    ]
  },
  {
    id: 2,
    title: "Conference & Learning Exchange",
    category: 'institution',
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    shortDescription: "Short-duration, high-impact agritourism learning experiences for schools, universities, conferences, and professional delegations. Hosted at the SSN Agroecology Learning Centre.",
    duration: "2-4 hours",
    location: "SSN Agroecology Learning Centre, Nakuru County",
    groupSize: "Flexible (pricing varies by group size)",
    price: "Custom Quote",
    experiences: [
      { 
        title: "For School Groups", 
        description: "Age-appropriate demonstrations on basic agriculture, food systems, seed saving, biodiversity awareness, and environmental stewardship.",
        image: "https://images.unsplash.com/photo-1511578314322-379308476870?w=600&q=80" 
      },
      { 
        title: "For University Students & Researchers", 
        description: "Technical learning on food forest design, community seed banking, nurseries, seed characterization, composting, soil health, and agrobiodiversity conservation.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" 
      },
      { 
        title: "For Professional Delegations", 
        description: "Tailored sessions for academic conferences, CSO meetings, policy exchanges, and study tours with practical demonstrations and dialogue.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80" 
      },
      { 
        title: "Practical Demonstrations", 
        description: "Interactive learning experiences focused on real agricultural systems, seed conservation, and community-led solutions.",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80" 
      }
    ],
    includes: [
      "Structured learning environment",
      "Direct interaction with practitioners",
      "Practical demonstrations",
      "Knowledge exchange sessions",
      "Flexible programming"
    ],
    formUrl: "https://forms.gle/your-institutional-form",
    keyFeatures: [
      "15+ years of grassroots experience",
      "National institution trusted by farmers and researchers",
      "Safe and credible learning destination",
      "Tailored to age and academic level",
      "Meals and refreshments available on request"
    ],
    targetAudience: [
      "Primary and secondary schools",
      "University students and researchers",
      "Conference delegations",
      "CSO and donor meetings",
      "Study tours"
    ]
  },
  {
    id: 3,
    title: "Solo & Small-Group Agritourism",
    category: 'specialized',
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    shortDescription: "A fully customized, short-stay agritourism experience for individual travelers, couples, families, and small groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    duration: "Half-day, full-day, or multi-day stays",
    location: "Nakuru County (near Gilgil and Lake Elementaita)",
    groupSize: "1-12 People",
    price: "70-100 USD per day/person",
    priceNote: "Example price includes accommodation, full board, transport, and activities. Final pricing tailored to your needs.",
    experiences: [
      { 
        title: "Farming & Agroecology", 
        description: "Hands-on participation in daily farm activities: planting, weeding, harvesting, and livestock care. Learn about soil health, composting, and natural pest management.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" 
      },
      { 
        title: "Indigenous Seed & Biodiversity", 
        description: "Experience seed selection, cleaning, drying, and storage. Visit community seed banks and learn about agrobiodiversity and seed sovereignty.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80" 
      },
      { 
        title: "Food & Cultural Experiences", 
        description: "Prepare and share traditional meals using locally grown produce. Enjoy food tasting sessions and cultural exchange with host farmers.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" 
      },
      { 
        title: "Nature & Landscape", 
        description: "Guided walks within and around the SSN landscape. Optional excursions to nearby ecological and cultural sites by arrangement.",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80" 
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
    formUrl: "https://forms.gle/your-cultural-form",
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

  const handleToggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPackages = activeFilter === 'all' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="journey-portal">
      {/* Hero Section */}
      <header className="journey-portal__hero">
        <div className="journey-portal__hero-overlay"></div>
        <div className="journey-portal__hero-content">
          <h1 className="journey-portal__hero-title">
            Discover Your <span className="journey-portal__hero-highlight">Agritourism</span> Adventure
          </h1>
          <p className="journey-portal__hero-subtitle">
            Immerse yourself in the heart of Kenya's vibrant food systems. From hands-on farming to cultural exchanges, find the experience that's perfect for you.
          </p>
          <a href="#packages-grid" className="journey-portal__hero-button">
            Explore Packages
          </a>
        </div>
        <div className="journey-portal__hero-pattern"></div>
      </header>

      {/* Main Content */}
      <main className="journey-portal__main">
        {/* Filter Section */}
        <section className="journey-portal__filter">
          <div className="journey-portal__filter-container">
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
            {filteredPackages.map((pkg) => (
              <article 
                key={pkg.id} 
                className={`journey-card ${expandedId === pkg.id ? 'journey-card--expanded' : ''}`}
              >
                <div className="journey-card__header" onClick={() => handleToggleExpand(pkg.id)}>
                  <img 
                    src={pkg.heroImage} 
                    alt={pkg.title} 
                    className="journey-card__image"
                    loading="lazy"
                  />
                  <div className="journey-card__overlay">
                    <h3 className="journey-card__title">{pkg.title}</h3>
                  </div>
                </div>
                
                <div className="journey-card__body">
                  <p className="journey-card__description">{pkg.shortDescription}</p>
                  
                  <div className="journey-card__details">
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon">📅</span>
                      <span className="journey-card__detail-text">{pkg.duration}</span>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon">📍</span>
                      <span className="journey-card__detail-text">{pkg.location}</span>
                    </div>
                    <div className="journey-card__detail">
                      <span className="journey-card__detail-icon">👥</span>
                      <span className="journey-card__detail-text">{pkg.groupSize}</span>
                    </div>
                    <div className="journey-card__detail journey-card__detail--price">
                      <span className="journey-card__price">{pkg.price}</span>
                    </div>
                  </div>
                  {pkg.priceNote && (
                    <p className="journey-card__price-note">{pkg.priceNote}</p>
                  )}

                  <button 
                    className="journey-card__expand-button"
                    onClick={() => handleToggleExpand(pkg.id)}
                  >
                    {expandedId === pkg.id ? 'Show Less' : 'View Experiences'}
                    <span className={`journey-card__expand-icon ${expandedId === pkg.id ? 'journey-card__expand-icon--rotated' : ''}`}>▼</span>
                  </button>
                </div>

                {/* Expanded Content */}
                <div className="journey-card__expanded">
                  <div className="journey-card__expanded-inner">
                    {/* Key Features */}
                    {pkg.keyFeatures && (
                      <div className="journey-card__key-features">
                        <h4 className="journey-card__section-title">Key Features</h4>
                        <ul className="journey-card__features-list">
                          {pkg.keyFeatures.map((feature, index) => (
                            <li key={index} className="journey-card__features-item">
                              <span className="journey-card__features-bullet">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Target Audience */}
                    {pkg.targetAudience && (
                      <div className="journey-card__target-audience">
                        <h4 className="journey-card__section-title">Perfect For</h4>
                        <ul className="journey-card__audience-list">
                          {pkg.targetAudience.map((audience, index) => (
                            <li key={index} className="journey-card__audience-item">
                              <span className="journey-card__audience-bullet">✓</span>
                              {audience}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Experiences/Activities */}
                    <div className="journey-card__experiences">
                      <h4 className="journey-card__section-title">Experiences & Activities</h4>
                      {pkg.experiences.map((exp, index) => (
                        <div key={index} className="journey-card__experience-item">
                          <div className="journey-card__experience-image-wrapper">
                            <img 
                              src={exp.image} 
                              alt={exp.title} 
                              className="journey-card__experience-image"
                              loading="lazy"
                            />
                          </div>
                          <div className="journey-card__experience-content">
                            <h5 className="journey-card__experience-title">{exp.title}</h5>
                            <p className="journey-card__experience-description">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* What's Included */}
                    <div className="journey-card__includes">
                      <h4 className="journey-card__section-title">What's Included</h4>
                      <ul className="journey-card__includes-list">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="journey-card__includes-item">
                            <span className="journey-card__includes-check">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What's Excluded (if applicable) */}
                    {pkg.excludes && (
                      <div className="journey-card__excludes">
                        <h4 className="journey-card__section-title">What's Excluded</h4>
                        <ul className="journey-card__excludes-list">
                          {pkg.excludes.map((item, index) => (
                            <li key={index} className="journey-card__excludes-item">
                              <span className="journey-card__excludes-bullet">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <a 
                      href={pkg.formUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="journey-card__book-button"
                    >
                      Inquire About This Package
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="journey-expectations">
          <div className="journey-expectations__container">
            <h2 className="journey-expectations__title">Why Choose Seed Savers Network</h2>
            <div className="journey-expectations__grid">
              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" 
                    alt="Authentic farm stays" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
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
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" 
                    alt="Traditional cuisine" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
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
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" 
                    alt="Community connections" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon"></span>
                  <h3 className="journey-expectations__card-title">15+ Years of Trust</h3>
                  <p className="journey-expectations__text">
                    A national grassroots institution trusted by farmers, researchers, and international partners for leadership in agroecology and seed conservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="journey-cta">
          <div className="journey-cta__container">
            <h2 className="journey-cta__title">Ready to Start Your Journey?</h2>
            <p className="journey-cta__text">
              Have questions or want to customize a package? We're here to help create your perfect agritourism experience.
            </p>
            <a 
              href="mailto:info@seedsaverskenya.org?subject=Package Inquiry" 
              className="journey-cta__button"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PackagesPage;