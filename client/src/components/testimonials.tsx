import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Delhi",
    content: "Exceptional quality granite and outstanding service. ISKCON Granite transformed our kitchen with their beautiful Black Galaxy countertops. Highly recommended!",
    initials: "RS"
  },
  {
    name: "Anita Patel", 
    role: "Architect, Mumbai",
    content: "Professional team, timely delivery, and competitive pricing. We've used ISKCON Granite for multiple commercial projects and they never disappoint.",
    initials: "AP"
  },
  {
    name: "Mohit Kumar",
    role: "Contractor, Bangalore", 
    content: "The granite cobbles we ordered for our landscaping project exceeded our expectations. Excellent craftsmanship and attention to detail.",
    initials: "MK"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-stone">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
