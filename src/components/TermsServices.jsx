import React from "react";
import Footer from "./Footer";

function TermsServices() {
  return (
    <>
      <section className="relative mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] overflow-hidden">
        {/* Decorative background like About */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#fff1f1", // soft light pinkish background
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
            `,
          }}
        ></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-red-700 drop-shadow-md">
            Terms & Services
          </h2>
          <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TermsServices;
