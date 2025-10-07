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

  

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[90px] left-0 right-0 z-50 flex justify-between items-center px-4">
      {/* WhatsApp Button on the left */}
      <div className="flex items-center ">
        <Button
          onClick={handleWhatsApp}
          className=" h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 transform "
          title="WhatsApp Chat"
        >
          <span className="text-xl">💬</span>
          <span className="text-white text-sm font-medium">WhatsApp</span>
        </Button>
      </div>

      {/* Call Button on the right */}
      <div className="flex items-center space-x-2">
        <Button
          onClick={handleCall}
          className="h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-2xl transition-all duration-300"
          title="Call Now"
        >
          <span className="text-white text-sm font-medium">Call Now</span>
          <span className="text-xl">📞</span>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;
