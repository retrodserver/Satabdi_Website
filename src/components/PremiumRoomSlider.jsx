import React, { useState, useEffect } from "react";

function PremiumRoomSlider({ images }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigate manually
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Room ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-2xl ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay for subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600/70 hover:bg-red-700 text-white px-3 py-1 rounded-full shadow-lg transition transform hover:scale-110"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600/70 hover:bg-red-700 text-white px-3 py-1 rounded-full shadow-lg transition transform hover:scale-110"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
}

export default PremiumRoomSlider;
