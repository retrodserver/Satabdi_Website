import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleLogin = () => {
    setIsAdmin(true);
    toast.success("Logged in successfully!");
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setUser(null);
    toast.info("Logged out successfully!");
  };

  const [showRegisterToast, setShowRegisterToast] = useState(false);

  const handleRegister = (username) => {
  setUser(username);
  setShowRegisterToast(true);
  // Save password for login
  setUserPassword(document.getElementById('register-password')?.value || "");
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    if (showRegisterToast) {
      toast.success("User registered successfully!");
      setShowRegisterToast(false);
    }
  }, [showRegisterToast]);

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
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/admin" element={isAdmin ? <Admin onLogout={handleLogout} /> : <Login onLogin={handleLogin} user={user} userPassword={userPassword} />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;