// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaCode, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/image/alogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', icon: <FaLaptopCode className="mr-1" /> },
    { name: 'Projects', path: '/projects', icon: <FaCode className="mr-1" /> },
    { name: 'Technologies', path: '/mobile', icon: <FaMobileAlt className="mr-1" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="mr-1" /> },
    { name: 'Location', path: '/about', icon: <FaMapMarkerAlt className="mr-1" /> }
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto" />
              <span className="ml-1 text-xl font-semibold text-gray-800">Z&R tech</span>
            </a>
          </div>

          {/* Desktop Navigation - All items in one line */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md flex items-center transition-colors whitespace-nowrap"
                >
                  {link.icon && link.icon}
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* CTA Button with proper spacing */}
            <div className="ml-4">
              <a
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="block mx-2 mt-2 px-3 py-2 rounded-md text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700"
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