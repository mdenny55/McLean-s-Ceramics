"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gray-400">
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-12">
          Have questions about a piece? Want to inquire about custom work? Send me a message.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-6 rounded-sm text-green-700">
            <p className="font-light">Thank you! I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
