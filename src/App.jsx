// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/home/hero';
import Services from './pages/home/Services';
import Project from './pages/home/projects';
import Technologies from './pages/home/Technologies';
import Content from './pages/home/Content';
import Choose from './pages/home/Choose';
import Industries from './pages/home/Industries';
import Testimonial from './pages/home/Testimonal';
import FAQ from './pages/home/FAQ';
import ContactUs from './pages/home/ContactUs';
import Visitus from './pages/home/Visitus';
import Footer from './components/Footer';
import CompanyOrg from './pages/home/Companyorg';


const App = () => {
  return (
    <BrowserRouter>
      <div className=" mx-auto max-w-[1800px] px-4 sm:px-4 lg:px-2">
        <Navbar/>
        <Hero/>
        <Services/>
        <Content/>
        <Project/>
        <Technologies/>
        <Choose/>
        <Industries/>
        <Testimonial/>
        <FAQ/>
        <ContactUs/>
        <CompanyOrg/>
        <Visitus/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
