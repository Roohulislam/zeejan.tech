import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaCheckCircle, FaPalette, FaServer, FaClock, FaDollarSign, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import stafimg from '../../assets/image/staf.webp';
const Tech = () => {
  return (
    <div className="Tech">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white mt-18 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Expand Your Team with Top Tech Talent
          </h1>
          <p className="text-base md:text-xl mb-6 max-w-3xl mx-auto">
            Access skilled developers, designers, and engineers—on demand.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* What Is Staff Augmentation */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={stafimg}
                alt="Staff Augmentation" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Flexible Team Extension</h2>
              <p className="text-base text-gray-600 mb-3">
                Staff augmentation allows you to quickly scale your team with pre-vetted tech professionals 
                without the overhead of traditional hiring. Get the exact skills you need, when you need them, 
                with none of the long-term commitments.
              </p>
              <p className="text-base text-gray-600">
                Our model provides 40% cost savings compared to full-time hires while giving you complete 
                control over your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Provide */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Roles We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <RoleCard 
              icon={<FaCode className="text-3xl text-blue-600" />}
              title="Frontend & Backend Developers"
              skills="React, Angular, Node.js, Python, .NET"
            />
            <RoleCard 
              icon={<FaMobileAlt className="text-3xl text-blue-600" />}
              title="Mobile App Developers"
              skills="iOS, Android, Flutter, React Native"
            />
            <RoleCard 
              icon={<FaCheckCircle className="text-3xl text-blue-600" />}
              title="QA Engineers"
              skills="Automation, Manual Testing, CI/CD"
            />
            <RoleCard 
              icon={<FaPalette className="text-3xl text-blue-600" />}
              title="UI/UX Designers"
              skills="Figma, Adobe XD, User Research"
            />
            <RoleCard 
              icon={<FaServer className="text-3xl text-blue-600" />}
              title="DevOps & Cloud Specialists"
              skills="AWS, Azure, Kubernetes, Docker"
            />
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModelCard 
              title="Time Commitment"
              options={[
                "Full-time (40 hrs/week)",
                "Part-time (20 hrs/week)",
                "Hourly contracts"
              ]}
            />
            <ModelCard 
              title="Duration"
              options={[
                "Short-term (1-3 months)",
                "Long-term (6+ months)",
                "Project-based"
              ]}
            />
            <ModelCard 
              title="Work Location"
              options={[
                "100% Remote",
                "Hybrid (Onsite + Remote)",
                "Timezone-aligned"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Vetting Process</h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <ProcessStep 
                step="1"
                title="Skill Test"
                description="Technical assessment"
              />
              <ProcessStep 
                step="2"
                title="Interviews"
                description="Technical & cultural fit"
              />
              <ProcessStep 
                step="3"
                title="Client Approval"
                description="You choose the candidate"
              />
              <ProcessStep 
                step="4"
                title="Onboarding"
                description="Seamless integration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Benefits of Our Model</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BenefitCard 
              icon={<FaClock className="text-2xl text-blue-400" />}
              title="Fast Hiring"
              description="Get resources in 72 hours"
            />
            <BenefitCard 
              icon={<FaDollarSign className="text-2xl text-blue-400" />}
              title="Cost Effective"
              description="Save 40% vs full-time hires"
            />
            <BenefitCard 
              icon={<FaChartLine className="text-2xl text-blue-400" />}
              title="Easy Scaling"
              description="Scale up or down as needed"
            />
            <BenefitCard 
              icon={<FaShieldAlt className="text-2xl text-blue-400" />}
              title="IP & Security"
              description="NDA and IP protection"
            />
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-8 px-4 mb-1 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Boost Your Team's Firepower Instantly</h2>
          <Link
            to="/contactus"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const RoleCard = ({ icon, title, skills }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 text-center h-full">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{skills}</p>
  </div>
);

const ModelCard = ({ title, options }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-bold mb-4 text-blue-600">{title}</h3>
    <ul className="space-y-3">
      {options.map((option, index) => (
        <li key={index} className="flex items-start">
          <FiArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
          <span className="text-gray-700">{option}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ step, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
      {step}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Tech;