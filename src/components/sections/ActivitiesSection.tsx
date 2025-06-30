
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const activities = [
  {
    name: "Bonfire Nights",
    image: "https://images.unsplash.com/photo-1735069149907-02aac2169c01?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cozy evenings around the crackling fire with music and stories"
  },
  {
    name: "Lake Kayaking",
    image: "/images/boat-1.webp",
    description: "Paddle through the serene waters and explore hidden coves"
  },
  {
    name: "Nature Hiking",
    image: "/images/pawana-lake-nature.webp",
    description: "Discover scenic trails and breathtaking viewpoints"
  },
  {
    name: "Stargazing",
    image: "https://images.unsplash.com/photo-1527871899604-f1425bcce779?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Marvel at the brilliant night sky away from city lights"
  }
];

const attractions = [
  { name: "Lohagad Fort", distance: "15 km", description: "Historic hill fort with panoramic views" },
  { name: "Bhaja Caves", distance: "20 km", description: "Ancient Buddhist rock-cut caves" },
  { name: "Karla Caves", distance: "25 km", description: "Famous Buddhist cave temples" },
  { name: "Lonavala", distance: "30 km", description: "Popular hill station and markets" },
  { name: "Khandala", distance: "35 km", description: "Scenic hill station with viewpoints" },
  { name: "Rajmachi Fort", distance: "18 km", description: "Twin fortresses with trekking trails" }
];

export const ActivitiesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Activities */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Adventure <span className="text-emerald-600">Activities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Endless opportunities for adventure and relaxation in nature&apos;s embrace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0">
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{activity.name}</h3>
                  <p className="text-sm text-slate-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tourist Attractions */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nearby <span className="text-emerald-600">Attractions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore the rich history and natural beauty of the Sahyadri mountains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800">{attraction.name}</h3>
                    <div className="flex items-center text-emerald-600 text-sm font-semibold">
                      <MapPin className="w-4 h-4 mr-1" />
                      {attraction.distance}
                    </div>
                  </div>
                  <p className="text-slate-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};