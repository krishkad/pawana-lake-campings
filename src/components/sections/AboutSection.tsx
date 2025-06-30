export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pawana-lake-camping-1.webp"
              alt="Pawana Lake Nature"
              className="w-full h-[500px] object-cover object-bottom hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Where Nature Meets{" "}
              <span className="text-emerald-600">Luxury</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nestled beside the pristine waters of Pawana Lake, our resort offers an escape from the ordinary. 
              Wake up to the gentle lapping of waves, breathe in the crisp mountain air, and let the natural 
              beauty rejuvenate your soul.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our carefully curated camping experience combines the thrill of outdoor adventure with the 
              comfort of premium amenities. From luxury tents to gourmet dining under the stars, every 
              moment is designed to create memories that last a lifetime.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-sm text-slate-600">Premium Camps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-slate-600">Concierge</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-slate-600">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
