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

import RedGraniteHandCut from "@/components/imageslider_red_granite_hand_cut";
import GreyGraniteHandCut from "@/components/imageslider_grey_granite_hand_cut";
import RedGraniteMachineCut from "@/components/imageslider_red_granite_machine";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Hero /> */}
      <GreyGraniteHandCut />
      <RedGraniteMachineCut />
      <RedGraniteHandCut />
      {/* <Categories /> */}
      <Products />
      {/* <Gallery /> */}
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
