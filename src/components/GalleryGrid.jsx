import React from "react";

function GalleryGrid({ images, mainImage }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
      {/* Main Image */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
        <img
          src={mainImage}
          alt="Main Gallery"
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Other Images */}
      {images.map((img, idx) => (
        <div key={idx}>
          <img
            src={img}
            alt={`Hotel ${idx + 1}`}
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
