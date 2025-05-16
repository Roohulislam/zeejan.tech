import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';

const Visitus = () => {
  const yourLocation = {
    id: 1,
    name: "Our Office",
    address: "Mandian, Abbottabad, KPK, Pakistan",
    phone: "+92 3488560875", // Replace with your actual phone
    email: "your.email@example.com", // Replace with your email
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    coordinates: "34.1463,73.2117", // Abbottabad coordinates (adjust as needed)
  };

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${yourLocation.coordinates}&travelmode=driving`,
            '_blank'
          );
        },
        (error) => {
          // Fallback if user denies location access
          window.open(
            `https://www.google.com/maps?q=${yourLocation.coordinates}`,
            '_blank'
          );
        }
      );
    } else {
      // Fallback for browsers without geolocation
      window.open(
        `https://www.google.com/maps?q=${yourLocation.coordinates}`,
        '_blank'
      );
    }
  };

  return (
    <div className="bg-white py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visit Us in Abbottabad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're located in Mandian, Abbottabad. Come meet us in person!
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-96">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.152763735732!2d73.2095!3d34.1463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA4JzQ2LjciTiA3M8KwMTInNDIuMSJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location in Abbottabad"
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{yourLocation.name}</h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">{yourLocation.address}</p>
                  <button
                    onClick={handleGetDirections}
                    className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block bg-transparent border-none cursor-pointer p-0"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <a href={`tel:${yourLocation.phone}`} className="text-gray-600 hover:text-gray-800">
                  {yourLocation.phone}
                </a>
              </div>
              
              <div className="flex items-start">
                <FiMail className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <a href={`mailto:${yourLocation.email}`} className="text-gray-600 hover:text-gray-800">
                  {yourLocation.email}
                </a>
              </div>
              
              <div className="flex items-start">
                <FiClock className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">{yourLocation.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitus;