"use client";



import React, { useState } from 'react';
import { MessageCircle, X, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
//   const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);

  try {
    const { name, email, phone, message } = formData;

    // Format message for WhatsApp
    const whatsappMessage = `*New Booking Inquiry*%0A
*Name:* ${encodeURIComponent(name)}%0A
*Email:* ${encodeURIComponent(email)}%0A
*Phone:* ${encodeURIComponent(phone)}%0A
*Message:* ${encodeURIComponent(message)}`;

    // Owner's WhatsApp number in international format (e.g., +91 for India)
    const ownerWhatsAppNumber = "919373526309"; // <- replace with your number (no + sign)

    const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 4000);
  } catch (error) {
    console.error("WhatsApp submission error:", error);
    // Optionally show a toast here
  } finally {
    setIsLoading(false);
  }
};


  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Interface - Opens to the left of the button */}
      <div
        className={`absolute bottom-16 right-0 mb-4 w-96 max-w-[calc(100vw-5rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 ease-out transform ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 visible'
            : 'opacity-0 scale-95 translate-y-4 invisible pointer-events-none'
        }`}
        style={{
          filter: isOpen ? 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))' : 'none'
        }}
      >
        {/* Premium Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Let&apos;s Chat</h3>
              <p className="text-xs text-white/80">We&apos;re here to help</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Premium Content Area */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Welcome Message */}
              <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-sm text-gray-700 leading-relaxed">
                  👋 Hello! We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {/* Premium Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className={`transition-colors duration-200 ${
                      errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
                    }`}
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className={`transition-colors duration-200 ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
                    }`}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-200 focus:border-green-500 transition-colors duration-200"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className={`min-h-[100px] resize-none transition-colors duration-200 ${
                      errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
                    }`}
                    disabled={isLoading}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send size={16} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            /* Premium Success Message */
            <div className="text-center py-8 px-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="bg-green-500 rounded-full p-3">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your message has been sent successfully. Our team will review your inquiry and get back to you within 24 hours.
              </p>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm text-green-700">
                  📧 Check your email for a confirmation shortly
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Premium Floating Chat Button - Bottom Right Corner */}
      <button
        onClick={toggleChat}
        className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'rotate-0' : 'hover:shadow-2xl'
        }`}
        style={{
          filter: 'drop-shadow(0 8px 25px rgba(61, 139, 61, 0.3))'
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </div>
      </button>

      {/* Premium Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
          !
        </div>
      )}
    </div>
  );
};

export default ChatBot;