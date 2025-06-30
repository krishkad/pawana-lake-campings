"use client";
import { AboutSection } from "@/components/sections/AboutSection";
import { DayTimelineSection } from "@/components/sections/DayTimelineSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import Gallery from "@/components/sections/GallerySection";
import Booking from "@/components/sections/BookingsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { CampOptionsSection } from "@/components/sections/CampOptionsSection";
import Contact from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import Testimonials from "@/components/sections/TestimonialsSection";
import Navigation from "@/components/sections/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Head>
        <title>Pawana Lake Camping | Best Lakeside Tents & Campsites</title>
        <meta
          name="description"
          content="Book the best lakeside Pawana Lake camping experience with tents, bonfire, BBQ, and stunning views. Safe, affordable, and ideal for couples, families & friends."
        />
        <meta
          name="keywords"
          content="Pawana Lake camping, camping near Pawna lake, Pawna lake tents, lakeside camping, Pawna lake campsite, Pune camping, Lonavala camping"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.pawanalakecampsite.in/" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Pawana Lake Camping – Book Tents at the Best Lakeside Campsite"
        />
        <meta
          property="og:description"
          content="Enjoy the perfect camping night by Pawna Lake with BBQ, music, sunset, and lakeside tents. Rated top by campers."
        />
        <meta
          property="og:image"
          content="https://www.pawanalakecampsite.in/hero-1.webp"
        />
        <meta property="og:url" content="https://www.pawanalakecampsite.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pawana Lake Camping | Top-Rated Lakeside Camps"
        />
        <meta
          name="twitter:description"
          content="Book the most peaceful Pawna Lake camping experience with live music, tents, bonfire, and stargazing."
        />
        <meta
          name="twitter:image"
           content="https://www.pawanalakecampsite.in/hero-1.webp"
        />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Campground",
  "name": "Pawana Lake Camping",
  "description": "Book your next camping trip at Pawna Lake with tents, BBQ, bonfire, music and a breathtaking lakeside view.",
  "image": "https://www.pawanalakecampsite.in/hero-1.webp",
  "url": "https://www.pawanalakecampsite.in/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pawana Lake",
    "addressLocality": "Lonavala",
    "addressRegion": "Maharashtra",
    "postalCode": "410406",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.7048,
    "longitude": 73.4845
  },
  "telephone": "+91-9876543210",
  "priceRange": "₹999 - ₹1999"
}
`}
        </script>
      </Head>
      <div className="min-h-screen">
        <Navigation isScrolled={isScrolled} />
        <HeroSection />
        <AboutSection />
        <CampOptionsSection />
        <DayTimelineSection />
        <ActivitiesSection />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
