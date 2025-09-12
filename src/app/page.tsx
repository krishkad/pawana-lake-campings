"use client";
import ChatBot from "@/components/ChatBot";
import { AboutSection } from "@/components/sections/AboutSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import BlogSection from "@/components/sections/BlogSection";
import Booking from "@/components/sections/BookingsSection";
import { CampOptionsSection } from "@/components/sections/CampOptionsSection";
import Contact from "@/components/sections/ContactSection";
import { DayTimelineSection } from "@/components/sections/DayTimelineSection";
import FloatingActions from "@/components/sections/FloatingActions";
import Gallery from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";
import Head from "next/head";

const Home = () => {
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
  "priceRange": "₹999 - ₹1299"
}
`}
        </script>
      </Head>

      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <CampOptionsSection />
        <DayTimelineSection />
        <ActivitiesSection />
        <Gallery />
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 section-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-800 mb-4">
                Experience the Magic
              </h2>
              <p className="text-xl text-forest-600 max-w-3xl mx-auto">
                Watch and immerse yourself in the tranquil beauty of our
                glamping retreat
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              <VideoSection
                source="/videos/pawana-lake-video-1.mp4"
              />
              <VideoSection
                source="/videos/pawna-lake-camping-video-2.mp4"
              />
            </div>
          </div>
        </section>
        <Testimonials />
        <Booking />
        <BlogSection />
        <Contact />
        <FloatingActions />
        <ChatBot />
      </div>
    </>
  );
};

export default Home;
