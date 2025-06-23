import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

const timelineEvents = [
  {
    icon: Sunrise,
    time: "6:00 AM",
    title: "Morning Bliss",
    description:
      "Wake up to birds chirping and the gentle mist over Pawana Lake. Enjoy fresh coffee as the sun paints the sky.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Sun,
    time: "10:00 AM",
    title: "Adventure Time",
    description:
      "Kayaking, hiking, or simply relaxing by the lake. Choose your own adventure in nature's playground.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Sunset,
    time: "7:00 PM",
    title: "Golden Hours",
    description:
      "Watch the spectacular sunset over the lake while enjoying local delicacies and good company.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Moon,
    time: "9:00 PM",
    title: "Starlit Nights",
    description:
      "Gather around the bonfire, share stories, and gaze at the brilliant stars in the unpolluted sky.",
    color: "bg-purple-100 text-purple-600",
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
