import React from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

 function Blog() {
  const navigate = useNavigate();
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-6">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-8">
        {/* Blog Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
          <img
            src={blog1}
            alt="Blog 1"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Discover and book a wide range of hotel rooms
            </h3>
            <div className="text-gray-500 text-sm mb-4">
              Feb 24, 2025 • 08 min read
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => navigate('/blog/1')}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
          <img
            src={blog2}
            alt="Food Blog"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Exploring World Cuisines at Rotal
            </h3>
            <div className="text-gray-500 text-sm mb-4">
              Mar 10, 2025 • 05 min read
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => navigate('/blog/2')}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
          <img
            src={blog3}
            alt="Blog 3"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              How to Plan a Perfect Destination Wedding
            </h3>
            <div className="text-gray-500 text-sm mb-4">
              Apr 2, 2025 • 07 min read
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => navigate('/blog/3')}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
          <img
            src={blog4}
            alt="Blog 4"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Family Travel: Tips for Stress-Free Vacations
            </h3>
            <div className="text-gray-500 text-sm mb-4">
              May 18, 2025 • 06 min read
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => navigate('/blog/4')}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;