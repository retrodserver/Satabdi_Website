import React, { useState, useEffect } from "react";
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
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  // Theme functionality removed

  return (
    <Router>
  <div className="min-h-screen w-full max-w-full bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <About />
              <Rooms />
              <Facilities />
              <Services />
              <Offers />
              <Gallery />
              <Testimonials />
              <Blog />
              <Footer />
            </div>
          } />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/rooms" element={<><Rooms /><Footer /></>} />
          <Route path="/services" element={<><Services /><Footer /></>} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;