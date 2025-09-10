import React from "react";
import gym from "../assets/gym.jpg";
import spa from "../assets/spa.jpg";
import pool from "../assets/pool.jpg";
import restaurant from "../assets/resturant.jpg";
import villas from "../assets/villas.jpg";

const services = [
  {
    img: villas,
    alt: "Luxury Villas",
    title: "Luxury Villas",
    text: "Luxury suite for luxurious villas.",
  },
  {
    img: gym,
    alt: "Gym",
    title: "Gym & Fitness",
    text: "State-of-the-art gym facilities for your health.",
  },
  {
    img: spa,
    alt: "Spa",
    title: "Spa & Wellness",
    text: "Relax and rejuvenate with our spa treatments.",
  },
  {
    img: pool,
    alt: "Swimming Pool",
    title: "Swimming Pool",
    text: "Enjoy our luxurious swimming pool.",
  },
];

function Services() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center bg-gray-50 overflow-x-hidden mt-4 md:mt-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">
        Explore Shatabdi Services
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-full max-w-xs"
          >
            <img
              src={service.img}
              alt={service.alt}
              className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
