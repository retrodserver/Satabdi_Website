import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-t from-red-800 via-red-700 to-red-800 text-white">
      {/* Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-center md:text-left">
        
        {/* Logo + Description */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <img
            src={logo1}
            alt="Logo"
            className="w-32 sm:w-36 md:w-40 h-auto mb-2 drop-shadow-lg bg-white/90 rounded-xl p-2"
          />
          <p className="text-sm sm:text-base leading-relaxed text-gray-100">
            Satabdi Hotel offers luxury stays with modern amenities and exceptional service, ensuring every guest feels at home.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4">
          <h3 className="text-lg font-semibold tracking-wide text-gray-200">Quick Links:</h3>
          <Link to="/terms-services" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies-policy" className="hover:text-white transition-colors">Cookies</Link>
        </div>

        {/* Explore Services */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4">
          <h3 className="text-lg font-semibold tracking-wide text-gray-200">Explore Our Services:</h3>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
          <Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link>
          <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Follow Us + Contact */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-5">
          <h3 className="text-lg font-semibold tracking-wide text-gray-200">Follow Us:</h3>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-transform transform hover:scale-125 hover:drop-shadow-lg">
              <FaFacebookF className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-transform transform hover:scale-125 hover:drop-shadow-lg">
              <FaTwitter className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-transform transform hover:scale-125 hover:drop-shadow-lg">
              <FaInstagram className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 text-sm sm:text-base leading-relaxed mt-2 text-gray-100">
            <h3 className="text-lg font-semibold tracking-wide text-gray-200">Contact Us:</h3>
            <p>
              Kalinga Studio, Plot No: 41C, Near Fitness Studio Gym<br />
              Bharatpur, Bhubaneswar, Odisha, 751003
            </p>
            <p><span className="font-semibold">Phone:</span> +91-78470 24823</p>
            <p><span className="font-semibold">Email:</span> satabdiswain.julie@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto">
        <hr className="w-full border-t border-red-600 my-8" />
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm opacity-80 flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-gray-100">
        <span>&copy; {new Date().getFullYear()} Satabdi. All Rights Reserved.</span>
        <a
          href="https://retrodtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-white font-semibold"
        >
          Powered By RetroDTech
        </a>
      </div>
    </footer>
  );
}

export default Footer;
