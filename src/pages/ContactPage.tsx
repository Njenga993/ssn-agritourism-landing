// ContactPage.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiMapPin, FiMail, FiPhone, FiClock, FiSend, 
  FiExternalLink, FiHelpCircle, FiChevronDown,
  FiMessageCircle, FiCalendar, FiUsers, FiGlobe
} from 'react-icons/fi';
import "../styles/contact-page.css";

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
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-100px" }
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
    <div className="reach-out">
      {/* Hero Section */}
      <section className="reach-out__hero">
        <div className="reach-out__hero-pattern">
          <div className="reach-out__hero-shape"></div>
          <div className="reach-out__hero-shape"></div>
        </div>
        <div className="reach-out__hero-content">
          <motion.h1 
            className="reach-out__hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="reach-out__hero-highlight">Touch</span>
          </motion.h1>
          <motion.p 
            className="reach-out__hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear from you. Reach out with any questions or to plan your visit.
          </motion.p>
        </div>
      </section>

      <div className="reach-out__container">
        {/* Quick Contact Cards */}
        <motion.div 
          className="reach-out__quick-grid"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="reach-out__quick-card">
            <div className="reach-out__quick-icon-wrapper">
              <FiMail className="reach-out__quick-icon" />
            </div>
            <h3 className="reach-out__quick-title">Email Us</h3>
            <a href="mailto:info@seedsaverskenya.org" className="reach-out__quick-link">info@seedsaverskenya.org</a>
            <a href="mailto:visits@seedsaverskenya.org" className="reach-out__quick-link">visits@seedsaverskenya.org</a>
          </div>

          <div className="reach-out__quick-card">
            <div className="reach-out__quick-icon-wrapper">
              <FiPhone className="reach-out__quick-icon" />
            </div>
            <h3 className="reach-out__quick-title">Call Us</h3>
            <a href="tel:+254700000000" className="reach-out__quick-link">+254 700 000 000</a>
            <a href="tel:+254711000000" className="reach-out__quick-link">+254 711 000 000</a>
            <span className="reach-out__quick-note">Mon-Sat, 9am-4pm</span>
          </div>

          <div className="reach-out__quick-card">
            <div className="reach-out__quick-icon-wrapper">
              <FiMapPin className="reach-out__quick-icon" />
            </div>
            <h3 className="reach-out__quick-title">Visit Us</h3>
            <address className="reach-out__quick-address">
              Seed Savers Network Kenya<br />
              Gilgil, Nakuru County<br />
              Kenya, 20116
            </address>
          </div>

          <div className="reach-out__quick-card">
            <div className="reach-out__quick-icon-wrapper">
              <FiGlobe className="reach-out__quick-icon" />
            </div>
            <h3 className="reach-out__quick-title">Main Website</h3>
            <a 
              href="https://seedsaverskenya.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reach-out__quick-link"
            >
              seedsaverskenya.org
            </a>
            <span className="reach-out__quick-note">Visit for more information</span>
          </div>
        </motion.div>

        {/* Main Contact Area */}
        <div className="reach-out__main-grid">
          {/* Contact Form */}
          <motion.div 
            className="reach-out__form-card"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="reach-out__form-title">Send a Message</h2>
            <p className="reach-out__form-subtitle">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="reach-out__form">
              <div className="reach-out__form-row">
                <div className="reach-out__form-group">
                  <label htmlFor="name" className="reach-out__form-label">
                    Full Name <span className="reach-out__form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="reach-out__form-input"
                  />
                </div>

                <div className="reach-out__form-group">
                  <label htmlFor="email" className="reach-out__form-label">
                    Email Address <span className="reach-out__form-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="reach-out__form-input"
                  />
                </div>
              </div>

              <div className="reach-out__form-row">
                <div className="reach-out__form-group">
                  <label htmlFor="phone" className="reach-out__form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    className="reach-out__form-input"
                  />
                </div>

                <div className="reach-out__form-group">
                  <label htmlFor="preferredDate" className="reach-out__form-label">Preferred Visit Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="reach-out__form-input"
                  />
                </div>
              </div>

              <div className="reach-out__form-row">
                <div className="reach-out__form-group">
                  <label htmlFor="groupSize" className="reach-out__form-label">Group Size</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="reach-out__form-select"
                  >
                    <option value="">Select group size</option>
                    <option value="1">Solo (1 person)</option>
                    <option value="2-5">Small Group (2-5 people)</option>
                    <option value="6-10">Medium Group (6-10 people)</option>
                    <option value="11+">Large Group (11+ people)</option>
                  </select>
                </div>

                <div className="reach-out__form-group">
                  <label htmlFor="message" className="reach-out__form-label">
                    Message <span className="reach-out__form-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your visit plans or questions..."
                    rows={4}
                    className="reach-out__form-textarea"
                  />
                </div>
              </div>

              <div className="reach-out__form-checkbox">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="reach-out__form-checkbox-input"
                />
                <label htmlFor="newsletter" className="reach-out__form-checkbox-label">
                  Subscribe to our newsletter for updates and events
                </label>
              </div>

              <button 
                type="submit" 
                className="reach-out__form-button"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="reach-out__form-button-icon" />
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="reach-out__form-success">
                  <FiMessageCircle className="reach-out__form-success-icon" />
                  <p>Message sent successfully! We'll respond within 24 hours.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="reach-out__form-error">
                  <p>Something went wrong. Please try again or email us directly.</p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div 
            className="reach-out__info-card"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Map */}
            <div className="reach-out__map-container">
              <iframe
                title="Seed Savers Network Kenya Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                loading="lazy"
                className="reach-out__map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <a
                href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-out__map-directions"
              >
                <FiMapPin className="reach-out__map-directions-icon" />
                <span>Get Directions</span>
                <FiExternalLink className="reach-out__map-directions-external" />
              </a>
            </div>

            {/* Hours & Info */}
            <div className="reach-out__info-grid">
              <div className="reach-out__info-item">
                <FiClock className="reach-out__info-icon" />
                <div className="reach-out__info-content">
                  <h4>Visiting Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed (Group bookings only)</p>
                </div>
              </div>

              <div className="reach-out__info-item">
                <FiCalendar className="reach-out__info-icon" />
                <div className="reach-out__info-content">
                  <h4>Best Times to Visit</h4>
                  <p>Dry Seasons: Jan-Feb & Jun-Oct</p>
                  <p>Harvest Seasons: Varies by crop</p>
                </div>
              </div>

              <div className="reach-out__info-item">
                <FiUsers className="reach-out__info-icon" />
                <div className="reach-out__info-content">
                  <h4>Group Bookings</h4>
                  <p>10+ people: Special rates apply</p>
                  <p>Educational & Corporate groups welcome</p>
                </div>
              </div>

              <div className="reach-out__info-item">
                <FiMessageCircle className="reach-out__info-icon" />
                <div className="reach-out__info-content">
                  <h4>Response Time</h4>
                  <p>Email: Within 24 hours</p>
                  <p>Phone: Immediate during hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          className="reach-out__faq"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="reach-out__faq-header">
            <FiHelpCircle className="reach-out__faq-header-icon" />
            <h2 className="reach-out__faq-title">Frequently Asked Questions</h2>
            <p className="reach-out__faq-subtitle">
              Find answers to common questions about visiting our farm
            </p>
          </div>

          <div className="reach-out__faq-grid">
            {faqData.map((faq, index) => (
              <div key={index} className="reach-out__faq-item">
                <button
                  className="reach-out__faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <FiChevronDown 
                    className={`reach-out__faq-icon ${openFaq === index ? 'reach-out__faq-icon--open' : ''}`}
                  />
                </button>
                <div 
                  className={`reach-out__faq-answer ${openFaq === index ? 'reach-out__faq-answer--open' : ''}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Social & Newsletter */}
        <motion.div 
          className="reach-out__social"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h3 className="reach-out__social-title">Connect With Us</h3>
          <div className="reach-out__social-links">
            <a href="#" className="reach-out__social-link">Facebook</a>
            <a href="#" className="reach-out__social-link">Instagram</a>
            <a href="#" className="reach-out__social-link">Twitter</a>
            <a href="#" className="reach-out__social-link">YouTube</a>
            <a href="#" className="reach-out__social-link">LinkedIn</a>
          </div>
          <p className="reach-out__social-note">
            Follow us for updates, events, and stories from the farm
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;