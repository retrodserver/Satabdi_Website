import React from "react";
import feedback1 from "../assets/feedback1.jpg";
import feedback2 from "../assets/feedback3.jpg";
import feedback3 from "../assets/feedback2.jpg";
import feedback4 from "../assets/feedback4.jpg";

function Testimonials() {
  const feedbacks = [
    { img: feedback1, name: "Vishal Kumar", role: "Property Expert", review: "We loved our stay! The room was spotless, the staff was incredibly attentive, and the view from our balcony was breathtaking!" },
    { img: feedback3, name: "Priya Sharma", role: "Travel Blogger", review: "Amazing experience! The spa and pool were top-notch, and the food at the restaurant was delicious." },
    { img: feedback2, name: "Sai Mohanty", role: "Business Analyst", review: "Perfect for business trips! Conference facilities were modern and staff was very helpful." },
    { img: feedback4, name: "Sara & Raj", role: "Newly Weds", review: "Our wedding was magical here! The event team made everything smooth and memorable." },
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
      {/* Decorative background like About */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#fff1f1", // soft light pink
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-10">
          Customer’s Feedback
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center max-w-xs hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
              />
              <div className="text-red-500 mb-2">★★★★★</div>
              <p className="text-gray-800 dark:text-gray-200 mb-4 text-sm sm:text-base text-center">
                {`"${item.review}"`}
              </p>
              <div className="text-red-700 dark:text-red-400 font-bold text-base sm:text-lg">
                {item.name}
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
