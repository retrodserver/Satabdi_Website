import React, { useState } from "react";
import Footer from "./Footer";
import mainview from "../assets/mainview.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.webp";
import gallery7 from "../assets/gallery7.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";

function GalleryGrid() {
  const [loadedImages, setLoadedImages] = useState({});
  const galleryImages = [
    mainview, gallery1, gallery2, gallery3, gallery4, gallery5,
    gallery6, gallery7, gallery9, gallery10, gallery11,
    gallery13, gallery14,
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section className="pt-32 relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
        {/* Decorative background gradients like About */}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-red-700 drop-shadow-md">
            Our Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-red-200 dark:border-red-600 rounded-3xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
              >
                {!loadedImages[idx] && (
                  <div className="w-full h-64 sm:h-72 md:h-80 lg:h-80 bg-red-200 dark:bg-red-800 animate-pulse rounded-2xl mb-4"></div>
                )}
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  onLoad={() => handleImageLoad(idx)}
                  className={`w-full h-64 sm:h-72 md:h-80 lg:h-80 object-cover rounded-2xl transition-opacity duration-700 ${
                    loadedImages[idx] ? "opacity-100" : "opacity-0"
                  } mb-4`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GalleryGrid;
