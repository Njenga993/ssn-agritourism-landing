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

  const packages = [
    {
      id: 1,
      title: "Global Fellowship",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      description: "Its a learning program designed for international students, researchers, and professionals, as well as individuals interested in sustainable farming systems in East Africa.",
      duration: "1 month-12 months",
      locations: "multiple location across Kenya",
      groupSize: "1-4 people",
      experiences: [
        "Hands-on farming",
        "Seed conservation",
        "Cultural exchange",
        "Community projects"
      ],
      formUrl: "https://forms.gle/your-fellowship-form"
    },
    {
      id: 2,
      title: "Conference and Learning Exchange",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      description: "Tailored conferences, workshops, and field visits for universities, NGOs, and corporate groups.",
      duration: "3-7 days",
      locations: "Main campus + field visits",
      groupSize: "10-50 people",
      experiences: [
        "Conference hosting",
        "Workshop sessions",
        "Field immersion",
        "Networking events"
      ],
      formUrl: "https://forms.gle/your-conference-form",
      featured: true
    },
    {
      id: 3,
      title: "Solo / Group Experience",
      image: "https://images.unsplash.com/photo-1596422950024-3e9e0c6b5d98?w=800&q=80",
      description: "A fully customized, short-stay agritourism experience designed for individual travelers, couples, families, friends, and small learning groups seeking authentic, hands-on exposure to sustainable farming, seed systems, food culture, and rural life in Kenya.",
      duration: "7-30 days",
      locations: "Selected showcase farms",
      groupSize: "1-6 people",
      experiences: [
        "Guided tours",
        "Food sessions",
        "Storytelling",
        "Hands-on activities"
      ],
      formUrl: "https://forms.gle/your-solo-form"
    }
  ];

  return (
    <section
      id="packages"
      ref={sectionRef}
      className={`packages-section ${visible ? "show" : ""}`}
    >
      <div className="packages-container">
        <div className="section-header">
          <h2>Our Agritourism Packages</h2>
          <p className="packages-intro">
            Carefully designed experiences for individuals, institutions,
            and global changemakers seeking immersive agroecological learning.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="featured-badge">Popular</div>}
              
              <div className="card-image-wrapper">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="card-image"
                />
                <div className="card-image-overlay"></div>
              </div>

              <div className="card-content">
                <h3>{pkg.title}</h3>
                <p className="card-description">{pkg.description}</p>
                
                <div className="package-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{pkg.locations}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="experiences-list">
                  <h4>What You'll Experience</h4>
                  <ul>
                    {pkg.experiences.map((exp, index) => (
                      <li key={index}>
                        <span className="experience-icon">✓</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={pkg.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-btn"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-more">
          <a href="/packages" className="explore-btn">
            Explore All Packages
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;