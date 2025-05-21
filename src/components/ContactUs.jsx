import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // EmailJS configuration
  const SERVICE_ID = 'service_ub8n3ho';
  const CONTACT_TEMPLATE_ID = 'template_ut3jdvc';
  const AUTO_REPLY_TEMPLATE_ID = 'template_qm1mi2y';
  const USER_ID = 'V5BnvkpAehYNLF9-X';

  const companyInfo = {
    email: 'zeejantech@gmail.com',
    phone: '+44 7731 602738',
    address: '123 Business Park, Tech City, TC 10001',
    linkedin: 'https://linkedin.com/company/zandrtech',
    facebook: 'https://www.facebook.com/share/196P4ndrYW/',
    whatsapp: 'https://wa.me/447731602738',
    instagram: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=y8yq4in',
    tiktok: 'https://www.tiktok.com/@zeejan.tech?_t=ZS-8wUaOq5n36v&_r=1'
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      showAlert('error', 'Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showAlert('error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data objects
      const contactData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'No subject provided',
        message: formData.message
      };

      const autoReplyData = {
        to_name: formData.name,
        to_email: formData.email,
        subject: `Re: ${formData.subject || 'Your Inquiry'}`,
        original_message: formData.message,
        company_name: "ZEEJAN.tech",
        response_time: "1-3 business days",
        support_email: companyInfo.email,
        current_date: new Date().toLocaleDateString()
      };

      // Send to company first
      const primaryResponse = await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        contactData,
        USER_ID
      );

      // Only send auto-reply if primary email succeeded
      if (primaryResponse.status === 200) {
        await emailjs.send(
          SERVICE_ID,
          AUTO_REPLY_TEMPLATE_ID,
          autoReplyData,
          USER_ID
        );
      }

      showAlert('success', 'Thank you for your message! We will get back to you soon. A confirmation has been sent to your email.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Redirect after delay
      setTimeout(() => navigate('/'), 2000);

    } catch (error) {
      console.error('EmailJS error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message
      });

      let userErrorMessage = 'There was an error sending your message. Please try again.';
      
      if (error.text?.includes('recipients address is empty')) {
        userErrorMessage = 'Email sending failed: Please provide a valid email address.';
      }

      showAlert('error', userErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-18 px-4 sm:px-6 lg:px-8 relative">
      {/* Modern Alert */}
      {alert.show && (
        <div className={`fixed top-4 right-4 z-50 max-w-md w-full transform transition-all duration-300 ${alert.show ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className={`p-4 rounded-lg shadow-lg border-l-4 ${alert.type === 'success' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {alert.type === 'success' ? (
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${alert.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {alert.message}
                </p>
              </div>
              <div className="ml-auto pl-3">
                <button
                  onClick={() => setAlert({ ...alert, show: false })}
                  className={`inline-flex rounded-md focus:outline-none ${alert.type === 'success' ? 'hover:bg-green-100 text-green-500' : 'hover:bg-red-100 text-red-500'}`}
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 sticky top-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-lg mr-4">
                  <FiPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <a 
                    href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-purple-50 p-3 rounded-lg mr-4">
                  <FiMapPin className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Office</h3>
                  <p className="text-gray-700">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Media - Updated with new platforms */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a 
                  href={companyInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                
                {/* Facebook */}
                <a 
                  href={companyInfo.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                
                {/* WhatsApp */}
                <a 
                  href={companyInfo.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
                
                {/* Instagram */}
                <a 
                  href={companyInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                
                {/* TikTok */}
                <a 
                  href={companyInfo.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-black hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;