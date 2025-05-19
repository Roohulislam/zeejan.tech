import React from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaFont, FaFileAlt, FaLaptop, FaMobileAlt, FaSearch, FaLightbulb, FaPencilAlt, FaComments, FaBoxOpen } from 'react-icons/fa';
import simg from "../../assets/image/staf.webp";
const Startup = () => {
  return (
    <div className="Startup">
      {/* Hero Section */}
      <section className="hero-section bg-blue-800 text-white py-8 mt-18 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fadeIn">Branding That Powers Startups</h1>
          <p className="text-xl md:text-xl mb-4 max-w-3xl mx-auto">We craft identities that grow with your startup—from vision to visibility.</p>
          <Link 
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src={simg} 
                alt="Startup Branding" 
                className="rounded-xl shadow-lg w-full h-auto"
                onError={(e) => { e.target.src = '/fallback-branding-image.jpg'; }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-3 text-gray-800">Foundational Branding for Startups</h2>
              <p className="text-base text-gray-600 mb-3">
                Your brand is more than just a logo—it's the emotional connection between your startup and the world. 
                We create strategic brand identities that communicate your vision, attract investors, and build trust 
                with early adopters.
              </p>
              <p className="text-base text-gray-600">
                From pre-seed to Series A, our branding solutions scale with your growth while maintaining the 
                authenticity that makes your startup unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="services-section py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaPalette className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Brand Identity Design</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive visual identity including logo, color palette, typography, and visual language.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">• Logo design & variations</li>
                <li className="flex items-center">• Brand style guide</li>
                <li className="flex items-center">• Visual asset library</li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaFont className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Naming & Taglines</h3>
              <p className="text-gray-600 mb-4">
                Strategic naming solutions and memorable taglines that capture your essence.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">• Brand naming workshop</li>
                <li className="flex items-center">• Trademark screening</li>
                <li className="flex items-center">• Value proposition crafting</li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaFileAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Pitch Decks & Collateral</h3>
              <p className="text-gray-600 mb-4">
                Investor-ready materials that tell your story and showcase your potential.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">• Pitch deck design</li>
                <li className="flex items-center">• One-pagers</li>
                <li className="flex items-center">• Investor kits</li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaLaptop className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Branding</h3>
              <p className="text-gray-600 mb-4">
                Cohesive online presence across all digital touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">• Website design</li>
                <li className="flex items-center">• Social media branding</li>
                <li className="flex items-center">• Email templates</li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaMobileAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">MVP Design Support</h3>
              <p className="text-gray-600 mb-3">
                Brand-consistent UI/UX for your minimum viable product.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">• App interface design</li>
                <li className="flex items-center">• Landing pages</li>
                <li className="flex items-center">• Prototype styling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Branding Process</h2>
          <div className="process-steps relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-purple-200 z-0"></div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
              {/* Step 1 */}
              <div className="process-step bg-white p-4 rounded-lg shadow-md text-center border border-purple-100">
                <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaSearch className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800">Discovery</h3>
                <p className="text-xs text-gray-500 mt-1">Research & strategy</p>
              </div>
              
              {/* Step 2 */}
              <div className="process-step bg-white p-4 rounded-lg shadow-md text-center border border-purple-100">
                <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaLightbulb className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800">Concept</h3>
                <p className="text-xs text-gray-500 mt-1">Ideation & direction</p>
              </div>
              
              {/* Step 3 */}
              <div className="process-step bg-white p-4 rounded-lg shadow-md text-center border border-purple-100">
                <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaPencilAlt className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800">Design</h3>
                <p className="text-xs text-gray-500 mt-1">Visual development</p>
              </div>
              
              {/* Step 4 */}
              <div className="process-step bg-white p-4 rounded-lg shadow-md text-center border border-purple-100">
                <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaComments className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800">Feedback</h3>
                <p className="text-xs text-gray-500 mt-1">Review & refine</p>
              </div>
              
              {/* Step 5 */}
              <div className="process-step bg-white p-4 rounded-lg shadow-md text-center border border-purple-100">
                <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaBoxOpen className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800">Delivery</h3>
                <p className="text-xs text-gray-500 mt-1">Final assets & guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-10 mb-1 px-4 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Build a Brand Investors and Users Will Love</h2>
          <p className="text-base text-purple-100 mb-4">
            Ready to create a standout identity for your startup?
          </p>
          <Link 
            to="/contactus"
            className="inline-block bg-white text-blue-800 font-semibold py-3 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Startup;