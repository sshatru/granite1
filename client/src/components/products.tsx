import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Black Galaxy",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Black Galaxy Granite"
  },
  {
    name: "Tan Brown",
    description: "Warm brown granite with intricate patterns, ideal for kitchen countertops and vanities.",
    category: "Premium Granite",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tan Brown Granite"
  },
  {
    name: "Absolute Black",
    description: "Pure black granite with mirror finish, sophisticated choice for modern interiors.",
    category: "Premium Granite",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Absolute Black Granite"
  },
  {
    name: "Granite Cobbles",
    description: "Durable granite cobbles for driveways, pathways and landscaping projects.",
    category: "Landscaping Stone",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Granite Cobbles"
  },
  {
    name: "Granite Kerbs",
    description: "Precision-cut granite kerbs for road construction and urban development projects.",
    category: "Construction Stone",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Granite Kerbs"
  },
  {
    name: "Custom Slabs",
    description: "Bespoke granite slabs cut to your specifications for unique architectural projects.",
    category: "Custom Work",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Granite Slabs"
  }
];

export default function Products() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquiry = (productName: string) => {
    const message = `Hi, I'm interested in ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium granite and stone products, 
            carefully selected for quality and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-stone overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={product.image}
                alt={product.alt}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-semibold">
                    {product.category}
                  </span>
                  <Button 
                    onClick={() => handleEnquiry(product.name)}
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90"
            onClick={scrollToContact}
          >
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
