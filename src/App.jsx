// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import ContactUs from './components/ContactUs';
import Visitus from './components/Visitus';
import Choose from './components/Choose';
import CompanyOrg from './components/CompanyOrg';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonal';
import Home from './pages/Home';
import Content from './components/Content';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Navbar/>
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technology" element={<Technologies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<Visitus />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/companyorg" element={<CompanyOrg />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonial/>} />
            <Route path="/content" element={<Content/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;