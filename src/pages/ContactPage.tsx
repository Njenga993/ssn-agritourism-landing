import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiExternalLink,
  FiHelpCircle,
  FiChevronDown,
  FiCalendar,
  FiUsers,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";
import "../styles/contact-page.css";

// Import hero image
import contactHero from "../assets/hero_1.webp";

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect on hero
  useEffect(() => {
    const onScroll = () => {
      if (heroImageRef.current) {
        const yOffset = Math.min(window.scrollY * 0.28, 150);
        heroImageRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, margin: "-100px" },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // FAQ Data with enhanced SEO descriptions
  const faqData = [
    {
      question:
        "How do I book an agritourism experience with Seed Savers Network Kenya?",
      answer:
        "You can book by emailing us directly at visits@seedsaverskenya.org, or calling us during business hours. We recommend booking at least 2 weeks in advance to ensure availability for our agroecology programs and farm stays.",
    },
    {
      question:
        "What is the best time to visit for agroecology tourism in Kenya?",
      answer:
        "The farm is open year-round, but the best visiting periods are during the dry seasons (January-February and June-October) when outdoor farming activities are most enjoyable. Each season offers unique experiences with different crops and farming activities.",
    },
    {
      question: "Are there accommodation options available at the farm?",
      answer:
        "Yes, we offer eco-lodges and camping facilities for overnight stays. Accommodation must be booked in advance. We also have partnerships with local homestays for a more immersive cultural experience with farming families.",
    },
    {
      question: "What should I bring for my agroecology farm visit?",
      answer:
        "We recommend comfortable clothing, closed-toe shoes for farm walks, sun protection (hat, sunscreen), a reusable water bottle, and a camera. If you're staying overnight, bring appropriate clothing for cooler evenings. All farming equipment will be provided.",
    },
    {
      question: "Is the farm accessible for visitors with disabilities?",
      answer:
        "We strive to make our farm and learning center accessible to all visitors. Please contact us in advance with specific requirements so we can make appropriate arrangements and ensure a comfortable agroecology experience.",
    },
    {
      question: "Can children participate in farm activities?",
      answer:
        "Absolutely! We welcome families and have special educational activities designed for children. Kids can participate in safe, hands-on farming activities like planting, harvesting, and learning about seeds in an engaging way.",
    },
    {
      question:
        "What languages are spoken during tours at Seed Savers Network?",
      answer:
        "Tours are primarily conducted in English and Swahili. We can arrange for translators for other languages with advance notice. Please mention your language preference when booking your agroecology experience.",
    },
    {
      question: "Do you offer group discounts for institutional programs?",
      answer:
        "Yes, we offer special rates for groups of 10 or more people, educational institutions, universities, and corporate teams. Contact us for a customized quote based on your group size and specific learning objectives.",
    },
  ];

  // Generate LocalBusiness structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Seed Savers Network Kenya - Ecology Food & Culture Tourism",
    image: "https://agro-tourism.seedsaverskenya.org/Agroecology Logo.png",
    description:
      "Agroecology tourism and farm-based learning experiences in rural Kenya. Contact us to book Global Fellowship, institutional programs, or solo agritourism experiences.",
    url: "https://agro-tourism.seedsaverskenya.org/contact",
    telephone: "+254700000000",
    email: "info@seedsaverskenya.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gilgil",
      addressLocality: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20116",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-0.7833",
      longitude: "36.3667",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@seedsaverskenya.org",
        telephone: "+254700000000",
        availableLanguage: ["English", "Swahili"],
      },
      {
        "@type": "ContactPoint",
        contactType: "booking",
        email: "visits@seedsaverskenya.org",
        telephone: "+254711000000",
      },
    ],
    priceRange: "$$",
  };

  // Generate FAQ structured data for rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Generate ContactPage structured data
  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Seed Savers Network Kenya",
    description:
      "Contact us to book agroecology tourism experiences, ask questions about our programs, or plan your visit to our farm in Nakuru County, Kenya.",
    url: "https://agro-tourism.seedsaverskenya.org/contact",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@seedsaverskenya.org",
      telephone: "+254700000000",
    },
  };

  return (
    <>
      <Helmet>
        <html lang="en" />

        {/* Primary Meta Tags */}
        <title>
          Contact Us | Seed Savers Network Kenya - Agroecology Tourism & Farm
          Visits
        </title>
        <meta
          name="title"
          content="Contact Us | Seed Savers Network Kenya - Book Your Agroecology Experience"
        />
        <meta
          name="description"
          content="Contact Seed Savers Network Kenya to book agroecology tours, farm visits, and educational programs. Call +254700000000 or email info@seedsaverskenya.org. Located in Gilgil, Nakuru County."
        />
        <meta
          name="keywords"
          content="contact Seed Savers Kenya, agroecology tourism booking, farm visit Kenya, agritourism contact, seed sovereignty Kenya, book agroecology tour, Seed Savers Network contact information"
        />
        <meta name="author" content="Seed Savers Network Kenya" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://agro-tourism.seedsaverskenya.org/contact"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://agro-tourism.seedsaverskenya.org/contact"
        />
        <meta
          property="og:title"
          content="Contact Seed Savers Network Kenya - Book Your Agroecology Experience"
        />
        <meta
          property="og:description"
          content="Get in touch with Seed Savers Network Kenya to book agroecology tours, ask questions, or plan your farm visit. We respond within 24 hours."
        />
        <meta
          property="og:image"
          content="https://agro-tourism.seedsaverskenya.org/og-contact.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Contact Seed Savers Network Kenya - Agroecology tourism"
        />
        <meta property="og:site_name" content="Seed Savers Network Kenya" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://agro-tourism.seedsaverskenya.org/contact"
        />
        <meta
          name="twitter:title"
          content="Contact Seed Savers Network Kenya"
        />
        <meta
          name="twitter:description"
          content="Book agroecology tours, farm visits, and educational programs in Kenya. Contact us today!"
        />
        <meta
          name="twitter:image"
          content="https://agro-tourism.seedsaverskenya.org/og-contact.jpg"
        />

        {/* Additional SEO */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2d5a27" />
        <meta name="format-detection" content="telephone=no" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="KE-19" />
        <meta name="geo.placename" content="Gilgil, Nakuru County" />
        <meta name="geo.position" content="-0.7833;36.3667" />
        <meta name="ICBM" content="-0.7833, 36.3667" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageStructuredData)}
        </script>
      </Helmet>

      <div className="contact-page">
        {/* Hero Section - Magazine Style */}
        <section className="contact-hero" aria-label="Contact us hero section">
          <div className="contact-hero__image-wrap" ref={heroImageRef}>
            <img
              src={contactHero}
              alt="Seed Savers Network Kenya - Contact us for agroecology tourism experiences"
              fetchPriority="high"
            />
          </div>
          <div className="contact-hero__overlay" aria-hidden="true"></div>
          <div className="contact-hero__content">
            <span className="contact-hero__eyebrow">
              Seed Savers Network Kenya | Est. 2009
            </span>
            <h1 className="contact-hero__title">
              <span className="contact-hero__title-line">Get in</span>
              <span className="contact-hero__title-line contact-hero__title-line--highlight">
                Touch With Us
              </span>
            </h1>
            <p className="contact-hero__subtitle">
              We'd love to hear from you. Reach out with any questions about our
              agroecology programs or to plan your farm visit in Kenya.
            </p>
            <div className="contact-hero__scroll">
              <span>Connect With Us</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        <div className="contact-container">
          {/* Quick Contact Cards */}
          <motion.div
            className="contact-quick__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-quick__card" variants={fadeInUp}>
              <div className="contact-quick__icon-wrapper">
                <FiMail className="contact-quick__icon" aria-hidden="true" />
              </div>
              <h2 className="contact-quick__title">Email Us</h2>
              <a
                href="mailto:info@seedsaverskenya.org"
                className="contact-quick__link"
                aria-label="Email info@seedsaverskenya.org"
              >
                info@seedsaverskenya.org
              </a>
              <a
                href="mailto:visits@seedsaverskenya.org"
                className="contact-quick__link"
                aria-label="Email visits@seedsaverskenya.org for bookings"
              >
                visits@seedsaverskenya.org
              </a>
              <span className="contact-quick__note">
                Response within 24 hours
              </span>
            </motion.div>

            <motion.div className="contact-quick__card" variants={fadeInUp}>
              <div className="contact-quick__icon-wrapper">
                <FiPhone className="contact-quick__icon" aria-hidden="true" />
              </div>
              <h2 className="contact-quick__title">Call Us</h2>
              <a
                href="tel:+254700000000"
                className="contact-quick__link"
                aria-label="Call +254700000000"
              >
                +254 718 372 360
              </a>
              <span className="contact-quick__note">
                Monday-Saturday, 9am-4pm EAT
              </span>
            </motion.div>

            <motion.div className="contact-quick__card" variants={fadeInUp}>
              <div className="contact-quick__icon-wrapper">
                <FiMapPin className="contact-quick__icon" aria-hidden="true" />
              </div>
              <h2 className="contact-quick__title">Visit Our Farm</h2>
              <address className="contact-quick__address">
                Seed Savers Network Kenya
                <br />
                Gilgil, Nakuru County
                <br />
                Kenya, 20116
                <br />
                <span className="contact-quick__note">
                  2.5 hours from Nairobi
                </span>
              </address>
            </motion.div>

            <motion.div className="contact-quick__card" variants={fadeInUp}>
              <div className="contact-quick__icon-wrapper">
                <FiGlobe className="contact-quick__icon" aria-hidden="true" />
              </div>
              <h2 className="contact-quick__title">Main Website</h2>
              <a
                href="https://seedsaverskenya.org"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick__link"
                aria-label="Visit main Seed Savers Network website"
              >
                seedsaverskenya.org
              </a>
              <span className="contact-quick__note">
                More information about our work
              </span>
            </motion.div>
          </motion.div>

          {/* Main Contact Area */}
          <div className="contact-main__grid">
            {/* Contact Information & CTA Card */}
            <motion.div
              className="contact-cta__card"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="contact-cta__header">
                <span className="section-label">Plan Your Visit</span>
                <h2 className="contact-cta__title">Start a Conversation</h2>
                <p className="contact-cta__subtitle">
                  Reach out directly to book your agroecology tourism
                  experience, ask about group rates, or plan an immersive farm
                  stay.
                </p>
              </div>

              <div className="contact-cta__details">
                <a
                  href="mailto:info@seedsaverskenya.org"
                  className="contact-cta__detail-link"
                >
                  <FiMail
                    className="contact-cta__detail-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-cta__detail-text">
                    <span className="contact-cta__detail-label">
                      General Enquiries
                    </span>
                    <span className="contact-cta__detail-value">
                      info@seedsaverskenya.org
                    </span>
                  </div>
                  <FiArrowUpRight
                    className="contact-cta__detail-arrow"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="mailto:visits@seedsaverskenya.org"
                  className="contact-cta__detail-link"
                >
                  <FiMail
                    className="contact-cta__detail-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-cta__detail-text">
                    <span className="contact-cta__detail-label">
                      Bookings & Visits
                    </span>
                    <span className="contact-cta__detail-value">
                      visits@seedsaverskenya.org
                    </span>
                  </div>
                  <FiArrowUpRight
                    className="contact-cta__detail-arrow"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="tel:+254712451777"
                  className="contact-cta__detail-link"
                >
                  <FiPhone
                    className="contact-cta__detail-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-cta__detail-text">
                    <span className="contact-cta__detail-label">Phone</span>
                    <span className="contact-cta__detail-value">
                      +254 712 451 777
                    </span>
                  </div>
                  <FiArrowUpRight
                    className="contact-cta__detail-arrow"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="tel:+254718372360"
                  className="contact-cta__detail-link"
                >
                  <FiPhone
                    className="contact-cta__detail-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-cta__detail-text">
                    <span className="contact-cta__detail-label">
                      Alternative Line
                    </span>
                    <span className="contact-cta__detail-value">
                      +254 718 372 360
                    </span>
                  </div>
                  <FiArrowUpRight
                    className="contact-cta__detail-arrow"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="contact-cta__journey">
                <span className="contact-cta__journey-title">Your Journey</span>
                <div className="contact-cta__journey-steps">
                  <div className="contact-cta__journey-step">
                    <span className="contact-cta__journey-from">Nairobi</span>
                    <span className="contact-cta__journey-line"></span>
                    <span className="contact-cta__journey-time">~2.5 hrs</span>
                  </div>
                  <div className="contact-cta__journey-step">
                    <span className="contact-cta__journey-from">Nakuru</span>
                    <span className="contact-cta__journey-line"></span>
                    <span className="contact-cta__journey-time">~45 mins</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              className="contact-info__card"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="contact-info__map-container">
                <iframe
                  title="Seed Savers Network Kenya location map in Gilgil, Nakuru County"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6953909604836!2d36.26753727409346!3d-0.44976953528212466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a149b3e5b3e5%3A0xcde1f0a37810fe6e!2sSeed%20Savers%20Network%20Training%20and%20Stay!5e0!3m2!1sen!2ske!4v1776796651256!5m2!1sen!2ske"
                  loading="lazy"
                  className="contact-info__map"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps location of Seed Savers Network Kenya"
                ></iframe>

                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6953909604836!2d36.26753727409346!3d-0.44976953528212466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a149b3e5b3e5%3A0xcde1f0a37810fe6e!2sSeed%20Savers%20Network%20Training%20and%20Stay!5e0!3m2!1sen!2ske!4v1776796651256!5m2!1sen!2ske"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__directions"
                  aria-label="Get driving directions to Seed Savers Network Kenya"
                >
                  <FiMapPin
                    className="contact-info__directions-icon"
                    aria-hidden="true"
                  />
                  <span>Get Directions</span>
                  <FiExternalLink
                    className="contact-info__directions-external"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Hours & Info */}
              <div className="contact-info__grid">
                <div className="contact-info__item">
                  <FiClock
                    className="contact-info__item-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-info__item-content">
                    <h3>Visiting Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 4:00 PM (EAT)</p>
                    <p className="contact-info__item-note">
                      Sunday: Closed (Group bookings only by arrangement)
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <FiCalendar
                    className="contact-info__item-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-info__item-content">
                    <h3>Best Times to Visit</h3>
                    <p>Dry Seasons: January-February & June-October</p>
                    <p className="contact-info__item-note">
                      Harvest seasons vary by crop - ask us for current
                      activities
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <FiUsers
                    className="contact-info__item-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-info__item-content">
                    <h3>Group Bookings</h3>
                    <p>10+ people: Special rates available</p>
                    <p className="contact-info__item-note">
                      Educational institutions & corporate groups welcome
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <FiMail
                    className="contact-info__item-icon"
                    aria-hidden="true"
                  />
                  <div className="contact-info__item-content">
                    <h3>Response Time</h3>
                    <p>Email: Within 24 hours</p>
                    <p className="contact-info__item-note">
                      Phone: Immediate during business hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.section
            className="contact-faq"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            aria-label="Frequently asked questions about agroecology tourism"
          >
            <div className="contact-faq__header">
              <FiHelpCircle
                className="contact-faq__header-icon"
                aria-hidden="true"
              />
              <span className="section-label">Common Questions</span>
              <h2 className="contact-faq__title">Frequently Asked Questions</h2>
              <p className="contact-faq__subtitle">
                Find answers to common questions about visiting our farm and
                agroecology programs
              </p>
            </div>

            <div className="contact-faq__grid">
              {faqData.map((faq, index) => (
                <div key={index} className="contact-faq__item">
                  <button
                    className="contact-faq__question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-label={`${openFaq === index ? "Collapse" : "Expand"} answer for: ${faq.question}`}
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown
                      className={`contact-faq__icon ${openFaq === index ? "contact-faq__icon--open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`contact-faq__answer ${openFaq === index ? "contact-faq__answer--open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Social & Newsletter */}
          <motion.div
            className="contact-social"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="contact-social__title">Connect With Us Online</h2>
            <div className="contact-social__links">
              <a
                href="#"
                className="contact-social__link"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="contact-social__link"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="contact-social__link"
                aria-label="Follow us on Twitter"
              >
                Twitter
              </a>
              <a
                href="#"
                className="contact-social__link"
                aria-label="Subscribe on YouTube"
              >
                YouTube
              </a>
              <a
                href="#"
                className="contact-social__link"
                aria-label="Connect on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
            <p className="contact-social__note">
              Follow us for updates about agroecology events, new programs, and
              stories from our farming communities
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
