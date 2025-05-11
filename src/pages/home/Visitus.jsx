import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';

const Visitus = () => {
  const locations = [
    {
      id: 1,
      name: "Headquarters",
      address: "123 Tech Park, Silicon Valley, CA 94000",
      phone: "+1 (555) 123-4567",
      email: "hq@yourcompany.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=123+Tech+Park,+Silicon+Valley,+CA+94000",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3327716300036!2d-121.899023724014!3d37.3348562721016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb43b6d783a5%3A0x8c891b845d1deb3f!2s123%20Tech%20Park%2C%20Silicon%20Valley%2C%20CA%2094000!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
    },
    {
      id: 2,
      name: "Development Center",
      address: "456 Innovation Blvd, Austin, TX 78701",
      phone: "+1 (555) 987-6543",
      email: "dev@yourcompany.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      mapUrl: "https://maps.google.com/?q=456+Innovation+Blvd,+Austin,+TX+78701",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.234567890123!2d-97.74399999999999!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469ad6f!2s456%20Innovation%20Blvd%2C%20Austin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Offices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find us at these locations. We'd love to meet you in person!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64">
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Map to ${location.name}`}
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{location.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiMapPin className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">{location.address}</p>
                      <a 
                        href={location.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiPhone className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-gray-800">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <FiMail className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-gray-800">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <FiClock className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visitus;