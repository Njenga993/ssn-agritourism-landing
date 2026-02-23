// PackagesPage.tsx
import React, { useState } from 'react';
import '../styles/packages-page.css';

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
  itinerary: {
    day: number;
    title: string;
    description: string;
    image: string;
  }[];
  includes: string[];
  formUrl: string;
}

const packagesData: Package[] = [
  {
    id: 1,
    title: "Global Agroecology Fellowship",
    category: 'individual',
    heroImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    shortDescription: "Its a learning program designed for international students, researchers, and professionals, as well as individuals interested in sustainable farming systems in East Africa.",
    duration: "1 month - 12 months",
    location: "Multiple Sites in Kenya",
    groupSize: " People",
    price: "Contact for Pricing",
    itinerary: [
      { day: 1, title: "Arrival & Orientation", description: "Settle into our main campus. Meet the team and get an overview of Kenyan agroecology.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" },
      { day: 5, title: "Seed Bank Immersion", description: "Hands-on experience at our community seed bank. Learn conservation, multiplication, and distribution.", image: "https://images.unsplash.com/photo-1583748159012-ae53b9a0c35d?w=600&q=80" },
      { day: 15, title: "Community Farm Stay", description: "Live and work with a local farming community. Participate in daily activities and cultural exchanges.", image: "https://images.unsplash.com/photo-1592982537327-a6d3680b8a8a?w=600&q=80" },
      { day: 30, title: "Capstone Project", description: "Design and implement a project that addresses a real-world challenge faced by our partner communities.", image: "https://images.unsplash.com/photo-1625728683244-3d822d40a5c2?w=600&q=80" },
    ],
    includes: ["Accommodation", "All Meals", "Local Transport", "Training Materials", "Mentorship"],
    formUrl: "https://forms.gle/your-fellowship-form"
  },
  {
    id: 2,
    title: "Institutional Learning Exchange",
    category: 'institution',
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    shortDescription: "Tailored conferences, workshops, and field visits for universities, NGOs, and corporate groups.",
    duration: "3-7 Days",
    location: "Main Campus & Partner Farms",
    groupSize: "10-50 People",
    price: "Custom Quote",
    itinerary: [
      { day: 1, title: "Welcome & Keynote", description: "Introduction to our work with a keynote on the future of food systems in Africa.", image: "https://images.unsplash.com/photo-1511578314322-379308476870?w=600&q=80" },
      { day: 2, title: "Thematic Workshops", description: "Deep-dive sessions on topics like 'Permaculture Design' or 'Indigenous Food Systems'.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
      { day: 3, title: "Field Immersion", description: "Visits to our most successful partner farms. See theory put into practice.", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80" },
      { day: 4, title: "Networking & Action Planning", description: "Collaborative session to develop actionable plans for your organization.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80" },
    ],
    includes: ["Conference Facilities", "Catering", "Accommodation", "Transport", "Expert Facilitators"],
    formUrl: "https://forms.gle/your-institutional-form"
  },
  {
    id: 3,
    title: "Solo / Group Experience",
    category: 'specialized',
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    shortDescription: "A fully customized, short-stay agritourism experience designed for individual travelers, couples, families, friends, and small learning groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
    duration: "5-10 Days",
    location: "Rift Valley & Western Kenya",
    groupSize: "6-12 People",
    price: "Contact for Pricing",
    itinerary: [
      { day: 1, title: "Nairobi Food Scene", description: "Explore urban markets and restaurants championing local ingredients.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
      { day: 3, title: "Farm-to-Table Experience", description: "Harvest ingredients with a farmer and learn to cook a traditional meal under their guidance.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
      { day: 5, title: "Indigenous Seed Workshop", description: "Learn about the connection between heritage seeds, nutrition, and cultural identity.", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80" },
      { day: 7, title: "Community Feast", description: "Participate in a traditional community celebration, a vibrant showcase of music, dance, and food.", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80" },
    ],
    includes: ["Accommodation", "All Meals & Tastings", "Transport", "Cultural Guide", "Cooking Classes"],
    formUrl: "https://forms.gle/your-cultural-form"
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
                Special Tours
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

                  <button 
                    className="journey-card__expand-button"
                    onClick={() => handleToggleExpand(pkg.id)}
                  >
                    {expandedId === pkg.id ? 'Show Less' : 'View Full Itinerary'}
                    <span className={`journey-card__expand-icon ${expandedId === pkg.id ? 'journey-card__expand-icon--rotated' : ''}`}>▼</span>
                  </button>
                </div>

                {/* Expanded Content */}
                <div className="journey-card__expanded">
                  <div className="journey-card__expanded-inner">
                    <div className="journey-card__itinerary">
                      <h4 className="journey-card__section-title">Sample Itinerary</h4>
                      {pkg.itinerary.map((item) => (
                        <div key={item.day} className="journey-card__itinerary-item">
                          <div className="journey-card__itinerary-image-wrapper">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="journey-card__itinerary-image"
                              loading="lazy"
                            />
                          </div>
                          <div className="journey-card__itinerary-content">
                            <h5 className="journey-card__itinerary-day">Day {item.day}</h5>
                            <h6 className="journey-card__itinerary-title">{item.title}</h6>
                            <p className="journey-card__itinerary-description">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

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
                    
                    <a 
                      href={pkg.formUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="journey-card__book-button"
                    >
                      Book This Experience
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
            <h2 className="journey-expectations__title">What To Expect On Your Journey</h2>
            <div className="journey-expectations__grid">
              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" 
                    alt="Comfortable accommodation" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon">🏡</span>
                  <h3 className="journey-expectations__card-title">Comfortable Stays</h3>
                  <p className="journey-expectations__text">
                    Rest in authentic, eco-friendly lodges and homestays that reflect local culture and commitment to sustainability.
                  </p>
                </div>
              </div>

              <div className="journey-expectations__card">
                <div className="journey-expectations__image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" 
                    alt="Authentic cuisine" 
                    className="journey-expectations__image"
                    loading="lazy"
                  />
                </div>
                <div className="journey-expectations__content">
                  <span className="journey-expectations__icon">🍲</span>
                  <h3 className="journey-expectations__card-title">Authentic Cuisine</h3>
                  <p className="journey-expectations__text">
                    Savor farm-to-table meals prepared with fresh, organic ingredients. Participate in cooking classes and learn traditional recipes.
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
                  <span className="journey-expectations__icon">🤝</span>
                  <h3 className="journey-expectations__card-title">Real Connections</h3>
                  <p className="journey-expectations__text">
                    Engage deeply with local communities, farmers, and experts. It's not just a trip; it's a meaningful exchange.
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