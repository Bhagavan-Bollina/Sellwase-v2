import React from 'react';

export default function Legal() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div id="privacy" className="mb-20">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including your name, email address, phone number, and university affiliation.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure a safe community marketplace.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We share your information only with your consent or as necessary to provide our services.
              </p>
            </div>
          </div>

          <div id="terms" className="mb-20">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Sellwase, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">
                Users must not engage in any fraudulent activity, harassment, or actions that violate any applicable laws or regulations.
              </p>
            </div>
          </div>

          <div id="cookies" className="mb-20">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device when you visit our website or use our app.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies to understand how you use our services, remember your preferences, and improve your experience.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}