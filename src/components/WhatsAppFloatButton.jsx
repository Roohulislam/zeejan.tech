import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = "YOUR_PHONE_NUMBER"; // e.g., "+1234567890"
  const message = "Hello! I have a question."; // Default message

  const handleClick = () => {
    setIsVisible(false); // Shrink on click
    setTimeout(() => {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setIsVisible(true); // Reset after opening WhatsApp
    }, 300); // Match transition duration
  };

  // Hide on desktop (shows only below 768px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform ${
          isVisible ? "scale-100" : "scale-90 opacity-0"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppFloatButton;