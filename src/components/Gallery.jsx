import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gallery1 from "../assets/gallery.jpg";
import gallery2 from "../assets/gallery4.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery2.jpg";

function Gallery() {
  const navigate = useNavigate();
  const images = [gallery1, gallery2, gallery3, gallery4];
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background gradients (same as About) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      ></div>

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red-700 mb-8">
          Our Gallery
        </h2>

        {/* Paragraph */}
        <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          Step into the elegance of Satabdi Hotels. Explore our luxurious spaces that combine comfort, style, and unforgettable experiences.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 max-w-7xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              {!loadedImages[idx] && (
                <div className="absolute inset-0 bg-red-100 dark:bg-gray-700 animate-pulse rounded-2xl"></div>
              )}
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                onLoad={() => handleImageLoad(idx)}
                className={`w-full h-64 sm:h-72 md:h-80 lg:h-80 object-cover rounded-2xl transition-opacity duration-700 ${
                  loadedImages[idx] ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 font-semibold text-lg"
            onClick={() => navigate("/gallerygrid")}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
