import React from "react";
import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";

function Offers() {
  return (
    <section className="py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-12 text-center bg-white dark:bg-gray-900">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-8">
        Best Offers At Our Hotels
      </h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 justify-items-center">
        {/* Offer Card */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm">
          <img
            src={promo1}
            alt="Promo 1"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              25% Off Deluxe Rooms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm sm:text-base">
              Book Now for a special discount!
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
              $250
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Offer
            </button>
          </div>
        </div>

        {/* Offer Card */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm">
          <img
            src={promo2}
            alt="Promo 2"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Food Festival Offer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm sm:text-base">
              Enjoy unlimited buffet at our restaurant for just $30 per person.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
              $30
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Offer
            </button>
          </div>
        </div>

        {/* Offer Card */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm">
          <img
            src={promo3}
            alt="Promo 3"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Business Traveler Special
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm sm:text-base">
              Free high-speed WiFi and breakfast for all business bookings.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
              $220
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Offers;