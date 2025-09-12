// BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.png";

const blogData = [
  {
    id: "1",
    title: "Blending Comfort with Tradition at Hotel Satabdi",
    date: "Sep 5, 2025",
    read: "08 min read",
    author: "Admin",
    img: blog1,
    content: `
At Hotel Satabdi, we believe that true hospitality is a balance of modern luxury and timeless tradition. 
Our elegantly designed rooms and suites provide comfort and style, while our personalized services ensure each guest feels special.

From the gourmet dining options to our state-of-the-art spa and fitness facilities, every detail is thoughtfully curated. 
We also prioritize sustainable practices to make sure your stay is environmentally responsible.

Whether you are traveling for leisure or business, Hotel Satabdi is committed to offering a memorable experience for all our guests. 
We focus on creating an atmosphere that blends luxury, culture, and impeccable service.
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
Our philosophy is simple—people come first. Every staff member at Hotel Satabdi is trained to anticipate your needs and provide assistance proactively.

We believe in building lasting relationships with our guests by delivering exceptional service that goes beyond expectations. 
Our team listens carefully to feedback, continuously improving every aspect of your stay.

Hospitality is not just a service, it’s an experience. 
By combining cultural authenticity with modern convenience, we ensure that every guest feels at home.
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
It’s the little things that make a big difference at Hotel Satabdi. From the perfectly folded towels to the curated mini-bar selection, every detail matters.

Our rooms feature high-quality linens, ergonomic furniture, and ambient lighting designed to enhance comfort. 
Even our in-room amenities are chosen to maximize convenience and luxury.

Attention to detail extends beyond rooms. 
From restaurant presentation to concierge services, our goal is to make every aspect seamless and enjoyable.
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
Trust is the foundation of hospitality. At Hotel Satabdi, we maintain transparency in our policies, pricing, and communications.

Guests are informed clearly about room rates, amenities, and any additional charges upfront. 
Our team ensures that expectations are managed effectively so there are no surprises during your stay.

Transparency extends to our sustainability practices, safety measures, and service commitments. 
We believe that honesty and integrity are key to earning long-term loyalty from our guests.
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
      <section className="mt-16 py-10 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-red-50 via-red-100 to-red-200 dark:from-gray-900 dark:to-gray-800 min-h-screen relative overflow-hidden">
        {/* Decorative background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,99,99,0.05), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255,150,150,0.08), transparent 50%)
            `,
            zIndex: 0,
          }}
        ></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Main Blog Content */}
          <article className="flex-1 max-w-3xl mx-auto lg:mx-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 hover:shadow-3xl transition-all duration-500">
            <div className="mb-6">
              <Link
                to="/blog"
                className="text-red-700 dark:text-red-300 hover:underline text-sm font-medium"
              >
                ← Back to Blogs
              </Link>
            </div>

            <img
              src={blog.img}
              alt={`Cover for ${blog.title}`}
              className="w-full h-auto object-cover mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-700 dark:text-red-300 mb-4 leading-snug">
              {blog.title}
            </h1>

            {/* Meta info */}
            <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-8 flex flex-wrap gap-3">
              <span className="truncate">{blog.date}</span>
              <span className="truncate">• {blog.read}</span>
              <span className="truncate">• ✍️ {blog.author}</span>
            </div>

            <div className="text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed whitespace-pre-line">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-red-700 dark:first-letter:text-red-300 first-letter:mr-2 first-letter:float-left">
                {blog.content.trim()}
              </p>
            </div>
          </article>

          {/* Sidebar: Other Blogs */}
          <aside className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-semibold mb-6 text-red-700 dark:text-red-300">
              Other Blogs
            </h2>
            <div className="flex flex-col gap-6">
              {otherBlogs.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.id}`}
                  className="flex gap-4 items-center bg-white/70 dark:bg-gray-800/70 p-4 rounded-2xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <img
                    src={b.img}
                    alt={`Thumbnail for ${b.title}`}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-red-700 dark:text-red-300 text-sm sm:text-base line-clamp-2">
                      {b.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex flex-wrap gap-1">
                      <span className="truncate">{b.date}</span> •{" "}
                      <span className="truncate">{b.read}</span>
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
