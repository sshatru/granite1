import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Products from "@/components/products";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
