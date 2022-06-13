import React from 'react'
import careerHero from "../../assets/images/careerHero.svg"

const HeroSection = () => {
    return (
        <div className='bg-heroBgColor  overflow-hidden'>
            <div className='main-container relative'>

                <div className='pt-[110px] lg:pt-[285px] md:pt-[180px] pb-[250px] sm:pb-[200px] md:pb-[250px] lg:pb-[210px] text-center xs:text-left  sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <h1>Hey, we're looking for <span className='text-redColor'>Dreamers</span></h1>
                    <div className='flex flex-col gap-[10px] xs:flex-row items-center xs:justify-start mt-[20px] sm:mt-[54px] sm:space-x-[16px]'>
                        <button className='outline-button w-[300px] max-w-full xs:w-auto'>View open roles</button>
                    </div>
                </div>

                <img className=' absolute bottom-0 right-0 lg:-right-[80px] xl:-right-[120px] w-[350px] xs:w-[70vw] sm:w-[65vw] lg:w-[68vw] xl:w-auto' src={careerHero} alt="" />

            </div>
        </div>
    )
}

export default HeroSection