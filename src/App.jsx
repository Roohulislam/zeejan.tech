// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import ContactUs from './components/ContactUs';
import Visitus from './components/Visitus';
import Choose from './components/Choose';
import FAQ from './components/FAQ';
import Home from './pages/Home';
import Content from './components/Content';
import CompanyOrg from './components/CompanyOrg';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technology" element={<Technologies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<Visitus />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonial/>} />
            <Route path="/content" element={<Content />} />
            <Route path="/companyorg" element={<CompanyOrg/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
