import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";

// Import your logo
import logo from "../assets/Agroecology.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/testimonials", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <header
      className={`magazine-nav ${scrolled ? "magazine-nav--scrolled" : ""}`}
    >
      {/* Top bar with issue info - magazine detail */}
      <div className="magazine-nav__top">
        <div className="magazine-nav__top-container">
          <span className="magazine-nav__issue">
            Seeds, Food & Culture Tourism
          </span>
          <span className="magazine-nav__date">Seed Savers Network</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="magazine-nav__main">
        <div className="magazine-nav__container">
          {/* Logo with your image - Now larger but navbar stays same height */}
          <motion.div
            className="magazine-nav__logo-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" className="magazine-nav__logo">
              <img
                src={logo}
                alt="Seed Savers Network"
                className="magazine-nav__logo-image"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation - Clean typography */}
          <nav className="magazine-nav__desktop">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`magazine-nav__desktop-link ${
                  isActive(link.href)
                    ? "magazine-nav__desktop-link--active"
                    : ""
                }`}
                onClick={handleLinkClick}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="mailto:info@seedsaverskenya.org"
              className="magazine-nav__subscribe"
            >
              Subscribe
            </a>
          </nav>

          {/* Menu toggle - minimal */}
          <button
            className={`magazine-nav__toggle ${menuOpen ? "magazine-nav__toggle--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="magazine-nav__toggle-line"></span>
            <span className="magazine-nav__toggle-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Editorial style */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="magazine-nav__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="magazine-nav__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="magazine-nav__mobile-header">
                <span className="magazine-nav__mobile-label">Contents</span>
                <button
                  className="magazine-nav__mobile-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <nav className="magazine-nav__mobile-nav">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`magazine-nav__mobile-link ${
                      isActive(link.href)
                        ? "magazine-nav__mobile-link--active"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="magazine-nav__mobile-link-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="magazine-nav__mobile-footer">
                <a
                  href="mailto:info@seedsaverskenya.org"
                  className="magazine-nav__mobile-cta"
                  onClick={handleLinkClick}
                >
                  Subscribe to Newsletter
                </a>

                <div className="magazine-nav__mobile-info">
                  <p>Seed Savers Network Kenya</p>
                  <p>Gilgil, Nakuru County</p>
                  <a href="mailto:info@seedsaverskenya.org">
                    info@seedsaverskenya.org
                  </a>
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
