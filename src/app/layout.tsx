import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavAndFootWrapper from "@/lib/NavAndFootWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawana Lake Camping | Best Tents, Bonfire & Lakeside Campsite",
  description:
    "Experience the best Pawana Lake camping with lakeside tents, bonfire, BBQ, music, and starry nights. Safe & affordable getaway near Pune and Lonavala.",
  keywords: [
    // 🔹 Primary High-Traffic Keywords
    "Pawana Lake camping",
    "camping near Pawna Lake",
    "lakeside camping Maharashtra",
    "Pune camping",
    "Lonavala camping",
    "camping Maharashtra",
    "tent stay near Pune",
    "weekend camping Pune",

    // 🔹 Low-Traffic (Long-Tail & Localized)
    "Pawana Lake campings",
    "Pawana Lake campsite",
    "Pawna lake tents",
    "Pawna lake campsite",
    "best Pawna Lake camps",
    "affordable camping Pawna lake",
    "book tent near Pawna lake",
    "safe camping for couples near Pune",
    "family camping near Lonavala",
    "Pawna lake camping for groups",
    "camping near Pawna lake for couples",
    "overnight camping Pawna Lake",
    "campfire camping Pawna Lake",
    "lakeside tent Pawna Lake booking",
  ],
  metadataBase: new URL("https://www.pawanalakecampsite.in"),
  alternates: {
    canonical: "https://www.pawanalakecampsite.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pawana Lake Camping – Lakeside Tents & Nightlife Near Pune",
    description:
      "Book the best camping experience near Pawana Lake with BBQ, sunset views, tents, music, and bonfire. Rated top by couples and families.",
    url: "https://www.pawanalakecampsite.in",
    siteName: "Pawana Lake Camping",
    images: [
      {
        url: "https://pawanalakecampsite.in/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Lakeside tents at Pawana Lake with bonfire and BBQ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawana Lake Camping | Lakeside Tents & Bonfire Getaway",
    description:
      "Affordable and safe lakeside camping near Pawana Lake with BBQ, tents, bonfire & fun games. Book your weekend escape now!",
    images: ["https://pawanalakecampsite.in/hero-1.webp"],
    site: "@yourtwitterhandle", // optional
  },
  // themeColor: "#10B981", // Tailwind's green-500
  other: {
    whatsapp: "https://wa.me/919373526309", // WhatsApp contact link
    // instagram: "https://instagram.com/yourinstagramhandle", // Replace with your Instagram handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11015787000"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11015787000');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavAndFootWrapper>{children}</NavAndFootWrapper>
      </body>
    </html>
  );
}
