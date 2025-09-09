import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 shadow transition ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-4 sm:gap-6">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 object-cover drop-shadow-lg rounded-full"
        />
        <span className="font-extrabold text-3xl bg-gradient-to-r from-blue-700 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg tracking-widest">
          Rotal
        </span>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex flex-wrap gap-4 sm:gap-6 font-medium ${
          dark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <Link
          to="/"
          className={`px-3 py-1 rounded-full font-semibold transition ${
            dark
              ? "hover:bg-gray-800 hover:text-blue-400"
              : "hover:bg-blue-100 hover:text-blue-700"
          }`}
        >
          Home
        </Link>
        <Link
          to="/rooms"
          className={`px-3 py-1 rounded-full font-semibold transition ${
            dark
              ? "hover:bg-gray-800 hover:text-blue-400"
              : "hover:bg-blue-100 hover:text-blue-700"
          }`}
        >
          Rooms
        </Link>
        <Link
          to="/services"
          className={`px-3 py-1 rounded-full font-semibold transition ${
            dark
              ? "hover:bg-gray-800 hover:text-blue-400"
              : "hover:bg-blue-100 hover:text-blue-700"
          }`}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`px-3 py-1 rounded-full font-semibold transition ${
            dark
              ? "hover:bg-gray-800 hover:text-blue-400"
              : "hover:bg-blue-100 hover:text-blue-700"
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Dark Mode Button */}
        <button
          onClick={() => setDark((d) => !d)}
          className={`px-4 py-2 rounded-full font-bold shadow-lg transition border flex items-center justify-center ${
            dark
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white text-gray-900 border-blue-300"
          }`}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.95l-.71-.71M21 12h-1M4 12H3m16.24-6.24l-.71.71M6.34 4.05l-.71-.71"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
              />
            </svg>
          )}
        </button>

        {/* Booking Button (hidden on small screens) */}
        <Link
          to="/rooms"
          className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition"
        >
          Bookings
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav
          className={`w-full flex flex-col gap-4 mt-4 md:hidden font-medium ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/rooms" className="hover:text-blue-500">
            Rooms
          </Link>
          <Link to="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link
            to="/rooms"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-bold shadow hover:scale-105 transition"
          >
            Bookings
          </Link>
        </nav>
      )}
    </header>
  );
}
export default Header