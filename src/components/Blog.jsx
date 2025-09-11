import React from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      img: blog1,
      title: "Blending Comfort with Tradition at Hotel Satabdi.",
      desc: "Experience the blend of comfort and tradition at our hotel.",
      date: "Sep 11, 2025 • 08 min read",
    },
    {
      id: 2,
      img: blog2,
      title: "A People-Centered Approach to Hospitality.",
      desc: "Discover our people-first philosophy in hospitality.",
      date: "Sep 11, 2025 • 05 min read",
    },
    {
      id: 3,
      img: blog3,
      title: "Attention to Details Makes the Difference.",
      desc: "See how small details create big experiences for guests.",
      date: "Sep 11, 2025 • 07 min read",
    },
    {
      id: 4,
      img: blog4,
      title: "Transparency Builds Trust at Hotel Satabdi.",
      desc: "Learn why transparency is key to building guest trust.",
      date: "Sep 11, 2025 • 06 min read",
    },
  ];

  return (
    <section className="mt-16 py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-200 text-center">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2 leading-snug">
                {blog.title}
              </h3>
              {/* Responsive truncate: 2 lines on mobile, 3 lines on larger screens */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2 sm:line-clamp-3">
                {blog.desc}
              </p>
              <span className="text-gray-500 text-xs sm:text-sm mb-3">
                {blog.date}
              </span>
              <button
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
