import { Card, CardContent } from "@/components/ui/card";
import { Car, Utensils, Waves, Wifi, Zap } from "lucide-react";

const campTypes = [
  {
    name: "Luxury Tent",
    image: "/images/camp-1.webp",
    description: "Spacious canvas tents with premium bedding and private bathrooms",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Zap, label: "Electricity" },
      { icon: Utensils, label: "Dining" },
      { icon: Car, label: "Parking" }
    ],
    price: "₹999/person"
  },
  {
    name: "Glamping Dome",
    image: "/images/camp-2.webp",
    description: "Modern geodesic domes with panoramic lake views and luxury amenities",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Zap, label: "Bonefire" },
      { icon: Waves, label: "Lake View" },
      { icon: Utensils, label: "Kitchenette" }
    ],
    price: "₹1,200/person"
  },
  // {
  //   name: "Treehouse Suite",
  //   image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
  //   description: "Elevated wooden cabins nestled among trees for the ultimate nature experience",
  //   amenities: [
  //     { icon: Mountain, label: "Tree View" },
  //     { icon: Zap, label: "Electricity" },
  //     { icon: Utensils, label: "Breakfast" },
  //     { icon: Wifi, label: "WiFi" }
  //   ],
  //   price: "₹4,200/person"
  // }
];

export const CampOptionsSection = () => {
  return (
    <section id="stays" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Choose Your <span className="text-emerald-600">Perfect Stay</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From cozy tents to luxury domes, find the accommodation that matches your adventure style
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {campTypes.map((camp, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0">
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={camp.image}
                  alt={camp.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {camp.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{camp.name}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{camp.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {camp.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <amenity.icon className="w-4 h-4 text-emerald-600" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};