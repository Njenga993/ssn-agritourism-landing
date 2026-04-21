import { useEffect, useRef } from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer--visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* Atmospheric light effects */}
      <div
        className="footer__light-leak footer__light-leak--warm"
        aria-hidden="true"
      />
      <div
        className="footer__light-leak footer__light-leak--green"
        aria-hidden="true"
      />

      {/* Masthead divider */}
      <div className="footer__masthead">
        <span className="footer__masthead-line"></span>
        <span className="footer__masthead-dot"></span>
        <span className="footer__masthead-text">Seed Savers Network Kenya</span>
        <span className="footer__masthead-dot"></span>
        <span className="footer__masthead-line"></span>
      </div>

      <div className="footer__container">
        {/* Column 1 — About */}
        <div className="footer__col">
          <h3 className="footer__col-title">About</h3>
          <p className="footer__about-text">
            A subsection of Seed Savers Network Kenya dedicated to agroecology,
            seed sovereignty, and immersive farm-based experiences since 2010.
          </p>
          <div className="footer__manifesto">
            <p className="footer__manifesto-line">
              "AgroEcology, Seeds, Food and Culture"
            </p>
          </div>
          <a
            href="https://seedsaverskenya.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__readmore"
          >
            Read More <span className="footer__arrow">→</span>
          </a>
        </div>

        {/* Column 2 — Information */}
        <div className="footer__col">
          <h3 className="footer__col-title">Information</h3>
          <ul className="footer__list">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/packages">Our Packages</a>
            </li>
            <li>
              <a href="/tesimonies">Stories & Media</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer__col">
          <h3 className="footer__col-title">Contact</h3>
          <address className="footer__address">
            Gilgil, Nakuru County
            <br />
            Kenya
          </address>
          <div className="footer__contact-links">
            <a
              href="mailto:info@seedsaverskenya.org"
              className="footer__contact-link"
            >
              info@seedsaverskenya.org
            </a>
            <a href="tel:+254712451777" className="footer__contact-link">
              +254 712 451 777
            </a>
          </div>
        </div>

        {/* Column 4 — Social */}
        <div className="footer__col">
          <h3 className="footer__col-title">Follow</h3>
          <div className="footer__social-links">
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-link">
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:info@seedsaverskenya.org"
              aria-label="Email"
              className="footer__social-link"
            >
              <FaRegEnvelope />
            </a>
          </div>
          <p className="footer__registration">Reg: KRA/TT/2024/12345</p>
        </div>
      </div>

      {/* Newsletter — glass panel 
      <div className="footer__newsletter">
        <div className="footer__newsletter-container">
          <h4 className="footer__newsletter-title">Newsletter</h4>
          <p className="footer__newsletter-subtitle">
            Stay rooted in the movement
          </p>
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>*/}

      {/* Bottom — colophon */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__bottom-left">
            <p className="footer__copyright">
              © {currentYear} Seed Savers Network Kenya. All rights reserved.
            </p>
            <p className="footer__design-credit">
              Designed by{" "}
              <a
                href="https://njenga993.github.io/kspace/"
                target="_blank"
                rel="noopener noreferrer"
              >
                kspace
              </a>
            </p>
          </div>
          <p className="footer__colophon">
            Designed in Gilgil · Printed in nature
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
