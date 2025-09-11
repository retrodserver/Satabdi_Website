import React from "react";
import feedback1 from "../assets/feedback1.jpg";
import feedback2 from "../assets/feedback2.jpg";
import feedback3 from "../assets/feedback3.jpg";
import feedback4 from "../assets/feedback4.jpg";

function Testimonials() {
  const feedbacks = [
    {
      img: feedback1,
      name: "Andrew Simon",
      role: "Property Expert",
      review:
        "We loved our stay! The room was spotless, the staff was incredibly attentive, and the view from our balcony was breathtaking!",
    },
    {
      img: feedback2,
      name: "Priya Sharma",
      role: "Travel Blogger",
      review:
        "Amazing experience! The spa and pool were top-notch, and the food at the restaurant was delicious.",
    },
    {
      img: feedback3,
      name: "Michael Lee",
      role: "Business Analyst",
      review:
        "Perfect for business trips! Conference facilities were modern and staff was very helpful.",
    },
    {
      img: feedback4,
      name: "Sara & Raj",
      role: "Newly Weds",
      review:
        "Our wedding was magical here! The event team made everything smooth and memorable.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center bg-white dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-10">
        Customer’s Feedback
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center max-w-xs hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-4"
            />
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
              {`"${item.review}"`}
            </p>
            <div className="text-blue-900 dark:text-blue-200 font-bold text-base sm:text-lg">
              {item.name}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              {item.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
