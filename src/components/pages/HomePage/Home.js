import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
    return (
        <>
          <HeroSection {...homeObjOne} />
          <Pricing/>
          <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Home
