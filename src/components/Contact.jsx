import React from "react";

function Contact({ dark }) {
  return (
    <section
      className={`mt-24 py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center min-h-[60vh] ${
        dark ? "bg-gray-900 text-blue-100" : "bg-white text-blue-900"
      }`}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-blue-700 dark:text-blue-200 drop-shadow-md text-center">
        Contact Us
      </h2>

      {/* Contact Info Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Address */}
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300">
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
            <h3 className="text-lg font-semibold mb-1 text-blue-900 dark:text-blue-200">
              Our Address
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-blue-100">
              Kalinga Studio, Plot No : 41C, near fitness studio Gym, Bharatpur,
              <br />
              Bhubaneswar, Odisha 751003
              <br />
              7QQJ+5F Bhubaneswar, Odisha
              <br />
              <a
                href="https://maps.app.goo.gl/9TrdjihNkSfiB48g8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 dark:text-blue-300 underline hover:text-blue-800"
              >
                View Location on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300">
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
            <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-200">
              Phone Number
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-blue-100">
              +91-xxxxxxxxx
              <br /> +91-xxxxxxxxx
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300">
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
            <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-200">
              Email Address
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-blue-100">
              support24@satabdi.com
              <br /> contact@satabdi.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
