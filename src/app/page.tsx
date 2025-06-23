"use client"
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
  );
};

export default Home;
