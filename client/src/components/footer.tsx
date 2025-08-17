import { Mountain } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-3">
                <Mountain className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ISKCON Granite</h1>
                <p className="text-secondary">Premium Stone Products</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium granite and stone products. 
              Quality, craftsmanship, and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-secondary hover:bg-secondary/80 p-3 rounded-lg transition-all"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-secondary hover:bg-secondary/80 p-3 rounded-lg transition-all"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919889461190" 
                className="bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-all"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("#home")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#categories")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#products")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#gallery")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Granite Countertops</span></li>
              <li><span className="text-gray-300">Stone Flooring</span></li>
              <li><span className="text-gray-300">Landscaping Products</span></li>
              <li><span className="text-gray-300">Custom Fabrication</span></li>
              <li><span className="text-gray-300">Installation Services</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 ISKCON Granite. All rights reserved. | Designed with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
