import ContactUs from "../components/ContactUs";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Visitus from "../components/Visitus";
import Home from "../pages/Home";

export const allroutes = [
  { path: '/', element: <Home/> }, // Home should show Hero
  { path: '/services', element: <Services/> },
  { path: '/projects', element: <Projects/> },
  { path: '/technology', element: <Technologies/> }, // Fixed path to match navbar
  { path: '/contact', element: <ContactUs/> },
  { path: '/about', element: <Visitus/> }, // Fixed path to match navbar
  
];