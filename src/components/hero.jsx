import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Different images for desktop and mobile
  const desktopSlides = [
    "../../src/assets/image/heropic/1.jpg",
    "../../src/assets/image/heropic/2.jpg",
    "../../src/assets/image/heropic/3.jpg",
    "../../src/assets/image/heropic/4.jpg",
    "../../src/assets/image/heropic/5.jpg",
    "../../src/assets/image/heropic/6.jpg",
    "../../src/assets/image/heropic/7.jpg",
    "../../src/assets/image/heropic/8.jpg",
    "../../src/assets/image/heropic/9.jpg",
  ];

  const mobileSlides = [
    "../../src/assets/image/web.avif", 
    "../../src/assets/image/mobail.png", 
    "../../src/assets/image/digital.avif", 
    "../../src/assets/image/ai.png", 
    "../../src/assets/image/brand.webp", 
    "../../src/assets/image/staf.webp", 
    "../../src/assets/image/ml.avif", 
    "../../src/assets/image/custom.avif", 
    "../../src/assets/image/ecom.avif", 
    "../../src/assets/image/ui.avif", 
    "../../src/assets/image/ux.webp", 
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        // Reset slide index when switching between mobile/desktop
        setCurrentSlide(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Preload images
  useEffect(() => {
    [...desktopSlides, ...mobileSlides].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative h-screen w-full mt-18 overflow-hidden bg-[#F6F5F5]">
      {/* Optimized Slideshow with Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: isMobile ? 'cover' : 'cover',
              backgroundPosition: isMobile ? 'top center' : 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay div - adjusted for better mobile visibility */}
            <div className={`absolute inset-0 ${
              isMobile ? "bg-black/50" : "bg-gradient-to-t from-black/70 via-black/40 to-black/10"
            }`} />
          </div>
        ))}
      </div>

      {/* Content - adjusted for mobile */}
      <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 animate-fadeInUp">
            Code For Future
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl max-w-xs xs:max-w-sm sm:max-w-2xl mb-2 sm:mb-3 md:mb-5 px-2 animate-fadeInUp delay-100">
            Software Solutions for a Smarter World
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-[#0C359E] hover:bg-[#0a2d85] text-white px-5 py-2 sm:px-6 mb-1 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-200 text-sm sm:text-base"
            style={{ minWidth: '120px', minHeight: '44px' }} // Better touch target
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(${isMobile ? '20px' : '30px'}); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp ${isMobile ? '0.8s' : '1s'} ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 40%;
          }
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;