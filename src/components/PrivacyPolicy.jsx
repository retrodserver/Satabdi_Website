import React from "react";

function PrivacyPolicy() {
  return (
    <section className="mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-blue-700 drop-shadow-md">
        Privacy Policy
      </h2>
      <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-4">
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information at <strong>Hotel Satabdi</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We collect information you provide during booking and inquiries.</li>
          <li>Your data is used only for reservation and communication purposes.</li>
          <li>We do not share your information with third parties except as required by law.</li>
          <li>Our website uses cookies to enhance your user experience.</li>
        </ul>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
