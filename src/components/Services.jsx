// Services.jsx
import React, { useEffect, useState } from "react";
import { getServicesImgUrl } from "../utils/getImgUrl";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services:", error));
  }, []);

  const totalPages = Math.ceil(services.length / servicesPerPage);
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section id="services" className="py-18" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center text-gray-800 mb-4">
          Services
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 text-center">
          Our software services empower businesses to innovate, streamline operations, and drive growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={getServicesImgUrl(service.image)}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 flex-grow">
                <h3 className="text-xl font-semibold hover:text-blue-700 text-gray-800 cursor-pointer mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="p-6 mt-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="/contactus" 
                    className="flex-1 py-2 font-medium rounded transition hover:shadow-lg text-center"
                    style={{ 
                      backgroundColor: '#0C359E',
                      color: 'white'
                    }}
                  >
                    Quick Quote
                  </a>
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 py-2 font-medium rounded transition hover:shadow-lg text-center border border-gray-300 hover:bg-gray-100"
                    style={{ 
                      color: '#0C359E'
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination remains the same */}
           <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;