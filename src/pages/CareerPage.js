import React from 'react'
import GlassdoorSection from '../components/CareerPage/GlassdoorSection'
import HeroSection from '../components/CareerPage/HeroSection'
import JoinSection from '../components/CareerPage/JoinSection'
import LifeSection from '../components/CareerPage/LifeSection'
import OfferSection from '../components/CareerPage/OfferSection'
import QuestionSection from '../components/CareerPage/QuestionSection'

const CareerPage = () => {
    return (
        <>
            <HeroSection />
            <OfferSection />
            <LifeSection />
            <GlassdoorSection />
            <JoinSection />
            <QuestionSection />
        </>
    )
}

export default CareerPage