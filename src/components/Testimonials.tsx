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
  size?: 'compact' | 'expanded' | 'panoramic';
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
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
    },
    {
      id: 2,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80',
      alt: 'Harvesting fresh vegetables from the farm',
      size: 'compact',
    },
    {
      id: 3,
      type: 'text',
      quote: 'This was more than travel it was education, culture and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.',
      name: 'Anna Müller',
      location: 'Germany',
      size: 'compact',
    },
    {
      id: 4,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      alt: 'Community members sharing a meal',
      size: 'panoramic',
    },
    {
      id: 5,
      type: 'video',
      src: 'https://www.youtube.com/embed/7Isnch3jVCU',
      size: 'compact',
    },
    {
      id: 6,
      type: 'text',
      quote: 'The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.',
      name: 'Michael Johnson',
      location: 'United States',
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
        <div className="memories-header">
          <h2 className="memories-header__title">Our Journey in Pictures & Words</h2>
          <p className="memories-header__subtitle">
            See the impact of our work through the eyes of our visitors, partners, and community members.
          </p>
        </div>

        <div className="story-grid">
          {galleryData.map((item) => (
            <div key={item.id} className={`story-card story-card--${item.size}`}>
              {item.type === 'video' && (
                <div className="story-card__video-container">
                  <iframe
                    src={item.src}
                    title="Video testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="story-card__video"
                  ></iframe>
                  <div className="story-card__video-overlay"></div>
                </div>
              )}
              {item.type === 'photo' && (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="story-card__image" 
                  loading="lazy"
                />
              )}
              {item.type === 'text' && (
                <div className="story-card__testimonial">
                  <p className="story-card__quote">{item.quote}</p>
                  <h4 className="story-card__name">{item.name}</h4>
                  <span className="story-card__location">{item.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="action-section">
          <p className="action-section__message">Inspired? There's more to see and read.</p>
          <div className="action-section__buttons">
            <Link to="/gallery" className="action-button action-button--explore">
              View Full Gallery
            </Link>
            <Link to="/testimonials" className="action-button action-button--stories">
              Read All Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;