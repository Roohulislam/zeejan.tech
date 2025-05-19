import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartLine, FaCloud, FaCogs, FaDatabase } from 'react-icons/fa';
import cimg from "../../assets/image/custom.avif";
const Custom = () => {
  return (
    <div className="Custom">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-6 px-4 mt-18">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Tailored Software. Real Results.
          </h1>
          <p className="text-base md:text-xl mb-4 max-w-3xl mx-auto">
            We build scalable, custom software solutions that solve your unique business challenges.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={cimg}
                alt="Custom Software Development" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Precision-Built Software Solutions</h2>
              <p className="text-base text-gray-600 mb-2">
                Off-the-shelf software often comes with limitations and compromises. Our custom solutions are engineered 
                specifically for your business needs, eliminating inefficiencies and giving you a competitive edge.
              </p>
              <p className="text-base text-gray-600">
                We develop software that grows with your business, with architecture designed for scalability, 
                security, and seamless integration with your existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Deliver */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Solutions We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <SolutionCard 
              icon={<FaLaptopCode className="text-3xl text-blue-600" />}
              title="Enterprise Applications"
              description="Comprehensive systems for large-scale business operations"
            />
            <SolutionCard 
              icon={<FaChartLine className="text-3xl text-blue-600" />}
              title="CRM/ERP Systems"
              description="Custom customer and resource management platforms"
            />
            <SolutionCard 
              icon={<FaCloud className="text-3xl text-blue-600" />}
              title="SaaS Platforms"
              description="Cloud-based software with subscription models"
            />
            <SolutionCard 
              icon={<FaCogs className="text-3xl text-blue-600" />}
              title="Workflow Automation"
              description="Streamline and automate business processes"
            />
            <SolutionCard 
              icon={<FaDatabase className="text-3xl text-blue-600" />}
              title="Database Design"
              description="Optimized data storage and retrieval systems"
            />
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Our Development Process</h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              <ProcessStep 
                step="1"
                title="Discovery"
                description="Requirement analysis"
              />
              <ProcessStep 
                step="2"
                title="Planning"
                description="Technical specifications"
              />
              <ProcessStep 
                step="3"
                title="UI/UX Design"
                description="Interface creation"
              />
              <ProcessStep 
                step="4"
                title="Development"
                description="Agile coding"
              />
              <ProcessStep 
                step="5"
                title="QA"
                description="Testing & refinement"
              />
              <ProcessStep 
                step="6"
                title="Deployment"
                description="Implementation"
              />
              <ProcessStep 
                step="7"
                title="Support"
                description="Ongoing maintenance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Frameworks */}
     


      {/* CTA Section */}
      <section className="py-10 px-4 bg-blue-800 mb-1 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Software That Works for You</h2>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ step, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
      {step}
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TechStackItem = ({ icon, name }) => (
  <div className="flex flex-col items-center w-24">
    <div className="mb-2">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

const ProjectCaseStudy = ({ title, result, description, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <div className="text-xl font-bold text-blue-600 mb-3">{result}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Custom;