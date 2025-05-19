import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShoppingCart, 
  FaMobileAlt, 
  FaChartLine, 
  FaShieldAlt, 
  FaSearch, 
  FaBoxOpen, 
  FaCreditCard, 
  FaHeadset,
  FaCheck,
  FaPalette,
  FaCode,
  FaShopify,
  FaWordpress,
  FaFire,
  FaReact,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';
import eimg from "../../assets/image/ecom.avif"

const E_commerce = () => {
  return (
    <div className="E_commerce">
      {/* Hero Section */}
      <section className="hero-section bg-blue-800 mt-18 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fadeIn">E-Commerce Solutions That Convert</h1>
          <p className="text-base md:text-xl mb-4 max-w-3xl mx-auto">We build high-performance online stores that drive sales and customer loyalty.</p>
          <Link 
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-top gap-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img 
                src={eimg} 
                alt="E-Commerce Development" 
                className="rounded-xl shadow-lg w-full h-auto"
                onError={(e) => { e.target.src = '/fallback-ecommerce-image.jpg'; }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Tailored E-Commerce Experiences</h2>
              <p className="text-base text-gray-600 mb-4">
                In today's competitive online marketplace, your store needs to be more than just functional—it needs to 
                be fast, intuitive, and optimized for conversions at every touchpoint.
              </p>
              <p className="text-base text-gray-600">
                We develop custom e-commerce solutions that integrate seamlessly with your operations while delivering 
                exceptional shopping experiences that keep customers coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="solutions-section py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our E-Commerce Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solution 1 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaShoppingCart className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Custom Online Stores</h3>
              <p className="text-gray-600 mb-4">
                Fully customized e-commerce platforms built for your specific products and customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Product configurators</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Advanced search & filters</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Tailored checkout flows</li>
              </ul>
            </div>
            
            {/* Solution 2 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaMobileAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile Commerce</h3>
              <p className="text-gray-600 mb-4">
                Optimized shopping experiences for smartphone users with app-like performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Progressive Web Apps</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Native mobile apps</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> One-click purchasing</li>
              </ul>
            </div>
            
            {/* Solution 3 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaChartLine className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Conversion Optimization</h3>
              <p className="text-gray-600 mb-4">
                Data-driven improvements to maximize your store's sales potential.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> A/B testing</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Checkout streamlining</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Personalization engines</li>
              </ul>
            </div>
            
            {/* Solution 4 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Payments</h3>
              <p className="text-gray-600 mb-4">
                PCI-compliant payment solutions with fraud protection.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Multi-payment gateway</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Subscription billing</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> One-click checkout</li>
              </ul>
            </div>
            
            {/* Solution 5 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaSearch className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Search & Discovery</h3>
              <p className="text-gray-600 mb-4">
                AI-powered product discovery tools to help customers find what they want.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Visual search</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Recommendation engines</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Semantic search</li>
              </ul>
            </div>
            
            {/* Solution 6 */}
            <div className="solution-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <FaBoxOpen className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Inventory & Fulfillment</h3>
              <p className="text-gray-600 mb-4">
                Backend systems that sync with your supply chain and logistics.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Real-time stock management</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Dropshipping integration</li>
                <li className="flex items-center"><FaCheck className="mr-2 text-blue-500" /> Warehouse management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Work With */}
      <section className="platforms-section py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Platforms & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="platform-card flex flex-col items-center">
              <FaShopify className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-600">Shopify</span>
            </div>
            <div className="platform-card flex flex-col items-center">
              <FaWordpress className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-600">WooCommerce</span>
            </div>
            <div className="platform-card flex flex-col items-center">
              <FaFire className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-600">Magento</span>
            </div>
            <div className="platform-card flex flex-col items-center">
              <FaReact className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-600">React</span>
            </div>
            <div className="platform-card flex flex-col items-center">
              <FaNodeJs className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-600">Node.js</span>
            </div>
            <div className="platform-card flex flex-col items-center">
              <FaDatabase className="text-5xl text-blue-700 mb-2" />
              <span className="text-gray-600">MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
     

      {/* CTA Section */}
      <section className="cta-section py-8 px-4 mb-1 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Ready to Build Your E-Commerce Store?</h2>
          <p className="text-base text-blue-100 mb-6">
            Let's create an online shopping experience that converts visitors into loyal customers.
          </p>
          <Link 
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default E_commerce;