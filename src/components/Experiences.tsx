import { useEffect, useRef, useState } from "react";
import "../styles/experiences.css";

const Experiences = () => {
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
      id="experiences"
      ref={sectionRef}
      className={`experiences-section ${visible ? "show" : ""}`}
    >
      <div className="experiences-container">
        <h2>What You Will Experience</h2>
        <p className="experiences-intro">
          More than a visit — an immersion into agroecology,
          culture, and community resilience.
        </p>

        {/* Experience 1 */}
        <div className="experience-row">
          <div className="experience-image">
            <img
              src=""
              alt="Farm field experience"
            />
          </div>
          <div className="experience-text">
            <h3>Hands-On Agroecology</h3>
            <p>
              Work alongside farmers in regenerative fields, learn
              sustainable planting methods, soil restoration,
              composting systems, and biodiversity conservation.
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience-row reverse">
          <div className="experience-image">
            <img
              src=""
              alt="Seed sorting"
            />
          </div>
          <div className="experience-text">
            <h3>Seed Conservation & Indigenous Knowledge</h3>
            <p>
              Engage in seed selection, preservation techniques,
              and storytelling traditions that protect indigenous
              varieties for future generations.
            </p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="experience-row">
          <div className="experience-image">
            <img
              src=""
              alt="Community cooking"
            />
          </div>
          <div className="experience-text">
            <h3>Cultural & Culinary Exchange</h3>
            <p>
              Share traditional meals, local recipes, and cultural
              dialogue that deepen connection and mutual learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;