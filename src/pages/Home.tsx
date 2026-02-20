import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import Experiences from "../components/Experiences";
import Testimonials from "../components/Testimonials";
import LocationTrust from "../components/LocationTrust";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Experiences />
      <Testimonials />
      <LocationTrust />
      <Footer />
    </>
  );
};

export default Home;