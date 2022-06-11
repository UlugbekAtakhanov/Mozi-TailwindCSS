import React from 'react'
import aboutHero from "../../assets/images/aboutHero.svg"

const HeroSection = () => {
    return (
        <div className='bg-heroBgColor  overflow-hidden'>
            <div className='main-container relative'>

                <div className='pt-[110px] lg:pt-[303px] md:pt-[146px] pb-[290px] xs:pb-[340px] sm:pb-[400px] md:pb-[400px] lg:pb-[212px] text-center xs:text-left  sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <h1>About Mozi</h1>
                    <h4 className=' text-grayColor mt-[15px] md:mt-[25px] sm:mt-[20px] md:text-[28px] lg:max-w-[390px] lg:text-[28px] lg:leading-[36px]'>Mozi is a technology company that builds products to simplify work. 1.3 million businesses of every size — from startups to global brands, use our tools to work better.</h4>
                </div>

                <img className=' absolute bottom-0 md:bottom-[10px] right-0 lg:-right-[80px] w-[300px] xs:w-[60vw] sm:max-w-[435px] lg:w-auto lg:max-w-full' src={aboutHero} alt="" />

            </div>
        </div>
    )
}

export default HeroSection