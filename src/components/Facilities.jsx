import React from "react";
import freewifi from "../assets/freewifi.jpg";
import parking from "../assets/parking.jpg";
import roomservices from "../assets/roomservices.jpg";
import swimmingpool from "../assets/swimmingpool.jpg";
import shuttle from "../assets/shuttle.jpg";
import petfriendly from "../assets/pet.jpg";

function Facilities() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-white dark:bg-gray-900 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-10">
        Hotel Facilities
      </h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {/* Free Wifi */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={freewifi}
            alt="Free Wifi"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Free Wifi
          </div>
        </div>

        {/* Free Parking */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={parking}
            alt="Free Parking"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Free Parking
          </div>
        </div>

        {/* Room Services */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={roomservices}
            alt="Room Services"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Room Services
          </div>
        </div>

        {/* Swimming Pool */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={swimmingpool}
            alt="Swimming Pool"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Swimming Pool
          </div>
        </div>

        {/* Airport Shuttle */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={shuttle}
            alt="Airport Shuttle"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Airport Shuttle
          </div>
        </div>

        {/* Pet Friendly */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition">
          <img
            src={petfriendly}
            alt="Pet Friendly"
            className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full mb-3 sm:mb-4"
          />
          <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
            Pet Friendly
          </div>
        </div>
      </div>
    </section>
  );
}
export default Facilities;
