"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Set the initial slide when carousel opens
    if (selectedImageIndex !== null) {
      api.scrollTo(selectedImageIndex);
    }
  }, [api, selectedImageIndex]);

  const images = [
    {
      src: "hero-1.webp",
      alt: "Mountain vista from luxury tent",
    },
    {
      src: "hero-2.webp",
      alt: "Forest cottage exterior",
    },
    {
      src: "hero-3.webp",
      alt: "Riverside dome reflection",
    },
    {
      src: "/images/boat-1.webp",
      alt: "Wildlife deer in nature",
    },
    {
      src: "/images/pawana-lake-nature.webp",
      alt: "Towering pine forest",
    },
    {
      src: "/images/pawana-lake-camping-1.webp",
      alt: "Evening campfire ambiance",
    },
    {
      src: "/images/camp-3.webp",
      alt: "Misty mountain morning",
    },
    {
      src: "/images/camp-4.webp",
      alt: "Golden hour landscape",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            Moments of Wonder
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Discover the beauty that awaits you through our lens. Each moment
            captures the essence of luxury in harmony with nature.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg scroll-reveal hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImageIndex(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  View Full Size
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with Carousel */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full max-w-7xl">
            <button
              className="absolute -top-16 right-4 text-white hover:text-sand-200 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>

            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                startIndex: selectedImageIndex,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center h-[80vh] px-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "80vh",
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* <CarouselPrevious
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white w-12 h-12 z-10"
                onClick={(e) => e.stopPropagation()}
              />

              <CarouselNext
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white w-12 h-12 z-10"
                onClick={(e) => e.stopPropagation()}
              /> */}
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
