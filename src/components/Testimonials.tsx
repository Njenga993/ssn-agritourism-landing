// Testimonials.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/testimonials.css";

import harvestImg from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import mealImg from "../assets/ecology.jpeg";
import plantingImg from "../assets/n.webp";
import annaAvatar from "../assets/agri001.jpg";
import michaelAvatar from "../assets/sab.jpeg";
import claireAvatar from "../assets/agri001.jpg";

/* ── Reveal hook ── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  program: string;
  avatar: string;
  duration: string;
}

interface GalleryItem {
  id: number;
  type: "photo" | "video";
  src: string;
  alt?: string;
  location?: string;
  program?: string;
  size: "standard" | "wide" | "tall";
  name?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty. The experience completely changed how I view food systems.",
    name: "Anna Muller",
    location: "Berlin, Germany",
    program: "Global Fellowship",
    avatar: annaAvatar,
    duration: "3 Week Program",
  },
  {
    id: 2,
    quote:
      "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems that we've since incorporated into our curriculum.",
    name: "Michael Johnson",
    location: "Portland, USA",
    program: "Institutional Exchange",
    avatar: michaelAvatar,
    duration: "5 Day Program",
  },
  {
    id: 3,
    quote:
      "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way. I still use the techniques I learned with my own community.",
    name: "Claire Dubois",
    location: "Lyon, France",
    program: "Solo Agritourism",
    avatar: claireAvatar,
    duration: "2 Week Program",
  },
];

const galleryData: GalleryItem[] = [
  {
    id: 1,
    type: "video",
    src: "0I7e5QyA2d0",
    size: "tall",
    name: "Farming Life Experience",
    program: "Global Fellowship",
  },
  {
    id: 2,
    type: "photo",
    src: harvestImg,
    alt: "Harvesting fresh vegetables",
    size: "standard",
    location: "Nakuru County",
    program: "Seed Conservation",
  },
  {
    id: 3,
    type: "photo",
    src: mealImg,
    alt: "Community members sharing a meal",
    size: "wide",
    location: "Community Feast",
    program: "Cultural Exchange",
  },
  {
    id: 4,
    type: "video",
    src: "7Isnch3jVCU",
    size: "standard",
    name: "Seed Banking Workshop",
    program: "Learning Exchange",
  },
  {
    id: 5,
    type: "photo",
    src: plantingImg,
    alt: "Hands planting seeds",
    size: "standard",
    location: "Training Centre",
    program: "Workshop",
  },
];

/* ── Testimonial Card ── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, visible } = useReveal(0.1);

  return (
    <article
      ref={ref}
      className={`tst-card ${visible ? "tst-card--visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="tst-card__inner">
        <div className="tst-card__header">
          <div className="tst-card__author">
            <div className="tst-card__avatar-wrapper">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="tst-card__avatar"
                loading="lazy"
              />
              <span className="tst-card__verified">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 8l3 3 5-5" />
                </svg>
              </span>
            </div>
            <div className="tst-card__author-info">
              <strong className="tst-card__name">{testimonial.name}</strong>
              <span className="tst-card__location">{testimonial.location}</span>
            </div>
          </div>
          <div className="tst-card__meta">
            <span className="tst-card__program-tag">{testimonial.program}</span>
            <span className="tst-card__duration">{testimonial.duration}</span>
          </div>
        </div>

        <blockquote className="tst-card__quote">
          <span className="tst-card__quote-mark">"</span>
          <p className="tst-card__quote-text">{testimonial.quote}</p>
        </blockquote>

        <div className="tst-card__footer">
          <div className="tst-card__rating">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill="currentColor"
                className="tst-card__star"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="tst-card__program-ref">Seed Savers Network</span>
        </div>
      </div>
    </article>
  );
}

/* ── Video Card ── */
function VideoCard({ item }: { item: GalleryItem }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="gal-card__video-wrapper"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${item.src}?autoplay=1&mute=1`}
          title={item.name || "Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="gal-card__iframe"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${item.src}/hqdefault.jpg`}
            alt={item.name}
            className="gal-card__thumbnail"
          />
          <div className="gal-card__play-overlay">
            <div className="gal-card__play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
      <div className="gal-card__caption">
        <span className="gal-card__caption-title">{item.name}</span>
        {item.program && (
          <span className="gal-card__caption-tag">{item.program}</span>
        )}
      </div>
    </div>
  );
}

