import { FaShieldAlt, FaRocket, FaLightbulb, FaHandshake, FaChartLine, FaCode } from 'react-icons/fa';

const Choose = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Robust Security",
      description: "Enterprise-grade security protocols to protect your data and applications from modern threats."
    },
    {
      icon: <FaRocket className="text-3xl text-purple-600" />,
      title: "Cutting-Edge Tech",
      description: "We work with the latest technologies to future-proof your digital solutions."
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovative Approach",
      description: "Creative problem-solving that transforms challenges into competitive advantages."
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600" />,
      title: "Client-Centric",
      description: "Your success is our priority. We collaborate closely to understand your unique needs."
    },
    {
      icon: <FaChartLine className="text-3xl text-red-500" />,
      title: "Proven Results",
      description: "Track record of delivering measurable business impact through technology."
    },
    {
      icon: <FaCode className="text-3xl text-indigo-600" />,
      title: "Clean Code",
      description: "Meticulously crafted codebase that's scalable, maintainable, and efficient."
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Software House
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver digital solutions that drive growth, 
            efficiency, and competitive advantage for our clients worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-200 p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gray-50 shadow-sm mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 pl-16">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-4 text-center">
          <button 
            className="font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            style={{ 
              backgroundColor: '#0C359E',
              color: 'white'
            }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose;