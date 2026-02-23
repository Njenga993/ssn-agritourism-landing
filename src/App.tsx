import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackagesPage from "./pages/PackagesPage"; // Import the new page
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import MediaAndStoriesPage from "./pages/MediaAndStoriesPage";

const App = () => {
  return (
    // BrowserRouter enables routing for the entire app
    <BrowserRouter>
      {/* Navbar is outside of Routes so it appears on all pages */}
      <Navbar />
      <Routes>
        {/* This route renders the Home component when the user is at the root URL ("/") */}
        <Route path="/" element={<Home />} />

        {/* This route renders the PackagesPage component when the user goes to "/packages" */}
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/gallery" element={<MediaAndStoriesPage />} />
        <Route path="/testimonials" element={<MediaAndStoriesPage />} />
      </Routes>
      {/* Footer is also outside of Routes so it appears on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;