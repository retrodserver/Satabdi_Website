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
    { img: menu1, label: "" },
    { img: menu2, label: "" },
    { img: menu3, label: "" },
    { img: menu4, label: "" },
    { img: menu5, label: "" },
    { img: menu6, label: "" },
    { img: menu7, label: "" },
    { img: menu8, label: "" },
    { img: menu9, label: "" },
  ];

  return (
    <>
      <section className="mt-16 py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-blue-900">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-gray-100">
          Our Delicious Menu
        </h2>

        {/* Masonry Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {menuPhotos.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
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
        <div>
          {/* <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
            Add a New Menu Item
          </h3> */}
          {/* <form
            onSubmit={handleAdd}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          >
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              placeholder="Dish Name"
              className="w-full sm:flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <input
              type="text"
              name="price"
              value={newItem.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full sm:w-40 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Add
            </button>
          </form> */}

          {/* Menu List */}
          {/* <ul className="mt-8 space-y-4">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {item.name}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.price}
                </span>
              </li>
            ))}
          </ul> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
