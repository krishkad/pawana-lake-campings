"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
            Ready to plan your perfect getaway? We're here to help you create unforgettable memories in nature.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-emerald-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Address</p>
                    <p className="text-emerald-600">123 Mountain View Road, Pine Valley, CA 92345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Phone</p>
                    <p className="text-emerald-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Email</p>
                    <p className="text-emerald-600">hello@wildwoodretreat.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">WhatsApp</p>
                    <p className="text-emerald-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <Card className="bg-white border-emerald-200">
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-semibold text-emerald-800 mb-4">
                  Quick FAQs
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-emerald-700">Check-in time?</p>
                    <p className="text-emerald-600">3:00 PM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-emerald-700">Pet policy?</p>
                    <p className="text-emerald-600">Well-behaved pets welcome with prior notice</p>
                  </div>
                  <div>
                    <p className="font-medium text-emerald-700">Cancellation?</p>
                    <p className="text-emerald-600">Free cancellation up to 48 hours before arrival</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="bg-white border-emerald-200">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-emerald-800 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-emerald-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-emerald-200 focus:border-emerald-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      placeholder="Tell us about your ideal getaway..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:scale-105 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;