const Testimonials = () => {
  const headReveal = useReveal(0.15);
  const testimonialsReveal = useReveal(0.08);
  const galleryReveal = useReveal(0.08);
  const ctaReveal = useReveal(0.2);

  return (
    <section id="testimonials" className="tst">
      {/* Masthead */}
      <div className="tst__masthead">
        <span className="tst__masthead-label">Community Voices</span>
        <span className="tst__masthead-rule" />
        <span className="tst__masthead-vol">
          Stories from the Field
        </span>
      </div>

      {/* Headline Block */}
      <div
        ref={headReveal.ref}
        className={`tst__head ${headReveal.visible ? "tst__head--on" : ""}`}
      >
        <div className="tst__head-inner">
          <div className="tst__head-left">
            <span className="tst__head-overline">Testimonials</span>
            <h2 className="tst__headline">
              <span className="tst__headline-line">Real Stories,</span>
              <span className="tst__headline-line">
                <em>Real Impact</em>
              </span>
            </h2>
          </div>
          <div className="tst__head-right">
            <p className="tst__standfirst">
              Hear from the people who have immersed themselves in Kenya's
              agricultural heritage. Their experiences reflect the depth of
              learning and connection these programs provide.
            </p>
            <div className="tst__head-stats">
              <div className="tst-head-stat">
                <span className="tst-head-stat__number">200+</span>
                <span className="tst-head-stat__label">Participants</span>
              </div>
              <div className="tst-head-stat">
                <span className="tst-head-stat__number">15+</span>
                <span className="tst-head-stat__label">Countries</span>
              </div>
              <div className="tst-head-stat">
                <span className="tst-head-stat__number">98%</span>
                <span className="tst-head-stat__label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div
        ref={testimonialsReveal.ref}
        className={`tst__testimonials ${testimonialsReveal.visible ? "tst__testimonials--on" : ""}`}
      >
        <div className="tst__testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div
        ref={galleryReveal.ref}
        className={`tst__gallery ${galleryReveal.visible ? "tst__gallery--on" : ""}`}
      >
        <div className="tst__gallery-header">
          <div className="tst__gallery-masthead">
            <span className="tst__gallery-label">Photo & Video Journal</span>
            <span className="tst__gallery-rule" />
          </div>
          <h3 className="tst__gallery-title">
            Moments <em>Captured</em>
          </h3>
        </div>

        <div className="tst__gallery-grid">
          {galleryData.map((item, i) => (
            <div
              key={item.id}
              className={`gal-card gal-card--${item.size}`}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              {item.type === "video" && <VideoCard item={item} />}

              {item.type === "photo" && (
                <div className="gal-card__photo-wrapper">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gal-card__photo"
                    loading="lazy"
                  />
                  <div className="gal-card__photo-info">
                    {item.location && (
                      <span className="gal-card__photo-location">
                        {item.location}
                      </span>
                    )}
                    {item.program && (
                      <span className="gal-card__photo-program">
                        {item.program}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        ref={ctaReveal.ref}
        className={`tst__cta ${ctaReveal.visible ? "tst__cta--on" : ""}`}
      >
        <div className="tst__cta-content">
          <div className="tst__cta-text">
            <span className="tst__cta-overline">Begin Your Journey</span>
            <h3 className="tst__cta-heading">
              Ready to Write
              <br />
              <em>Your Own Story?</em>
            </h3>
            <p className="tst__cta-description">
              Join a growing community of changemakers, learners, and travelers 
              who have experienced the transformative power of Kenya's 
              agricultural heritage firsthand.
            </p>
          </div>
          <div className="tst__cta-actions">
            <Link to="/packages" className="tst__btn tst__btn--primary">
              Explore Programs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/testimonials" className="tst__btn tst__btn--secondary">
              View All Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;