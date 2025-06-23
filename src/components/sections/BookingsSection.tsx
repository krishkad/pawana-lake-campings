"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, User, Mail, Phone } from "lucide-react";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    accommodation: "",
    specialRequests: "",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    // Handle booking submission logic here
    alert(
      "Thank you for your booking request! We will contact you within 24 hours to confirm your reservation."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: name === "guests" ? parseInt(value) : value,
    });
  };

  return (
    <section id="booking" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Make Your Reservation
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Ready to escape to nature? Fill out the form below and we'll get
              back to you within 24 hours to confirm your perfect wilderness
              getaway.
            </p>
          </div>

          <Card className="scroll-reveal shadow-2xl p-0">
            <CardHeader className="text-center h-28 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white flex justify-center items-center p-0">
              <CardTitle className="text-2xl font-serif">
                Booking Request Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-forest-700 font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      type="text"
                      value={bookingData.name}
                      onChange={handleChange}
                      className="border-forest-300 focus:border-forest-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-forest-700 font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      className="border-forest-300 focus:border-forest-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest-700 font-medium mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={handleChange}
                    className="border-forest-300 focus:border-forest-500"
                    required
                  />
                </div>

                {/* Booking Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-forest-700 font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Check-in Date *
                    </label>
                    <Input
                      name="checkIn"
                      type="date"
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      className="border-forest-300 focus:border-forest-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-forest-700 font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Check-out Date *
                    </label>
                    <Input
                      name="checkOut"
                      type="date"
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      className="border-forest-300 focus:border-forest-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-forest-700 font-medium mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleChange}
                      className="w-full p-3 border border-forest-300 rounded-md focus:border-forest-500 focus:outline-none"
                      required
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Guests</option>
                    </select>
                  </div>
                </div>

          
                <div>
                  <label className="block text-forest-700 font-medium mb-2">
                    Special Requests or Notes
                  </label>
                  <Textarea
                    name="specialRequests"
                    rows={4}
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                    className="border-forest-300 focus:border-forest-500"
                    placeholder="Tell us about any special occasions, dietary requirements, accessibility needs, or other requests..."
                  />
                </div>

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg"
                  >
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-forest-500 mt-4">
                    * Required fields • We'll contact you within 24 hours to
                    confirm availability and pricing
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
