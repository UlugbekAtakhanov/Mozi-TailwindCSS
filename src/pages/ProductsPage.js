import React from 'react'
import CookiyesSection from '../components/ProductsPage/CookiyesSection'
import HeroSection from '../components/ProductsPage/HeroSection'
import QuestionSection from '../components/ProductsPage/QuestionSection'
import WebtoffeeSection from '../components/ProductsPage/WebtoffeeSection'

const ProductsPage = () => {
    return (
        <>
            <HeroSection />
            <CookiyesSection />
            <WebtoffeeSection />
            <QuestionSection />
        </>
    )
}

export default ProductsPage