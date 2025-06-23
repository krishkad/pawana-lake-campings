"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Users } from 'lucide-react';

const BookingCalendar = () => {
  const [selectedDates, setSelectedDates] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleBookingInquiry = () => {
    // Handle booking inquiry logic here
    console.log('Booking inquiry:', selectedDates);
  };

  return (
    <section id="booking" className="py-20 bg-forest-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Plan Your Perfect Escape
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Select your dates and let us create an unforgettable wilderness experience 
              tailored just for you.
            </p>
          </div>

          <Card className="scroll-reveal shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-r from-forest-600 to-forest-700 text-white">
              <CardTitle className="text-2xl font-serif">Check Availability</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-forest-700 font-medium mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-in Date
                  </label>
                  <Input 
                    type="date" 
                    value={selectedDates.checkIn}
                    onChange={(e) => setSelectedDates({...selectedDates, checkIn: e.target.value})}
                    className="border-forest-300 focus:border-forest-500"
                  />
                </div>
                
                <div>
                  <label className="block text-forest-700 font-medium mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-out Date
                  </label>
                  <Input 
                    type="date" 
                    value={selectedDates.checkOut}
                    onChange={(e) => setSelectedDates({...selectedDates, checkOut: e.target.value})}
                    className="border-forest-300 focus:border-forest-500"
                  />
                </div>
                
                <div>
                  <label className="block text-forest-700 font-medium mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Guests
                  </label>
                  <select 
                    value={selectedDates.guests}
                    onChange={(e) => setSelectedDates({...selectedDates, guests: parseInt(e.target.value)})}
                    className="w-full p-3 border border-forest-300 rounded-md focus:border-forest-500 focus:outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleBookingInquiry}
                  className="px-8 py-4 bg-forest-600 text-white font-medium rounded-full hover:bg-forest-700 transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg px-12 py-4"
                >
                  Check Availability & Rates
                </Button>
                <p className="text-sm text-forest-500 mt-4">
                  No booking fees • Free cancellation up to 48 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;