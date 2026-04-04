"use client";

import { useState } from "react";

export default function Home() {
  const contactEmail = "adhikariayush57@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo Request from ${formData.name} <${formData.email}>`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReply-To: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    // Optionally reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">
                ⚽ HelloFutsal
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Book a Demo
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Contact
              </a>
            </div>
            <a
              href="#demo"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Automate Your <span className="text-green-600">Hello Futsal</span>{" "}
            Management
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Replace messy paper registers with a digital system. Manage client
            registrations, court bookings, and payments — all from one
            dashboard.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#demo"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              Book a Demo →
            </a>
            <a
              href="#features"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500 flex-wrap">
            <span>✓ No more paper registers</span>
            <span>✓ Real-time availability</span>
            <span>✓ Client auto-registration</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything you need to run your futsal business
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Built specifically for court owners & admins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Auto Client Registration
              </h3>
              <p className="mt-2 text-gray-600">
                Clients register once – system stores their details. No more
                manual entry in registers.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Smart Booking Engine
              </h3>
              <p className="mt-2 text-gray-600">
                Real-time court availability, recurring bookings, and automated
                conflict prevention.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h3>
              <p className="mt-2 text-gray-600">
                View daily revenue, occupancy rates, and client history at a
                glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Automates */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            From manual register → fully automated
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-red-500 line-through mb-2">
                ❌ Paper register & manual receipts
              </div>
              <div className="text-green-600 font-bold">
                ✅ Digital client database with search
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-red-500 line-through mb-2">
                ❌ Double-booking conflicts
              </div>
              <div className="text-green-600 font-bold">
                ✅ Live court calendar & instant booking
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-red-500 line-through mb-2">
                ❌ Hard to track repeat customers
              </div>
              <div className="text-green-600 font-bold">
                ✅ Client history & loyalty stats
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-red-500 line-through mb-2">
                ❌ Manual payment tracking
              </div>
              <div className="text-green-600 font-bold">
                ✅ Online payment & automated invoices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo Section */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Book a free demo
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              See how HelloFutsal can transform your court management
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-lg p-6 md:p-8 border border-green-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message / court requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none bg-white"
                  placeholder="e.g., I have 2 courts, need help with client registration..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
              >
                Send Demo Request
              </button>
              {isSubmitted && (
                <p className="text-green-700 text-center mt-2 bg-green-100 py-2 rounded">
                  ✓ Request sent! Your email client will open. We'll get back to
                  you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Section (Mail & Phone) */}
      <section id="contact" className="py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Or reach us directly
          </h2>
          <p className="mt-2 text-gray-600">
            Prefer to talk? We're here to help
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={`mailto:${contactEmail}?subject=Demo%20Inquiry%20from%20Landing%20Page`}
              className="inline-flex items-center gap-2 bg-white border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-sm"
            >
              ✉️ {contactEmail}
            </a>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              📞 Call us: +977 9749865300
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            We respond within 24 hours | Mon–Sat, 9am–6pm
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-green-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 HelloFutsal – Automate your Hello Futsal management</p>
          <p className="mt-2">
            Built for admins who want to replace paper registers with smart
            automation
          </p>
        </div>
      </footer>
    </div>
  );
}
