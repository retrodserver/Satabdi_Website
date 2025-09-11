import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";

function Gallery() {
  const navigate = useNavigate();
  const images = [gallery1, gallery2, gallery3, gallery4];
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section className="mt-20 py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-16 text-center bg-gray-50">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
          Gallery
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Relax in the comfort of our hotels with a glimpse into our spaces.
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 max-w-7xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg group relative"
            >
              {/* Skeleton Loader */}
              {!loadedImages[idx] && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-xl"></div>
              )}
              <img
                src={img}
                alt={`Preview ${idx + 1}`}
                onLoad={() => handleImageLoad(idx)}
                className={`w-full h-56 sm:h-64 md:h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 ${
                  loadedImages[idx] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transform transition font-semibold text-sm sm:text-base md:text-lg"
            onClick={() => navigate("/gallerygrid")}
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
}

export default Gallery;
