import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ dark, setDark }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 shadow transition ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Logo image removed */}
        <span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-600 drop-shadow-lg tracking-widest italic uppercase" style={{ letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(220,38,38,0.2)' }}>
          HOTEL SATABDI
        </span>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex gap-4 sm:gap-6 font-medium items-center ${
          dark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {[{ path: "/", label: "Home" }, { path: "/rooms", label: "Rooms" }, { path: "/services", label: "Services" }, { path: "/contact", label: "Contact" }].map(
          (link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1 rounded-full font-semibold transition ${
                location.pathname === link.path
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          )
        )}

        {/* Desktop Booking Button */}
        <button
          type="button"
          onClick={() => (window.location.href = "/rooms")}
          className="ml-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Bookings
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden gap-2">
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

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col gap-3 font-medium px-4 py-3 shadow-md md:hidden transition-transform transform ${
            menuOpen ? "scale-y-100" : "scale-y-0"
          } origin-top`}
        >
          {[{ path: "/", label: "Home" }, { path: "/rooms", label: "Rooms" }, { path: "/services", label: "Services" }, { path: "/contact", label: "Contact" }].map(
            (link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/rooms"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-bold shadow hover:scale-105 transition"
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
