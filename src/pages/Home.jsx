

import React from 'react'
import Services from '../components/Services'
import Choose from '../components/Choose'
import FAQ from '../components/FAQ'
import CompanyOrg from '../components/Companyorg'
import Industries from '../components/Industries'
import Testimonial from '../components/Testimonial'
import Content from '../components/Content'
import Hero from '../components/hero'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Content/>
        <Services/>
        <Industries/>
        <Testimonial/>
        <Choose/>
        <FAQ/>
        <CompanyOrg/>
      
    </div>
  )
}

export default Home;
