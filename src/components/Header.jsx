import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header({ dark, setDark }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/rooms", label: "Rooms" },
    { path: "/services", label: "Services" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 transition ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Logo and Site Name */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <img
          src={logo}
          alt="Hotel Satabdi Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain "
        />
        {/* <span className="font-extrabold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-700 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-widest italic truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
        </span> */}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-3 sm:gap-4 font-medium items-center flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-3 py-1 rounded-full font-semibold transition text-sm sm:text-base ${
              location.pathname === link.path
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => (window.location.href = "/rooms")}
          className="ml-2 sm:ml-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform text-sm sm:text-base"
        >
          Bookings
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden">
        <button
          className="p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col gap-2 font-medium px-4 py-3 shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-700 transition text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/rooms"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Bookings
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
