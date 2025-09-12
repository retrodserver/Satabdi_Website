import React from "react";
import freewifi from "../assets/freewifi.jpg";
import parking from "../assets/parking.jpg";
import roomservices from "../assets/roomservice.jpeg";

const facilities = [
  { img: freewifi, alt: "Free Wifi", title: "Free Wifi" },
  { img: parking, alt: "Free Parking", title: "Free Parking" },
  { img: roomservices, alt: "Room Services", title: "Room Services" },
];

function Facilities() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-red-50 to-red-100 text-center text-gray-900">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-red-600">
        Premium Hotel Facilities
      </h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center mx-auto max-w-4xl">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col items-center text-center
                       transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-[200px]"
          >
            <div className="bg-gradient-to-tr from-red-100 to-red-200 rounded-full p-4 mb-4 shadow-md">
              <img
                src={facility.img}
                alt={facility.alt}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-cover rounded-full"
              />
            </div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">
              {facility.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
