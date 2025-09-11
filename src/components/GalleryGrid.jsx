import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import gallery from "../assets/gallery.webp";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery8 from "../assets/gallery8.webp";
import gallery9 from "../assets/gallery9.webp";
import gallery10 from "../assets/gallery10.webp";
import gallery11 from "../assets/gallery11.webp";
import gallery13 from "../assets/gallery13.webp";
import gallery14 from "../assets/gallery14.webp";
import gallery15 from "../assets/gallery15.webp";

function GalleryGrid() {
  const [loading, setLoading] = useState(true);

  const galleryImages = [
    gallery, gallery1, gallery2, gallery3, gallery4, gallery5,
    gallery6, gallery7, gallery8, gallery9, gallery10, gallery11,
    gallery13, gallery14, gallery15,
  ];

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg relative"
            >
              {loading ? (
                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 animate-pulse bg-gray-300 rounded-lg"></div>
              ) : (
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GalleryGrid;
