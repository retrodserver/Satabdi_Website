import React from "react";
import freewifi from "../assets/freewifi.jpg";
import parking from "../assets/parking.jpg";
import roomservices from "../assets/roomservices.jpg";
import swimmingpool from "../assets/swimmingpool.jpg";
import shuttle from "../assets/shuttle.jpg";
import petfriendly from "../assets/pet.jpg";

function Facilities() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-white dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-10">
        Hotel Facilities
      </h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {/* Free Wifi */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={freewifi}
            alt="Free Wifi"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Free Wifi
          </div>
        </div>

        {/* Free Parking */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={parking}
            alt="Free Parking"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Free Parking
          </div>
        </div>

        {/* Room Services */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={roomservices}
            alt="Room Services"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Room Services
          </div>
        </div>

        {/* Swimming Pool */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={swimmingpool}
            alt="Swimming Pool"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Swimming Pool
          </div>
        </div>

        {/* Airport Shuttle */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={shuttle}
            alt="Airport Shuttle"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Airport Shuttle
          </div>
        </div>

        {/* Pet Friendly */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform">
          <img
            src={petfriendly}
            alt="Pet Friendly"
            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
          />
          <div className="text-blue-600 dark:text-blue-300 font-semibold">
            Pet Friendly
          </div>
        </div>
      </div>
    </section>
  );
}
export default Facilities;