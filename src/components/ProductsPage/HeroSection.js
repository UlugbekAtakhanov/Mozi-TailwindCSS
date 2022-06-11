import React from 'react'
import productsHero from "../../assets/images/productsHero.svg"

const HeroSection = () => {
    return (
        <div className='bg-heroBgColor  overflow-hidden'>
            <div className='main-container relative'>

                <div className='pt-[110px] lg:pt-[290px] md:pt-[146px] pb-[250px] xs:pb-[275px] sm:pb-[300px] md:pb-[400px] lg:pb-[146px] text-center xs:text-left  sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <h1>Tools that transform how businesses work</h1>
                    <h5 className=' text-grayColor mt-[25px] sm:mt-[40px]'>We help manage businesses better with our applications, plugins, extensions and offer productive experiences for teams and customers alike.</h5>
                </div>

                <img className=' absolute bottom-0 right-0 lg:-right-[80px] xl:-right-[120px] w-[300px] xs:w-[60vw] sm:w-[55vw] md:w-[58vw] xl:w-auto' src={productsHero} alt="" />

            </div>
        </div>
    )
}

export default HeroSection