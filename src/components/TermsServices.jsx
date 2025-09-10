import React from "react";

function TermsServices() {
  return (
    <section className="mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-blue-700 drop-shadow-md">
        Terms & Services
      </h2>
      <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-4">
        <p>
          Welcome to <strong>Hotel Satabdi</strong>. By using our website and services, you agree to the following terms and conditions. Please read them carefully before proceeding.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>All bookings are subject to availability and confirmation.</li>
          <li>Guests must comply with hotel policies during their stay.</li>
          <li>Payment terms, cancellation, and refund policies apply as stated at booking.</li>
          <li>We reserve the right to update these terms at any time.</li>
        </ul>
      </div>
    </section>
  );
}

export default TermsServices;
