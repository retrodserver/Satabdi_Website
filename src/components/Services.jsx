import React from "react";
import dining from "../assets/dining.jpg";
import resturant from "../assets/resturant.jpg";

const services = [
  { img: resturant, alt: "Luxury Experience", title: "Luxury Experience", text: "Elegant and spacious suites." },
  { img: dining, alt: "Dining", title: "Gourmet Restaurant", text: "Fine dining with diverse cuisine." },
];

function Services() {
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
      {/* Decorative background like About */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#fff1f1", // soft light pinkish background
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red-700 mb-10">
          Explore Satabdi Services
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-red-200 dark:border-red-600 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl w-full max-w-xs transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.alt}
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4 transform transition duration-300 hover:scale-110"
              />
              <div className="text-lg font-semibold text-red-700 mb-2">{service.title}</div>
              <div className="text-gray-700 dark:text-gray-200 text-base">{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
