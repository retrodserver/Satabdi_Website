import React from "react";

function Contact({ dark }) {
  return (
    <section
      className="mt-8 py-24 sm:py-28 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-red-700 drop-shadow-lg">
        Contact Us
      </h2>

      {/* Contact Info Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Address */}
        <div className="flex items-start gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-red-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]">
          <span className="flex-shrink-0 text-red-700 hover:scale-110 transition-transform duration-300">
            📍
          </span>
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Our Address
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Kalinga Studio, Plot No: 41C, near Fitness Studio Gym, Bharatpur,
              Bhubaneswar, Odisha 751003
              <br />
              <a
                href="https://maps.app.goo.gl/9TrdjihNkSfiB48g8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-red-700 font-medium underline hover:text-red-900"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-red-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]">
          <span className="flex-shrink-0 text-red-700 hover:scale-110 transition-transform duration-300">
            📞
          </span>
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Phone Number
            </h3>
            <p className="text-base font-medium text-gray-700">
              <a
                href="tel:+917847024823"
                className="hover:underline hover:text-red-900"
              >
                +91-78470 24823
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-red-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]">
          <span className="flex-shrink-0 text-red-700 hover:scale-110 transition-transform duration-300">
            ✉️
          </span>
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Email Address
            </h3>
            <p className="text-base font-medium text-gray-700">
              <a
                href="mailto:satabdiswain.julie@gmail.com"
                className="hover:underline hover:text-red-900"
              >
                satabdiswain.julie@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl mt-12">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14734.986460344928!2d85.784226!3d20.273455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091d1f9df!2sKalinga%20Studio!5e0!3m2!1sen!2sin!4v1694367890123!5m2!1sen!2sin"
          width="100%"
          height="450"
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
