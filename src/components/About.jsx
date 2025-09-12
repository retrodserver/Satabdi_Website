// About.jsx
import React from "react";
import CountUp from "react-countup";

function About() {
  const stats = [
    { number: 1000, label: "Luxury Rooms & Villas" },
    { number: 5000, label: "Valuable Guest Ratings" },
    { number: 10000, label: "Happy Guests Served" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-white">
      {/* Decorative radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red-700 mb-8 drop-shadow-lg">
          Experience Luxury at Satabdi Hotel
        </h2>

        {/* Paragraph */}
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          At Satabdi Hotel, we redefine hospitality. From elegantly designed
          rooms to world-class amenities, every detail is thoughtfully crafted
          to ensure our guests experience comfort, luxury, and an unforgettable
          stay. We create memories that last a lifetime.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-red-200 dark:border-red-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-700 dark:text-red-400 drop-shadow-lg">
                <CountUp start={0} end={stat.number} duration={2.5} separator="," />
              </div>
              <div className="mt-4 text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
