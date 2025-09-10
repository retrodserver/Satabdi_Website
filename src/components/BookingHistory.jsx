import React, { useState } from "react";

const initialBookings = [
  { id: 1, guest: "John Doe", room: "Exclusive Deluxe", checkin: "2025-09-12", checkout: "2025-09-15", amount: 2070, paid: 1000 },
  { id: 2, guest: "Priya Sharma", room: "Premier Suite", checkin: "2025-09-14", checkout: "2025-09-16", amount: 1700, paid: 1700 },
  { id: 3, guest: "Michael Lee", room: "Family Suite", checkin: "2025-09-10", checkout: "2025-09-13", amount: 4500, paid: 3000 },
];

function BookingHistory() {
  const [bookings] = useState(initialBookings);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Booking History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-100 dark:bg-gray-700">
            <th className="p-2">Guest</th>
            <th className="p-2">Room</th>
            <th className="p-2">Check-in</th>
            <th className="p-2">Check-out</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Paid</th>
            <th className="p-2">Pending</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">{b.guest}</td>
              <td className="p-2">{b.room}</td>
              <td className="p-2">{b.checkin}</td>
              <td className="p-2">{b.checkout}</td>
              <td className="p-2">${b.amount}</td>
              <td className="p-2">${b.paid}</td>
              <td className="p-2 text-red-600 dark:text-red-400 font-bold">${b.amount - b.paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingHistory;
