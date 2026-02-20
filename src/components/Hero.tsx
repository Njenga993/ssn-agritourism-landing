import "../styles/hero.css";
import YouTube from 'react-youtube';

const Hero = () => {
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

  return (
    <section className="hero youtube-hero">
      <YouTube
        videoId="7Isnch3jVCU"
        opts={opts}
        className="hero-video"
        iframeClassName="youtube-iframe"
      />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="animate-fade-in">
          Experience Agroecology <span className="text-highlight">in Action</span>
        </h1>
        <p className="animate-fade-in-delay">
          Immersive farm-based learning rooted in seed sovereignty,
          culture, and community resilience.
        </p>

        <div className="hero-buttons animate-fade-in-delay-2">
          <a href="#packages" className="hero-btn primary">
            Explore Packages
          </a>
          <a
            href="mailto:info@seedsaverskenya.org"
            className="hero-btn secondary"
          >
            Book Your Experience
          </a>
        </div>

        <div className="scroll-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;