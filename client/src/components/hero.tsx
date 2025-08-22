import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/project_work/work1.jpg')"
        }}
      />
      <div className="absolute inset-0 " />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Granite & <br className="hidden md:block" />Stone Products
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Delivering high-quality granite for homes, landscapes & construction projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection("#products")}
          >
            View Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection("#contact")}
          >
            Get Quote
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
