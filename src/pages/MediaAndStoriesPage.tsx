import  { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/media-and-stories-page.css";

// Import images from assets folder
import heroImage from "../assets/hero_1.webp";

// Gallery photos
import photo1 from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import photo2 from "../assets/cb.webp";
import photo3 from "../assets/agri002.jpg";
import photo4 from "../assets/solo.jpeg";
import photo5 from "../assets/hero_1.webp";
import photo6 from "../assets/holding.webp";
import photo7 from "../assets/kikopey.webp";
import photo8 from "../assets/seeds.webp";
import photo9 from "../assets/seed-ambasadors.webp";

// People avatars
import annaAvatar from "../assets/hero_1.webp";
import michaelAvatar from "../assets/hero_1.webp";
import claireAvatar from "../assets/hero_1.webp";
import kenjiAvatar from "../assets/hero_1.webp";
import fatimaAvatar from "../assets/hero_1.webp";
import davidAvatar from "../assets/hero_1.webp";
import sarahAvatar from "../assets/sab.jpeg";

// Video thumbnails (you'll need to create these)
import videoThumb1 from "../assets/hero_1.webp";
import videoThumb2 from "../assets/solo.jpeg";
import videoThumb3 from "../assets/kikopey.webp";
import videoThumb4 from "../assets/n.webp";


// --- DATA ---
const allPhotos = [
  { id: 1, src: photo1, alt: "Harvesting fresh vegetables", category: "farm-life", location: "Nakuru County", date: "March 2024" },
  { id: 2, src: photo2, alt: "Community sharing a meal", category: "community", location: "Gilgil", date: "February 2024" },
  { id: 3, src: photo3, alt: "Hands planting seeds in soil", category: "workshop", location: "Learning Centre", date: "January 2024" },
  { id: 4, src: photo4, alt: "Visitors Touring", category: "community", location: "Demonstration Farm", date: "March 2024" },
  { id: 5, src: photo5, alt: "Seedsavers Center", category: "landscape", location: "Lake Elementaita", date: "December 2023" },
  { id: 6, src: photo6, alt: "A farmer with a basket of produce", category: "people", location: "Partner Farm", date: "February 2024" },
  { id: 7, src: photo7, alt: "Seed bank storage", category: "facility", location: "SSN Headquarters", date: "January 2024" },
  { id: 8, src: photo8, alt: "Indigenous Seeds", category: "education", location: "School Program", date: "March 2024" },
  { id: 9, src: photo9, alt: "Fellowship participants", category: "people", location: "Training Centre", date: "February 2024" },
];

const allVideos = [
  { id: 101, embedUrl: "https://www.youtube.com/embed/7Isnch3jVCU", title: "Seed Savers Network Learning Center", duration: "4:32", date: "March 2024", views: "1.2K", thumbnail: videoThumb1 },
  { id: 102, embedUrl: "https://www.youtube.com/embed/0I7e5QyA2d0", title: "A Day in the Life at Seed Savers", duration: "8:15", date: "February 2024", views: "3.4K", thumbnail: videoThumb2 },
  { id: 103, embedUrl: "https://www.youtube.com/embed/hjIpKa0hkZs", title: "Community Conference Testimonials", duration: "6:47", date: "January 2024", views: "892", thumbnail: videoThumb3 },
  { id: 104, embedUrl: "https://www.youtube.com/embed/hLDigBo1qoM", title: "Indigenous Seed Saving Techniques", duration: "12:23", date: "December 2023", views: "2.1K", thumbnail: videoThumb4 },
];

const allTestimonials = [
  { id: 201, name: "Anna Müller", location: "Germany", type: "Researcher", quote: "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.", image: annaAvatar, program: "Global Fellowship" },
  { id: 202, name: "Michael Johnson", location: "United States", type: "Institutional", quote: "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.", image: michaelAvatar, program: "Learning Exchange" },
  { id: 203, name: "Claire Dubois", location: "France", type: "Tourist", quote: "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way.", image: claireAvatar, program: "Solo Package" },
  { id: 204, name: "Kenji Tanaka", location: "Japan", type: "Student", quote: "As an agricultural student, this experience was invaluable. It's one thing to read about permaculture, and another to see it thriving.", image: kenjiAvatar, program: "Global Fellowship" },
  { id: 205, name: "Fatima Al-Fassi", location: "Morocco", type: "Partner", quote: "Our partnership with Seed Savers Kenya has been instrumental in our own seed bank projects. The knowledge exchange is truly bidirectional.", image: fatimaAvatar, program: "Institutional" },
  { id: 206, name: "David O'Connell", location: "Ireland", type: "Volunteer", quote: "Volunteering here gave me a sense of purpose. The work is tangible, the community is welcoming, and the impact is real.", image: davidAvatar, program: "Volunteer Program" },
];

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
      <section className="media-hero" style={{ backgroundImage: `url(${heroImage})` }}>
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
                        <img src={item.thumbnail} alt={item.title} />
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
                  "The Seed Savers Network isn't just preserving seeds  they're preserving knowledge, culture, and hope for future generations."
                </blockquote>
                <div className="featured-author">
                  <img src={sarahAvatar} alt="Dr. Sarah Kimani" />
                  <div>
                    <strong>sebastian</strong>
                    <span>T.B.C</span>
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