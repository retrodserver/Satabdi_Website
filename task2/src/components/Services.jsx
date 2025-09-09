import React from "react";
import gym from "../assets/gym.jpg";
import spa from "../assets/spa.jpg";
import wedding from "../assets/wedding.jpg";
import pool from "../assets/pool.jpg";
import restaurant from "../assets/resturant.jpg";
import villas from "../assets/villas.jpg";

function Services() {
  return (
    <section className="py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-12 text-center bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-10">
        Explore Rotal Services
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={villas}
            alt="Honeymoon Suite"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Luxury Villas
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
             Luxury suite for luxurious villas.
          </p>
        </div>
        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={gym}
            alt="Gym"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Gym Training Center
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Stay fit with our state-of-the-art gym facilities.
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={spa}
            alt="Spa"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Spa & Massage
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Relax and feel light with our spa services.
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={wedding}
            alt="Wedding"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Wedding & Meeting
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Celebrate your special moments with us.
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={pool}
            alt="Swimming Pool"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Swimming Pool
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Enjoy our luxurious pool facilities.
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={restaurant}
            alt="Restaurant"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Restaurant & Bar
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Delicious cuisines and refreshing drinks.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Services;