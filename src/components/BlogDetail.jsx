import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const blogData = [
  {
    id: "1",
    title: "Blending Comfort with Tradition at Hotel Satabdi",
    date: "Sep 5, 2025",
    read: "08 min read",
    author: "Admin",
    img: blog1,
    content: `
At Hotel Satabdi, we believe that true hospitality is a balance of modern luxury and timeless tradition. From the moment you step into our lobby, you are greeted with the warmth of local culture blended seamlessly with contemporary elegance.

Every corner of the hotel reflects the essence of tradition while ensuring comfort through state-of-the-art facilities. Whether it’s savoring authentic regional cuisines or enjoying our thoughtfully designed rooms, your stay with us will always feel like a homecoming wrapped in luxury.

👉 Why choose Hotel Satabdi? Because we don’t just offer rooms, we offer experiences rooted in tradition with a modern touch.
    `,
  },
  {
    id: "2",
    title: "A People-Centered Approach to Hospitality",
    date: "Sep 6, 2025",
    read: "05 min read",
    author: "Hotel Satabdi Team",
    img: blog2,
    content: `
At Hotel Satabdi, our philosophy is simple—people come first. Every guest is unique, and we go the extra mile to ensure that your needs are not just met, but anticipated.

From personalized check-ins to custom meal plans, our staff ensures that every detail of your stay is tailored to your comfort. Our concierge services are always available to assist you in exploring the city, recommending cultural gems, or arranging special surprises for your loved ones.

Hospitality isn’t just about services—it’s about heartfelt connections. And that’s what makes Hotel Satabdi truly stand apart.
    `,
  },
  {
    id: "3",
    title: "Attention to Details Makes the Difference",
    date: "Sep 7, 2025",
    read: "07 min read",
    author: "Guest Relations",
    img: blog3,
    content: `
It’s the little things that make big differences. At Hotel Satabdi, we pride ourselves on attention to detail—because luxury lies in the finer touches.

From the placement of fresh flowers in your room to the curated dining experiences designed for every palate, our team ensures perfection at every step. Even the smallest aspects, like pillow preferences or dietary choices, are carefully noted to provide you with a seamless and delightful stay.

When you choose Hotel Satabdi, you choose hospitality that notices the little things—so your big moments can be unforgettable.
    `,
  },
  {
    id: "4",
    title: "Transparency Builds Trust at Hotel Satabdi",
    date: "Sep 8, 2025",
    read: "06 min read",
    author: "Management",
    img: blog4,
    content: `
Trust is the foundation of hospitality, and at Hotel Satabdi, we believe in complete transparency.

Our guests enjoy clear communication on pricing, services, and policies with no hidden surprises. Whether it’s our online booking, room facilities, or dining menus, everything is straightforward and designed to help you make the best choices for your stay.

This commitment to transparency not only builds trust but also ensures that your experience with us is stress-free, fair, and filled with peace of mind.

At Hotel Satabdi, honesty isn’t just a policy—it’s our promise.
    `,
  },
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-400">
        Blog not found.
      </div>
    );
  }

  const otherBlogs = blogData.filter((b) => b.id !== id);

  return (
    <>
      <section className="mt-16 py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Main Blog Content */}
          <article className="flex-1 max-w-3xl mx-auto lg:mx-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Back button */}
            <div className="mb-6">
              <Link
                to="/blog"
                className="text-blue-600 hover:underline text-sm"
              >
                ← Back to Blogs
              </Link>
            </div>

            {/* Blog Image */}
            <img
              src={blog.img}
              alt={`Cover for ${blog.title}`}
              className="w-full h-auto object-cover mb-6 rounded-lg shadow"
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
            <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed whitespace-pre-line">
              {blog.content.trim()}
            </div>
          </article>

          {/* Sidebar: Other Blogs */}
          <aside className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
              Other Blogs
            </h2>
            <div className="flex flex-col gap-6">
              {otherBlogs.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.id}`}
                  className="flex gap-4 items-center hover:bg-blue-50 dark:hover:bg-gray-800 p-3 rounded-lg transition"
                >
                  <img
                    src={b.img}
                    alt={`Thumbnail for ${b.title}`}
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

      <Footer />
    </>
  );
}

export default BlogDetail;
