import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const Projects = () => {
  // Sample project images - replace with your actual images
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with payment integration",
      image: "/images/abunaveed.png" // Simple public path
    },
    {
      id: 2,
      title: "Mobile Application",
      description: "Cross-platform React Native app",
      image: "/images/wandrlust.png"
    },
    {
      id: 3,
      title: "Dashboard UI",
      description: "Analytics dashboard with real-time data",
      image: "/images/weather.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-advance slides
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (!isHovered && projects.length > 1) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prev) => (prev + 1) % projects.length),
        5000 // Change slide every 5 seconds
      );
    }

    return () => resetTimeout();
  }, [currentIndex, isHovered, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimeout();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetTimeout();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    resetTimeout();
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our portfolio of successful implementations
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gray-100">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-8 left-8 text-white max-w-md">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {projects.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/75"
                aria-label="Previous project"
              >
                <FiChevronLeft size={28} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/75"
                aria-label="Next project"
              >
                <FiChevronRight size={28} />
              </button>
            </>
          )}

          {/* Indicators */}
          {projects.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;