import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // TODO: Integrate with email marketing service (e.g., Mailchimp, ConvertKit)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-700 font-semibold">Thank you for subscribing!</p>
        <p className="text-green-600 text-sm mt-1">You'll receive updates and offers soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-lg shadow p-4 max-w-md mx-auto mt-8">
      <input
        type="email"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Enter your email for updates"
        value={email}
        onChange={e => setEmail(e.target.value)}
        aria-label="Email address"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Subscribe
      </button>
      {error && <span className="text-red-500 text-xs mt-1 w-full">{error}</span>}
    </form>
  );
};

export default NewsletterSignup;
