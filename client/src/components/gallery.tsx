import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Luxury Bathroom Project"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modern Kitchen Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Traditional Cobblestone Driveway"
  },
  {
    src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Square Cobblestone Patio"
  },
  {
    src: "https://images.unsplash.com/photo-1589871973318-ca46b5b6b4a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tumbled Cobblestone Garden Path"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Cobblestone Outdoor Patio"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Commercial Cobblestone Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Landscape Cobblestone Features"
  },
  {
    src: "https://images.unsplash.com/photo-1562182384-08115de5ee97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Granite Countertop Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Cobblestone Walkway Design"
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Heritage Cobblestone Restoration"
  },
  {
    src: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modern Cobblestone Landscaping"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing the versatility 
            and beauty of our granite products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Search className="text-white h-12 w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none p-0">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
