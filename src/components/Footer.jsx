import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Technologies", href: "/technology" },
    { name: "About Us", href: "/contactus" }
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Cloud Solutions", href: "/services" }
  ];

  const handleEmailClick = () => {
    // This will directly open the user's default email client
    window.location.href = "mailto:zeejantech@gmail.com?subject=Inquiry%20from%20ZEEJAN.tech%20Website&body=Hello%20ZEEJAN.tech%20Team,";
  };

  return (
    <footer className="bg-[#0C359E] text-white w-full">
      {/* Banner Section */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-center py-4 px-6 rounded-b-lg shadow-md">
        <p className="text-base sm:text-lg md:text-xl font-medium px-2">
          🚀 Want to accelerate your digital transformation?{' '}
          <a href="/contactus" className="underline hover:text-blue-200 transition-colors">
            Get in touch with us today!
          </a>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-xl font-bold">ZEEJAN.tech</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Building innovative digital solutions to transform businesses and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/zeejan-tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors text-lg sm:text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.facebook.com/share/196P4ndrYW/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors text-lg sm:text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=y8yq4in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors text-lg sm:text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.tiktok.com/@zeejan.tech?_t=ZS-8wUaOq5n36v&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors text-lg sm:text-xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <FiMapPin className="text-blue-100 mt-1 mr-3 flex-shrink-0" />
                <p className="text-blue-100 text-sm sm:text-base">
                  Pakistan, KPK, Abbottabad mandian
                </p>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-blue-100 mr-3" />
                <a 
                  href="tel:+923488560875" 
                  className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +92 348 8560875
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="text-blue-100 mr-3" />
                <button
                  onClick={handleEmailClick}
                  className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base text-left"
                >
                  zeejantech@gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-blue-400 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Subscribe to our newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 sm:py-3 rounded-lg bg-blue-900 bg-opacity-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-blue-200 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs sm:text-sm text-blue-200 mt-2 sm:mt-3">
              We'll never share your email. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 border-t border-blue-400 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-xs sm:text-sm">
            &copy; {currentYear} ZEEJAN.tech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <a 
              href="/privacy" 
              className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/cookies" 
              className="text-blue-200 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;