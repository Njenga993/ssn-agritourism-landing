import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaRegBuilding } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - About */}
        <div className="footer-col">
          <h3>SSN Agritourism</h3>
          <p className="footer-description">
            A subsection of Seed Savers Network Kenya dedicated to
            agroecology, seed sovereignty, and immersive farm-based experiences.
          </p>
          
          <div className="footer-badges">
            <span className="badge">Agroecology</span>
            <span className="badge">Seed Sovereignty</span>
            <span className="badge">Farm Experiences</span>
          </div>

          <a
            href="https://seedsaverskenya.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link main-site-link"
            aria-label="Visit Seed Savers Kenya main website"
          >
            <span>Visit Main Website</span>
            <span className="link-arrow">→</span>
          </a>
        </div>

        {/* Column 2 - Location & Hours */}
        <div className="footer-col">
          <h4>
            <FaMapMarkerAlt className="col-icon" />
            Visit Us
          </h4>
          <address className="footer-address">
            Seed Savers Network Kenya<br />
            Gilgil, Nakuru County<br />
            Kenya
          </address>
          
          <div className="business-hours">
            <p><strong>Farm Hours:</strong></p>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <a
            href="https://www.google.com/maps?q=Seed+Savers+Network+Kenya+Gilgil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link map-link"
            aria-label="View location on Google Maps"
          >
            <span>Get Directions</span>
            <span className="link-arrow">→</span>
          </a>
        </div>

        {/* Column 3 - Contact & Social */}
        <div className="footer-col">
          <h4>
            <FaEnvelope className="col-icon" />
            Get in Touch
          </h4>
          
          <div className="contact-details">
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@seedsaverskenya.org" className="contact-link">
                info@seedsaverskenya.org
              </a>
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+254700000000" className="contact-link">
                +254 700 000 000
              </a>
            </p>
            <p className="registration-info">
              <FaRegBuilding className="reg-icon" />
              Tourism Reg: KRA/TT/2024/12345
            </p>
          </div>

          <div className="social-section">
            <h5>Follow Our Journey</h5>
            <div className="social-links">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook />
                <span className="social-label">Facebook</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
                <span className="social-label">Instagram</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin />
                <span className="social-label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h4>Stay Connected</h4>
          <p>Subscribe to our newsletter for farm updates and event announcements</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email for newsletter"
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} SSN Agritourism. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="bottom-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms" className="bottom-link">Terms of Use</a>
            <span className="separator">|</span>
            <a href="/sitemap" className="bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;