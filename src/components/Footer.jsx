import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-white dark:text-blue-200 mt-16">
      
      {/* 3-Part Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
        
        {/* Left: Logo + Explore Services */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img src={logo} alt="Logo" className="w-32 sm:w-36 md:w-40 h-auto rounded-lg shadow-lg" />
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold tracking-wide">Explore Our Services:</h3>
            <Link to="/rooms" className="hover:text-yellow-300 transition-colors">Rooms</Link>
            <Link to="/services" className="hover:text-yellow-300 transition-colors">Services</Link>
            <Link to="/menu" className="hover:text-yellow-300 transition-colors">Menu</Link>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-5">
          <h3 className="text-lg font-semibold tracking-wide">Quick Links:</h3>
          <Link to="/terms-services" className="hover:text-yellow-300 transition-colors">Terms of Service</Link>
          <Link to="/privacy-policy" className="hover:text-yellow-300 transition-colors">Privacy Policy</Link>
          <Link to="/cookies-policy" className="hover:text-yellow-300 transition-colors">Cookies</Link>
        </div>

        {/* Right: Follow Us + Contact */}
        <div className="flex flex-col items-center md:items-start gap-5 text-sm sm:text-base leading-relaxed">
          
          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold tracking-wide">Follow Us:</h3>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-transform transform hover:scale-110">
                <FaFacebookF className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-transform transform hover:scale-110">
                <FaTwitter className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-transform transform hover:scale-110">
                <FaInstagram className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-2 mt-4">
            <h3 className="text-lg font-semibold tracking-wide">Contact Us:</h3>
            <p className="opacity-90">
              Kalinga Studio, Plot No : 41C, Near Fitness Studio Gym<br />
              Bharatpur, Bhubaneswar, Odisha, 751003
            </p>
            <p><span className="font-semibold">Phone:</span> +91-xxxxxxxxxx</p>
            <p><span className="font-semibold">Email:</span> support@satabdi.com</p>
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="max-w-6xl mx-auto">
        <hr className="w-full border-t border-blue-300/40 dark:border-blue-700/40 my-8" />
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm opacity-80">
        &copy; {new Date().getFullYear()} Satabdi. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
