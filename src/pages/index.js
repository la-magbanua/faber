import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Mission from '../components/mission'
import Services from '../components/services'
import CTA from '../components/cta'
import Companies from '../components/companies'
import Contact from '../components/contact'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Hero />
    <Mission />
    <Services />
    <CTA />
    <Companies />
    <Contact />
  </div>
)

export default IndexPage
