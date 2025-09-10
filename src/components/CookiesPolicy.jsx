import React from "react";
import Footer from "./Footer";

function CookiesPolicy() {
  return (
    <>
      <section className="mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-blue-700 drop-shadow-md">
          Cookies Policy
        </h2>
        <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-4">
          <p>
            This Cookies Policy explains how <strong>Hotel Satabdi</strong> uses cookies and similar technologies on our website.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cookies are used to improve site functionality and enhance user experience.</li>
            <li>You can manage or disable cookies in your browser settings at any time.</li>
            <li>By using our website, you consent to our use of cookies as described in this policy.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CookiesPolicy;
