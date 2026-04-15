import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hellofutsall.com"),
  title: {
    default: "HelloFutsall - Automate Your Futsal Court Management",
    template: "%s | HelloFutsall",
  },
  description:
    "Replace messy paper registers with HelloFutsall's digital court management system. Manage client registrations, court bookings, and payments from one dashboard.",
  keywords: [
    "futsal management",
    "court booking system",
    "futsal automation",
    "sports facility management",
    "court management software",
    "futsal booking",
  ],
  authors: [{ name: "HelloFutsall Team" }],
  creator: "HelloFutsall",
  publisher: "HelloFutsall",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hellofutsall.com",
    title: "HelloFutsall - Automate Your Futsal Court Management",
    description:
      "Replace messy paper registers with a digital system. Manage client registrations, court bookings, and payments — all from one dashboard.",
    siteName: "HelloFutsal",
    images: [
      {
        url: "/logo/2.png",
        width: 1200,
        height: 630,
        alt: "HelloFutsal - Futsal Court Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloFutsall - Automate Your Futsal Court Management",
    description:
      "Digital court management system for futsal businesses. Auto client registration, smart booking, and admin dashboard.",
    images: ["/logo/2.jpg"],
  },
  verification: {
    google: "google91119f0c6160eaf9",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://www.hellofutsall.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
