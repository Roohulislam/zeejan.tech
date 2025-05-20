import { FaHeartbeat, FaShoppingCart, FaMoneyBillWave, FaGraduationCap, FaTruck, FaPlane, FaRunning, FaArrowRight } from 'react-icons/fa';

const Industries = () => {
  const industries = [
    {
      icon: <FaHeartbeat className="text-3xl text-blue-600" />,
      title: "Healthcare",
      description: "Custom healthcare solutions including EHR systems, telemedicine platforms, and medical IoT applications."
    },
    {
      icon: <FaShoppingCart className="text-3xl text-blue-600" />,
      title: "E-Commerce",
      description: "Scalable online stores, marketplace platforms, and personalized shopping experiences."
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      title: "Finance",
      description: "Fintech solutions, banking apps, payment gateways, and financial analytics tools."
    },
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      title: "Education",
      description: "E-learning platforms, LMS systems, and educational mobile applications."
    },
    {
      icon: <FaTruck className="text-3xl text-blue-600" />,
      title: "Logistics",
      description: "Supply chain management systems, fleet tracking, and warehouse automation solutions."
    },
    {
      icon: <FaPlane className="text-3xl text-blue-600" />,
      title: "Travel",
      description: "Booking engines, travel management systems, and tourism mobile apps."
    },
    {
      icon: <FaRunning className="text-3xl text-blue-600" />,
      title: "Sports",
      description: "Sports analytics platforms, fitness apps, and event management systems."
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="max-w-8xl mx-auto">
        {/* Mobile-only heading section (shown only on small screens) */}
        <div className="lg:hidden text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:3xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            We deliver tailored software solutions that address unique challenges across diverse sectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Left Column - Heading, Paragraph, and CTA (hidden on mobile, shown on desktop) */}
          <div className="hidden lg:flex lg:w-1/2 flex-col">
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-2xl font-bold text-gray-900 mb-6">
                Industries We Transform
              </h2>
              <p className="text-lg text-gray-600 space-y-3">
      We deliver tailored software solutions that address unique challenges across diverse sectors, 
      helping businesses innovate and excel in their respective markets. From startups to enterprises, 
      we empower organizations through modern web, mobile, and cloud technologies designed to streamline 
      operations, enhance customer experience, and drive digital transformation.
      
      
      Our team brings deep domain knowledge and agile development practices to industries such as:
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Healthcare</span>
      Building HIPAA-compliant platforms, telemedicine apps, and AI-driven diagnostics to improve patient care and operational efficiency.
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Finance</span>
      Developing secure fintech solutions, blockchain applications, and automated trading systems to enhance transparency and agility.
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Education</span>
      Creating interactive e-learning platforms, virtual classrooms, and AI-powered tutoring systems to revolutionize modern education.
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Retail & E-Commerce</span>
      Designing scalable online marketplaces, personalized shopping experiences, and omnichannel retail solutions to boost sales and engagement.
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Logistics & Supply Chain</span>
      Implementing IoT-enabled tracking, warehouse automation, and AI-driven route optimization for smarter logistics management.
      <br /><br />
      
      <span className="block font-semibold text-gray-800">Manufacturing</span>
      Leveraging Industry 4.0 technologies like predictive maintenance, smart factories, and digital twins to optimize production and reduce downtime.
    </p>
              <button 
                className="flex items-center justify-center gap-2 font-medium py-3 mt-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#0C359E',
                  color: 'white'
                }}
              >
                View All Industries
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Column - Industry Cards (Vertical List) */}
          <div className="w-full lg:w-1/2 space-y-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200"
              >
                <div className="flex items-start">
                  <div className="p-3 mr-4 rounded-full bg-gray-50">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only CTA button (shown only on small screens) */}
        <div className="lg:hidden mt-8 text-center">
          <button 
            className="flex items-center justify-center gap-2 font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg mx-auto"
            style={{ 
              backgroundColor: '#0C359E',
              color: 'white'
            }}
          >
            View All Industries
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industries;