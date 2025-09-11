import React from "react";

function Contact({ dark }) {
  return (
    <section
      className={`mt-24 py-16 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center min-h-[70vh] ${
        dark
          ? "bg-gray-900 text-blue-100"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      }`}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-gray-800 dark:text-blue-200 drop-shadow-md tracking-tight">
        Contact Us
      </h2>

      {/* Contact Info Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        {/* Address */}
        <div className="flex items-start gap-4 p-8 rounded-2xl border border-gray-200 dark:border-blue-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="flex-shrink-0 text-blue-600 dark:text-blue-300">
            {/* Map Pin Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.341A8 8 0 104.572 15.34l7.428 7.428 7.428-7.428z"
              />
            </svg>
          </span>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-blue-200">
              Our Address
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-blue-100">
              Kalinga Studio, Plot No : 41C, near Fitness Studio Gym,
              Bharatpur, Bhubaneswar, Odisha 751003
              <br />
              <span className="font-medium">7QQJ+5F Bhubaneswar, Odisha</span>
              <br />
              <a
                href="https://maps.app.goo.gl/9TrdjihNkSfiB48g8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 dark:text-blue-300 font-medium underline hover:text-blue-800"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-8 rounded-2xl border border-gray-200 dark:border-blue-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="flex-shrink-0 text-blue-600 dark:text-blue-300">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </span>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-blue-200">
              Phone Number
            </h3>
            <p className="text-base font-medium text-gray-700 dark:text-blue-100">
              +91-78470 24823
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-8 rounded-2xl border border-gray-200 dark:border-blue-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="flex-shrink-0 text-blue-600 dark:text-blue-300">
            {/* Mail Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-blue-200">
              Email Address
            </h3>
            <p className="text-base font-medium text-gray-700 dark:text-blue-100">
              satabdiswain.julie@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.217073585857!2d72.8310600752037!3d19.17377248203559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b7b7b7b7b7%3A0x9TrdjihNkSfiB48g8!2s2690%20Hiltona%20Street%20Victoria%20Road%2C%20New%20York%2C%20Canada!5e0!3m2!1sen!2sin!4v1694367890123!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
