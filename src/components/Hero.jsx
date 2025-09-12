// Hero.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

function Hero() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [currentTitle, setCurrentTitle] = useState(0);

  // Titles to show at different video times (in seconds)
  const titles = [
    {
      heading: "Welcome to Satabdi Hotel",
      subtext: "Experience luxury and comfort like never before",
      time: 0,
    },
    {
      heading: "Elegance in Every Corner",
      subtext: "Stylish rooms and world-class amenities await you",
      time: 4,
    },
    {
      heading: "Relax and Unwind",
      subtext: "Rejuvenate at our spa and wellness centers",
      time: 8,
    },
    {
      heading: "Dine in Style",
      subtext: "Gourmet cuisine to delight your taste buds",
      time: 12,
    },
    {
      heading: "Memorable Stays",
      subtext: "Join thousands of happy guests who trust us",
      time: 16,
    },
  ];

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current?.currentTime || 0;
      let idx = 0;
      for (let i = 0; i < titles.length; i++) {
        if (currentTime >= titles[i].time) {
          idx = i;
        }
      }
      setCurrentTitle(idx);
    };
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener("timeupdate", handleTimeUpdate);
      return () => videoEl.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4 sm:mb-6 leading-tight transition-all duration-700">
          {titles[currentTitle].heading}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white drop-shadow-md mb-6 sm:mb-10 max-w-xl sm:max-w-2xl transition-all duration-700">
          {titles[currentTitle].subtext}
        </p>
        <button
          onClick={() => navigate("/rooms")}
          className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Browse Rooms
        </button>
      </div>
      {/* Text animations */}
      <style>
        {`
          @media (max-width: 640px) {
            h1 { font-size: 2rem; }
            p { font-size: 1rem; }
          }
          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          h1, p {
            animation: fadeSlide 1s ease-out;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
