// LocationContact.tsx
import { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import "../styles/LocationTrust.css";

/* ── tiny reveal hook ── */
import { useEffect, useRef } from "react";
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Define a type for the line items
type LineItem = { text: string; href?: string };

const contactDetails = [
  {
    icon: FiMail,
    label: "Email",
    lines: [
      { text: "info@seedsaverskenya.org", href: "mailto:info@seedsaverskenya.org" },
      { text: "visits@seedsaverskenya.org", href: "mailto:visits@seedsaverskenya.org" },
    ] as LineItem[],
  },
  {
    icon: FiPhone,
    label: "Phone",
    lines: [
      { text: "+254 700 000 000", href: "tel:+254700000000" },
      { text: "+254 711 000 000", href: "tel:+254711000000" },
    ] as LineItem[],
  },
  {
    icon: FiClock,
    label: "Hours",
    lines: [
      { text: "Monday – Saturday" },
      { text: "9:00 AM – 4:00 PM" },
    ] as LineItem[],
  },
  {
    icon: FiMapPin,
    label: "Journey",
    lines: [
      { text: "From Nairobi: ~2.5 hours" },
      { text: "From Nakuru: ~45 mins" },
    ] as LineItem[],
  },
];

const LocationContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const headReveal  = useReveal(0.15);
  const formReveal  = useReveal(0.12);
  const infoReveal  = useReveal(0.12);
  const footReveal  = useReveal(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 1600);
  };

  return (
    <section id="locationtrust" className="lc">

      {/* ── MASTHEAD ── */}
      <div className="lc__masthead">
        <span className="lc__masthead-label">Visit &amp; Connect</span>
        <span className="lc__masthead-rule" />
        <span className="lc__masthead-vol">Gilgil, Nakuru County · Kenya</span>
      </div>

      {/* ── HEADLINE BLOCK ── */}
      <div
        ref={headReveal.ref}
        className={`lc__headline-block ${headReveal.visible ? "lc__headline-block--on" : ""}`}
      >
        <div className="lc__headline-wrap">
          <p className="lc__kicker">Find us in</p>
          <h2 className="lc__headline">
            <span>The Heart</span>
            <span><em>of Kenya</em></span>
          </h2>
        </div>
        <p className="lc__standfirst">
          Reach out to plan your visit or learn more about our Ecology, Food and Culture
          Tourism experiences. Advance booking recommended — we look forward to welcoming you.
        </p>
      </div>

      {/* ── TWO-COLUMN BODY ── */}
      <div className="lc__body">

        {/* LEFT — FORM */}
        <div
          ref={formReveal.ref}
          className={`lc__form-col ${formReveal.visible ? "lc__form-col--on" : ""}`}
        >
          <div className="lc__form-head">
            <span className="lc__section-label">Send a Message</span>
            <p className="lc__form-note">We respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="lc__form">
            {[
              { id: "name",    label: "Your Name",               type: "text",  placeholder: "Anna Müller",           required: true  },
              { id: "email",   label: "Email Address",           type: "email", placeholder: "anna@example.com",      required: true  },
              { id: "phone",   label: "Phone (Optional)",        type: "tel",   placeholder: "+254 700 000 000",      required: false },
            ].map(({ id, label, type, placeholder, required }) => (
              <div className="lc__field" key={id}>
                <label htmlFor={id} className="lc__label">{label}</label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  value={(formData as any)[id]}
                  onChange={handleChange}
                  className="lc__input"
                />
              </div>
            ))}

            <div className="lc__field">
              <label htmlFor="message" className="lc__label">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="I'm interested in visiting your farm..."
                required
                value={formData.message}
                onChange={handleChange}
                className="lc__textarea"
              />
            </div>

            <button type="submit" className="lc__submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <span>Sending&hellip;</span>
              ) : (
                <>
                  <span>{status === "success" ? "Message Sent" : "Send Message"}</span>
                  <FiArrowUpRight strokeWidth={1.6} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="lc__form-success">
                Thank you — we'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="lc__form-error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* RIGHT — MAP + DETAILS */}
        <div
          ref={infoReveal.ref}
          className={`lc__info-col ${infoReveal.visible ? "lc__info-col--on" : ""}`}
        >
          {/* Map */}
          <div className="lc__map">
            <div className="lc__map-frame">
              <iframe
                title="Seed Savers Network Kenya — Gilgil"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748582675323!2d36.333333!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDM2wrAyMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lc__map-iframe"
              />
            </div>
            <div className="lc__map-footer">
              <address className="lc__address">
                <strong>Seed Savers Network Kenya</strong>
                <span>Gilgil, Nakuru County, Kenya 20116</span>
              </address>
              <a
                href="https://www.google.com/maps/dir//Seed+Savers+Network+Kenya+Gilgil"
                target="_blank"
                rel="noopener noreferrer"
                className="lc__directions"
              >
                <span>Directions</span>
                <FiExternalLink strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Contact details grid */}
          <div className="lc__details">
            <span className="lc__section-label">Contact Information</span>
            <div className="lc__details-grid">
              {contactDetails.map(({ icon: Icon, label, lines }) => (
                <div className="lc__detail-item" key={label}>
                  <div className="lc__detail-icon-wrap">
                    <Icon strokeWidth={1.4} />
                  </div>
                  <div className="lc__detail-body">
                    <span className="lc__detail-label">{label}</span>
                    {lines.map((l, i) =>
                      'href' in l ? (
                        <a key={i} href={l.href} className="lc__detail-line">{l.text}</a>
                      ) : (
                        <span key={i} className="lc__detail-line">{l.text}</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visit note */}
          <div className="lc__note">
            <span className="lc__note-rule" />
            <p>Advance booking recommended for farm visits and immersive programmes.</p>
          </div>
        </div>
      </div>

      {/* ── FOOTER LINK ── */}
      <div
        ref={footReveal.ref}
        className={`lc__foot ${footReveal.visible ? "lc__foot--on" : ""}`}
      >
        <span className="lc__foot-rule-l" />
        <a
          href="https://seedsaverskenya.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="lc__foot-link"
        >
          <span>Visit Main Website</span>
          <FiArrowUpRight strokeWidth={1.5} />
        </a>
        <span className="lc__foot-rule-r" />
      </div>

    </section>
  );
};

export default LocationContact;