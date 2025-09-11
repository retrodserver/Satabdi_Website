import React, { useState } from "react";
import bedroom2 from "../assets/gallery9.webp";
import bedroom3 from "../assets/gallery10.webp";
import gallery10webp from "../assets/gallery10.webp";
import bedroom4 from "../assets/gallery11.webp";

function PremiumRoomSlider() {
  const images = [bedroom2, bedroom3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-48 sm:h-56 mb-4 flex items-center justify-center">
      <img
        src={images[current]}
        alt={`Premium Room ${current + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full"
        onClick={prevSlide}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full"
        onClick={nextSlide}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}

export default PremiumRoomSlider;
