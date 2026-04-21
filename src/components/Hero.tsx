// Hero.tsx
import { useRef, useState } from "react";
import "../styles/hero.css";
import YouTube from "react-youtube";

const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: "7Isnch3jVCU",
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      playsinline: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
    setIsVideoReady(true);
  };

  const onError = () => setIsVideoReady(true);

  return (
    <section
      ref={heroRef}
      className={`hero ${isVideoReady ? "hero--ready" : ""}`}
    >
      {/* ── VIDEO BG ── */}
      <div className="hero__bg">
        <YouTube
          videoId="7Isnch3jVCU"
          opts={opts}
          className="hero__yt"
          iframeClassName="hero__iframe"
          onReady={onReady}
          onError={onError}
        />
        <div className="hero__veil" />
      </div>

      {/* ── ISSUE LINE (magazine top strip) ── */}
      <div className="hero__issue-bar">
        <span className="hero__issue-tag">Seed Savers Network Kenya</span>
        <span className="hero__issue-rule" aria-hidden="true" />
        <span className="hero__issue-date">
          Est. 2009 · Gilgil,Nakuru Kenya
        </span>
      </div>

      {/* ── MAIN EDITORIAL LAYOUT ── */}
      <div className="hero__body">
        {/* left column — vertical label */}
        <div className="hero__col-left">
          <span className="hero__vert-label">Seeds · Food · Culture</span>
        </div>

        {/* centre column — headline */}
        <div className="hero__col-centre">
          <p className="hero__kicker">Immersive agroecology tourism</p>

          <h1 className="hero__headline">
            <span className="hero__headline-line hero__headline-line--1">
              Where Land
            </span>
            <span className="hero__headline-line hero__headline-line--2">
              <em>Speaks</em>
            </span>
            <span className="hero__headline-line hero__headline-line--3">
              to People
            </span>
          </h1>

          <p className="hero__deck">
            A subsection of Seed Savers Network Kenya Offering Farm-based
            learning rooted in seed sovereignty, indigenous food systems, and
            community resilience across rural Kenya.
          </p>

          <div className="hero__actions">
            <a href="/packages" className="hero__btn hero__btn--fill">
              Explore Packages
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:info@seedsaverskenya.org"
              className="hero__btn hero__btn--ghost"
            >
              Book Experience
            </a>
          </div>
        </div>

        {/* right column — stats */}
        <div className="hero__col-right">
          <div className="hero__stat-stack">
            {[
              { n: "17+", l: "Years of\nstewardship" },
              { n: "3000+", l: "Indigenous\nseed varieties" },
              { n: "400+", l: "Partner\ncommunities" },
            ].map(({ n, l }) => (
              <div className="hero__stat" key={n}>
                <strong className="hero__stat-n">{n}</strong>
                <span className="hero__stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="hero__footer-strip">
        <a href="#story" className="hero__scroll-cue" aria-label="Scroll down">
          <span className="hero__scroll-word">Scroll</span>
          <span className="hero__scroll-track">
            <span className="hero__scroll-dot" />
          </span>
        </a>
        <span className="hero__footer-rule" aria-hidden="true" />
        <span className="hero__footer-copy">
          A subsection of Seed Savers Network Kenya
        </span>
      </div>
    </section>
  );
};

export default Hero;
