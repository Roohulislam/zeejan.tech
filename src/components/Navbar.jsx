import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaCode, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/image/flogooo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', icon: <FaLaptopCode className="mr-1" /> },
  { name: 'Projects', path: '/projects', icon: <FaCode className="mr-1" /> },
  { name: 'Technologies', path: '/technology', icon: <FaMobileAlt className="mr-1" /> }, // Fixed path
  { name: 'Contact', path: '/contactus', icon: <FaEnvelope className="mr-1" /> },
  { name: 'Location', path: '/Visitus', icon: <FaMapMarkerAlt className="mr-1" /> } // Fixed path
];

  // Check if we're in md viewport (768px-1023px)
  const isMdViewport = windowWidth >= 768 && windowWidth < 1024;

  return (
    <nav 
      className={`fixed top-0  w-full z-50 shadow-gray-300 shadow-sm`}
      style={{ backgroundColor: '#eae9e7' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex h-16 items-center">
              <img src={logo} alt="Logo" className="h-16 py-2 md:py-2 md:h-18 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {navLinks.map((link, index) => {
                // Skip Location link in md viewport
                if (isMdViewport && link.name === 'Location') return null;
                return (
                  <a
                    key={index}
                    href={link.path}
                    className="px-3 py-2 text-sm sm:mr-0.5 font-medium text-gray-800 hover:text-blue-700 hover:bg-opacity-10 hover:bg-gray-300 rounded-md flex items-center transition-colors whitespace-nowrap"
                  >
                    {link.icon && link.icon}
                    {link.name}
                  </a>
                );
              })}
              
              {/* Show button in place of Location for md viewport */}
              {isMdViewport && (
                <a
                  href="/contact"
                  className="ml-2 px-3 py-2 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap shadow-lg hover:shadow-lg"
                  style={{ backgroundColor: '#0C359E' }}
                >
                  Get a Quote
                </a>
              )}
            </div>
            
            {/* Show button at the end for larger screens */}
            {!isMdViewport && (
              <div className="ml-4">
                <a
                  href="/contact"
                  className="px-4 py-2.5 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#0C359E' }}
                >
                  Get a Quote
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-700 hover:bg-opacity-10 hover:bg-gray-300 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} shadow-lg`}
        style={{ backgroundColor: '#F6F5F5' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-700 hover:bg-opacity-10 hover:bg-gray-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="block mx-2 mt-2 px-3 py-2 rounded-md text-base font-medium text-center text-white"
            style={{ backgroundColor: '#0C359E' }}
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;