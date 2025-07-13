import { Button } from "@/components/ui/button";
import { Award, Users, Truck } from "lucide-react";

export default function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-stone">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About ISKCON Granite
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over two decades of experience in the granite and stone industry, ISKCON Granite has built 
              a reputation for delivering exceptional quality products and unmatched customer service.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We source our granite from the finest quarries across India, ensuring that every piece meets 
              our stringent quality standards. Our skilled craftsmen and modern processing facilities 
              enable us to deliver products that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-primary mb-1">20+ Years</h3>
                <p className="text-gray-600 text-sm">Industry Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-primary mb-1">1000+</h3>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-primary mb-1">Pan India</h3>
                <p className="text-gray-600 text-sm">Delivery Network</p>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Granite Processing Facility"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Quality Control Team"
              className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
