import React from "react";
import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";

function Offers() {
  const offerData = [
    {
      img: promo1,
      title: "25% Off Deluxe Rooms",
      desc: "Book Now for a special discount!",
      price: "$250",
    },
    {
      img: promo2,
      title: "Food Festival Offer",
      desc: "Enjoy unlimited buffet at our restaurant for just $30 per person.",
      price: "$30",
    },
    {
      img: promo3,
      title: "Business Traveler Special",
      desc: "Free high-speed WiFi and breakfast for all business bookings.",
      price: "$220",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center bg-white dark:bg-gray-900">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-8">
        Best Offers At Our Hotels
      </h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 justify-items-center">
        {offerData.map((offer, idx) => (
          <div
            key={idx}
            className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm sm:text-base">
                {offer.desc}
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
                {offer.price}
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                View Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;
