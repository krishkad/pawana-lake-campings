"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();
  return (
    <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 border-0 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <CardContent className="relative z-10 text-center py-12 px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Pawana Lake?
        </h2>

        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Book your luxury camping experience today and create memories that
          will last a lifetime at Maharashtra&apos;s most beautiful lake destination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg transition-all duration-200"
            onClick={() => router.push("/#booking")}
          >
            Book Your Stay
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white hover:text-emerald-600 font-semibold px-8 py-3 text-lg transition-all duration-200"
            onClick={() => router.push("/#stays")}
          >
            View Packages
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToAction;
