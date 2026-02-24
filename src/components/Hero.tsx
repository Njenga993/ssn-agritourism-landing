// Hero.tsx
import { useRef, useState } from "react";
import "../styles/hero.css";
import YouTube from 'react-youtube';

const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: '7Isnch3jVCU',
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

  const onError = (error: any) => {
    console.log('YouTube Player Error:', error);
    setIsVideoReady(true); // Still show content even if video fails
  };

  return (
    <section 
      ref={heroRef}
      className={`ssn-hero ${isVideoReady ? 'ssn-hero--ready' : ''}`}
    >
      {/* Video Background */}
      <div className="ssn-hero__video-wrapper">
        <YouTube
          videoId="7Isnch3jVCU"
          opts={opts}
          className="ssn-hero__video"
          iframeClassName="ssn-hero__iframe"
          onReady={onReady}
          onError={onError}
        />
        
        {/* Simple Overlay - No gradients */}
        <div className="ssn-hero__overlay"></div>
      </div>
      
      {/* Main Content */}
      <div className="ssn-hero__content">
        {/* Badge */}
        <div className="ssn-hero__badge">
          <span className="ssn-hero__badge-dot"></span>
          Seed, food and Culture tourism
        </div>

        {/* Headline */}
        <h1>
          Experience <span className="ssn-hero__highlight">Agroecology</span>
          <br />
          <span className="ssn-hero__subheadline">in Action</span>
        </h1>

        {/* Description */}
        <p>
          Immersive farm-based learning rooted in seed sovereignty,
          culture, and community resilience.
        </p>

        {/* Stats 
        <div className="ssn-hero__stats">
          <div className="ssn-hero__stat">
            <span className="ssn-hero__stat-number">15+</span>
            <span className="ssn-hero__stat-label">Years</span>
          </div>
          <div className="ssn-hero__stat">
            <span className="ssn-hero__stat-number">200+</span>
            <span className="ssn-hero__stat-label">Seed Varieties</span>
          </div>
          <div className="ssn-hero__stat">
            <span className="ssn-hero__stat-number">50+</span>
            <span className="ssn-hero__stat-label">Communities</span>
          </div>
        </div>*/}

        {/* Buttons */}
        <div className="ssn-hero__buttons">
          <a href="#packages" className="ssn-hero__btn ssn-hero__btn--primary">
            Explore Packages
          </a>
          <a
            href="mailto:info@seedsaverskenya.org"
            className="ssn-hero__btn ssn-hero__btn--secondary"
          >
            Book Your Experience
          </a>
        </div>

        {/* Scroll Indicator 
        <div className="ssn-hero__scroll">
          <div className="ssn-hero__scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="ssn-hero__scroll-text">Scroll</span>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;