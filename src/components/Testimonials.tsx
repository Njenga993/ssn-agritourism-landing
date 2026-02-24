// Testimonials.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/testimonials.css";

// Define the structure for our gallery items
interface GalleryItem {
  id: number;
  type: 'photo' | 'video' | 'text';
  src?: string;
  alt?: string;
  quote?: string;
  name?: string;
  location?: string;
  program?: string;
  size?: 'compact' | 'expanded' | 'panoramic';
  avatar?: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Gallery Data
  const galleryData: GalleryItem[] = [
    {
      id: 1,
      type: 'video',
      src: 'https://www.youtube.com/embed/0I7e5QyA2d0',
      size: 'expanded',
      name: 'Farming Life Experience',
      program: 'Global Fellowship',
    },
    {
      id: 2,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80',
      alt: 'Harvesting fresh vegetables from the farm',
      size: 'compact',
      location: 'Nakuru County',
      program: 'Seed Conservation',
    },
    {
      id: 3,
      type: 'text',
      quote: 'This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.',
      name: 'Anna Müller',
      location: 'Germany',
      program: 'Global Fellowship',
      avatar: 'https://images.unsplash.com/photo-1494790108777-296ef5a9b6b9?w=200&q=80',
      size: 'compact',
    },
    {
      id: 4,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      alt: 'Community members sharing a meal',
      size: 'panoramic',
      location: 'Community Feast',
      program: 'Cultural Exchange',
    },
    {
      id: 5,
      type: 'video',
      src: 'https://www.youtube.com/embed/7Isnch3jVCU',
      size: 'compact',
      name: 'Seed Banking Workshop',
      program: 'Learning Exchange',
    },
    {
      id: 6,
      type: 'text',
      quote: 'The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.',
      name: 'Michael Johnson',
      location: 'United States',
      program: 'Institutional',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      size: 'compact',
    },
    {
      id: 7,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1592983551836-79d9a2a1ca90?w=800&q=80',
      alt: 'Hands planting seeds',
      size: 'compact',
      location: 'Training Centre',
      program: 'Workshop',
    },
    {
      id: 8,
      type: 'text',
      quote: 'Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way.',
      name: 'Claire Dubois',
      location: 'France',
      program: 'Solo Package',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      size: 'compact',
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`memories-showcase ${visible ? "memories-showcase--visible" : ""}`}
    >
      <div className="memories-wrapper">
        {/* Header with decorative elements */}
        <div className="memories-header">
          <span className="memories-header__eyebrow">Community Voices</span>
          <h2 className="memories-header__title">
            Stories & Moments<br />
            <span className="memories-header__highlight">From Our Journey</span>
          </h2>
          <p className="memories-header__subtitle">
            See the impact of our work through the eyes of our visitors, partners, 
            and community members. Every photo, video, and story tells a unique experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="story-grid">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className={`story-card story-card--${item.size}`}
              onMouseEnter={() => item.type === 'video' && setActiveVideo(item.id)}
              onMouseLeave={() => item.type === 'video' && setActiveVideo(null)}
            >
              {item.type === 'video' && (
                <div className="story-card__video-container">
                  {activeVideo === item.id ? (
                    <iframe
                      src={`${item.src}?autoplay=1&mute=1`}
                      title={item.name || "Video testimonial"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="story-card__video"
                    ></iframe>
                  ) : (
                    <div className="story-card__video-preview">
                      <img 
                        src={`https://img.youtube.com/vi/${item.src?.split('/').pop()}/hqdefault.jpg`} 
                        alt={item.name}
                        className="story-card__video-thumbnail"
                      />
                      <div className="story-card__video-play">
                        <span className="play-icon">▶</span>
                      </div>
                    </div>
                  )}
                  {item.name && (
                    <div className="story-card__video-caption">
                      <span>{item.name}</span>
                      {item.program && <span className="program-tag">{item.program}</span>}
                    </div>
                  )}
                </div>
              )}
              
              {item.type === 'photo' && (
                <>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="story-card__image" 
                    loading="lazy"
                  />
                  {(item.location || item.program) && (
                    <div className="story-card__image-overlay">
                      {item.location && <span className="location">{item.location}</span>}
                      {item.program && <span className="program">{item.program}</span>}
                    </div>
                  )}
                </>
              )}
              
              {item.type === 'text' && (
                <div className="story-card__testimonial">
                  {item.avatar && (
                    <div className="testimonial-avatar-wrapper">
                      <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                    </div>
                  )}
                  <div className="testimonial-content">
                    <p className="story-card__quote">"{item.quote}"</p>
                    <div className="testimonial-meta">
                      <h4 className="story-card__name">{item.name}</h4>
                      <span className="story-card__location">{item.location}</span>
                    </div>
                    {item.program && (
                      <span className="testimonial-badge">{item.program}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section 
        <div className="impact-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Visitors Hosted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">35+</span>
            <span className="stat-label">Countries Reached</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Stories Shared</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Visitor Rating</span>
          </div>
        </div>*/}

        {/* Call to Action */}
        <div className="action-section">
          <div className="action-section__content">
            <h3 className="action-section__title">Ready to Create Your Own Story?</h3>
            <p className="action-section__message">
              Join our community of changemakers, learners, and travelers. 
              Experience the beauty of sustainable farming and cultural exchange.
            </p>
          </div>
          <div className="action-section__buttons">
            <Link to="/packages" className="action-button action-button--primary">
              Explore Packages
            </Link>
            <Link to="/media-and-stories" className="action-button action-button--secondary">
              View Full Gallery
              <span className="button-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Decorative Elements 
        <div className="memories-decoration">
          <div className="decoration-leaf leaf-1">🌱</div>
          <div className="decoration-leaf leaf-2">🌿</div>
          <div className="decoration-leaf leaf-3">🌾</div>
        </div>*/}
      </div>
    </section>
  );
};

export default Testimonials;