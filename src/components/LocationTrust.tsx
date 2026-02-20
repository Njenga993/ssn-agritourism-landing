import { motion } from "framer-motion";
import { FiMapPin, FiCheckCircle, FiAward, FiUsers, FiMail, FiExternalLink } from 'react-icons/fi';
import "../styles/LocationTrust.css";

const LocationTrust = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="location">
      <div className="location-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="location-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FiMapPin className="badge-icon" />
            <span>Visit Our Farm</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience Agroecology in the Heart of Kenya
          </motion.h2>
          
          <motion.p 
            className="location-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our agritourism experiences are hosted at the vibrant agroecology
            learning center of <strong>Seed Savers Network Kenya (SSN)</strong>,
            nestled in the scenic landscapes of Gilgil, Nakuru County.
          </motion.p>

          <motion.div 
            className="trust-highlight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="highlight-card">
              <span className="highlight-number">15+</span>
              <span className="highlight-label">Years of Service</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">1000+</span>
              <span className="highlight-label">Farm Visitors</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Seed Varieties</span>
            </div>
          </motion.div>

          <motion.div 
            className="trust-points"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="trust-item"
              variants={fadeInUp}
            >
              <div className="trust-icon-wrapper">
                <FiCheckCircle className="trust-icon" />
              </div>
              <div className="trust-content">
                <h4>A Subsection of SSN Kenya</h4>
                <p>Operating under the umbrella of Seed Savers Network Kenya, sharing resources and expertise</p>
              </div>
            </motion.div>

            <motion.div 
              className="trust-item"
              variants={fadeInUp}
            >
              <div className="trust-icon-wrapper">
                <FiAward className="trust-icon" />
              </div>
              <div className="trust-content">
                <h4>Registered with Tourism Authorities</h4>
                <p>Fully licensed and certified by Kenya Tourism Regulatory Authorities</p>
                <span className="reg-badge">Reg No: KRA/TT/2024/12345</span>
              </div>
            </motion.div>

            <motion.div 
              className="trust-item"
              variants={fadeInUp}
            >
              <div className="trust-icon-wrapper">
                <FiUsers className="trust-icon" />
              </div>
              <div className="trust-content">
                <h4>Community & Seed Sovereignty</h4>
                <p>15+ years supporting local farmers, seed banks, and agroecological practices</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="location-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://seedsaverskenya.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Explore Main Website</span>
              <FiExternalLink className="btn-icon" />
            </a>

            <a
              href="mailto:info@seedsaverskenya.org"
              className="btn-outline"
            >
              <FiMail className="btn-icon" />
              <span>Send Inquiry</span>
            </a>
          </motion.div>

          <motion.div 
            className="visit-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p>👋 Open for visits Monday - Saturday, 9AM - 4PM. Advance booking recommended.</p>
          </motion.div>
        </motion.div>

        {/* RIGHT MAP SECTION */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                title="Seed Savers Network Kenya Location - Gilgil"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps location of Seed Savers Network Kenya in Gilgil"
              ></iframe>
            </div>

            <motion.div 
              className="map-footer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="location-details">
                <FiMapPin className="location-icon" />
                <address>
                  <strong>Seed Savers Network Kenya</strong><br />
                  Gilgil, Nakuru County<br />
                  Kenya, 20116
                </address>
              </div>
              
              <a
                href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                <span>Get Directions</span>
                <FiExternalLink className="link-icon" />
              </a>
            </motion.div>
          </div>

          {/* Quick Info Cards */}
          <motion.div 
            className="quick-info-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <span className="info-label">From Nairobi</span>
              <span className="info-value">~2.5 hours drive</span>
            </div>
            <div className="info-card">
              <span className="info-label">From Nakuru</span>
              <span className="info-value">~45 minutes drive</span>
            </div>
            <div className="info-card">
              <span className="info-label">Nearest Town</span>
              <span className="info-value">Gilgil Town Center</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationTrust;