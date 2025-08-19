import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Updated Product type to use multiple, specific attributes
type Product = {
  name: string;
  description: string;
  color: string;
  finish: string;
  size: string;
  image: string;
  alt: string;
};

// Updated product data with the new structure
const products = [
  {
    name: "Grey Granite Hand Made Cobbles",
    description: "Elegant grey granite with a rustic, hand-cut finish, perfect for traditional driveways and heritage pathways.",
    color: "Grey",
    finish: "Hand Made",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/grey/grey_1.jpg",
    alt: "Grey Granite Hand Made Granite"
  },
  {
    name: "Grey Granite Hand Made Cobbles",
    description: "Elegant grey granite with a rustic, hand-cut finish, perfect for traditional driveways and heritage pathways.",
    color: "Grey",
    finish: "Hand Made",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/grey/grey_2.jpg",
    alt: "Grey Granite Hand Made Granite"
  },
  {
    name: "Grey Granite Hand Made Cobbles",
    description: "Elegant grey granite with a rustic, hand-cut finish, perfect for traditional driveways and heritage pathways.",
    color: "Grey",
    finish: "Hand Made",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/grey/grey_3.jpg",
    alt: "Grey Granite Hand Made Granite"
  },
  {
    name: "Grey Granite Hand Made Cobbles",
    description: "Elegant grey granite with a rustic, hand-cut finish, perfect for traditional driveways and heritage pathways.",
    color: "Grey",
    finish: "Hand Made",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/grey/grey_4.jpg",
    alt: "Grey Granite Hand Made Granite"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_1.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_2.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_3.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_4.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_5.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_6.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_7.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_8.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Machine Cut Blocks",
    description: "Elegant red granite with a precise machine-cut finish, perfect for premium countertops and flooring.",
    color: "Red",
    finish: "Machine Cut",
    size: "4x4x4",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/machine_cut_red/machine_cut_red_9.jpg",
    alt: "Red Granite Machine Cut"
  },
  {
    name: "Red Granite Hand Made Cobbles",
    description: "Classic rectangular red granite cobbles, perfect for traditional driveways and heritage pathways.",
    color: "Red",
    finish: "Hand Made",
    size: "4x4x2",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_1.jpg",
    alt: "Red Granite Hand Made Cobbles"
  },
  {
    name: "Red Granite Hand Made Cobbles",
    description: "Classic rectangular red granite cobbles, perfect for traditional driveways and heritage pathways.",
    color: "Red",
    finish: "Hand Made",
    size: "4x4x2",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_2.jpg",
    alt: "Red Granite Hand Made Cobbles"
  },
  {
    name: "Red Granite Hand Made Cobbles",
    description: "Classic rectangular red granite cobbles, perfect for traditional driveways and heritage pathways.",
    color: "Red",
    finish: "Hand Made",
    size: "4x4x2",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_3.jpg",
    alt: "Red Granite Hand Made Cobbles"
  },
  {
    name: "Red Granite Hand Made Cobbles",
    description: "Classic rectangular red granite cobbles, perfect for traditional driveways and heritage pathways.",
    color: "Red",
    finish: "Hand Made",
    size: "4x4x2",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_4.jpg",
    alt: "Red Granite Hand Made Cobbles"
  },
];

export default function Products() {
  // Separate state variables for each filter
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [selectedFinish, setSelectedFinish] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState<string>("All");

  // Dynamically create filter options from the product data
  const colors = ["All", ...Array.from(new Set(products.map(p => p.color)))];
  const finishes = ["All", ...Array.from(new Set(products.map(p => p.finish)))];
  const sizes = ["All", ...Array.from(new Set(products.map(p => p.size)))];

  // Combined filtering logic
  const filteredProducts = products.filter(product => {
    const colorMatch = selectedColor === "All" || product.color === selectedColor;
    const finishMatch = selectedFinish === "All" || product.finish === selectedFinish;
    const sizeMatch = selectedSize === "All" || product.size === selectedSize;
    return colorMatch && finishMatch && sizeMatch;
  });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquiry = (productName: string) => {
    const message = `Hi, I'm interested in ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919889461190?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Check our Exclusive Range of Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium granite and stone products,
            carefully selected for quality and durability.
          </p>
        </div>

        {/* Filter buttons for each category */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Color Filter */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Color</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  onClick={() => setSelectedColor(color)}
                  className={selectedColor === color
                    ? "bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Finish Filter */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Finish</h4>
            <div className="flex flex-wrap gap-2">
              {finishes.map((finish) => (
                <Button
                  key={finish}
                  variant={selectedFinish === finish ? "default" : "outline"}
                  onClick={() => setSelectedFinish(finish)}
                  className={selectedFinish === finish
                    ? "bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  {finish}
                </Button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Size</h4>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size
                    ? "bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.name + index}
              className="bg-stone overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-secondary font-semibold">
                    Color: {product.color}
                  </span>
                  <span className="text-secondary font-semibold">
                    Finish: {product.finish}
                  </span>
                  <span className="text-secondary font-semibold">
                    Size: {product.size}
                  </span>
                </div>
                <div className="mt-4">
                  <Button
                    onClick={() => handleEnquiry(product.name)}
                    className="w-full bg-primary text-white hover:bg-primary/90"
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