import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaAd, FaHashtag, FaEnvelope, FaChartLine } from 'react-icons/fa';
import { SiGoogleanalytics, SiFacebook, SiSemrush, SiMailchimp, SiGoogleads } from 'react-icons/si';

const Digital = () => {
  return (
    <div className="Digital">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-10 mt-18 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 animate-fadeIn">
            Digital Marketing That Delivers Measurable Results
          </h1>
          <p className="text-base md:text-2xl mb-4 max-w-3xl mx-auto">
            We help you grow online through strategy, creativity, and data.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8  rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            <ServiceCard 
              icon={<FaSearch className="text-2xl text-blue-600" />}
              title="SEO & Content"
              description="Improve visibility and organic traffic with strategic optimization"
            />
            <ServiceCard 
              icon={<FaAd className="text-2xl text-blue-600" />}
              title="PPC (Google Ads)"
              description="Targeted paid campaigns that convert"
            />
            <ServiceCard 
              icon={<FaHashtag className="text-2xl text-blue-600" />}
              title="Social Media Marketing"
              description="Build brand presence and engagement"
            />
            <ServiceCard 
              icon={<FaEnvelope className="text-2xl text-blue-600" />}
              title="Email Campaigns"
              description="Nurture leads and retain customers"
            />
            <ServiceCard 
              icon={<FaChartLine className="text-2xl text-blue-600" />}
              title="Conversion Optimization"
              description="Turn visitors into customers"
            />
          </div>
        </div>
      </section>

      {/* Why Our Strategies Work */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Why Our Strategies Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StrategyPoint 
              title="Data-Driven Decisions"
              description="We base every decision on concrete analytics and performance metrics"
            />
            <StrategyPoint 
              title="Continuous Optimization"
              description="Regular testing and refinement to maximize results"
            />
            <StrategyPoint 
              title="Focus on ROI"
              description="Every dollar spent is tracked and optimized for maximum return"
            />
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tools & Platforms We Use</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <ToolIcon icon={<SiGoogleanalytics className="text-5xl text-blue-600" />} name="Google Analytics" />
            <ToolIcon icon={<SiGoogleads className="text-5xl text-blue-600" />} name="Google Ads" />
            <ToolIcon icon={<SiFacebook className="text-5xl text-blue-600" />} name="Facebook Ads" />
            <ToolIcon icon={<SiSemrush className="text-5xl text-blue-600" />} name="SEMrush" />
            <ToolIcon icon={<SiMailchimp className="text-5xl text-blue-600" />} name="Mailchimp" />
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-8 px-4 mb-1 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Brand Online?</h2>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
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
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StrategyPoint = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ToolIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center w-24">
    <div className="mb-2">{icon}</div>
    <span className="text-sm text-center text-gray-700">{name}</span>
  </div>
);

const CaseStudy = ({ title, result, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <div className="text-2xl font-bold text-purple-600 mb-3">{result}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ step, title, description }) => (
  <div className="text-center mb-8 md:mb-0 relative">
    <div className="bg-purple-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
      {step}
    </div>
    <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 max-w-xs mx-auto">{description}</p>
    {step !== '5' && (
      <div className="hidden md:block absolute top-6 left-full w-8 h-1 bg-purple-200"></div>
    )}
  </div>
);

export default Digital;