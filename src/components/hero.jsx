import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

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

  // Handle resize and mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload images with error handling
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      try {
        await Promise.all(
          slides.map((src) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; // Continue even if some images fail
            });
          })
        );
        if (isMounted) setLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        if (isMounted) setLoaded(true); // Still show content even if images fail
      }
    };

    loadImages();
    return () => { isMounted = false; };
  }, [slides]);

  // Slide change interval with cleanup
  useEffect(() => {
    if (!loaded) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, isMobile ? 2000 : 5000);
    
    return () => clearInterval(interval);
  }, [loaded, isMobile, slides.length]);

  // Loading state
  if (!loaded) {
    return (
      <div 
        ref={heroRef}
        className="w-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white"
        style={{ 
          height: isMobile ? '60vh' : '100vh',
          minHeight: isMobile ? '200px' : '700px'
        }}
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-lg font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section 
      ref={heroRef}
      className="relative mt-18 w-full overflow-hidden bg-gray-900"
      style={{ 
        height: isMobile ? '60vh' : '100vh',
        minHeight: isMobile ? '200px' : '700px'
      }}
    >
      {/* Background slides with optimized rendering */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className={`absolute inset-0 ${
              isMobile 
                ? 'bg-black/60' 
                : 'bg-gradient-to-t from-black/80 via-black/50 to-transparent'
            }`} />
          </div>
        ))}
      </div>

      {/* Content with responsive adjustments - Only keeping the Get Started button */}
      <div className="relative z-10 flex flex-col items-center justify-end  h-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fadeInUp delay-200">
          <Link
            to="/contactus"
            className="inline-block px-8 py-3 mb-18 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Scroll indicator for desktop */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
          </div>
        </div>
      )}

      {/* Custom animations in CSS */}
      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-15px);}
          60% {transform: translateY(-7px);}
        }
        @keyframes scrollIndicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(5px); opacity: 0.5; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-scrollIndicator {
          animation: scrollIndicator 1.5s infinite;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;