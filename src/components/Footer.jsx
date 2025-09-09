import React from "react";

function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8 md:px-16 bg-blue-900 dark:bg-gray-900 text-white dark:text-blue-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Copyright */}
        <div className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Rotal. All Rights Reserved.
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Cookies
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm md:text-base leading-relaxed">
          789 Inner Lane, Holy Park, California, USA <br />
          +01 234 567 890 | mailinfo00@rotal.com
        </div>
      </div>
    </footer>
  );
}
export default Footer;