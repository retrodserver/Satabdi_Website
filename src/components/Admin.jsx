import React from "react";
import BookingHistory from "./BookingHistory";

function Admin() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6">Admin Portal</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Welcome to the admin dashboard.</p>
        <div className="flex flex-col gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Manage Rooms</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Bookings</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Settings</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <BookingHistory />
    </section>
  );
}

export default Admin;
