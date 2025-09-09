import React from "react";

 function About() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-white dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-4">
        About Rotal
      </h2>

      {/* Paragraph */}
      <p className="max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
        Rotal Hotels & Resorts is passionate about "creating moments" and understands that little things have a significant impact on our visitors, owners, and employees. We carry out routine tasks in exceptional ways.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10">
        {/* Box 1 */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow flex flex-col justify-center items-center hover:scale-105 transition-transform">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-200">
            1000+
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Luxury Rooms & Villas
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow flex flex-col justify-center items-center hover:scale-105 transition-transform">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-200">
            5000+
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
           Valuable Guest Ratings
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow flex flex-col justify-center items-center hover:scale-105 transition-transform">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-200">
            10,000+
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Our Happy Clients
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
