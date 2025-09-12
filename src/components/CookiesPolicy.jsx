import React from "react";
import Footer from "./Footer";

function CookiesPolicy() {
  return (
    <>
      <section className="mt-16 py-12 px-4 sm:px-8 lg:px-32 min-h-[60vh] bg-gradient-to-b from-red-50 to-red-100 text-gray-900">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-red-600 drop-shadow-md">
          Cookies & Privacy Policy
        </h2>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto text-lg sm:text-xl leading-relaxed space-y-6">
          <p>
            At <strong>Hotel Satabdi</strong>, we value your privacy and strive to
            provide the best online experience. This Cookies Policy explains how
            we use cookies and similar technologies to enhance your visit,
            personalize your experience, and ensure the security of your
            interactions.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2 text-red-700">
            What Are Cookies?
          </h3>
          <p>
            Cookies are small text files stored on your device that help us
            remember your preferences, analyze website traffic, and improve
            functionality.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2 text-red-700">
            How We Use Cookies
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To enhance your browsing experience and navigate the site
              efficiently.
            </li>
            <li>
              To remember your preferences, such as language or display settings.
            </li>
            <li>To analyze website traffic and improve our services.</li>
            <li>
              To ensure secure and safe interactions while booking or submitting
              forms.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-4 mb-2 text-red-700">
            Managing Cookies
          </h3>
          <p>
            You can control and manage cookies through your browser settings.
            You can choose to block certain cookies or delete them at any time.
            Please note that disabling cookies may affect some features of our
            website.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2 text-red-700">
            Your Consent
          </h3>
          <p>
            By continuing to use our website, you consent to the use of cookies
            in accordance with this policy. We encourage you to review this page
            regularly to stay informed about any updates.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2 text-red-700">
            Contact Us
          </h3>
          <p>
            If you have any questions or concerns about our cookies policy,
            please reach out to us at{" "}
            <strong>satabdiswain.julie@gmail.com</strong>. We are committed to
            ensuring your privacy and security.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CookiesPolicy;
