import React from 'react'
import WhoSection from '../components/AboutPage/WhoSection'
import CultureSection from '../components/AboutPage/CultureSection'
import HeroSection from '../components/AboutPage/HeroSection'
import StatsSection from '../components/AboutPage/StatsSection'
import BrandSection from '../components/HomePage/BrandSection'
import WhatSection from '../components/AboutPage/WhatSection'
import HiringSection from '../components/AboutPage/HiringSection'

const AboutPage = () => {
    return (
        <>
            <HeroSection />
            <BrandSection />
            <StatsSection />
            {/* wrap to sections in one div and give common bg */}
            <div className='bg-aboutCultureBgColor'>
                <CultureSection />
                <WhoSection />
            </div>
            <WhatSection />
            <HiringSection />
        </>
    )
}

export default AboutPage