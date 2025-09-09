import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import frontImg from "../assets/front.jpg";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";

function Hero() {
  const images = [frontImg, f1, f2, f3, f4, f5];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // smoother pacing
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hotel ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent dark:from-gray-900/80 dark:to-gray-800/30 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-20">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-yellow-50 dark:text-blue-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] mb-4 sm:mb-6 leading-tight">
          Stay In Our Luxury Hotels & Rooms
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-yellow-100 dark:text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-6 sm:mb-10 max-w-2xl">
          Best Prices Guaranteed <span className="text-yellow-300">★★★★★</span> 128k+ Reviews
        </p>
        {/* CTA button (optional) */}
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
          onClick={() => navigate('/rooms')}
        >
          Browse Rooms
        </button>
      </div>
    </section>
  );
}
export default Hero;