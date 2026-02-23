import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/testimonials.css";

// Define the structure for our gallery items
interface GalleryItem {
  id: number;
  type: 'photo' | 'video' | 'text';
  src?: string; // For photos and videos
  alt?: string;
  // Optional fields for text testimonials
  quote?: string;
  name?: string;
  location?: string;
  // For layout control
  size?: 'small' | 'large' | 'wide';
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 } // Trigger earlier for a smoother effect
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // --- Gallery Data ---
  // Easily manage your gallery content here. Replace with real URLs.
  const galleryData: GalleryItem[] = [
    {
      id: 1,
      type: 'video',
      src: 'https://www.youtube.com/embed/0I7e5QyA2d0', // Replace with your video embed URL
      size: 'large',
    },
    {
      id: 2,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80',
      alt: 'Harvesting fresh vegetables from the farm',
      size: 'small',
    },
    {
      id: 3,
      type: 'text',
      quote: 'This was more than travel it was education, culture and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.',
      name: 'Anna Müller',
      location: 'Germany',
      size: 'small',
    },
    {
      id: 4,
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      alt: 'Community members sharing a meal',
      size: 'wide',
    },
    {
      id: 5,
      type: 'video',
      src: 'https://www.youtube.com/embed/7Isnch3jVCU', // Replace with another video embed URL
      size: 'small',
    },
    {
      id: 6,
      type: 'text',
      quote: 'The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.',
      name: 'Michael Johnson',
      location: 'United States',
      size: 'small',
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`testimonials-section ${visible ? "show" : ""}`}
    >
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Our Journey in Pictures & Words</h2>
          <p className="testimonials-intro">
            See the impact of our work through the eyes of our visitors, partners, and community members.
          </p>
        </div>

        {/* --- The Mixed-Media Gallery --- */}
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div key={item.id} className={`gallery-item gallery-item--${item.size}`}>
              {item.type === 'video' && (
                <div className="video-wrapper">
                  <iframe
                    src={item.src}
                    title="Video testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="play-icon"></div> {/* Optional: Add a custom play icon overlay */}
                </div>
              )}
              {item.type === 'photo' && (
                <img src={item.src} alt={item.alt} className="gallery-image" />
              )}
              {item.type === 'text' && (
                <div className="testimonial-card">
                  <p className="testimonial-text">{item.quote}</p>
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Call-to-Action Buttons --- */}
        <div className="cta-section">
          <p className="cta-intro">Inspired? There's more to see and read.</p>
          <div className="cta-buttons">
            <Link to="/gallery" className="cta-button cta-button--primary">
               View Full Gallery
            </Link>
            <Link to="/testimonials" className="cta-button cta-button--primary">
               Read All Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;