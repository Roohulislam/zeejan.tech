import Home from "../../pages/Home";
import Content from "../Content";

export const allroutes = [
  { path: '/', element: <Home/> }, // Home should show Hero
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/technology', element: <Technologies /> }, // Fixed path to match navbar
  { path: '/contact', element: <ContactUs /> },
  { path: '/about', element: <Visitus /> }, // Fixed path to match navbar
  // Other routes can remain for direct access
  { path: '/choose', element: <Choose /> },
  { path: '/companyorg', element: <CompanyOrg /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/testimonals', element: <Testimonal /> },
  { path: '/content', element: <Content/>},

];