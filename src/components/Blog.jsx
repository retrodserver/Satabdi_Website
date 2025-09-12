// Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.png";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      img: blog1,
      title: "Blending Comfort with Tradition at Hotel Satabdi",
      desc: "Experience the perfect blend of comfort and tradition at our luxurious hotel in Bhubaneswar.",
      date: "Sep 11, 2025 • 08 min read",
    },
    {
      id: 2,
      img: blog2,
      title: "A People-Centered Approach to Hospitality",
      desc: "Discover our people-first philosophy in hospitality, making every guest feel valued and cared for.",
      date: "Sep 11, 2025 • 05 min read",
    },
    {
      id: 3,
      img: blog3,
      title: "Attention to Details Makes the Difference",
      desc: "See how small details create big experiences for guests, ensuring memorable stays.",
      date: "Sep 11, 2025 • 07 min read",
    },
    {
      id: 4,
      img: blog4,
      title: "Transparency Builds Trust at Hotel Satabdi",
      desc: "Learn why transparency is key to building guest trust and creating long-lasting relationships.",
      date: "Sep 11, 2025 • 06 min read",
    },
  ];

  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
          `,
        }}
      ></div>

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red-700 mb-12 drop-shadow-md">
          Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-red-200 dark:border-red-600 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 line-clamp-3">
                  {blog.desc}
                </p>
                <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
                  {blog.date}
                </span>
                <button
                  className="mt-auto bg-gradient-to-r from-red-600 to-red-400 text-white px-5 py-2.5 rounded-lg shadow-lg hover:from-red-700 hover:to-red-500 transition-all duration-300"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
