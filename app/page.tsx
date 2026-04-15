"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const contactEmail = "adhikariayush57@gmail.com";
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo Request from ${formData.name} <${formData.email}>`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReply-To: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Color scheme
  const goldDark = "#d3a222"; // For dark mode
  const goldLight = "#b8860b"; // DarkGoldenrod for light mode
  const goldColor = isDarkMode ? goldDark : goldLight;
  const hoverGoldDark = "#c29320";
  const hoverGoldLight = "#9a7209";
  const hoverGold = isDarkMode ? hoverGoldDark : hoverGoldLight;

  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HelloFutsal",
    description: "Futsal court management and booking system",
    url: "https://www.hellofutsall.com",
    logo: "https://www.hellofutsall.com/logo/2.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-9749865300",
      contactType: "Customer Service",
      email: contactEmail,
      availableLanguage: "en",
    },
    sameAs: [
      "https://facebook.com/hellofutsal",
      "https://twitter.com/hellofutsal",
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HelloFutsal",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NPR",
    },
    description:
      "Automate your futsal court management with client registration, booking engine, and admin dashboard",
    operatingSystem: "Web Browser",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
        } font-sans min-h-screen transition-colors duration-300`}
      >
        {/* Navigation */}
        <nav
          className={`${
            isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
          } shadow-lg sticky top-0 z-50 border-b transition-colors duration-300`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-[200px] aspect-square  flex items-center relative mt-5">
                  <Image
                    src="/logo/2.png"
                    alt="Hello Futsall logo"
                    fill
                    priority
                    sizes="auto"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="hidden md:flex space-x-8 items-center">
                <a
                  href="#features"
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } transition font-medium hover:opacity-80`}
                  style={{
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = goldColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDarkMode
                      ? "#d1d5db"
                      : "#374151")
                  }
                  aria-label="View features"
                >
                  Features
                </a>
                <a
                  href="#demo"
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } transition font-medium hover:opacity-80`}
                  style={{
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = goldColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDarkMode
                      ? "#d1d5db"
                      : "#374151")
                  }
                  aria-label="Book a demo"
                >
                  Demo
                </a>
                <a
                  href="#contact"
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } transition font-medium hover:opacity-80`}
                  style={{
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = goldColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDarkMode
                      ? "#d1d5db"
                      : "#374151")
                  }
                  aria-label="Contact us"
                >
                  Contact
                </a>
                {/* <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  } hover:bg-opacity-80 transition`}
                  style={{ color: goldColor }}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? "☀️" : "🌙"}
                </button> */}
              </div>
              <div>
                <a
                  href="#demo"
                  className="px-6 py-2 rounded-lg transition shadow-lg font-semibold text-black"
                  style={{ backgroundColor: goldColor }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = hoverGold)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = goldColor)
                  }
                  aria-label="Get started with HelloFutsal"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className={`py-20 px-4 ${
            isDarkMode
              ? "bg-gradient-to-br from-black via-gray-900 to-black"
              : "bg-gradient-to-br from-white via-gray-50 to-white"
          }`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Automate Your{" "}
              <span style={{ color: goldColor }}>Futsal Court</span> Management
            </h1>
            <p
              className={`mt-6 text-lg md:text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              Replace messy paper registers with a digital system. Manage client
              registrations, court bookings, and payments — all from one
              dashboard.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-3 rounded-lg text-lg font-semibold transition shadow-lg text-black"
                style={{ backgroundColor: goldColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = hoverGold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = goldColor)
                }
                aria-label="Book a free demo"
              >
                Book a Free Demo
              </a>
              <a
                href="#features"
                className={`px-8 py-3 rounded-lg text-lg font-semibold transition shadow-lg border-2 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                style={{ borderColor: goldColor, color: goldColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode
                    ? "#1f2937"
                    : "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode
                    ? "#1f2937"
                    : "#ffffff";
                }}
                aria-label="Learn more about features"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className={`py-20 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Everything You Need in{" "}
              <span style={{ color: goldColor }}>One Platform</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">📋</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Client Registration
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Auto-register clients with phone numbers. No more manual entry
                  or lost records.
                </p>
              </article>

              {/* Feature 2 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">🏟️</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Court Booking Engine
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Let clients book slots online. Real-time availability and
                  instant confirmations.
                </p>
              </article>

              {/* Feature 3 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">💳</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Payment Tracking
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Track payments, generate invoices, and monitor revenue
                  effortlessly.
                </p>
              </article>

              {/* Feature 4 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">📊</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Admin Dashboard
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Get insights into bookings, revenue, and client activity from
                  one central hub.
                </p>
              </article>

              {/* Feature 5 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">🔔</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Automated Reminders
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Send SMS/email reminders to clients before their booking
                  slots.
                </p>
              </article>

              {/* Feature 6 */}
              <article
                className={`${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                } p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-4">📱</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: goldColor }}
                >
                  Mobile Friendly
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Access your dashboard from any device - phone, tablet, or
                  computer.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* How It Automates */}
        <section
          className={`py-16 px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How <span style={{ color: goldColor }}>HelloFutsal</span>{" "}
              Automates Your Work
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div
                className={`${
                  isDarkMode
                    ? "bg-black border border-gray-800"
                    : "bg-white border border-gray-200"
                } p-6 rounded-lg shadow-lg transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-3xl mb-3">1️⃣</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: goldColor }}
                >
                  Clients Book Online
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Your clients choose their slot and book instantly from their
                  phone.
                </p>
              </div>
              <div
                className={`${
                  isDarkMode
                    ? "bg-black border border-gray-800"
                    : "bg-white border border-gray-200"
                } p-6 rounded-lg shadow-lg transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-3xl mb-3">2️⃣</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: goldColor }}
                >
                  Auto Registration
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Client details are automatically saved in your system.
                </p>
              </div>
              <div
                className={`${
                  isDarkMode
                    ? "bg-black border border-gray-800"
                    : "bg-white border border-gray-200"
                } p-6 rounded-lg shadow-lg transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-3xl mb-3">3️⃣</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: goldColor }}
                >
                  You Manage Everything
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  View bookings, payments, and analytics from your admin
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section
          id="demo"
          className={`py-20 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Ready to Automate Your{" "}
              <span style={{ color: goldColor }}>Futsal Business</span>?
            </h2>
            <p
              className={`text-center ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } mb-10 text-lg`}
            >
              Book a free demo and see how HelloFutsal can transform your court
              management.
            </p>

            <form
              onSubmit={handleSubmit}
              className={`${
                isDarkMode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-gray-50 border border-gray-200"
              } p-8 rounded-xl shadow-xl max-w-2xl mx-auto`}
              aria-label="Demo request form"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } font-semibold mb-2`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    isDarkMode
                      ? "bg-black border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-lg focus:outline-none focus:ring-2`}
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${goldColor}33`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = isDarkMode
                      ? "#374151"
                      : "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } font-semibold mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    isDarkMode
                      ? "bg-black border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-lg focus:outline-none focus:ring-2`}
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${goldColor}33`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = isDarkMode
                      ? "#374151"
                      : "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="you@example.com"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className={`block ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } font-semibold mb-2`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    isDarkMode
                      ? "bg-black border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-lg focus:outline-none focus:ring-2`}
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${goldColor}33`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = isDarkMode
                      ? "#374151"
                      : "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="+977 9812345678"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } font-semibold mb-2`}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 ${
                    isDarkMode
                      ? "bg-black border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-lg focus:outline-none focus:ring-2`}
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${goldColor}33`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = isDarkMode
                      ? "#374151"
                      : "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="Tell us about your futsal business..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-lg font-semibold transition shadow-lg text-black"
                style={{ backgroundColor: goldColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = hoverGold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = goldColor)
                }
                aria-label="Submit demo request"
              >
                Request Demo
              </button>

              {isSubmitted && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center`}
                  style={{
                    backgroundColor: isDarkMode ? "#1f2937" : "#f0fdf4",
                    color: goldColor,
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  ✅ Thank you! We&apos;ll contact you soon.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Direct Contact Section */}
        <section
          id="contact"
          className={`py-16 px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span style={{ color: goldColor }}>Touch</span>
            </h2>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } text-lg mb-8`}
            >
              Have questions? Reach out to us directly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div
                className={`${
                  isDarkMode
                    ? "bg-black border border-gray-800"
                    : "bg-white border border-gray-200"
                } p-6 rounded-lg shadow-lg transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-3">📧</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: goldColor }}
                >
                  Email Us
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-lg transition`}
                  style={{
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = goldColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDarkMode
                      ? "#d1d5db"
                      : "#4b5563")
                  }
                  aria-label="Email HelloFutsal"
                >
                  {contactEmail}
                </a>
              </div>

              <div
                className={`${
                  isDarkMode
                    ? "bg-black border border-gray-800"
                    : "bg-white border border-gray-200"
                } p-6 rounded-lg shadow-lg transition`}
                style={{
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = goldColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDarkMode
                    ? "#1f2937"
                    : "#e5e7eb")
                }
              >
                <div className="text-4xl mb-3">📞</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: goldColor }}
                >
                  Call Us
                </h3>
                <a
                  href="tel:+9779749865300"
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-lg transition`}
                  style={{
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = goldColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDarkMode
                      ? "#d1d5db"
                      : "#4b5563")
                  }
                  aria-label="Call HelloFutsal"
                >
                  +977 9749865300
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`${
            isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
          } border-t py-8 px-4`}
        >
          <div className="max-w-6xl mx-auto text-center text-sm">
            <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              &copy; 2026 <span style={{ color: goldColor }}>HelloFutsal</span>.
              All rights reserved.
            </p>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Automate your futsal court management with ease.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
