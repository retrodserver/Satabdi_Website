// Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../assets/logo1.png";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/rooms", label: "Rooms" },
    { path: "/services", label: "Services" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[#ffc6c6] shadow-md transition-all bg-white"
      style={{
        background: "linear-gradient(90deg, rgba(255,241,241,0.9) 0%, rgba(255,230,230,0.9) 50%, rgba(255,241,241,0.9) 100%)",
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 w-full">
        {/* Logo left */}
        <div className="flex items-center">
          <img
            src={logo1}
            alt="Hotel Satabdi Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 rounded-full text-sm sm:text-base transition-all ${
                location.pathname === link.path
                  ? "text-[#ff7b7b] font-semibold before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-1 before:rounded-full before:bg-gradient-to-r before:from-[#ffb3b3] before:to-[#ffc6c6]"
                  : "text-gray-800 hover:text-[#ff7b7b] hover:before:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Bookings Button (desktop only) */}
          <Link
            to="/rooms"
            className="bg-gradient-to-r from-[#ffb3b3] to-[#ffc6c6] text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md"
          >
            Bookings
          </Link>
        </nav>
        {/* Hamburger for mobile only */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Hamburger Navigation (mobile only) */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 w-full bg-gradient-to-r from-[rgba(255,179,179,0.97)] via-[rgba(255,198,198,0.97)] to-[rgba(255,179,179,0.97)] shadow-lg z-50"
        >
          <nav className="flex flex-col gap-3 font-medium p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-gray-800 hover:bg-[rgba(255,230,230,0.9)] hover:text-[#ff7b7b] transition ${location.pathname === link.path ? 'font-bold text-[#ff7b7b]' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Bookings Button (mobile only) */}
            <Link
              to="/rooms"
              className="bg-gradient-to-r from-[#ffb3b3] to-[#ffc6c6] text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Bookings
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
