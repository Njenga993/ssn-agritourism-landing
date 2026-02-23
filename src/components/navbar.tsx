import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiCalendar, FiMapPin, FiUsers, FiStar, FiInfo } from 'react-icons/fi';
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
      const sections = ["about", "packages", "experiences", "testimonials", "location"];
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
    { href: "#about", label: "About", icon: FiInfo },
    { href: "/packages", label: "Packages", icon: FiStar },
    { href: "#testimonials", label: "Testimonials", icon: FiUsers },
    { href: "#location", label: "Location", icon: FiMapPin },
  ];

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="logo-link">
            <span className="logo-icon"></span>
            <div className="logo-text">
              <span className="logo-main">SSN Agritourism</span>
              <span className="logo-sub">Seed Savers Network Kenya</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="nav-link-icon" />
                <span>{link.label}</span>
              </motion.a>
            );
          })}
          
          <motion.a
            href="mailto:info@seedsaverskenya.org"
            className="nav-cta"
            onClick={handleLinkClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className="cta-icon" />
            <span>Book Experience</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
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
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div 
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <div className="mobile-logo">
                  <span className="logo-icon"></span>
                  <span>SSN Agritourism</span>
                </div>
                <button 
                  className="mobile-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <nav className="mobile-nav-links">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="mobile-nav-icon" />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mobile-menu-footer">
                <a
                  href="mailto:info@seedsaverskenya.org"
                  className="mobile-cta"
                  onClick={handleLinkClick}
                >
                  <FiCalendar />
                  <span>Book Your Experience</span>
                </a>
                
                <div className="mobile-contact">
                  <p>Questions? Reach out:</p>
                  <a href="mailto:info@seedsaverskenya.org" className="mobile-email">
                    info@seedsaverskenya.org
                  </a>
                </div>

                <div className="mobile-social">
                  <span>Follow us:</span>
                  <div className="mobile-social-links">
                    <a href="#" aria-label="Facebook"></a>
                    <a href="#" aria-label="Instagram"></a>
                    <a href="#" aria-label="LinkedIn"></a>
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