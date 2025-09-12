import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Pawana Lake Camping
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Experience the perfect blend of adventure and luxury amidst the
              pristine beauty of Pawana Lake. Your gateway to unforgettable
              memories in nature&apos;s embrace.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Camp Options
                </a>
              </li>
              <li>
                <a href="" className="hover:text-emerald-400 transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Phone: +91 93735 26309</li>
              {/* <li>Email: info@pawanalakecamping.com</li> */}
              <li>
                Address: Thakursai Pavananagar Road Near Vaishnavi Hotel, Swami
                Samarth Road Pawna Lake Camping, Maharashtra Pune- 410 406
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">
            © {currentYear} Pawana Lake Camping. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
