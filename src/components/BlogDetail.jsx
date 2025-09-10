import React from "react";
import { useParams } from "react-router-dom";
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
    img: blog1,
    content: "Detailed content for blog 1. Here you can add paragraphs, images, and more information about booking hotel rooms."
  },
  {
    id: "2",
    title: "Exploring World Cuisines at Rotal",
    date: "Mar 10, 2025",
    read: "05 min read",
    img: blog2,
    content: "Detailed content for blog 2. Explore the world of cuisines available at Rotal."
  },
  {
    id: "3",
    title: "How to Plan a Perfect Destination Wedding",
    date: "Apr 2, 2025",
    read: "07 min read",
    img: blog3,
    content: "Detailed content for blog 3. Tips and tricks for planning a destination wedding."
  },
  {
    id: "4",
    title: "Family Travel: Tips for Stress-Free Vacations",
    date: "May 18, 2025",
    read: "06 min read",
    img: blog4,
    content: "Detailed content for blog 4. Advice for families traveling together."
  }
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === id);

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 text-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-2">{blog.title}</h2>
        <div className="text-gray-500 text-sm mb-4">{blog.date} • {blog.read}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{blog.content}</p>
      </div>
    </section>
  );
}

export default BlogDetail;
