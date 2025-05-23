import { useState, useEffect, useRef } from 'react';
import { FaProjectDiagram, FaUsers, FaSmile } from 'react-icons/fa';

const Content = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    team: 0,
    clients: 0
  });

  const targetCounts = {
    projects: 250,
    team: 50,
    clients: 180
  };

  const duration = 2000; // Animation duration in ms
  const animationRef = useRef(null);

  useEffect(() => {
    const animateCounts = (startTime) => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        projects: Math.floor(progress * targetCounts.projects),
        team: Math.floor(progress * targetCounts.team),
        clients: Math.floor(progress * targetCounts.clients)
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(() => animateCounts(startTime));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startTime = Date.now();
            animationRef.current = requestAnimationFrame(() => animateCounts(startTime));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 mt-0.5 py-8 px-4 sm:px-4 lg:px-8">
      <div className="max-w-6xl  mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-xl md:text-3xl font-bold text-gray-800 mb-6">
            Our journey of building success.
          </h2>
          
          {/* Large Paragraph */}
          <p className="text-sm sm:text-xl md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
           With over 5 years of experience, we bring ideas to life through innovative digital solutions, leveraging the latest technologies and creative expertise to drive business growth, exceed expectations, and push the boundaries of what's possible.
          </p>
        </div>

        {/* Metrics Section */}
        <div id="metrics-section" className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-10">
          {/* Completed Projects */}
          <div className="bg-gray-300 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaProjectDiagram className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {counts.projects}+
            </h3>
            <p className="text-xl text-black">Completed Projects</p>
          </div>

          {/* Talented Team */}
          <div className="bg-gray-300 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {counts.team}+
            </h3>
            <p className="text-xl text-black">Talented Team Members</p>
          </div>

          {/* Satisfied Clients */}
          <div className="bg-gray-300 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaSmile className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {counts.clients}+
            </h3>
            <p className="text-xl text-black">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;