import React from "react";

function PrivacyPolicy() {
  return (
    <section className="mt-16 py-10 px-4 sm:px-8 lg:px-32 min-h-[60vh] bg-white text-blue-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information at Hotel Satabdi.</p>
        <ul className="list-disc pl-6 mt-4">
          <li>We collect information you provide during booking and inquiries.</li>
          <li>Your data is used only for reservation and communication purposes.</li>
          <li>We do not share your information with third parties except as required by law.</li>
          <li>Our website uses cookies for a better user experience.</li>
        </ul>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
