import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms like AWS and Azure. Our team is also proficient in mobile development with React Native and Flutter.",
      learnMore: "https://example.com/technologies"
    },
    {
      question: "How do you ensure project security?",
      answer: "We implement industry-standard security practices including code reviews, penetration testing, and compliance with OWASP guidelines. All projects include SSL encryption and regular security audits.",
      learnMore: "https://example.com/security"
    },
    {
      question: "What's your development process?",
      answer: "We follow Agile methodology with 2-week sprints, daily standups, and continuous integration. Our process includes discovery, design, development, testing, and deployment phases.",
      learnMore: "https://example.com/process"
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer tiered support packages with 24/7 emergency coverage. Our standard SLA guarantees response within 4 business hours for critical issues.",
      learnMore: "https://example.com/support"
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed-price for well-defined projects and time-and-materials for evolving requirements. All estimates include detailed breakdowns.",
      learnMore: "https://example.com/pricing"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-500 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-500 text-xl" />
                )}
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-6 pb-6 pt-0 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600 mb-4">{faq.answer}</p>
                <a
                  href={faq.learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Learn more <FiExternalLink className="ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;