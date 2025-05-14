import Home from "../../pages/Home";
import Content from "../Content";
import Hero from "../Hero";

export const allroutes = [
  { path: '/', element: <Home/> }, // Home should show Hero
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/technology', element: <Technologies /> }, // Fixed path to match navbar
  { path: '/contact', element: <ContactUs /> },
  { path: '/about', element: <Visitus /> }, // Fixed path to match navbar
  
];