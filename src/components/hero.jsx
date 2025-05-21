import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Correct paths - no process.env.PUBLIC_URL needed for Vercel
  const desktopSlides = [
    "/images/heropic/1.jpg",
    "/images/heropic/2.jpg",
    "/images/heropic/3.jpg",
    "/images/heropic/4.jpg",
    "/images/heropic/5.jpg",
    "/images/heropic/6.jpg",
    "/images/heropic/7.jpg",
    "/images/heropic/8.jpg",
    "/images/heropic/9.jpg",
  ];

  const mobileSlides = [
    "/images/mobailslider/web.avif",
    "/images/mobailslider/mobile.png", 
    "/images/mobailslider/digital.avif",
    "/images/mobailslider/ai.png",
    "/images/mobailslider/brand.webp",
    "/images/mobailslider/staf.webp",
    "/images/mobailslider/ml.avif",
    "/images/mobailslider/custom.avif",
    "/images/mobailslider/ecom.avif",
    "/images/mobailslider/ui.avif",
    "/images/mobailslider/ux.webp",
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      try {
        await Promise.all(
          slides.map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; // Continue even if some fail
            });
          })
        );
        if (isMounted) setLoaded(true);
      } catch (error) {
        console.error("Image loading error:", error);
        if (isMounted) setLoaded(true);
      }
    };

    loadImages();
    return () => { isMounted = false; };
  }, [slides]);

  // Auto-advance slides
  useEffect(() => {
    if (!loaded || slides.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, isMobile ? 3000 : 5000);

    return () => clearInterval(interval);
  }, [loaded, slides.length, isMobile]);

  if (!loaded) {
    return (
      <div className="relative h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F6F5F5]">
      {/* Image slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: isMobile ? 'top center' : 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className={`absolute inset-0 ${
              isMobile ? "bg-black/50" : "bg-gradient-to-t from-black/70 via-black/40 to-black/10"
            }`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-4 text-white pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Code For Future
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl max-w-xs xs:max-w-sm sm:max-w-2xl mb-2 sm:mb-3 md:mb-5 px-2">
            Software Solutions for a Smarter World
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-[#0C359E] hover:bg-[#0a2d85] text-white px-5 py-2 sm:px-6 mb-1 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            style={{ minWidth: '120px', minHeight: '44px' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;