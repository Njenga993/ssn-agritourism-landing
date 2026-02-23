// Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiCalendar, FiMapPin, FiUsers, FiStar, FiInfo, FiMail, FiHome } from 'react-icons/fi';
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["about", "packages", "testimonials", "location"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/#about", label: "About", icon: FiInfo },
    { href: "/packages", label: "Packages", icon: FiStar },
    { href: "/testimonials", label: "Stories", icon: FiUsers },
    { href: "/#locationtrust", label: "Visit", icon: FiMapPin },
    { href: "/contact", label: "Contact", icon: FiMail }
  ];

  return (
    <header className={`navigation-bar ${scrolled ? "navigation-bar--scrolled" : ""}`}>
      <div className="navigation-bar__container">
        {/* Logo */}
        <motion.div 
          className="navigation-bar__brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="navigation-bar__logo">
            <span className="navigation-bar__logo-icon"></span>
            <div className="navigation-bar__logo-text">
              <span className="navigation-bar__logo-main">SSN Agritourism</span>
              <span className="navigation-bar__logo-sub">Seed Savers Network Kenya</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={`navigation-bar__links ${menuOpen ? "navigation-bar__links--open" : ""}`}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`navigation-bar__link ${activeSection === link.href.substring(1) ? "navigation-bar__link--active" : ""}`}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="navigation-bar__link-icon" />
                <span className="navigation-bar__link-text">{link.label}</span>
              </motion.a>
            );
          })}
          
          <motion.a
            href="mailto:info@seedsaverskenya.org"
            className="navigation-bar__cta"
            onClick={handleLinkClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className="navigation-bar__cta-icon" />
            <span className="navigation-bar__cta-text">Book Experience</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`navigation-bar__toggle ${menuOpen ? "navigation-bar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              className="navigation-bar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div 
              className="navigation-bar__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="navigation-bar__mobile-header">
                <div className="navigation-bar__mobile-brand">
                  <span className="navigation-bar__mobile-icon">🌱</span>
                  <span className="navigation-bar__mobile-title">SSN Agritourism</span>
                </div>
                <button 
                  className="navigation-bar__mobile-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <nav className="navigation-bar__mobile-nav">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="navigation-bar__mobile-link"
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="navigation-bar__mobile-icon" />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </nav>

              <div className="navigation-bar__mobile-footer">
                <a
                  href="mailto:info@seedsaverskenya.org"
                  className="navigation-bar__mobile-cta"
                  onClick={handleLinkClick}
                >
                  <FiCalendar />
                  <span>Book Your Experience</span>
                </a>
                
                <div className="navigation-bar__mobile-contact">
                  <p className="navigation-bar__mobile-contact-label">Questions? Reach out:</p>
                  <a href="mailto:info@seedsaverskenya.org" className="navigation-bar__mobile-email">
                    info@seedsaverskenya.org
                  </a>
                </div>

                <div className="navigation-bar__mobile-social">
                  <span className="navigation-bar__mobile-social-label">Follow us:</span>
                  <div className="navigation-bar__mobile-social-links">
                    <a href="#" aria-label="Facebook" className="navigation-bar__mobile-social-link">FB</a>
                    <a href="#" aria-label="Instagram" className="navigation-bar__mobile-social-link">IG</a>
                    <a href="#" aria-label="LinkedIn" className="navigation-bar__mobile-social-link">LI</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;