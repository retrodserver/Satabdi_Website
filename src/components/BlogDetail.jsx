import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const blogData = [
  {
    id: "1",
    title: "Discover and book a wide range of hotel rooms",
    date: "Feb 24, 2025",
    read: "08 min read",
    author: "Admin",
    img: blog1,
    content: `Detailed content for blog 1. Here you can add paragraphs, images, 
    and more information about booking hotel rooms.`
  },
  {
    id: "2",
    title: "Exploring World Cuisines at Rotal",
    date: "Mar 10, 2025",
    read: "05 min read",
    author: "Chef Rotal",
    img: blog2,
    content: "Detailed content for blog 2. Explore the world of cuisines available at Rotal."
  },
  {
    id: "3",
    title: "How to Plan a Perfect Destination Wedding",
    date: "Apr 2, 2025",
    read: "07 min read",
    author: "Event Planner",
    img: blog3,
    content: "Detailed content for blog 3. Tips and tricks for planning a destination wedding."
  },
  {
    id: "4",
    title: "Family Travel: Tips for Stress-Free Vacations",
    date: "May 18, 2025",
    read: "06 min read",
    author: "Travel Blogger",
    img: blog4,
    content: "Detailed content for blog 4. Advice for families traveling together."
  }
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <div className="text-center py-20 text-gray-600">Blog not found.</div>;

  const otherBlogs = blogData.filter((b) => b.id !== id);

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Main Blog Content */}
        <div className="flex-1">
          {/* Back button */}
          <div className="mb-6">
            <Link to="/blog" className="text-blue-600 hover:underline text-sm">
              ← Back to Blogs
            </Link>
          </div>

          {/* Blog Image */}
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-auto object-cover mb-6 rounded-lg"
          />

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-200 mb-4 leading-snug">
            {blog.title}
          </h1>

          {/* Meta info */}
          <div className="text-gray-500 text-sm sm:text-base mb-8 flex flex-wrap gap-3">
            <span>{blog.date}</span>
            <span>• {blog.read}</span>
            <span>• ✍️ {blog.author}</span>
          </div>

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>

        {/* Sidebar: Other Blogs */}
        <aside className="w-full lg:w-1/3 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
            Other Blogs
          </h2>
          <div className="flex flex-col gap-6">
            {otherBlogs.map((b) => (
              <Link
                key={b.id}
                to={`/blog/${b.id}`}
                className="flex gap-4 items-center hover:bg-blue-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="font-medium text-blue-900 dark:text-blue-100 text-sm sm:text-base line-clamp-2">
                    {b.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {b.date} • {b.read}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BlogDetail;
