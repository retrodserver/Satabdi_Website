import React from "react";
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";
import seafacebed from "../assets/seafacebed.jpg";

function Rooms() {
  const rooms = [
    {
      img: bedroom1,
      title: "Exclusive Deluxe",
      rating: 5,
      bed: "King Bed",
      size: "1500 sqft / Room",
      price: "$690 / NIGHT",
    },
    {
      img: bedroom2,
      title: "Premier Suite",
      rating: 5,
      bed: "Twin Bed",
      size: "1800 sqft / Room",
      price: "$850 / NIGHT",
    },
    {
      img: seafacebed,
      title: "Oceanview Suite",
      rating: 5,
      bed: "King Bed + Sea View",
      size: "2000 sqft / Room",
      price: "$1200 / NIGHT",
    },
    {
      img: bedroom3,
      title: "Family Suite",
      rating: 5,
      bed: "2 King Beds",
      size: "2500 sqft / Room",
      price: "$1500 / NIGHT",
    },
  ];

  return (
  <section className="mt-16 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center bg-gray-50 dark:bg-gray-900 mb-16 md:mb-24">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6 px-2 sm:px-4 break-words">
        LUXURY ROOMS FOR DISCERNING TRAVELERS
      </h2>

      {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center max-w-7xl mx-auto">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-xs flex flex-col"
          >
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
                {room.title}
              </h3>
              <div className="text-yellow-500 mb-2">
                {"★".repeat(room.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{room.bed}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-3">{room.size}</p>
              <div className="text-blue-600 dark:text-blue-300 font-bold mb-4">
                {room.price}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
