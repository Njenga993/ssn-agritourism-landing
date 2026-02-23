import React, { useState } from 'react';
import '../styles/packages-page.css';

// Define the structure for our package data
interface Package {
  id: number;
  title: string;
  category: string; // 'individual', 'institution', 'specialized'
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

// --- DATA ---
// This data is extracted from your documents. I've made it detailed and structured.
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
  },
  /*{
    id: 4,
    title: "Family Eco-Adventure",
    category: 'specialized',
    heroImage: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
    shortDescription: "A fun, educational, and hands-on experience designed for families to connect with nature and each other.",
    duration: "4-6 Days",
    location: "Family-Friendly Farm Campus",
    groupSize: "3-8 People",
    price: "$1,800 - $3,200",
    itinerary: [
      { day: 1, title: "Animal Farm Introduction", description: "Meet our friendly farm animals and learn about their role in the ecosystem.", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80" },
      { day: 2, title: "Bug Hunting & Nature Walk", description: "A guided safari to discover the incredible world of insects and plants on the farm.", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" },
      { day: 3, title: "Planting a Family Tree", description: "Plant a tree together as a family and learn about its importance for the future.", image: "https://images.unsplash.com/photo-1530838936378-85ac52224f94?w=600&q=80" },
      { day: 4, title: "Pizza Party!", description: "Make your own pizza in our wood-fired oven using ingredients you harvested yourself.", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80" },
    ],
    includes: ["Family Accommodation", "All Meals", "Kid-Friendly Activities", "Supervision", "Materials"],
    formUrl: "https://forms.gle/your-family-form"
  }*/
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
    <div className="packages-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Agritourism Adventure</h1>
          <p>Immerse yourself in the heart of Kenya's vibrant food systems. From hands-on farming to cultural exchanges, find the experience that's perfect for you.</p>
          <a href="#packages-grid" className="hero-cta">Explore Packages</a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-buttons">
            <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>All Experiences</button>
            <button className={activeFilter === 'individual' ? 'active' : ''} onClick={() => setActiveFilter('individual')}>For Individuals</button>
            <button className={activeFilter === 'institution' ? 'active' : ''} onClick={() => setActiveFilter('institution')}>For Institutions</button>
            <button className={activeFilter === 'specialized' ? 'active' : ''} onClick={() => setActiveFilter('specialized')}>Special Tours</button>
          </div>
        </section>

        {/* Packages Grid */}
        <section id="packages-grid" className="packages-grid-section">
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <article key={pkg.id} className={`package-card ${expandedId === pkg.id ? 'expanded' : ''}`}>
                <div className="card-header" onClick={() => handleToggleExpand(pkg.id)}>
                  <img src={pkg.heroImage} alt={pkg.title} className="card-hero-image" />
                  <div className="card-title-overlay">
                    <h3>{pkg.title}</h3>
                  </div>
                </div>
                
                <div className="card-body">
                  <p className="card-short-desc">{pkg.shortDescription}</p>
                  
                  <div className="card-details">
                    <span className="detail">📅 {pkg.duration}</span>
                    <span className="detail">📍 {pkg.location}</span>
                    <span className="detail">👥 {pkg.groupSize}</span>
                    <span className="detail price">{pkg.price}</span>
                  </div>

                  <button className="learn-more-btn" onClick={() => handleToggleExpand(pkg.id)}>
                    {expandedId === pkg.id ? 'Show Less' : 'View Full Itinerary'}
                  </button>
                </div>

                {/* Expanded Content */}
                <div className="expanded-content">
                  <div className="itinerary">
                    <h4>Sample Itinerary</h4>
                    {pkg.itinerary.map((item) => (
                      <div key={item.day} className="itinerary-item">
                        <img src={item.image} alt={item.title} />
                        <div className="itinerary-text">
                          <h5>Day {item.day}: {item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="includes">
                    <h4>What's Included</h4>
                    <ul>
                      {pkg.includes.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href={pkg.formUrl} target="_blank" rel="noopener noreferrer" className="book-now-btn">
                    Book This Experience
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="what-to-expect">
          <h2>What To Expect On Your Journey</h2>
          <div className="expect-grid">
            <div className="expect-item">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" alt="Accommodation" />
              <div className="expect-content">
                <span className="expect-icon">🏡</span>
                <h3>Comfortable Stays</h3>
                <p>Rest in authentic, eco-friendly lodges and homestays that reflect local culture and commitment to sustainability.</p>
              </div>
            </div>
            <div className="expect-item">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Cuisine" />
              <div className="expect-content">
                <span className="expect-icon">🍲</span>
                <h3>Authentic Cuisine</h3>
                <p>Savor farm-to-table meals prepared with fresh, organic ingredients. Participate in cooking classes and learn traditional recipes.</p>
              </div>
            </div>
            <div className="expect-item">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="Community" />
              <div className="expect-content">
                <span className="expect-icon">🤝</span>
                <h3>Real Connections</h3>
                <p>Engage deeply with local communities, farmers, and experts. It's not just a trip; it's a meaningful exchange.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Have questions or want to customize a package? We're here to help create your perfect agritourism experience.</p>
          <a href="mailto:info@seedsaverskenya.org?subject=Package Inquiry" className="cta-button">Get In Touch</a>
        </section>
      </main>
    </div>
  );
};

export default PackagesPage;