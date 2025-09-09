import React from "react";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import mainhotel from "../assets/mainhotel.jpg";

function Gallery() {
  return (
    <section className="py-6 sm:py-10 md:py-16 px-2 sm:px-4 md:px-8 text-center bg-gray-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Gallery
      </h2>
    <p className="text-xl md:text-md text-blue-900 mb-2">Relax In The Comfort Of Our Hotels</p>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        {/* Main Image - make it span 2 cols on larger screens */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
          <img
            src={mainhotel}
            alt="Main Gallery"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Other Images */}
        <div>
          <img
            src={hotel1}
            alt="Hotel 1"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <img
            src={hotel2}
            alt="Hotel 2"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <img
            src={hotel3}
            alt="Hotel 3"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <img
            src={hotel4}
            alt="Hotel 4"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
export default Gallery;