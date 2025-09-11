import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-white dark:text-blue-200 mt-16">
      {/* 3-Part Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        
        {/* Social Icons */}
        <div className="flex flex-col items-center sm:items-start gap-5">
          <h3 className="text-lg font-semibold tracking-wide">Follow Us</h3>
          <div className="flex gap-6">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="hover:text-yellow-300 transition-transform transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
          <Link to="/terms-services" className="hover:text-yellow-300 transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="hover:text-yellow-300 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/cookies-policy" className="hover:text-yellow-300 transition-colors">
            Cookies
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-3 text-sm md:text-base leading-relaxed">
          <h3 className="text-lg font-semibold tracking-wide">Contact Us</h3>
          <p className="opacity-90">
            Kalinga Studio, Plot No : 41C, near fitness studio Gym,<br />
            Bharatpur, Bhubaneswar, Odisha 751003
          </p>
          <p><span className="font-semibold">Phone:</span> +91-xxxxxxxxx</p>
          <p><span className="font-semibold">Email:</span> support@satabdi.com</p>
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
