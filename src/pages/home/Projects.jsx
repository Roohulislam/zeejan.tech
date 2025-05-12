import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with payment integration",
      image: "/images/abunaveed.png"
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
    },
    {
      id: 4,
      title: "CMS Website",
      description: "Content management system with custom plugins",
      image: "/images/project4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const timeoutRef = useRef(null);

  // Set number of visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 768) {
        setVisibleItems(2); // Show 2 on tablet/desktop
      } else {
        setVisibleItems(1); // Show 1 on mobile
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Auto-advance slides
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (projects.length > visibleItems) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prev) => 
          (prev + visibleItems) % projects.length
        ),
        5000
      );
    }

    return () => resetTimeout();
  }, [currentIndex, projects.length, visibleItems]);

  // Calculate visible projects
  const getVisibleProjects = () => {
    let endIndex = currentIndex + visibleItems;
    if (endIndex > projects.length) {
      return [
        ...projects.slice(currentIndex),
        ...projects.slice(0, endIndex % projects.length)
      ];
    }
    return projects.slice(currentIndex, endIndex);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our portfolio of successful implementations
          </p>
        </div>

        {/* Carousel Container - Increased size */}
        <div className="relative w-full mx-auto">
          {/* Slides Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out">
              {getVisibleProjects().map((project) => (
                <div 
                  key={project.id}
                  className={`flex-shrink-0 ${
                    visibleItems === 2 ? 'w-1/2 px-4' : 'w-full'
                  }`}
                >
                  {/* Increased size container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100" 
                       style={{ height: '500px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="absolute bottom-8 left-8 text-white max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-200 md:text-lg">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators Only - No Side Buttons */}
          {projects.length > visibleItems && (
            <div className="flex justify-center mt-8">
              {Array.from({ length: Math.ceil(projects.length / visibleItems) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visibleItems)}
                  className={`mx-2 w-4 h-4 rounded-full transition-all ${
                    currentIndex === index * visibleItems ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View projects ${index * visibleItems + 1}-${index * visibleItems + visibleItems}`}
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