import React from "react";
import freewifi from "../assets/freewifi.jpg";
import parking from "../assets/parking.jpg";
import roomservices from "../assets/roomservices.jpg";
import swimmingpool from "../assets/swimmingpool.jpg";
import shuttle from "../assets/shuttle.jpg";
import petfriendly from "../assets/pet.jpg";

const facilities = [
  { img: freewifi, alt: "Free Wifi", title: "Free Wifi" },
  { img: parking, alt: "Free Parking", title: "Free Parking" },
  { img: roomservices, alt: "Room Services", title: "Room Services" },
  { img: swimmingpool, alt: "Swimming Pool", title: "Swimming Pool" },
  { img: shuttle, alt: "Airport Shuttle", title: "Airport Shuttle" },
  { img: petfriendly, alt: "Pet Friendly", title: "Pet Friendly" },
];

function Facilities() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-gray-900 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-8">
        Hotel Facilities
      </h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 justify-items-center">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col items-center text-center transition transform hover:scale-105 duration-300 w-full max-w-[150px] sm:max-w-[160px] md:max-w-[180px]"
          >
            <img
              src={facility.img}
              alt={facility.alt}
              className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-full mb-3 sm:mb-3"
            />
            <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
              {facility.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
