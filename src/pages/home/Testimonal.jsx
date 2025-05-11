import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions Inc.",
      content: "Working with this team transformed our digital presence. Their innovative approach delivered results 3x faster than our previous vendors.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Finova Corp",
      content: "The software solution they built streamlined our operations by 40%. Their team's technical expertise was exceptional.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director, HealthPlus",
      content: "Our patient portal implementation was flawless. They understood our compliance needs perfectly.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "VP Engineering, RetailTech",
      content: "Their e-commerce solution increased our conversion rate by 35%. Highly recommend their services.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const [currentPair, setCurrentPair] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate total pairs (2 testimonials per pair)
  const totalPairs = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentPair]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPair((prev) => (prev + 1) % totalPairs);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
      setIsTransitioning(false);
    }, 300);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  // Get current pair of testimonials
  const currentTestimonials = [
    testimonials[currentPair * 2],
    testimonials[(currentPair * 2 + 1) % testimonials.length]
  ].filter(Boolean);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by innovative companies worldwide. Here's what they have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col md:flex-row gap-6"
                >
                  <div className="flex flex-col items-center md:items-start">
                    <div className="relative mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -bottom-2 right-0 bg-white p-2 rounded-full shadow-md">
                        <FaQuoteLeft className="text-blue-500 text-lg" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm mb-2">
                        {testimonial.role}
                      </p>
                      <div className="flex justify-center md:justify-start">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-gray-600 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 2 && (
            <>
                   <button 
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
                style={{ left: '-4rem' }} // Adjusted positioning
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="text-blue-600" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
                style={{ right: '-4rem' }} // Adjusted positioning
                aria-label="Next testimonials"
              >
                <FaChevronRight className="text-blue-600" />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPairs }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentPair(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all ${index === currentPair ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;