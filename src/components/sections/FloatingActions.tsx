"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleCall = () => {
    window.open("tel:+919373526309", "_self");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919373526309";
    const message =
      "Hi! I'm interested in your luxury camper van rentals. Could you please help me with booking?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[90px] right-6 z-50 flex flex-col space-y-3">
    

      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Call Now"
      >
        <span className="text-xl">📞</span>
      </Button>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="WhatsApp Chat"
      >
        <span className="text-xl">💬</span>
      </Button>
      {/* <ChatBot /> */}
    </div>
  );
};

export default FloatingActions;
