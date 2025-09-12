import React from "react";
import Footer from "./Footer";

function PrivacyPolicy() {
  return (
    <>
      <section
        className="relative mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] overflow-hidden"
      >
        {/* Decorative background gradients like About */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 99, 99, 0.08), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.1), transparent 50%)
            `,
          }}
        ></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-red-700 drop-shadow-md">
            Privacy Policy
          </h2>

          <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Your privacy is very important to us. This policy explains how <strong>Hotel Satabdi</strong> collects, uses, and safeguards your personal information when you use our services or visit our website.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>We collect information you provide when booking rooms, making inquiries, or subscribing to newsletters.</li>
              <li>Your data is used solely to process reservations, communicate with you, and improve our services.</li>
              <li>We do not sell, trade, or rent your personal information to third parties without your consent, except as required by law.</li>
              <li>We implement industry-standard security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</li>
              <li>Cookies and similar technologies are used on our website to enhance your browsing experience and analyze traffic patterns.</li>
              <li>You can manage your cookie preferences or opt-out of certain tracking through your browser settings.</li>
              <li>By using our website, you consent to the terms of this privacy policy.</li>
            </ul>

            <p>
              For any questions regarding our Privacy Policy or how we handle your data, please <a href="/contact" className="text-red-700 underline hover:text-red-900">contact us</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
