import React from 'react'
import Hero1 from '../components/Hero1'
import Cards from '../components/Cards'
import LinkBuildingInfo from '../components/linkBuildingInfo'
import Pricing from '../components/Pricing'
import FAQS from '../components/FAQS'

const Home = () => {
  return (
    <main>
        <Hero1 />
        <Cards/>
        <LinkBuildingInfo />
        <Pricing />
        <FAQS/>
    </main>
  )
}

export default Home