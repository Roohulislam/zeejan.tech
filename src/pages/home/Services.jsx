import React, { useEffect, useState } from "react";
import { getServicesImgUrl } from "../../utils/getImgUrl";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  // Fetch services data
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
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Discover our wide range of air cargo solutions tailored to meet your
          shipping needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold hover:text-primary text-gray-800 cursor-pointer mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="p-6 mt-auto">
                <button className="w-full py-2 bg-primary text-black font-medium rounded hover:bg-yellow-500 transition">
                  Get a Quick Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider navigation */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-4 py-2  bg-gray-800 rounded hover:bg-gray-300"
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
                  ? "bg-primary text-white"
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
