import React from "react";
import { useNavigate } from "react-router-dom";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import mainhotel from "../assets/mainhotel.jpg";

function Gallery() {
  const navigate = useNavigate();
  return (
  <section className="mt-20 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
        Gallery
      </h2>
      <p className="text-md sm:text-lg md:text-xl text-blue-900 mb-6">
        Relax In The Comfort Of Our Hotels
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        {/* Main Image */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
          <img
            src={mainhotel}
            alt="Main Gallery"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Other Images */}
        {[hotel1, hotel2, hotel3, hotel4].map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Hotel ${idx + 1}`}
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Centered Button at the bottom */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
          onClick={() => navigate('/gallerygrid')}
        >
          View More
        </button>
      </div>
    </section>
  );
}

export default Gallery;
