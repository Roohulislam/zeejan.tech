import React from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
  return (
    <section className="py-1 mt-18 bg-gradient-to-b from-gray-50 to-white px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center bg-blue-800  px-4 py-8 rounded-sm sm:px-6 lg:px-8 text-white shadow-xl mb-1">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 leading-tight">
          Transform Your Digital Presence
        </h1>
        <p className="text-base md:text-2xl max-w-4xl mx-auto mb-2">
          We craft high-performance web solutions that drive engagement, conversions, and business growth.
        </p>
        <div className="flex flex-col py-4 sm:flex-row justify-center gap-2">
          <Link
            to="/contactus"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Project
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:text-xl">
            Comprehensive Web Solutions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            From sleek corporate websites to complex web applications, we deliver tailored solutions for every business need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            {
              title: 'Custom Web Applications',
              icon: '💻',
              description: 'Tailored solutions that solve your unique business challenges with scalable architecture.'
            },
            {
              title: 'eCommerce Platforms',
              icon: '🛒',
              description: 'High-converting online stores with seamless payment integrations and inventory management.'
            },
            {
              title: 'Enterprise Portals',
              icon: '🏢',
              description: 'Secure internal systems that streamline operations and improve productivity.'
            },
            {
              title: 'CMS Development',
              icon: '📝',
              description: 'Easy-to-manage content systems that empower your marketing team.'
            },
            {
              title: 'API Integration',
              icon: '🔗',
              description: 'Connect your web applications with third-party services and internal systems.'
            },
            {
              title: 'Progressive Web Apps',
              icon: '📱',
              description: 'App-like experiences that work offline and load instantly.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Technology Stack
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build fast, secure, and scalable web solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {[
            { name: 'React', logo: '⚛️', category: 'Frontend' },
            { name: 'Next.js', logo: '⏭️', category: 'Frontend' },
            { name: 'Node.js', logo: '🟢', category: 'Backend' },
            { name: 'TypeScript', logo: '🔷', category: 'Language' },
            { name: 'GraphQL', logo: '📊', category: 'API' },
            { name: 'MongoDB', logo: '🍃', category: 'Database' },
            { name: 'PostgreSQL', logo: '🐘', category: 'Database' },
            { name: 'AWS', logo: '☁️', category: 'Cloud' },
            { name: 'Docker', logo: '🐳', category: 'DevOps' },
            { name: 'Tailwind CSS', logo: '🎨', category: 'Styling' }
          ].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:border-blue-300 transition-colors duration-300"
            >
              <span className="text-2xl">{tech.logo}</span>
              <div>
                <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-3"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            A transparent, collaborative approach that ensures your vision becomes reality.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 -ml-px"></div>

          {[
            {
              step: 'Discovery',
              description: 'We analyze your requirements and business objectives to create a strategic plan.',
              icon: '🔍'
            },
            {
              step: 'Design',
              description: 'Our designers create intuitive user interfaces and seamless experiences.',
              icon: '🎨'
            },
            {
              step: 'Development',
              description: 'Agile development with continuous testing and iterative improvements.',
              icon: '💻'
            },
            {
              step: 'Deployment',
              description: 'Smooth launch with comprehensive documentation and training.',
              icon: '🚀'
            },
            {
              step: 'Optimization',
              description: 'Ongoing performance tuning and feature enhancements.',
              icon: '⚡'
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`relative mb-10 lg:flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
            >
              <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.step}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto bg-blue-800 rounded-sm px-4 py-6 sm:px-6 lg:px-8 text-center text-white shadow-xl">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base md:text-2xl max-w-4xl mx-auto mb-2">
          Let's discuss how we can help you achieve your digital goals.
        </p>
        <Link
          to="/contactus"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Web;
