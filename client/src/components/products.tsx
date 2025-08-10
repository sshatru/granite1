import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  name: string;
  description: string;
  category: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    name: "Grey Granite Hand Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/grey/grey_1.jpg",
    alt: "Grey Granite Hand Cut Granite"
  },
  {
    name: "Grey Granite Hand Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/grey/grey_2.jpg",
    alt: "Grey Granite Hand Cut Granite"
  },
  {
    name: "Grey Granite Hand Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/grey/grey_3.jpg",
    alt: "Grey Granite Hand Cut Granite"
  },
  {
    name: "Grey Granite Hand Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/grey/grey_4.jpg",
    alt: "Grey Granite Hand Cut Granite"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_1.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_2.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_3.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_4.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_5.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_6.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_7.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_8.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut",
    description: "Elegant black granite with silver speckles, perfect for premium countertops and flooring.",
    category: "Premium Granite",
    image: "/images/machine_cut_red/machine_cut_red_9.jpg",
    alt: "Red Granite Machine Cut"
  },
  // {
  //   name: "Absolute Black",
  //   description: "Pure black granite with mirror finish, sophisticated choice for modern interiors.",
  //   category: "Premium Granite",
  //   image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  //   alt: "Absolute Black Granite"
  // },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "/images/hand_cut_red_granite/hand_cut_red_1.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "/images/hand_cut_red_granite/hand_cut_red_2.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "/images/hand_cut_red_granite/hand_cut_red_3.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "/images/hand_cut_red_granite/hand_cut_red_4.jpg",
    alt: "Traditional Granite Cobbles"
  },


];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary text-white" 
                : "border-primary text-primary hover:bg-primary hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.name}
              className="bg-stone overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={product.image}
                alt={product.alt}
                className="w-full h-30 object-cover"
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
