import React from "react";
import PremiumRoomSlider from "./PremiumRoomSlider";
import bedroom1 from "../assets/gallery8.webp";
import bedroom2 from "../assets/gallery9.webp";
import bedroom3 from "../assets/gallery10.webp";
import seafacebed from "../assets/seafacebed.jpg";

function Rooms() {
  const rooms = [
    {
      img: [bedroom1],
      title: "Deluxe Room",
      rating: 5,
      bed: "King Bed",
      size: "1500 sqft / Room",
      price: "₹900 / NIGHT",
    },
    {
      img: [bedroom2, bedroom3, seafacebed],
      title: "Premium Room",
      rating: 5,
      bed: "Twin Bed",
      size: "1800 sqft / Room",
      price: "₹1500 / NIGHT",
    },
  ];

  return (
    <section className="mt-16 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 text-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mb-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-10 tracking-wide">
        Luxury Rooms for Discerning Travelers
      </h2>

      {/* Responsive Grid - center 2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-5xl mx-auto">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-full max-w-sm flex flex-col justify-between"
          >
            {/* Image or Slider */}
            {room.img.length > 1 ? (
              <PremiumRoomSlider images={room.img} />
            ) : (
              <img
                src={room.img[0]}
                alt={room.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-t-2xl"
              />
            )}

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200">
                {room.title}
              </h3>

              {/* ⭐ Stars centered below title */}
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                {"★".repeat(room.rating)}
              </div>

              <p className="text-gray-700 dark:text-gray-300">{room.bed}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {room.size}
              </p>
              <div className="text-blue-700 dark:text-blue-300 text-lg font-semibold mb-6">
                {room.price}
              </div>

              {/* Push button to bottom */}
              <div className="mt-auto">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
