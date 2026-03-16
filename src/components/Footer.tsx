import { useEffect, useRef } from "react";
import "../styles/Footer.css";
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, 
  FaEnvelope, FaRegBuilding, FaLeaf, FaSeedling 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer--visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* Decorative top border */}
      <div className="footer__border">
        <span className="footer__border-leaf"></span>
        <span className="footer__border-leaf"></span>
        <span className="footer__border-leaf"></span>
      </div>

      <div className="footer__container">
        {/* Column 1 - About */}
        <div className="footer__col">
          <div className="footer__brand">
            <FaSeedling className="footer__brand-icon" />
            <h3 className="footer__title">SSN Agritourism</h3>
          </div>
          <p className="footer__description">
            A subsection of Seed Savers Network Kenya dedicated to
            agroecology, seed sovereignty, and immersive farm-based experiences.
          </p>
          
          <div className="footer__badges">
            <span className="footer__badge">Agroecology</span>
            <span className="footer__badge">Seed Sovereignty</span>
            <span className="footer__badge">Farm Experiences</span>
          </div>

          <a
            href="https://seedsaverskenya.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--main"
          >
            <span>Visit Main Website</span>
            <span className="footer__link-arrow">→</span>
          </a>
        </div>

        {/* Column 2 - Location & Hours */}
        <div className="footer__col">
          <h4 className="footer__heading">
            <FaMapMarkerAlt className="footer__heading-icon" />
            Visit Us
          </h4>
          <address className="footer__address">
            Seed Savers Network Kenya
            <br />
            Gilgil, Nakuru County
            <br />
            Kenya
          </address>
          
          <div className="footer__hours">
            <p className="footer__hours-title">Farm Hours:</p>
            <p className="footer__hours-item">Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p className="footer__hours-item">Saturday: 10:00 AM - 3:00 PM</p>
            <p className="footer__hours-item footer__hours-item--closed">Sunday: Closed</p>
          </div>

          <a
            href="https://www.google.com/maps?q=Seed+Savers+Network+Kenya+Gilgil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--map"
          >
            <span>Get Directions</span>
            <span className="footer__link-arrow">→</span>
          </a>
        </div>

        {/* Column 3 - Contact & Social */}
        <div className="footer__col">
          <h4 className="footer__heading">
            <FaEnvelope className="footer__heading-icon" />
            Get in Touch
          </h4>
          
          <div className="footer__contact">
            <div className="footer__contact-item">
              <strong>Email:</strong>
              <a href="mailto:info@seedsaverskenya.org" className="footer__contact-link">
                info@seedsaverskenya.org
              </a>
            </div>
            <div className="footer__contact-item">
              <strong>Phone:</strong>
              <a href="tel:+254700000000" className="footer__contact-link">
                +254 700 000 000
              </a>
            </div>
            <div className="footer__registration">
              <FaRegBuilding className="footer__registration-icon" />
              <span>Tourism Reg: KRA/TT/2024/12345</span>
            </div>
          </div>

          <div className="footer__social">
            <h5 className="footer__social-title">Follow Our Journey</h5>
            <div className="footer__social-links">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook />
                <span className="footer__social-label">Facebook</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
                <span className="footer__social-label">Instagram</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin />
                <span className="footer__social-label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="footer__newsletter">
        <div className="footer__newsletter-container">
          <FaLeaf className="footer__newsletter-icon" />
          <h4 className="footer__newsletter-title">Stay Connected</h4>
          <p className="footer__newsletter-text">
            Subscribe to our newsletter for farm updates and event announcements
          </p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="footer__newsletter-input"
              aria-label="Email for newsletter"
              required
            />
            <button type="submit" className="footer__newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            © {currentYear} SSN Agritourism. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="/privacy" className="footer__bottom-link">Privacy Policy</a>
            <span className="footer__separator">/</span>
            <a href="/terms" className="footer__bottom-link">Terms of Use</a>
            <span className="footer__separator">/</span>
            <a href="/sitemap" className="footer__bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;