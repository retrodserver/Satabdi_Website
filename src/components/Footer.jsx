import React from "react";

function Footer() {
  return (
    <footer className="w-full py-10 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-white dark:text-blue-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {["Facebook", "Twitter", "Instagram"].map((platform, idx) => (
            <a
              key={platform}
              href="#"
              aria-label={platform}
              className="hover:text-yellow-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-medium">
          {["Terms of Service", "Privacy Policy", "Cookies"].map(link => (
            <a
              key={link}
              href="#"
              className="hover:text-yellow-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm md:text-base leading-relaxed mt-2">
          <span className="font-semibold">Contact Us:</span> <br />
          Kalinga Studio, Plot No : 41C, near fitness studio Gym, Bharatpur, Bhubaneswar, Odisha 751003 <br />
          <span className="font-semibold">Phone:</span> +91-xxxxxxxxx <br />
          <span className="font-semibold">Email:</span> support@satabdi.com
        </div>

        {/* Google Map Embed */}
        <div className="w-full flex justify-center my-6">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.217073585857!2d72.8310600752037!3d19.17377248203559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b7b7b7b7b7%3A0x9TrdjihNkSfiB48g8!2s2690%20Hiltona%20Street%20Victoria%20Road%2C%20New%20York%2C%20Canada!5e0!3m2!1sen!2sin!4v1694367890123!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-t border-blue-300 dark:border-blue-700 my-4" />

        {/* Copyright */}
        <div className="text-xs sm:text-sm mt-2 opacity-80">
          &copy; {new Date().getFullYear()} Satabdi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
