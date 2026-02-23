import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/media-and-stories-page.css";

// --- DATA ---
// In a real app, this would likely come from a CMS or API.
// For now, we'll expand it here.

// Comprehensive Photo Data
const allPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80", alt: "Harvesting fresh vegetables", category: "farm-life" },
  { id: 2, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80", alt: "Community sharing a meal", category: "community" },
  { id: 3, src: "https://images.unsplash.com/photo-1592983551836-79d9a2a1ca90?w=1200&q=80", alt: "Hands planting seeds in soil", category: "workshop" },
  { id: 4, src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80", alt: "A variety of heirloom tomatoes", category: "produce" },
  { id: 5, src: "https://images.unsplash.com/photo-1500937386664-56d1df06b4ca?w=1200&q=80", alt: "Sunset over a green field", category: "landscape" },
  { id: 6, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80", alt: "A farmer with a basket of produce", category: "people" },
];

// Comprehensive Video Data (using embed URLs)
const allVideos = [
  { id: 101, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Seed Sovereignty Workshop Highlights", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
  { id: 102, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "A Day in the Life at Seed Savers", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
  { id: 103, embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Community Conference Testimonials", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
];

// Comprehensive Testimonial Data
const allTestimonials = [
  { id: 201, name: "Anna Müller", location: "Germany", type: "Researcher", quote: "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty." },
  { id: 202, name: "Michael Johnson", location: "United States", type: "Institutional", quote: "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems." },
  { id: 203, name: "Claire Dubois", location: "France", type: "Tourist", quote: "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way." },
  { id: 204, name: "Kenji Tanaka", location: "Japan", type: "Student", quote: "As an agricultural student, this experience was invaluable. It's one thing to read about permaculture, and another to see it thriving." },
  { id: 205, name: "Fatima Al-Fassi", location: "Morocco", type: "Partner", quote: "Our partnership with Seed Savers Kenya has been instrumental in our own seed bank projects. The knowledge exchange is truly bidirectional." },
  { id: 206, name: "David O'Connell", location: "Ireland", type: "Volunteer", quote: "Volunteering here gave me a sense of purpose. The work is tangible, the community is welcoming, and the impact is real." },
];


const MediaAndStoriesPage = () => {
  // --- STATE FOR GALLERY ---
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'photos' | 'videos'>('all');
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; type: 'photo' | 'video'; src: string; title?: string } | null>(null);

  // --- STATE FOR TESTIMONIALS ---
  const [testimonialFilter, setTestimonialFilter] = useState<string>('all');

  // --- FILTERING LOGIC ---
  const filteredGalleryItems = () => {
    if (galleryFilter === 'photos') return allPhotos;
    if (galleryFilter === 'videos') return allVideos;
    return [...allPhotos, ...allVideos];
  };

  const filteredTestimonials = () => {
    if (testimonialFilter === 'all') return allTestimonials;
    return allTestimonials.filter(t => t.type === testimonialFilter);
  };

  // Get unique types for the testimonial filter dropdown
  const testimonialTypes = ['all', ...new Set(allTestimonials.map(t => t.type))];

  // --- HANDLERS ---
  const openLightbox = (type: 'photo' | 'video', src: string, title?: string) => {
    setLightbox({ isOpen: true, type, src, title });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <main className="media-stories-page">
      <div className="container">
        {/* --- Header --- */}
        <header className="page-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Our Gallery & Stories</h1>
          <p>Immerse yourself in the visuals and voices that define our journey.</p>
        </header>

        {/* --- SECTION 1: THE GALLERY --- */}
        <section className="gallery-section">
          <h2>Visual Journey</h2>
          <div className="filter-tabs">
            <button onClick={() => setGalleryFilter('all')} className={galleryFilter === 'all' ? 'active' : ''}>All Media</button>
            <button onClick={() => setGalleryFilter('photos')} className={galleryFilter === 'photos' ? 'active' : ''}>Photos</button>
            <button onClick={() => setGalleryFilter('videos')} className={galleryFilter === 'videos' ? 'active' : ''}>Videos</button>
          </div>

          <div className="gallery-grid">
            {filteredGalleryItems().map((item) => {
              if ('embedUrl' in item) { // It's a video
                return (
                  <div key={item.id} className="gallery-item video-item" onClick={() => openLightbox('video', item.embedUrl, item.title)}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="play-button-overlay">▶</div>
                  </div>
                );
              } else { // It's a photo
                return (
                  <img key={item.id} src={item.src} alt={item.alt} className="gallery-item photo-item" onClick={() => openLightbox('photo', item.src)} />
                );
              }
            })}
          </div>
        </section>

        {/* --- SECTION 2: THE STORIES --- */}
        <section className="stories-section">
          <h2>Visitor Stories</h2>
          <div className="filter-controls">
            <label htmlFor="testimonial-filter">Filter by Type:</label>
            <select id="testimonial-filter" value={testimonialFilter} onChange={(e) => setTestimonialFilter(e.target.value)}>
              {testimonialTypes.map(type => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
              ))}
            </select>
          </div>

          <div className="testimonials-list">
            {filteredTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <blockquote>
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <cite>
                  <strong>{testimonial.name}</strong> - {testimonial.location} ({testimonial.type})
                </cite>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {lightbox?.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            {lightbox.type === 'photo' ? (
              <img src={lightbox.src} alt="Gallery view" />
            ) : (
              <iframe src={lightbox.src} title={lightbox.title} frameBorder="0" allowFullScreen></iframe>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default MediaAndStoriesPage;