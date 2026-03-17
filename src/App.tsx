import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import PackagesPage from "./pages/PackagesPage";
import Navbar from "./components/navbar";
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import Footer from "./components/Footer";
import MediaAndStoriesPage from "./pages/MediaAndStoriesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/Aboutpage";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Don't show loader on first page load (handled by App)
    if (!previousLocation) {
      setPreviousLocation(location.pathname);
      return;
    }

    // Show loader only when actually changing pages
    if (previousLocation !== location.pathname) {
      setLoading(true);
      
      const timer = setTimeout(() => {
        setLoading(false);
        setPreviousLocation(location.pathname);
      }, 1200); // Quick but noticeable

      return () => clearTimeout(timer);
    }
  }, [location, previousLocation]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/gallery" element={<MediaAndStoriesPage />} />
        <Route path="/testimonials" element={<MediaAndStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
};

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial site load - longer for first impression
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2800); // Match your loader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {initialLoading && <Loader />}
      
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;