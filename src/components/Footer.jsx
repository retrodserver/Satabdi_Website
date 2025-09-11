import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-16 bg-gray-200 text-black mt-16">
      
      {/* 4-Part Flex Grid with Equal Width */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-center md:text-left">
        
        {/* Part 1: Logo + Hotel Description */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <img src={logo1} alt="Logo" className="w-32 sm:w-36 md:w-40 h-auto mb-2" />
          <p className="text-sm sm:text-base leading-relaxed">
            Satabdi Hotel offers luxury stays with modern amenities and exceptional service, ensuring every guest feels at home.
          </p>
        </div>

        {/* Part 2: Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4">
          <h3 className="text-lg font-semibold tracking-wide">Quick Links:</h3>
          <Link to="/terms-services" className="hover:text-yellow-600 transition-colors">Terms of Service</Link>
          <Link to="/privacy-policy" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
          <Link to="/cookies-policy" className="hover:text-yellow-600 transition-colors">Cookies</Link>
        </div>

        {/* Part 3: Explore Our Services */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4">
          <h3 className="text-lg font-semibold tracking-wide">Explore Our Services:</h3>
          <Link to="/rooms" className="hover:text-yellow-600 transition-colors">Rooms</Link>
          <Link to="/services" className="hover:text-yellow-600 transition-colors">Services</Link>
          <Link to="/menu" className="hover:text-yellow-600 transition-colors">Menu</Link>
        </div>

        {/* Part 4: Follow Us + Contact Us */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-5">
          <h3 className="text-lg font-semibold tracking-wide">Follow Us:</h3>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-600 transition-transform transform hover:scale-110">
              <FaFacebookF className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-600 transition-transform transform hover:scale-110">
              <FaTwitter className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-600 transition-transform transform hover:scale-110">
              <FaInstagram className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 text-sm sm:text-base leading-relaxed mt-2">
            <h3 className="text-lg font-semibold tracking-wide">Contact Us:</h3>
            <p>
              Kalinga Studio, Plot No: 41C, Near Fitness Studio Gym<br />
              Bharatpur, Bhubaneswar, Odisha, 751003
            </p>
            <p><span className="font-semibold">Phone:</span> +91-xxxxxxxxxx</p>
            <p><span className="font-semibold">Email:</span> support@satabdi.com</p>
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="max-w-6xl mx-auto">
        <hr className="w-full border-t border-gray-400 my-8" />
      </div>

      {/* Copyright with Clickable RetroDTech Link */}
      <div className="text-center text-xs sm:text-sm opacity-80 flex flex-col sm:flex-row justify-center gap-1 sm:gap-2">
        <span>&copy; {new Date().getFullYear()} Satabdi. All Rights Reserved.</span>
        <a
          href="https://retrodtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 font-semibold"
        >
          Powered By RetroDTech
        </a>
      </div>
    </footer>
  );
}

export default Footer;
