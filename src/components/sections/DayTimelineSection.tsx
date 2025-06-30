import {
  Sunrise,
  Sun,
  Sunset,
  Moon,
  TentTree,
  Coffee,
  Drum,
  UtensilsCrossed,
  Music2,
  Flame,
  EggFried,
} from "lucide-react";

const timelineEvents = [
  {
    icon: Sun,
    time: "4:00 PM",
    title: "Check-in & Tent Allotment",
    description: "Welcome to the campsite! Settle into your tent and soak in the lakeside views as you arrive.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Coffee,
    time: "5:30 PM",
    title: "Evening Snacks & Tea",
    description: "Recharge with hot tea and snacks while watching the sun begin to set over the lake.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Drum,
    time: "6:30 PM",
    title: "Fun Games",
    description: "Enjoy interactive games, activities, and bonding moments with fellow campers.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Flame,
    time: "8:00 PM",
    title: "BBQ & Bonfire",
    description: "Enjoy freshly grilled BBQ under the stars as the bonfire keeps you warm and cozy.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: UtensilsCrossed,
    time: "10:00 PM",
    title: "Unlimited Dinner",
    description: "Satisfy your appetite with a delicious unlimited dinner served at the campsite.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Music2,
    time: "10:30 PM",
    title: "Music & Chill",
    description: "Relax with some soft music, conversations, or stargazing by the lake.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Moon,
    time: "11:30 PM",
    title: "Rest & Recharge",
    description: "Get cozy inside your tent with bedding provided. Enjoy a peaceful sleep by the lakeside.",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: Sunrise,
    time: "9:00 AM",
    title: "Morning Breakfast",
    description: "Start your day with a hot breakfast and a stunning sunrise over the lake.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Sun,
    time: "11:30 AM",
    title: "Check-out",
    description: "Pack your bags with happy memories and prepare to leave the campsite.",
    color: "bg-green-100 text-green-600",
  },
];

export const DayTimelineSection = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How Your <span className="text-emerald-600">Day Looks Like</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From sunrise to starlit nights, every moment is crafted for your
            perfect getaway
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-full ${event.color}`}>
                        <event.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-800">
                          {event.title}
                        </div>
                        <div className="text-emerald-600 font-semibold">
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
