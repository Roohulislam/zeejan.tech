import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaChartLine, FaCommentAlt, FaLightbulb, FaCogs } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiLangchain } from 'react-icons/si';
import aimg from "../../assets/image/ai.png";

const Ai = () => {
  return (
    <div className="Ai">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-6 mt-18 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Next-Gen AI Solutions for a Smarter Future
          </h1>
          <p className="text-base md:text-xl mb-6 max-w-3xl mx-auto">
            We build intelligent systems powered by machine learning and generative AI.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <img 
                src={aimg}
                alt="AI Solutions" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Transforming Business with AI</h2>
              <p className="text-base text-gray-600 mb-2">
                We harness the power of artificial intelligence to solve complex business challenges, automate processes, 
                and unlock new opportunities. Our AI solutions are tailored to your specific needs, delivering measurable 
                results and competitive advantages.
              </p>
              <p className="text-base text-gray-600">
                From predictive analytics to generative AI, we implement cutting-edge technologies that learn, adapt, 
                and evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Provide */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Solutions We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <AISolutionCard 
              icon={<FaChartLine className="text-3xl text-blue-600" />}
              title="Predictive Analytics"
              description="Forecast trends and behaviors with machine learning models"
            />
            <AISolutionCard 
              icon={<FaRobot className="text-3xl text-blue-600" />}
              title="Generative AI"
              description="Create text, code, and images with advanced AI models"
            />
            <AISolutionCard 
              icon={<FaCommentAlt className="text-3xl text-blue-600" />}
              title="NLP & Chatbots"
              description="Natural language processing for intelligent conversations"
            />
            <AISolutionCard 
              icon={<FaLightbulb className="text-3xl text-blue-600" />}
              title="Recommendation Systems"
              description="Personalized suggestions that drive engagement"
            />
            <AISolutionCard 
              icon={<FaCogs className="text-3xl text-blue-600" />}
              title="Intelligent Automation"
              description="Streamline operations with AI-powered workflows"
            />
          </div>
        </div>
      </section>

      {/* Technologies & Platforms */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Technologies & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <TechLogo icon={<SiTensorflow className="text-4xl text-blue-600" />} name="TensorFlow" />
            <TechLogo icon={<SiPytorch className="text-4xl text-blue-600" />} name="PyTorch" />
            <TechLogo icon={<SiOpenai className="text-4xl text-blue-600" />} name="OpenAI" />
            <TechLogo icon={<SiHuggingface className="text-4xl text-blue-600" />} name="Hugging Face" />
            <TechLogo icon={<SiLangchain className="text-4xl text-blue-600" />} name="LangChain" />
          </div>
        </div>
      </section>

    
      {/* CTA Section */}
      <section className="py-8 px-4 mb-1 bg-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Bring AI into Your Business Strategy Today</h2>
          <Link
            to="/contactus"
            className="inline-block bg-white text-indigo-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const AISolutionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechLogo = ({ icon, name }) => (
  <div className="flex flex-col items-center w-28">
    <div className="mb-3">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

export default Ai;