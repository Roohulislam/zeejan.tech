

import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Choose from '../components/Choose'
import FAQ from '../components/FAQ'
import CompanyOrg from '../components/CompanyOrg'
import Industries from '../components/Industries'
import Testimonial from '../components/Testimonial'
import Content from '../components/Content'

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

export default Home
