import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaCode, FaPalette, FaSync, FaBell, FaWifi, FaCloudUploadAlt, FaClipboardCheck, FaLaptopCode, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { MdHealthAndSafety, MdSchool, MdLocalShipping, MdShoppingCart } from 'react-icons/md';
import mimg from '../../assets/image/mobail.png';
const Mobile = () => {
  const navigate = useNavigate()

  return (
    <div className="Mobail">
      {/* Hero Section */}
      <section className="hero-section bg-blue-800 text-white py-10 mt-18 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Mobile Apps That Elevate Your Business</h1>
          <p className="text-base md:text-2xl mb-4 max-w-3xl mx-auto">Custom iOS & Android apps with top-tier performance and UX.</p>
          <button 
            onClick={() => navigate('/contactus')}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section py-6 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-3 md:mb-0 md:pr-8">
              <img 
                src={mimg} 
                alt="Mobile App Development" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Mobile-First Solutions</h2>
              <p className="text-base text-gray-600 mb-4">
                In today's mobile-centric world, we build apps with a mobile-first mindset that puts user experience at the forefront. 
                Our approach combines cutting-edge technology with intuitive design to create apps that users love.
              </p>
              <p className="text-base text-gray-600">
                Every app we develop is custom-tailored to your business needs, ensuring seamless functionality across all devices 
                while maintaining the highest performance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="services-section py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service 1 */}
            <div className="service-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaMobileAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Native iOS & Android Apps</h3>
              <p className="text-gray-600">
                High-performance native applications built with Swift, Kotlin, and Java for optimal user experience.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaCode className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cross-Platform Development</h3>
              <p className="text-gray-600">
                Flutter and React Native solutions for businesses needing apps across multiple platforms with single codebase.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="service-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaPalette className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">
                Beautiful, intuitive interfaces designed to maximize user engagement and satisfaction.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="service-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaSync className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">App Maintenance & Updates</h3>
              <p className="text-gray-600">
                Ongoing support, updates, and enhancements to keep your app performing at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Key Features We Implement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="feature-card text-center p-3">
              <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaWifi className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Offline Mode</h3>
              <p className="text-gray-600">
                Apps that work seamlessly even without internet connection, syncing data when back online.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card text-center p-3">
              <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaBell className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Push Notifications</h3>
              <p className="text-gray-600">
                Keep users engaged with timely, personalized notifications that drive retention.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card text-center p-3">
              <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaCloudUploadAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-time Sync</h3>
              <p className="text-gray-600">
                Instant data synchronization across all user devices for seamless multi-platform experiences.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card text-center p-3">
              <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">App Store Publishing</h3>
              <p className="text-gray-600">
                Full-service submission to Apple App Store and Google Play Store with compliance assurance.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section py-10 px-4 mb-1 bg-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Let's Create a Mobile Experience That Works</h2>
          <p className="text-base text-white mb-8">
            Ready to build an app that your customers will love? Get in touch with our team today.
          </p>
          <button 
            onClick={() => navigate('/contactus')}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Get a Quick Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;