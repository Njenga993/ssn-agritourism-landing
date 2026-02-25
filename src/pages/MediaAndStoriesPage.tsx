import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/media-and-stories-page.css";

// --- DATA ---
const allPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80", alt: "Harvesting fresh vegetables", category: "farm-life", location: "Nakuru County", date: "March 2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80", alt: "Community sharing a meal", category: "community", location: "Gilgil", date: "February 2024" },
  { id: 3, src: "https://images.unsplash.com/photo-1592983551836-79d9a2a1ca90?w=1200&q=80", alt: "Hands planting seeds in soil", category: "workshop", location: "Learning Centre", date: "January 2024" },
  { id: 4, src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80", alt: "A variety of heirloom tomatoes", category: "produce", location: "Demonstration Farm", date: "March 2024" },
  { id: 5, src: "https://images.unsplash.com/photo-1500937386664-56d1df06b4ca?w=1200&q=80", alt: "Sunset over a green field", category: "landscape", location: "Lake Elementaita", date: "December 2023" },
  { id: 6, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80", alt: "A farmer with a basket of produce", category: "people", location: "Partner Farm", date: "February 2024" },
  { id: 7, src: "https://images.unsplash.com/photo-1464226184884-fa7b2c8d9b3c?w=1200&q=80", alt: "Seed bank storage", category: "facility", location: "SSN Headquarters", date: "January 2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1592982537327-a6d3680b8a8a?w=1200&q=80", alt: "Children learning about farming", category: "education", location: "School Program", date: "March 2024" },
  { id: 9, src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80", alt: "Fellowship participants", category: "people", location: "Training Centre", date: "February 2024" },
];

const allVideos = [
  { id: 101, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Seed Sovereignty Workshop Highlights", duration: "4:32", date: "March 2024", views: "1.2K" },
  { id: 102, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "A Day in the Life at Seed Savers", duration: "8:15", date: "February 2024", views: "3.4K" },
  { id: 103, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Community Conference Testimonials", duration: "6:47", date: "January 2024", views: "892" },
  { id: 104, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Indigenous Seed Saving Techniques", duration: "12:23", date: "December 2023", views: "2.1K" },
];

const allTestimonials = [
  { id: 201, name: "Anna Müller", location: "Germany", type: "Researcher", quote: "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.", image: "https://images.unsplash.com/photo-1494790108777-296ef5a9b6b9?w=200&q=80", program: "Global Fellowship" },
  { id: 202, name: "Michael Johnson", location: "United States", type: "Institutional", quote: "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", program: "Learning Exchange" },
  { id: 203, name: "Claire Dubois", location: "France", type: "Tourist", quote: "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", program: "Solo Package" },
  { id: 204, name: "Kenji Tanaka", location: "Japan", type: "Student", quote: "As an agricultural student, this experience was invaluable. It's one thing to read about permaculture, and another to see it thriving.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", program: "Global Fellowship" },
  { id: 205, name: "Fatima Al-Fassi", location: "Morocco", type: "Partner", quote: "Our partnership with Seed Savers Kenya has been instrumental in our own seed bank projects. The knowledge exchange is truly bidirectional.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80", program: "Institutional" },
  { id: 206, name: "David O'Connell", location: "Ireland", type: "Volunteer", quote: "Volunteering here gave me a sense of purpose. The work is tangible, the community is welcoming, and the impact is real.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80", program: "Volunteer Program" },
];

// Stats for impact section
/*const impactStats = [
  { value: "15+", label: "Years of Experience", icon: "🌱" },
  { value: "5,000+", label: "Farmers Supported", icon: "👨‍🌾" },
  { value: "200+", label: "Indigenous Seeds Preserved", icon: "🌽" },
  { value: "50+", label: "Countries Reached", icon: "🌍" },
];*/

const MediaAndStoriesPage = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'stories' | 'impact'>('gallery');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'photos' | 'videos'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; type: 'photo' | 'video'; src: string; title?: string; metadata?: any } | null>(null);
  const [testimonialFilter, setTestimonialFilter] = useState<string>('all');

  // Get unique categories
  const photoCategories = ['all', ...new Set(allPhotos.map(p => p.category))];

  const filteredGalleryItems = () => {
    let items = [];
    if (galleryFilter === 'photos') items = allPhotos;
    else if (galleryFilter === 'videos') items = allVideos;
    else items = [...allPhotos, ...allVideos];
    
    if (selectedCategory !== 'all' && galleryFilter !== 'videos') {
      items = items.filter(item => 'category' in item && item.category === selectedCategory);
    }
    return items;
  };

  const filteredTestimonials = () => {
    if (testimonialFilter === 'all') return allTestimonials;
    return allTestimonials.filter(t => t.type === testimonialFilter);
  };

  const testimonialTypes = ['all', ...new Set(allTestimonials.map(t => t.type))];

  const openLightbox = (type: 'photo' | 'video', src: string, metadata?: any) => {
    setLightbox({ isOpen: true, type, src, ...metadata });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <main className="media-stories-page">
      {/* Hero Section */}
      <section className="media-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1 className="hero-title">Our Gallery & Stories</h1>
          <p className="hero-subtitle">
            Experience the journey through the eyes of our community — from hands-on farming to cultural exchanges
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              <span className="tab-icon"></span>
              Visual Gallery
            </button>
            <button 
              className={`tab ${activeTab === 'stories' ? 'active' : ''}`}
              onClick={() => setActiveTab('stories')}
            >
              <span className="tab-icon"></span>
              Visitor Stories
            </button>
            {/*<button 
              className={`tab ${activeTab === 'impact' ? 'active' : ''}`}
              onClick={() => setActiveTab('impact')}
            >
              <span className="tab-icon">🌍</span>
              Our Impact
            </button>*/}
          </div>
        </div>
      </section>

      <div className="container">
        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <section className="gallery-section fade-in">
            <div className="section-header">
              <h2>Visual Journey Through Seed Savers</h2>
              <p>Explore authentic moments from our programs, farms, and community</p>
            </div>

            {/* Filter Controls */}
            <div className="gallery-controls">
              <div className="media-type-filters">
                <button 
                  className={`media-filter ${galleryFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setGalleryFilter('all')}
                >
                  All Media
                </button>
                <button 
                  className={`media-filter ${galleryFilter === 'photos' ? 'active' : ''}`}
                  onClick={() => setGalleryFilter('photos')}
                >
                  Photos
                </button>
                <button 
                  className={`media-filter ${galleryFilter === 'videos' ? 'active' : ''}`}
                  onClick={() => setGalleryFilter('videos')}
                >
                  Videos
                </button>
              </div>

              {galleryFilter !== 'videos' && (
                <div className="category-filters">
                  {photoCategories.map(cat => (
                    <button
                      key={cat}
                      className={`category-filter ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredGalleryItems().map((item) => {
                if ('embedUrl' in item) {
                  return (
                    <div key={item.id} className="gallery-card video-card" onClick={() => openLightbox('video', item.embedUrl, { title: item.title })}>
                      <div className="card-media">
                        <img src={`https://img.youtube.com/vi/${item.embedUrl.split('/').pop()}/hqdefault.jpg`} alt={item.title} />
                        <div className="play-button">
                          <span>▶</span>
                        </div>
                        <div className="video-duration">{item.duration}</div>
                      </div>
                      <div className="card-info">
                        <h3>{item.title}</h3>
                        <div className="meta">
                          <span>{item.date}</span>
                          <span>{item.views} views</span>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={item.id} className="gallery-card photo-card" onClick={() => openLightbox('photo', item.src, { alt: item.alt, location: item.location, date: item.date })}>
                      <div className="card-media">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </div>
                      <div className="card-info">
                        <h3>{item.alt}</h3>
                        <div className="meta">
                          <span>📍 {item.location}</span>
                          <span>📅 {item.date}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {filteredGalleryItems().length === 0 && (
              <div className="no-results">
                <p>No media found matching your criteria</p>
              </div>
            )}
          </section>
        )}

        {/* STORIES TAB */}
        {activeTab === 'stories' && (
          <section className="stories-section fade-in">
            <div className="section-header">
              <h2>Stories From Our Community</h2>
              <p>Real experiences from visitors, researchers, and partners around the world</p>
            </div>

            {/* Featured Story */}
            <div className="featured-story">
              <div className="featured-content">
                <span className="featured-badge">Featured Story</span>
                <blockquote>
                  "The Seed Savers Network isn't just preserving seeds — they're preserving knowledge, culture, and hope for future generations."
                </blockquote>
                <div className="featured-author">
                  <img src="https://images.unsplash.com/photo-1494790108777-296ef5a9b6b9?w=200&q=80" alt="Dr. Sarah Kimani" />
                  <div>
                    <strong>Dr. Sarah Kimani</strong>
                    <span>Food Sovereignty Researcher, University of Nairobi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter */}
            <div className="stories-filter">
              <label>Filter by visitor type:</label>
              <div className="filter-buttons">
                {testimonialTypes.map(type => (
                  <button
                    key={type}
                    className={`story-filter-btn ${testimonialFilter === type ? 'active' : ''}`}
                    onClick={() => setTestimonialFilter(type)}
                  >
                    {type === 'all' ? 'All Stories' : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="testimonials-grid">
              {filteredTestimonials().map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <p className="testimonial-meta">
                        {testimonial.location} • {testimonial.type}
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>"{testimonial.quote}"</p>
                  </div>
                  <div className="testimonial-footer">
                    <span className="program-badge">{testimonial.program}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IMPACT TAB 
        {activeTab === 'impact' && (
          <section className="impact-section fade-in">
            <div className="section-header">
              <h2>Our Impact & Reach</h2>
              <p>15 years of grassroots work in agroecology and seed conservation</p>
            </div>

            
            <div className="stats-grid">
              {impactStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            
            <div className="impact-story-card">
              <div className="impact-story-content">
                <h3>Preserving Kenya's Agricultural Heritage</h3>
                <p>
                  Since 2009, Seed Savers Network has worked directly with farming communities across Kenya to 
                  preserve indigenous seeds, promote agroecological practices, and ensure food sovereignty for 
                  future generations. Our community seed banks now house over 200 varieties of indigenous crops, 
                  protecting biodiversity and traditional knowledge.
                </p>
                <div className="impact-highlights">
                  <div className="highlight">
                    <span>200+</span>
                    <small>Seed varieties</small>
                  </div>
                  <div className="highlight">
                    <span>50+</span>
                    <small>Community seed banks</small>
                  </div>
                  <div className="highlight">
                    <span>15</span>
                    <small>Counties in Kenya</small>
                  </div>
                </div>
              </div>
              <div className="impact-story-image">
                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80" alt="Seed bank" />
              </div>
            </div>

           
            <div className="partners-section">
              <h3>Trusted By</h3>
              <div className="partner-logos">
                <div className="partner-logo">University of Nairobi</div>
                <div className="partner-logo">Biovision Foundation</div>
                <div className="partner-logo">FAO Kenya</div>
                <div className="partner-logo">Kenya Agricultural Institute</div>
                <div className="partner-logo">Slow Food International</div>
                <div className="partner-logo">ICIPE</div>
              </div>
            </div>
          </section> 
        )}*/}
      </div>

      {/* Lightbox */}
      {lightbox?.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            
            {lightbox.type === 'photo' ? (
              <>
                <img src={lightbox.src} alt={lightbox.metadata?.alt || "Gallery image"} className="lightbox-image" />
                {lightbox.metadata && (
                  <div className="lightbox-meta">
                    <p className="lightbox-caption">{lightbox.metadata.alt}</p>
                    <div className="lightbox-details">
                      <span>📍 {lightbox.metadata.location}</span>
                      <span>📅 {lightbox.metadata.date}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <iframe 
                  src={lightbox.src} 
                  title={lightbox.title || "Video player"} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="lightbox-video"
                ></iframe>
                {lightbox.title && (
                  <div className="lightbox-meta">
                    <p className="lightbox-caption">{lightbox.title}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default MediaAndStoriesPage;