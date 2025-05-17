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
import Home from './pages/Home';
import NotFound from './components/NotFound';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Web from './components/ServicesPages/Web';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Web />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technology" element={<Technologies />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/Visitus" element={<Visitus />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFloatButton/>

      </div>
    </BrowserRouter>
  );
};

export default App;
