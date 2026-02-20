import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`testimonials-section ${visible ? "show" : ""}`}
    >
      <div className="testimonials-container">
        <h2>What Our Visitors Say</h2>
        <p className="testimonials-intro">
          Experiences that create lasting impact — for visitors and communities alike.
        </p>

        <div className="testimonials-grid">

          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Visitor"
              className="testimonial-img"
            />
            <p className="testimonial-text">
              “This was more than travel — it was education, culture, and
              community. I left with practical agroecology skills and a
              deeper understanding of seed sovereignty.”
            </p>
            <h4>Anna Müller</h4>
            <span>Germany</span>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="Visitor"
              className="testimonial-img"
            />
            <p className="testimonial-text">
              “The conference hosting environment was inspiring and
              deeply authentic. Our institution gained valuable insight
              into community-driven agricultural systems.”
            </p>
            <h4>Michael Johnson</h4>
            <span>United States</span>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="Visitor"
              className="testimonial-img"
            />
            <p className="testimonial-text">
              “Participating in seed conservation and traditional cooking
              sessions was transformative. It connected sustainability
              with culture in a powerful way.”
            </p>
            <h4>Claire Dubois</h4>
            <span>France</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;