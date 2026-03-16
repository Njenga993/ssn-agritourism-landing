import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  FiMapPin, FiMail, FiPhone, FiClock, FiSend, 
  FiExternalLink, FiHelpCircle, FiChevronDown,
  FiMessageCircle, FiCalendar, FiUsers, FiGlobe
} from 'react-icons/fi';
import "../styles/contact-page.css";

// Import hero image
import contactHero from "../assets/hero_1.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    groupSize: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect on hero
  useEffect(() => {
    const onScroll = () => {
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '', email: '', phone: '', preferredDate: '',
        groupSize: '', message: '', newsletter: false
      });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // FAQ Data
  const faqData = [
    {
      question: "How do I book an agritourism experience?",
      answer: "You can book through our contact form, email us directly at visits@seedsaverskenya.org, or call us during business hours. We recommend booking at least 2 weeks in advance to ensure availability."
    },
    {
      question: "What is the best time to visit?",
      answer: "The farm is open year-round, but the best visiting periods are during the dry seasons (January-February and June-October) when outdoor activities are most enjoyable. However, each season offers unique experiences with different crops and farming activities."
    },
    {
      question: "Are there accommodation options on-site?",
      answer: "Yes, we offer eco-lodges and camping facilities for overnight stays. Accommodation must be booked in advance. We also have partnerships with local homestays for a more immersive cultural experience."
    },
    {
      question: "What should I bring for my visit?",
      answer: "We recommend comfortable clothing, closed-toe shoes, sun protection, a water bottle, and a camera. If you're staying overnight, bring appropriate clothing for cooler evenings. All farming equipment will be provided."
    },
    {
      question: "Is the farm accessible for people with disabilities?",
      answer: "We strive to make our farm accessible to all visitors. Please contact us in advance with specific requirements so we can make appropriate arrangements and ensure a comfortable experience."
    },
    {
      question: "Can I bring children to the farm?",
      answer: "Absolutely! We welcome families and have special activities designed for children. Kids can participate in safe, hands-on farming activities and learn about where food comes from in an engaging way."
    },
    {
      question: "What languages are spoken during tours?",
      answer: "Tours are primarily conducted in English and Swahili. We can arrange for translators for other languages with advance notice. Please mention your language preference when booking."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special rates for groups of 10 or more people, educational institutions, and corporate teams. Contact us for a customized quote based on your group size and requirements."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section - Magazine Style */}
      <section className="contact-hero">
        <div className="contact-hero__image-wrap" ref={heroImageRef}>
          <img src={contactHero} alt="Seed Savers Network Kenya" />
        </div>
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">Seed Savers Network Kenya</span>
          <h1 className="contact-hero__title">
            <span className="contact-hero__title-line">Get in</span>
            <span className="contact-hero__title-line contact-hero__title-line--highlight">Touch</span>
          </h1>
          <p className="contact-hero__subtitle">
            We'd love to hear from you. Reach out with any questions or to plan your visit.
          </p>
          <div className="contact-hero__scroll">
            <span>Connect</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
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
              <FiMail className="contact-quick__icon" />
            </div>
            <h3 className="contact-quick__title">Email Us</h3>
            <a href="mailto:info@seedsaverskenya.org" className="contact-quick__link">info@seedsaverskenya.org</a>
            <a href="mailto:visits@seedsaverskenya.org" className="contact-quick__link">visits@seedsaverskenya.org</a>
            <span className="contact-quick__note">Response within 24h</span>
          </motion.div>

          <motion.div className="contact-quick__card" variants={fadeInUp}>
            <div className="contact-quick__icon-wrapper">
              <FiPhone className="contact-quick__icon" />
            </div>
            <h3 className="contact-quick__title">Call Us</h3>
            <a href="tel:+254700000000" className="contact-quick__link">+254 700 000 000</a>
            <a href="tel:+254711000000" className="contact-quick__link">+254 711 000 000</a>
            <span className="contact-quick__note">Mon-Sat, 9am-4pm EAT</span>
          </motion.div>

          <motion.div className="contact-quick__card" variants={fadeInUp}>
            <div className="contact-quick__icon-wrapper">
              <FiMapPin className="contact-quick__icon" />
            </div>
            <h3 className="contact-quick__title">Visit Us</h3>
            <address className="contact-quick__address">
              Seed Savers Network Kenya<br />
              Gilgil, Nakuru County<br />
              Kenya, 20116
            </address>
          </motion.div>

          <motion.div className="contact-quick__card" variants={fadeInUp}>
            <div className="contact-quick__icon-wrapper">
              <FiGlobe className="contact-quick__icon" />
            </div>
            <h3 className="contact-quick__title">Main Website</h3>
            <a 
              href="https://seedsaverskenya.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-quick__link"
            >
              seedsaverskenya.org
            </a>
            <span className="contact-quick__note">Visit for more information</span>
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
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name" className="contact-form__label">
                    Full Name <span className="contact-form__required">*</span>
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
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="email" className="contact-form__label">
                    Email Address <span className="contact-form__required">*</span>
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
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="phone" className="contact-form__label">Phone Number</label>
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
                  <label htmlFor="preferredDate" className="contact-form__label">Preferred Visit Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="contact-form__input"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="groupSize" className="contact-form__label">Group Size</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="contact-form__select"
                  >
                    <option value="">Select group size</option>
                    <option value="1">Solo (1 person)</option>
                    <option value="2-5">Small Group (2-5 people)</option>
                    <option value="6-10">Medium Group (6-10 people)</option>
                    <option value="11+">Large Group (11+ people)</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">
                    Message <span className="contact-form__required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your visit plans or questions..."
                    rows={4}
                    className="contact-form__textarea"
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
                <label htmlFor="newsletter" className="contact-form__checkbox-label">
                  Subscribe to our newsletter for updates and events
                </label>
              </div>

              <button 
                type="submit" 
                className="contact-form__button"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="contact-form__button-icon" />
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="contact-form__success">
                  <FiMessageCircle className="contact-form__success-icon" />
                  <p>Message sent successfully! We'll respond within 24 hours.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="contact-form__error">
                  <p>Something went wrong. Please try again or email us directly.</p>
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
                title="Seed Savers Network Kenya Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                loading="lazy"
                className="contact-info__map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <a
                href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__directions"
              >
                <FiMapPin className="contact-info__directions-icon" />
                <span>Get Directions</span>
                <FiExternalLink className="contact-info__directions-external" />
              </a>
            </div>

            {/* Hours & Info */}
            <div className="contact-info__grid">
              <div className="contact-info__item">
                <FiClock className="contact-info__item-icon" />
                <div className="contact-info__item-content">
                  <h4>Visiting Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="contact-info__item-note">Sunday: Closed (Group bookings only)</p>
                </div>
              </div>

              <div className="contact-info__item">
                <FiCalendar className="contact-info__item-icon" />
                <div className="contact-info__item-content">
                  <h4>Best Times to Visit</h4>
                  <p>Dry Seasons: Jan-Feb & Jun-Oct</p>
                  <p className="contact-info__item-note">Harvest Seasons: Varies by crop</p>
                </div>
              </div>

              <div className="contact-info__item">
                <FiUsers className="contact-info__item-icon" />
                <div className="contact-info__item-content">
                  <h4>Group Bookings</h4>
                  <p>10+ people: Special rates apply</p>
                  <p className="contact-info__item-note">Educational & Corporate groups welcome</p>
                </div>
              </div>

              <div className="contact-info__item">
                <FiMessageCircle className="contact-info__item-icon" />
                <div className="contact-info__item-content">
                  <h4>Response Time</h4>
                  <p>Email: Within 24 hours</p>
                  <p className="contact-info__item-note">Phone: Immediate during hours</p>
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
        >
          <div className="contact-faq__header">
            <FiHelpCircle className="contact-faq__header-icon" />
            <span className="section-label">Common Questions</span>
            <h2 className="contact-faq__title">Frequently Asked Questions</h2>
            <p className="contact-faq__subtitle">
              Find answers to common questions about visiting our farm
            </p>
          </div>

          <div className="contact-faq__grid">
            {faqData.map((faq, index) => (
              <div key={index} className="contact-faq__item">
                <button
                  className="contact-faq__question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <FiChevronDown 
                    className={`contact-faq__icon ${openFaq === index ? 'contact-faq__icon--open' : ''}`}
                  />
                </button>
                <div 
                  className={`contact-faq__answer ${openFaq === index ? 'contact-faq__answer--open' : ''}`}
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
          <h3 className="contact-social__title">Connect With Us</h3>
          <div className="contact-social__links">
            <a href="#" className="contact-social__link">Facebook</a>
            <a href="#" className="contact-social__link">Instagram</a>
            <a href="#" className="contact-social__link">Twitter</a>
            <a href="#" className="contact-social__link">YouTube</a>
            <a href="#" className="contact-social__link">LinkedIn</a>
          </div>
          <p className="contact-social__note">
            Follow us for updates, events, and stories from the farm
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;