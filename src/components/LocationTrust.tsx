import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";
import "../styles/LocationTrust.css";

/* ── tiny reveal hook ── */
import { useEffect, useRef, useState } from "react";
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

type LineItem = { text: string; href?: string };

/* ── Contact data ── */
const contactCards = [
  {
    icon: FiMail,
    label: "Email Us",
    description: "For enquiries, bookings, or partnership proposals.",
    lines: [
      {
        text: "info@seedsaverskenya.org",
        href: "mailto:info@seedsaverskenya.org",
      },
      {
        text: "visits@seedsaverskenya.org",
        href: "mailto:visits@seedsaverskenya.org",
      },
    ] as LineItem[],
  },
  {
    icon: FiPhone,
    label: "Call Us",
    description: "Reach us directly during working hours.",
    lines: [
      { text: "+254 712 451 777", href: "tel:+254712451777" },
      { text: "+254 718 372 360", href: "tel:+254718372360" },
    ] as LineItem[],
  },
  {
    icon: FiClock,
    label: "Visiting Hours",
    description: "Farm tours and programmes run during these times.",
    lines: [
      { text: "Monday – Saturday" },
      { text: "8:00 AM – 5:00 PM" },
    ] as LineItem[],
  },
];

const journeyNote = {
  icon: FiMapPin,
  lines: [
    { text: "From Nairobi: ~2.5 hours" },
    { text: "From Nakuru: ~45 mins" },
  ] as LineItem[],
};

const LocationContact = () => {
  const headReveal = useReveal(0.15);
  const cardsReveal = useReveal(0.12);
  const infoReveal = useReveal(0.12);
  const footReveal = useReveal(0.2);

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
            <span>
              <em>of Kenya</em>
            </span>
          </h2>
        </div>
        <p className="lc__standfirst">
          Reach out to plan your visit or learn more about our Ecology, Food and
          Culture Tourism experiences. Advance booking recommended — we look
          forward to welcoming you.
        </p>
      </div>

      {/* ── TWO-COLUMN BODY ── */}
      <div className="lc__body">
        {/* LEFT — CONTACT CARDS */}
        <div
          ref={cardsReveal.ref}
          className={`lc__cards-col ${cardsReveal.visible ? "lc__cards-col--on" : ""}`}
        >
          <div className="lc__cards-head">
            <span className="lc__section-label">Get in Touch</span>
            <p className="lc__cards-note">We respond within 24 hours.</p>
          </div>

          <div className="lc__cards-stack">
            {contactCards.map(
              ({ icon: Icon, label, description, lines }, idx) => (
                <div
                  className="lc__card"
                  key={label}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="lc__card-top">
                    <div className="lc__card-icon-wrap">
                      <Icon strokeWidth={1.4} />
                    </div>
                    <div className="lc__card-heading">
                      <h3 className="lc__card-title">{label}</h3>
                      <p className="lc__card-desc">{description}</p>
                    </div>
                  </div>
                  <div className="lc__card-lines">
                    {lines.map((l, i) =>
                      "href" in l ? (
                        <a key={i} href={l.href} className="lc__card-link">
                          {l.text}
                          <FiArrowUpRight
                            strokeWidth={1.2}
                            className="lc__card-link-arrow"
                          />
                        </a>
                      ) : (
                        <span key={i} className="lc__card-text">
                          {l.text}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Journey teaser — compact, no full card */}
          <div className="lc__journey">
            <div className="lc__journey-icon-wrap">
              <FiMapPin strokeWidth={1.4} />
            </div>
            <div className="lc__journey-body">
              <span className="lc__journey-label">Your Journey</span>
              {journeyNote.lines.map((l, i) => (
                <span key={i} className="lc__journey-line">
                  {l.text}
                </span>
              ))}
            </div>
          </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6953909604836!2d36.26753727409346!3d-0.44976953528212466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a149b3e5b3e5%3A0xcde1f0a37810fe6e!2sSeed%20Savers%20Network%20Training%20and%20Stay!5e0!3m2!1sen!2ske!4v1776796651256!5m2!1sen!2ske"
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
            <span className="lc__section-label">At a Glance</span>
            <div className="lc__details-grid">
              {contactCards.map(({ icon: Icon, label, lines }) => (
                <div className="lc__detail-item" key={label}>
                  <div className="lc__detail-icon-wrap">
                    <Icon strokeWidth={1.4} />
                  </div>
                  <div className="lc__detail-body">
                    <span className="lc__detail-label">{label}</span>
                    {lines.map((l, i) =>
                      "href" in l ? (
                        <a key={i} href={l.href} className="lc__detail-line">
                          {l.text}
                        </a>
                      ) : (
                        <span key={i} className="lc__detail-line">
                          {l.text}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ))}
              {/* Journey in details grid */}
              <div className="lc__detail-item">
                <div className="lc__detail-icon-wrap">
                  <FiMapPin strokeWidth={1.4} />
                </div>
                <div className="lc__detail-body">
                  <span className="lc__detail-label">Journey</span>
                  {journeyNote.lines.map((l, i) => (
                    <span key={i} className="lc__detail-line">
                      {l.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visit note */}
          <div className="lc__note">
            <span className="lc__note-rule" />
            <p>
              Advance booking recommended for farm visits and immersive
              programmes.
            </p>
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
