import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-3">
              <Mountain className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">ISKCON Granite</h1>
              <p className="text-sm text-secondary">Premium Stone Products</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={() => window.open("tel:+91-9876543210", "_self")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            >
              <SiWhatsapp className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-primary hover:text-secondary transition-colors font-medium text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-4 pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => window.open("tel:+91-9876543210", "_self")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                  >
                    <SiWhatsapp className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
