import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPencilRuler, FaMobileAlt, FaPalette, FaHandPointer } from 'react-icons/fa';
import { SiFigma, SiAdobexd, SiSketch, SiInvision } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';

const Ui = () => {
  // Sample portfolio images

  return (
    <div className="Ui">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-8  mt-18 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-xl md:text-2xl font-bold mb-3">
            Exceptional Interfaces That Connect
          </h1>
          <p className="text-base md:text-xl mb-6 max-w-3xl mx-auto">
            We design digital experiences that are intuitive, accessible, and visually stunning.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-purple-50 font-semibold py-3 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <ServiceCard 
              icon={<FaSearch className="text-3xl text-blue-600" />}
              title="UI/UX Audits"
              description="Comprehensive evaluation of your current interfaces"
            />
            <ServiceCard 
              icon={<FaPencilRuler className="text-3xl text-blue-600" />}
              title="Wireframing & Prototyping"
              description="Blueprint and interactive models of your product"
            />
            <ServiceCard 
              icon={<FaMobileAlt className="text-3xl text-blue-600" />}
              title="Mobile & Web App Design"
              description="Platform-specific interface designs"
            />
            <ServiceCard 
              icon={<FaPalette className="text-3xl text-blue-600" />}
              title="Design Systems"
              description="Consistent component libraries and style guides"
            />
            <ServiceCard 
              icon={<FaHandPointer className="text-3xl text-blue-600" />}
              title="Interaction Design"
              description="Engaging micro-interactions and animations"
            />
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Design Process</h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <ProcessStep 
                step="1"
                title="Research"
                description="User needs and market analysis"
              />
              <ProcessStep 
                step="2"
                title="Wireframe"
                description="Structural layout planning"
              />
              <ProcessStep 
                step="3"
                title="Prototype"
                description="Interactive mockups"
              />
              <ProcessStep 
                step="4"
                title="User Testing"
                description="Validation with real users"
              />
              <ProcessStep 
                step="5"
                title="Final Design"
                description="Production-ready assets"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Tools We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ToolCard 
              icon={<SiFigma className="text-5xl text-blue-400" />}
              name="Figma"
            />
            <ToolCard 
              icon={<SiAdobexd className="text-5xl text-blue-400" />}
              name="Adobe XD"
            />
            <ToolCard 
              icon={<SiSketch className="text-5xl text-blue-400" />}
              name="Sketch"
            />
            <ToolCard 
              icon={<SiInvision className="text-5xl text-blue-400" />}
              name="InVision"
            />
          </div>
        </div>
      </section>

     

      {/* Why Our Design Works */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Our Design Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DesignPrinciple 
              title="Human-Centered Design"
              description="We prioritize real user needs and behaviors in every decision"
            />
            <DesignPrinciple 
              title="Accessibility-First"
              description="WCAG compliant designs that work for everyone"
            />
            <DesignPrinciple 
              title="Conversion Optimized"
              description="Interfaces designed to drive engagement and action"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 mb-1 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Design That Makes a Difference</h2>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 text-center h-full">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ step, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
      {step}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ToolCard = ({ icon, name }) => (
  <div className="flex flex-col items-center w-28">
    <div className="bg-white p-4 rounded-full shadow-sm mb-3">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

const PortfolioItem = ({ image, title }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  </div>
);

const DesignPrinciple = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Ui;