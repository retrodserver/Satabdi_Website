import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";
import seafacebed from "../assets/seafacebed.jpg";

function Rooms() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleCheckAvailability = () => {
    if (!checkin || !checkout) {
      toast.error("Please select both check-in and check-out dates.");
      return;
    }
    if (checkout <= checkin) {
      toast.error("Check-out date must be after check-in date.");
      return;
    }
    toast.success(`Checking availability from ${checkin} to ${checkout}`);
  };

  return (
    <section className="py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-12 text-center bg-gray-50 dark:bg-gray-900">
      {/* Date Inputs */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
        <div>
          <label htmlFor="checkin" className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">Check-in Date</label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={checkin}
            onChange={e => setCheckin(e.target.value)}
            className="rounded-lg border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="checkout" className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">Check-out Date</label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={checkout}
            onChange={e => setCheckout(e.target.value)}
            className="rounded-lg border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mb-8"
        onClick={handleCheckAvailability}
      >
        Check Availability
      </button>
      <ToastContainer position="top-center" autoClose={3000} />
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-10">
        Luxury Rooms For Discerning Travelers
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center">
        {/* Room Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-xs flex flex-col">
          <img
            src={bedroom1}
            alt="Exclusive Deluxe"
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Exclusive Deluxe
            </h3>
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">King Bed</p>
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              1500 sqft / Room
            </p>
            <div className="text-blue-600 dark:text-blue-300 font-bold mb-4">
              $690 / NIGHT
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Room Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-xs flex flex-col">
          <img
            src={bedroom2}
            alt="Premier Suite"
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Premier Suite
            </h3>
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">Twin Bed</p>
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              1800 sqft / Room
            </p>
            <div className="text-blue-600 dark:text-blue-300 font-bold mb-4">
              $850 / NIGHT
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Room Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-xs flex flex-col">
          <img
            src={seafacebed}
            alt="Oceanview Suite"
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Oceanview Suite
            </h3>
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              King Bed + Sea View
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              2000 sqft / Room
            </p>
            <div className="text-blue-600 dark:text-blue-300 font-bold mb-4">
              $1200 / NIGHT
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Room Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-xs flex flex-col">
          <img
            src={bedroom3}
            alt="Family Suite"
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
              Family Suite
            </h3>
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">2 King Beds</p>
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              2500 sqft / Room
            </p>
            <div className="text-blue-600 dark:text-blue-300 font-bold mb-4">
              $1500 / NIGHT
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Rooms;