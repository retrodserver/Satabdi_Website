// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Services from "./components/Services";
import Offers from "./components/Offers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import TermsServices from "./components/TermsServices";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import GalleryGrid from "./components/GalleryGrid";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Whole site wrapper */}
      <div
        className="
          min-h-screen w-full max-w-full 
          bg-gradient-to-b from-red-50 via-white to-red-100 
          dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 
          text-gray-900 dark:text-gray-100 
          selection:bg-red-300 selection:text-white
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,200,200,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,180,180,0.35) 0%, transparent 35%)",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="space-y-20">
                <Hero />
                <About />
                <Rooms />
                <Facilities />
                <Services />
                <Gallery />
                <Testimonials />
                <Blog />
                <Footer />
              </div>
            }
          />

          {/* Individual Pages */}
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/rooms" element={<><Rooms /><Footer /></>} />
          <Route path="/services" element={<><Services /><Footer /></>} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
          <Route path="/terms-services" element={<TermsServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/gallerygrid" element={<GalleryGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
