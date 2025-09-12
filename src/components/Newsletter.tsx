"use client";




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    //   toast({
    //     title: "Successfully Subscribed!",
    //     description: "Thank you for subscribing to our newsletter. You'll receive updates about Pawana Lake and our luxury camping experiences.",
    //   });
      setEmail("");
    }
  };

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
          Stay Connected with Nature
        </CardTitle>
        <p className="text-gray-600">
          Get the latest updates about Pawana Lake, exclusive offers, and camping tips delivered to your inbox.
        </p>
      </CardHeader>
      
      <CardContent>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/80 backdrop-blur-sm border-emerald-200 focus:border-emerald-500"
              required
            />
            <Button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-all duration-200"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="text-emerald-600 text-lg font-semibold mb-2">✓ Thank you for subscribing!</div>
            <p className="text-gray-600">You&apos;ll hear from us soon with exciting updates.</p>
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-3 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  );
};

export default Newsletter;