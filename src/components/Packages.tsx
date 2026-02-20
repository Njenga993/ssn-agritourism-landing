import { useEffect, useRef, useState } from "react";
import "../styles/packages.css";

const Packages = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className={`packages-section ${visible ? "show" : ""}`}
    >
      <div className="packages-container">
        <h2>Our Agritourism Packages</h2>
        <p className="packages-intro">
          Carefully designed experiences for individuals, institutions,
          and global changemakers seeking immersive agroecological learning.
        </p>

        <div className="packages-grid">

          {/* Package 1 */}
          <div className="package-card">
            <h3>Global Fellowship</h3>
            <p className="package-subtitle">
              Internships & Volunteer Placements
            </p>
            <p>
              Engage in long-term immersive learning, hands-on farming,
              seed conservation, and community-based agroecology.
            </p>

            <ul>
              <li>✔ Farm-based training</li>
              <li>✔ Seed system immersion</li>
              <li>✔ Cultural exchange</li>
              <li>✔ Flexible duration</li>
            </ul>

            <a
              href="mailto:info@seedsaverskenya.org?subject=Global Fellowship Inquiry"
              className="package-btn"
            >
              Apply Now
            </a>
          </div>

          {/* Package 2 */}
          <div className="package-card featured">
            <div className="featured-badge">Popular</div>
            <h3>Conference & Learning Exchange</h3>
            <p className="package-subtitle">
              Institutional & Group Programs
            </p>
            <p>
              Host conferences, workshops, and learning exchanges
              rooted in agroecology, seed sovereignty, and rural innovation.
            </p>

            <ul>
              <li>✔ Conference hosting</li>
              <li>✔ Field immersion visits</li>
              <li>✔ Tailored programs</li>
              <li>✔ Accommodation & meals</li>
            </ul>

            <a
              href="mailto:info@seedsaverskenya.org?subject=Conference Package Inquiry"
              className="package-btn"
            >
              Inquire Now
            </a>
          </div>

          {/* Package 3 */}
          <div className="package-card">
            <h3>Solo & Small-Group Experience</h3>
            <p className="package-subtitle">
              Curated Farm-Based Travel
            </p>
            <p>
              Perfect for independent travelers and small groups seeking
              short immersive agroecological experiences.
            </p>

            <ul>
              <li>✔ Guided farm tours</li>
              <li>✔ Indigenous food sessions</li>
              <li>✔ Cultural storytelling</li>
              <li>✔ Flexible scheduling</li>
            </ul>

            <a
              href="mailto:info@seedsaverskenya.org?subject=Solo Agritourism Inquiry"
              className="package-btn"
            >
              Book Experience
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Packages;