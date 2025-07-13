import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Hammer, Home, TreePine, Building2 } from "lucide-react";

const categories = [
  {
    name: "Premium Granite",
    description: "High-quality granite slabs for countertops, flooring, and luxury interiors.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: "15+ Varieties"
  },
  {
    name: "Cobblestones",
    description: "Traditional and modern cobblestones for driveways, pathways, and landscaping.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: "8+ Styles"
  },
  {
    name: "Construction Stone",
    description: "Durable granite products for infrastructure and commercial construction projects.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: "10+ Products"
  },
  {
    name: "Custom Work",
    description: "Bespoke granite fabrication tailored to your specific design requirements.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: "Unlimited Options"
  }
];

export default function Categories() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-20 bg-stone">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of granite products across different categories, 
            each designed for specific applications and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                onClick={scrollToProducts}
              >
                <div className="relative">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary font-semibold text-sm">
                      {category.productCount}
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            onClick={scrollToProducts}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}