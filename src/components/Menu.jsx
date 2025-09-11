import React, { useState } from "react";
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

const initialMenu = [
  { name: "Paneer Butter Masala", price: "₹220" },
  { name: "Chicken Biryani", price: "₹250" },
  { name: "Veg Fried Rice", price: "₹180" },
  { name: "Tandoori Roti", price: "₹30" },
];

function Menu() {
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  const handleChange = (e) =>
    setNewItem({ ...newItem, [e.target.name]: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, newItem]);
      setNewItem({ name: "", price: "" });
    }
  };

  const menuPhotos = [
    { img: menu1, label: "Paneer Butter Masala" },
    { img: menu2, label: "Chicken Biryani" },
    { img: menu3, label: "Veg Fried Rice" },
    { img: menu4, label: "Tandoori Roti" },
    { img: menu5, label: "Dal Makhani" },
    { img: menu6, label: "Fish Curry" },
    { img: menu7, label: "Mushroom Masala" },
    { img: menu8, label: "Naan Bread" },
    { img: menu9, label: "Dessert Platter" },
  ];

  return (
    <>
      <section className="mt-16 py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-blue-900">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-blue-900 dark:text-blue-200">
          Our Delicious Menu
        </h2>

        {/* Masonry Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {menuPhotos.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl">
                <span className="text-white text-lg sm:text-xl font-bold text-center px-4">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Menu Item Form */}
        <div className="max-w-2xl mx-auto mt-12">
          {/* ...existing code for form and menu list... */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
