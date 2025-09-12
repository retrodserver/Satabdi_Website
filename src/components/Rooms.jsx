// Rooms.jsx
import React from "react";
import PremiumRoomSlider from "./PremiumRoomSlider";
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";

function Rooms() {
  const rooms = [
    {
      img: [bedroom1],
      title: "Deluxe Room",
      rating: 5,
      bed: "King Bed",
      size: "1500 sqft / Room",
      price: "₹1000 / NIGHT",
    },
    {
      img: [bedroom2, bedroom3],
      title: "Premium Room",
      rating: 5,
      bed: "Twin Bed",
      size: "1800 sqft / Room",
      price: "₹2000 / NIGHT",
    },
  ];

  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      ></div>

      <div className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 mb-10 tracking-wide drop-shadow-md">
          Luxury Rooms for Discerning Travelers
        </h2>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-5xl mx-auto">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-red-200 dark:border-red-600 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full flex flex-col overflow-hidden"
            >
              {/* Image / Slider */}
              <div className="h-72 w-full flex-shrink-0 overflow-hidden rounded-t-2xl">
                {room.img.length > 1 ? (
                  <PremiumRoomSlider
                    images={room.img}
                    style={{ height: "100%", width: "100%" }}
                  />
                ) : (
                  <img
                    src={room.img[0]}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
                    {room.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-red-500 mb-3">
                    {"★".repeat(room.rating)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">{room.bed}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{room.size}</p>
                </div>

                <div className="text-red-600 dark:text-red-400 text-lg font-semibold">
                  {room.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button below all cards */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
