// ServicePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Web from "../ServicesPages/Web";
import Mobail from './Mobile';
import Digital from './Digital';
import Ai from './Ai';
import Custom from './Custom';
import Ui from './Ui';
import Startup from './Startup';
import Tech from './Tech';
import E_commerce from './E_commerce'
const ServicePage = () => {
  const { serviceId } = useParams();

  const services = {
    'Web': {
      component: <Web/>,
      title: 'Web Development'
    },
    'Mobile': {
      component: <Mobail/>,
      title: 'Mobile App Development'
    },
    'Digital': {
      component: <Digital/>,
      title: 'Digital Marketing'
    },
    'Ai': {
      component: <Ai/>,
      title: 'AI/ML & GenAI Solutions'
    },
    'Custom': {
      component: <Custom/>,
      title: 'Custom Software Development'
    },
    'Ui': {
      component: <Ui/>,
      title: 'UI/UX Design'
    },
    'Startup': {
      component: <Startup/>,
      title: 'Startup Branding'
    },
    'Tech': {
      component: <Tech />,
      title: 'Tech Staff Augmentation'
    },
    'E_commerce': {
      component: <E_commerce/>,
      title: 'E-commerce Development'
    }
  };

  const selectedService = services[serviceId];

  if (!selectedService) {
    return <div className="container mx-auto py-12 text-center">Service not found</div>;
  }

  return (
    <div className="service-page">
      {selectedService.component}
    </div>
  );
};

export default ServicePage;