import React from "react";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";
import menu5 from "../assets/menu5.jpg";
import menu6 from "../assets/menu6.jpg";
import menu7 from "../assets/menu7.jpg";
import menu8 from "../assets/menu8.jpg";
import menu9 from "../assets/menu9.jpg";
import Footer from "./Footer";

const menuPhotos = [
  { img: menu1, name: "", price: "" },
  { img: menu2, name: "", price: "" },
  { img: menu3, name: "", price: "" },
  { img: menu4, name: "", price: "" },
  { img: menu5, name: "", price: "" },
  { img: menu6, name: "", price: "" },
  { img: menu7, name: "", price: "" },
  { img: menu8, name: "", price: "" },
  { img: menu9, name: "", price: "" },
];

function Menu() {
  return (
    <>
      <section className="relative mt-16 py-16 px-4 sm:px-8 lg:px-32 overflow-hidden">
        {/* Background gradients */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.05), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.08), transparent 50%)
            `,
          }}
        ></div>

        <div className="relative z-10">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 text-center text-red-700 drop-shadow-lg">
            Our Delicious Menu
          </h2>

          {/* Masonry Photo Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {menuPhotos.map((item, idx) => (
              <div
                key={idx}
                className="relative w-full mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-lg border border-red-200 hover:shadow-2xl transform transition duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full object-cover rounded-3xl h-72 sm:h-80 md:h-96"
                />
                {/* Gradient Overlay with Name & Price */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6 rounded-3xl">
                  <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg text-center">
                    {item.name}
                  </span>
                  <span className="text-lg sm:text-xl text-red-400 font-semibold mt-1 drop-shadow-md">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
