
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
/*import Experiences from "../components/Experiences";*/
import Testimonials from "../components/Testimonials";
import LocationTrust from "../components/LocationTrust";


const Home = () => {
  return (
    <>
      
      <Hero />
      <About />
      <Packages />
      {/* <Experiences /> */}
      <Testimonials />
      <LocationTrust />
      
    </>
  );
};

export default Home;