// ContactPage.tsx - Fully SEO Optimized
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiExternalLink,
  FiHelpCircle,
  FiChevronDown,
  FiMessageCircle,
  FiCalendar,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";
import "../styles/contact-page.css";

// Import hero image
import contactHero from "../assets/hero_1.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    groupSize: "",
    message: "",
    newsletter: false,
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Replace with your actual form submission endpoint
    try {
      // Simulate API call - Replace with actual fetch to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example real submission:
      // const response = await fetch('https://your-api.com/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Submission failed');

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        groupSize: "",
        message: "",
        newsletter: false,
      });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

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
        "You can book through our contact form, email us directly at visits@seedsaverskenya.org, or call us during business hours. We recommend booking at least 2 weeks in advance to ensure availability for our agroecology programs and farm stays.",
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
                +254 700 000 000
              </a>
              <a
                href="tel:+254711000000"
                className="contact-quick__link"
                aria-label="Call +254711000000"
              >
                +254 711 000 000
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
            {/* Contact Form */}
            <motion.div
              className="contact-form__card"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="contact-form__header">
                <span className="section-label">Send a Message</span>
                <h2 className="contact-form__title">Start a Conversation</h2>
                <p className="contact-form__subtitle">
                  Fill out the form below and we'll get back to you within 24
                  hours about your agroecology tourism inquiry.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-form"
                action="/api/contact"
                method="POST"
              >
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Full Name{" "}
                      <span
                        className="contact-form__required"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="contact-form__input"
                      aria-required="true"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address{" "}
                      <span
                        className="contact-form__required"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="contact-form__input"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="phone" className="contact-form__label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 XXX XXX XXX"
                      className="contact-form__input"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label
                      htmlFor="preferredDate"
                      className="contact-form__label"
                    >
                      Preferred Visit Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="contact-form__input"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="groupSize" className="contact-form__label">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="contact-form__select"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo Traveler (1 person)</option>
                      <option value="2-5">Small Group (2-5 people)</option>
                      <option value="6-10">Medium Group (6-10 people)</option>
                      <option value="11+">Large Group (11+ people)</option>
                    </select>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">
                      Message{" "}
                      <span
                        className="contact-form__required"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your agroecology visit plans or questions about our programs..."
                      rows={4}
                      className="contact-form__textarea"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="contact-form__checkbox">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="contact-form__checkbox-input"
                  />
                  <label
                    htmlFor="newsletter"
                    className="contact-form__checkbox-label"
                  >
                    Subscribe to our newsletter for updates about agroecology
                    events and programs
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-form__button"
                  disabled={formStatus === "sending"}
                  aria-label="Send contact message"
                >
                  {formStatus === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend
                        className="contact-form__button-icon"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="contact-form__success" role="alert">
                    <FiMessageCircle
                      className="contact-form__success-icon"
                      aria-hidden="true"
                    />
                    <p>
                      ✓ Message sent successfully! We'll respond within 24
                      hours.
                    </p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="contact-form__error" role="alert">
                    <p>
                      ⚠ Something went wrong. Please try again or email us
                      directly at info@seedsaverskenya.org
                    </p>
                  </div>
                )}
              </form>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a5a5a5a5a5a5%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  loading="lazy"
                  className="contact-info__map"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps location of Seed Savers Network Kenya"
                ></iframe>

                <a
                  href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil/@-0.7833,36.3667,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__directions"
                  aria-label="Get driving directions to Seed Savers Network Kenya"
                >
                  <FiMapPin
                    className="contact-info__directions-icon"
                    aria-hidden="true"
                  />
                  <span>Get Directions from Your Location</span>
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
                  <FiMessageCircle
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
