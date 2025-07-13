import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your granite products. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="h-8 w-8" />
    </button>
  );
}
