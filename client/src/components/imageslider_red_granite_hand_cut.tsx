import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// --- 1. Import Carousel components ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Product = {
  name: string;
  description: string;
  category: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_1.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_2.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_3.jpg",
    alt: "Traditional Granite Cobbles"
  },
  {
    name: "Red Granite Hand Cut",
    description: "Classic rectangular granite cobbles, perfect for traditional driveways and heritage pathways.",
    category: "Cobblestones",
    image: "https://raw.githubusercontent.com/sshatru/granite1/dev2/client/public/images/hand_cut_red_granite/hand_cut_red_4.jpg",
    alt: "Traditional Granite Cobbles"
  },
];

export default function RedGraniteHandCut() {
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
    const whatsappUrl = `https://wa.me/919889461190?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
    return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Red Granite Hand Cut
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium granite and stone products, 
            carefully selected for quality and durability.
          </p>
        </div>



        {/* --- 2. Replace the grid with the Carousel component --- */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredProducts.map((product) => (
              // --- 3. Set responsive width for carousel items ---
              <CarouselItem key={product.image} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card 
                    className="bg-stone overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover" // Increased height for better aspect ratio
                    />
                    </div>
                    {/* <CardContent className="p-6">
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
                    </CardContent> */}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90"
            onClick={scrollToContact}
          >
            View Complete Catalog
          </Button>
        </div> */}
      </div>
    </section>
  );

//   return (
//     <section id="products" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//             Our Premium Products
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our extensive range of premium granite and stone products, 
//             carefully selected for quality and durability.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className={selectedCategory === category 
//                 ? "bg-primary text-white" 
//                 : "border-primary text-primary hover:bg-primary hover:text-white"
//               }
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* --- 2. Replace the grid with the Carousel component --- */}
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-4">
//             {filteredProducts.map((product) => (
//               // --- 3. Set responsive width for carousel items ---
//               <CarouselItem key={product.image} className="pl-4 md:basis-1/2 lg:basis-1/3">
//                 <div className="p-1">
//                   <Card 
//                     className="bg-stone overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                   >
//                     <div className="aspect-square  overflow-hidden">
//                     <img 
//                       src={product.image}
//                       alt={product.alt}
//                       className="w-full h-full object-cover" // Increased height for better aspect ratio
//                     />
//                     </div>
//                     {/* <CardContent className="p-6">
//                       <h3 className="text-2xl font-bold text-primary mb-2">
//                         {product.name}
//                       </h3>
//                       <p className="text-gray-600 mb-4">
//                         {product.description}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <span className="text-secondary font-semibold">
//                           {product.category}
//                         </span>
//                         <Button 
//                           onClick={() => handleEnquiry(product.name)}
//                           className="bg-primary text-white hover:bg-primary/90"
//                         >
//                           Enquire Now
//                         </Button>
//                       </div>
//                     </CardContent> */}
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>

//         <div className="text-center mt-12">
//           <Button 
//             size="lg"
//             className="bg-secondary text-white hover:bg-secondary/90"
//             onClick={scrollToContact}
//           >
//             View Complete Catalog
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
}