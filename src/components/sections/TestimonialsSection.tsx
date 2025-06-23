"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "San Francisco, CA",
      rating: 5,
      text: "Wildwood Retreat exceeded every expectation. The Safari Luxury Tent was incredible - waking up to mountain views while enjoying hotel-level comfort was magical. The stargazing experience was the highlight of our anniversary trip.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Jennifer Walsh",
      location: "Denver, CO",
      text: "As a solo traveler, I felt completely safe and welcomed. The Forest Cottage was my perfect sanctuary - cozy fireplace, amazing forest views, and the staff made sure I had everything I needed. Already planning my return visit!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "The Rodriguez Family",
      location: "Austin, TX",
      text: "Our kids still talk about the Riverside Dome! The transparent ceiling for stargazing was incredible, and being right by the river made for perfect family moments. The hiking trails were well-marked and fun for all ages.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Emma Chen",
      location: "Seattle, WA",
      text: "The photography workshops here are world-class! I captured some of my best wildlife shots, and the guides really knew their craft. The accommodations were luxurious - a perfect blend of adventure and comfort.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            Guest Stories
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Hear from our guests about their transformative experiences in nature's embrace.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white border-forest-300 hover:border-forest-500"
          >
            <ChevronLeft className="w-5 h-5 text-forest-700" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white border-forest-300 hover:border-forest-500"
          >
            <ChevronRight className="w-5 h-5 text-forest-700" />
          </Button>

          <Card className="overflow-hidden shadow-2xl scroll-reveal">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-forest-700 mb-8 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-forest-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-forest-600">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-forest-600' : 'bg-forest-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;