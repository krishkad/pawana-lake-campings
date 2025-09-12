import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Car,
  Droplets,
  Flame,
  Gamepad2,
  Mountain,
  Music2,
  ShowerHead,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

const campTypes = [
  {
    name: "Regular Tent",
    image: "/images/camp-1.webp",
    description: "Comfortable 2–3 person tent stay with essential facilities.",
    amenities: [
      { icon: Utensils, label: "Meals Included" },
      { icon: Flame, label: "Bonfire & Barbecue" },
      { icon: Music2, label: "DJ Music" },
      { icon: Gamepad2, label: "Outdoor & Indoor Games" },
      { icon: Car, label: "Free Parking" },
      { icon: ShowerHead, label: "Washrooms" },
      { icon: Droplets, label: "Drinking Water" },
    ],
    price: "₹999/person",
    beforeDiscount: "₹1200/per"
  },
  {
    name: "Triangle Tent",
    image: "/images/triangle-camp.jpg",
    description: "Stylish triangle tents with lake view and added comfort.",
    amenities: [
      { icon: Waves, label: "Lake View" },
      { icon: Utensils, label: "Meals Included" },
      { icon: Flame, label: "Bonfire & Barbecue" },
      { icon: Music2, label: "DJ Music" },
      { icon: Gamepad2, label: "Outdoor & Indoor Games" },
      { icon: Car, label: "Free Parking" },
      { icon: ShowerHead, label: "Washrooms" },
      { icon: Droplets, label: "Drinking Water" },
    ],
    price: "₹1,200/person",
    beforeDiscount: "₹1500/per",
    className: "object-center",
  },
  {
    name: "Deluxe Cottages",
    image: "/images/delux-cabin.webp",
    description:
      "Family-friendly cottages with attached Washroom & lake touch view.",
      amenities: [
        { icon: Mountain, label: "Tree View" },
        { icon: Zap, label: "Electricity" },
        { icon: Utensils, label: "Meals Included" },
        { icon: Flame, label: "Bonfire & Barbecue" },
        { icon: Music2, label: "DJ Music" },
        { icon: Gamepad2, label: "Outdoor & Indoor Games" },
        { icon: Car, label: "Free Parking" },
        { icon: ShowerHead, label: "Private Washroom" },
        { icon: Droplets, label: "Drinking Water" },
      ],
      price: "₹2999/person",
      beforeDiscount: "₹3200/per",
  },
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
            From cozy tents to luxury domes, find the accommodation that matches
            your adventure style
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {campTypes.map((camp, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={camp.image}
                  alt={camp.name}
                  className={cn(
                    "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500",
                    camp.className
                  )}
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  {/* Discounted price */}
                  <span className="text-base font-bold">{camp.price}</span>

                  {/* Original price */}
                  <span className="text-xs text-gray-200 line-through opacity-80">
                    {camp.beforeDiscount}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 pt-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {camp.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {camp.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {camp.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-slate-600"
                    >
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
