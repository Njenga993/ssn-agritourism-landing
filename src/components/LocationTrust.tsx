// LocationContact.tsx
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend, FiExternalLink } from 'react-icons/fi';
import { useState } from "react";
import "../styles/LocationTrust.css";

const LocationContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

 /* const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-100px" }
  };*/
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <section className="connect-section">
      {/* Background Pattern */}
      <div className="connect-section__pattern">
        <div className="connect-section__pattern-circle"></div>
        <div className="connect-section__pattern-circle"></div>
        <div className="connect-section__pattern-leaf"></div>
        <div className="connect-section__pattern-leaf"></div>
      </div>

      <div className="connect-container">
        {/* Section Header */}
        <motion.div 
          className="connect-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="connect-header__badge">
            <FiMapPin className="connect-header__badge-icon" />
            <span>Visit & Connect</span>
          </span>
          <h2 className="connect-header__title">
            Find Us in the <span className="connect-header__highlight">Heart of Kenya</span>
          </h2>
          <p className="connect-header__subtitle">
            Reach out to plan your visit or learn more about our agritourism experiences
          </p>
        </motion.div>

        <div className="connect-grid">
          {/* LEFT COLUMN - Contact Form */}
          <motion.div 
            className="connect-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="connect-form__container">
              <h3 className="connect-form__title">Send Us a Message</h3>
              <p className="connect-form__subtitle">We'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="connect-form">
                <div className="connect-form__group">
                  <label htmlFor="name" className="connect-form__label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="connect-form__input"
                  />
                </div>

                <div className="connect-form__group">
                  <label htmlFor="email" className="connect-form__label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="connect-form__input"
                  />
                </div>

                <div className="connect-form__group">
                  <label htmlFor="phone" className="connect-form__label">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    className="connect-form__input"
                  />
                </div>

                <div className="connect-form__group">
                  <label htmlFor="message" className="connect-form__label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="I'm interested in visiting your farm..."
                    rows={4}
                    className="connect-form__textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  className="connect-form__button"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="connect-form__button-icon" />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="connect-form__success">
                    Message sent successfully! We'll respond soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="connect-form__error">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Info & Map */}
          <motion.div 
            className="connect-info-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Map Card */}
            <div className="connect-map__card">
              <div className="connect-map__container">
                <iframe
                  title="Seed Savers Network Kenya Location - Gilgil"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="connect-map__iframe"
                ></iframe>
              </div>
              
              <div className="connect-map__footer">
                <div className="connect-map__address">
                  <FiMapPin className="connect-map__address-icon" />
                  <address>
                    <strong>Seed Savers Network Kenya</strong>
                    <span>Gilgil, Nakuru County</span>
                    <span>Kenya, 20116</span>
                  </address>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-map__directions"
                >
                  <span>Get Directions</span>
                  <FiExternalLink className="connect-map__directions-icon" />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="connect-details">
              <h3 className="connect-details__title">Contact Information</h3>
              
              <div className="connect-details__grid">
                <div className="connect-details__item">
                  <div className="connect-details__icon-wrapper">
                    <FiMail className="connect-details__icon" />
                  </div>
                  <div className="connect-details__content">
                    <h4>Email Us</h4>
                    <a href="mailto:info@seedsaverskenya.org">info@seedsaverskenya.org</a>
                    <a href="mailto:visits@seedsaverskenya.org">visits@seedsaverskenya.org</a>
                  </div>
                </div>

                <div className="connect-details__item">
                  <div className="connect-details__icon-wrapper">
                    <FiPhone className="connect-details__icon" />
                  </div>
                  <div className="connect-details__content">
                    <h4>Call Us</h4>
                    <a href="tel:+254700000000">+254 700 000 000</a>
                    <a href="tel:+254711000000">+254 711 000 000</a>
                  </div>
                </div>

                <div className="connect-details__item">
                  <div className="connect-details__icon-wrapper">
                    <FiClock className="connect-details__icon" />
                  </div>
                  <div className="connect-details__content">
                    <h4>Visiting Hours</h4>
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                </div>

                <div className="connect-details__item">
                  <div className="connect-details__icon-wrapper">
                    <FiMapPin className="connect-details__icon" />
                  </div>
                  <div className="connect-details__content">
                    <h4>Quick Info</h4>
                    <span>From Nairobi: ~2.5 hours</span>
                    <span>From Nakuru: ~45 mins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Note */}
            <div className="connect-note">
              <p className="connect-note__text">
                👋 Advance booking recommended. We look forward to welcoming you!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Website Link */}
        <motion.div 
          className="connect-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://seedsaverskenya.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-footer__link"
          >
            <span>Visit Main Website</span>
            <FiExternalLink className="connect-footer__link-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationContact;