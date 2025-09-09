import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Router>
  <div className={`min-h-screen w-full max-w-full overflow-x-hidden ${dark ? "bg-gray-900" : "bg-white"}`}> 
        <Header dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero dark={dark} />
              <About dark={dark} />
              <Rooms dark={dark} />
              <Facilities dark={dark} />
              <Services dark={dark} />
              <Offers dark={dark} />
              <Gallery dark={dark} />
              <Testimonials dark={dark} />
              <Blog dark={dark} />
              <Footer dark={dark} />
            </div>
          } />
          <Route path="/rooms" element={<><Rooms dark={dark} /><Footer dark={dark} /></>} />
          <Route path="/services" element={<><Services dark={dark} /><Footer dark={dark} /></>} />
          <Route path="/facilities" element={<Facilities dark={dark} />} />
          <Route path="/offers" element={<Offers dark={dark} />} />
          <Route path="/gallery" element={<Gallery dark={dark} />} />
          <Route path="/testimonials" element={<Testimonials dark={dark} />} />
          <Route path="/blog" element={<Blog dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/footer" element={<Footer dark={dark} />} />
          <Route path="/contact" element={<><Contact dark={dark} /><Footer dark={dark} /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;