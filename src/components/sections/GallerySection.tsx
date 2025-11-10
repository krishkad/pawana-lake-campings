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

  // const images = [
  //   {
  //     src: "/hero-1.webp",
  //     alt: "Mountain vista from luxury tent",
  //   },
  //   {
  //     src: "/hero-2.webp",
  //     alt: "Forest cottage exterior",
  //   },
  //   {
  //     src: "/hero-3.webp",
  //     alt: "Riverside dome reflection",
  //   },
  //   {
  //     src: "/images/boat-1.webp",
  //     alt: "Wildlife deer in nature",
  //   },
  //   {
  //     src: "/images/pawana-lake-nature.webp",
  //     alt: "Towering pine forest",
  //   },
  //   {
  //     src: "/images/pawana-lake-camping-1.webp",
  //     alt: "Evening campfire ambiance",
  //   },
  //   {
  //     src: "/images/camp-3.webp",
  //     alt: "Misty mountain morning",
  //   },
  //   {
  //     src: "/images/camp-4.webp",
  //     alt: "Golden hour landscape",
  //   },
  // ];

  const images = [
    { src: "/images/new_images/image-1.jpeg", alt: "Image 1" },
    { src: "/images/new_images/image-2.jpeg", alt: "Image 2" },
    { src: "/images/new_images/image-3.jpeg", alt: "Image 3" },
    { src: "/images/new_images/image-4.jpeg", alt: "Image 4" },
    { src: "/images/new_images/image-5.jpeg", alt: "Image 5" },
    { src: "/images/new_images/image-6.jpeg", alt: "Image 6" },
    { src: "/images/new_images/image-7.jpeg", alt: "Image 7" },
    { src: "/images/new_images/image-8.jpeg", alt: "Image 8" },
    { src: "/images/new_images/image-9.jpeg", alt: "Image 9" },
    { src: "/images/new_images/image-10.jpeg", alt: "Image 10" },
    { src: "/images/new_images/image-11.jpeg", alt: "Image 11" },
    { src: "/images/new_images/image-12.jpeg", alt: "Image 12" },
    { src: "/images/new_images/image-13.jpeg", alt: "Image 13" },
    { src: "/images/new_images/image-14.jpeg", alt: "Image 14" },
    { src: "/images/new_images/image-15.jpeg", alt: "Image 15" },
    { src: "/images/new_images/image-16.jpeg", alt: "Image 16" },
    { src: "/images/new_images/image-17.jpeg", alt: "Image 17" },
    { src: "/images/new_images/image-18.jpeg", alt: "Image 18" },
    { src: "/images/new_images/image-19.jpeg", alt: "Image 19" },
    { src: "/images/new_images/image-20.jpeg", alt: "Image 20" },
    { src: "/images/new_images/image-21.jpeg", alt: "Image 21" },
    { src: "/images/new_images/image-22.jpeg", alt: "Image 22" },
    { src: "/images/new_images/image-23.jpeg", alt: "Image 23" },
    { src: "/images/new_images/image-24.jpeg", alt: "Image 24" },
    { src: "/images/new_images/image-25.jpeg", alt: "Image 25" },
    { src: "/images/new_images/image-26.jpeg", alt: "Image 26" },
    { src: "/images/new_images/image-27.jpeg", alt: "Image 27" },
    { src: "/images/new_images/image-28.jpeg", alt: "Image 28" },
    { src: "/images/new_images/image-29.jpeg", alt: "Image 29" },
    { src: "/images/new_images/image-30.jpeg", alt: "Image 30" },
    { src: "/images/new_images/image-31.jpeg", alt: "Image 31" },
    { src: "/images/new_images/image-32.jpeg", alt: "Image 32" },
    { src: "/images/new_images/image-33.jpeg", alt: "Image 33" },
    { src: "/images/new_images/image-34.jpeg", alt: "Image 34" },
    { src: "/images/new_images/image-35.jpeg", alt: "Image 35" },
    { src: "/images/new_images/image-36.jpeg", alt: "Image 36" },
    { src: "/images/new_images/image-37.jpeg", alt: "Image 37" },
    { src: "/images/new_images/image-38.jpeg", alt: "Image 38" },
    { src: "/images/new_images/image-39.jpeg", alt: "Image 39" },
    { src: "/images/new_images/image-40.jpeg", alt: "Image 40" },
    { src: "/images/new_images/image-41.jpeg", alt: "Image 41" },
    { src: "/images/new_images/image-42.jpeg", alt: "Image 42" },
    { src: "/images/new_images/image-43.jpeg", alt: "Image 43" },
    { src: "/images/new_images/image-44.jpeg", alt: "Image 44" },
    { src: "/images/new_images/image-45.jpeg", alt: "Image 45" },
    { src: "/images/new_images/image-46.jpeg", alt: "Image 46" },
    { src: "/images/new_images/image-47.jpeg", alt: "Image 47" },
    { src: "/images/new_images/image-48.jpeg", alt: "Image 48" },
    { src: "/images/new_images/image-49.jpeg", alt: "Image 49" },
    { src: "/images/new_images/image-50.jpeg", alt: "Image 50" },
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

      <div className="w-max-4xl grid-cols0-1 sm:grid-cols-2 gap-4"></div>
    </section>
  );
};

export default Gallery;
