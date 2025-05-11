import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" }
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/web" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Cloud Solutions", href: "/services/cloud" }
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "Support", href: "/support" },
    { name: "API Status", href: "/status" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">TechSolutions</h3>
            <p className="text-gray-400">
              Building innovative digital solutions to transform businesses and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">123 Tech Park, Silicon Valley, CA 94000</p>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-gray-400 mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="text-gray-400 mr-3" />
                <a href="mailto:contact@techsolutions.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@techsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Subscribe to our newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              We'll never share your email. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} TechSolutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;