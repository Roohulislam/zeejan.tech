import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss how we can help your business? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <FiMail className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Email</h4>
                    <a href="mailto:contact@yourcompany.com" className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base">
                      contact@yourcompany.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <FiPhone className="text-green-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <FiMapPin className="text-purple-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Office</h4>
                    <p className="text-gray-600 text-sm sm:text-base">123 Tech Park, Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="bg-gray-100 p-2 sm:p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 sm:p-3 rounded-full hover:bg-blue-100 hover:text-blue-400 transition-colors">
                    <FaTwitter className="text-lg sm:text-xl" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 sm:p-3 rounded-full hover:bg-gray-200 hover:text-gray-800 transition-colors">
                    <FaGithub className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#0C359E' }}
              >
                Send Message <FiSend className="text-base sm:text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;