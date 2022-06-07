import React from 'react'
import Swiper from "./Swiper/Swiper"

const InnovationSection = () => {
    return (
        // <div className='main-container pt-[120px] pb-[99px] text-center'>
        <div className='main-container py-[50px] sm:py-[75px] md:pt-[120px] md:pb-[99px] text-center'>

            <h2>Making waves with innovation</h2>
            <p className='mt-[16px]'>We are in the news for being market leaders who deliver exceptional products.</p>

            <Swiper />

        </div>
    )
}

export default InnovationSection