// Testimonials.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/testimonials.css";

import harvestImg   from "../assets/women-cultivating-crops-in-green-fields-4771650.webp";
import mealImg      from "../assets/ecology.jpeg";
import plantingImg  from "../assets/n.webp";
import annaAvatar   from "../assets/agri001.jpg";
import michaelAvatar from "../assets/sab.jpeg";
import claireAvatar from "../assets/agri001.jpg";

/* ── tiny reveal hook ── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface GalleryItem {
  id: number;
  type: "photo" | "video" | "text";
  src?: string;
  alt?: string;
  quote?: string;
  name?: string;
  location?: string;
  program?: string;
  size?: "compact" | "expanded" | "panoramic";
  avatar?: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, type: "video",  src: "0I7e5QyA2d0",   size: "expanded",  name: "Farming Life Experience",    program: "Global Fellowship"   },
  { id: 2, type: "photo",  src: harvestImg,        alt: "Harvesting fresh vegetables", size: "compact",  location: "Nakuru County",      program: "Seed Conservation"   },
  { id: 3, type: "text",   quote: "This was more than travel — it was education, culture, and community. I left with practical agroecology skills and a deeper understanding of seed sovereignty.", name: "Anna Müller",      location: "Germany",        program: "Global Fellowship",  avatar: annaAvatar,    size: "compact"  },
  { id: 4, type: "photo",  src: mealImg,           alt: "Community members sharing a meal", size: "panoramic", location: "Community Feast",  program: "Cultural Exchange"   },
  { id: 5, type: "video",  src: "7Isnch3jVCU",    size: "compact",  name: "Seed Banking Workshop",      program: "Learning Exchange"   },
  { id: 6, type: "text",   quote: "The conference hosting environment was inspiring and deeply authentic. Our institution gained valuable insight into community-driven agricultural systems.", name: "Michael Johnson", location: "United States",  program: "Institutional",      avatar: michaelAvatar, size: "compact"  },
  { id: 7, type: "photo",  src: plantingImg,       alt: "Hands planting seeds",         size: "compact",  location: "Training Centre",    program: "Workshop"            },
  { id: 8, type: "text",   quote: "Participating in seed conservation and traditional cooking sessions was transformative. It connected sustainability with culture in a powerful way.", name: "Claire Dubois",   location: "France",         program: "Solo Package",       avatar: claireAvatar,  size: "compact"  },
];

/* ── VIDEO CARD ── */
function VideoCard({ item }: { item: GalleryItem }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="tm-card__video-wrap"
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
          className="tm-card__iframe"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${item.src}/hqdefault.jpg`}
            alt={item.name}
            className="tm-card__thumb"
          />
          <div className="tm-card__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </>
      )}
      {item.name && (
        <div className="tm-card__vid-cap">
          <span>{item.name}</span>
          {item.program && <span className="tm-card__prog-tag">{item.program}</span>}
        </div>
      )}
    </div>
  );
}

const Testimonials = () => {
  const headReveal = useReveal(0.15);
  const gridReveal = useReveal(0.08);
  const ctaReveal  = useReveal(0.2);

  return (
    <section id="testimonials" className="tm">

      {/* ── MASTHEAD ── */}
      <div className="tm__masthead">
        <span className="tm__masthead-label">Community Voices</span>
        <span className="tm__masthead-rule" />
        <span className="tm__masthead-vol">Stories &amp; Moments</span>
      </div>

      {/* ── HEADLINE BLOCK ── */}
      <div
        ref={headReveal.ref}
        className={`tm__headline-block ${headReveal.visible ? "tm__headline-block--on" : ""}`}
      >
        <div className="tm__headline-wrap">
          <p className="tm__kicker">From Our Journey</p>
          <h2 className="tm__headline">
            <span>Stories,</span>
            <span><em>Voices</em></span>
            <span>&amp; Moments</span>
          </h2>
        </div>
        <p className="tm__standfirst">
          Every photo, video, and word tells a unique experience. See our work
          through the eyes of visitors, partners, and the communities who call
          these landscapes home.
        </p>
      </div>

      {/* ── GALLERY GRID ── */}
      <div
        ref={gridReveal.ref}
        className={`tm__grid ${gridReveal.visible ? "tm__grid--on" : ""}`}
      >
        {galleryData.map((item, i) => (
          <div
            key={item.id}
            className={`tm-card tm-card--${item.size}`}
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >

            {/* VIDEO */}
            {item.type === "video" && <VideoCard item={item} />}

            {/* PHOTO */}
            {item.type === "photo" && (
              <>
                <img src={item.src} alt={item.alt} className="tm-card__photo" loading="lazy" />
                <div className="tm-card__photo-overlay">
                  {item.location && <span className="tm-card__loc">{item.location}</span>}
                  {item.program  && <span className="tm-card__prog">{item.program}</span>}
                </div>
              </>
            )}

            {/* TESTIMONIAL */}
            {item.type === "text" && (
              <div className="tm-card__testimonial">
                <span className="tm-card__open-mark">&ldquo;</span>
                <p className="tm-card__quote">{item.quote}</p>
                <div className="tm-card__author">
                  {item.avatar && (
                    <img src={item.avatar} alt={item.name} className="tm-card__avatar" loading="lazy" />
                  )}
                  <div className="tm-card__author-info">
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </div>
                </div>
                {item.program && (
                  <span className="tm-card__badge">{item.program}</span>
                )}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaReveal.ref}
        className={`tm__cta ${ctaReveal.visible ? "tm__cta--on" : ""}`}
      >
        <div className="tm__cta-texture" />
        <div className="tm__cta-inner">
          <div className="tm__cta-text">
            <span className="tm__cta-kicker">Begin Here</span>
            <h3 className="tm__cta-heading">
              Ready to Create<br /><em>Your Own Story?</em>
            </h3>
            <p className="tm__cta-sub">
              Join our community of changemakers, learners, and travelers.
              Experience the beauty of sustainable farming and cultural exchange.
            </p>
          </div>
          <div className="tm__cta-actions">
            <Link to="/packages" className="tm__btn tm__btn--fill">
              Explore Packages
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/testimonials" className="tm__btn tm__btn--ghost">
              View Full Gallery
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;