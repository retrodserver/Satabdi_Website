import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";

function Gallery() {
  const navigate = useNavigate();
  return (
    <>
      <section className="mt-20 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
          Gallery
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-blue-900 mb-6">
          Relax In The Comfort Of Our Hotels
        </p>
        {/* Preview Grid: Only show a few images here, not the full gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-6">
          <img src={gallery1} alt="Preview 1" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <img src={gallery2} alt="Preview 2" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <img src={gallery3} alt="Preview 3" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <img src={gallery4} alt="Preview 4" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
            onClick={() => navigate('/gallerygrid')}
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
}

export default Gallery;
