import React from 'react'
import heroImage from "../../assets/images/hero-home-main-png.png"

const HeroSection = () => {
    return (
        <div className='bg-heroBgColor  overflow-hidden'>
            <div className='main-container relative'>

                <div className='pt-[110px] lg:pt-[229px] md:pt-[180px] pb-[250px] sm:pb-[200px] md:pb-[250px] lg:pb-[210px] text-center xs:text-left  sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <h1>We build products to simplify work for businesses</h1>
                    <h5 className=' text-grayColor mt-[25px] sm:mt-[32px]'>Our next-gen products empower businesses to implement agility and accelerate growth. </h5>
                    <div className='flex flex-col gap-[10px] xs:flex-row items-center xs:justify-start mt-[30px] sm:mt-[40px] sm:space-x-[16px]'>
                        <button className='red-button w-[300px] max-w-full xs:w-auto'>Learn more</button>
                        <button className='outline-button w-[300px] max-w-full xs:w-auto'>Work with us</button>
                    </div>
                </div>

                <img className=' absolute bottom-0 right-0 lg:-right-[80px] xl:-right-[120px] w-[300px] xs:w-[60vw] sm:w-[55vw] lg:w-[68vw] xl:w-auto' src={heroImage} alt="img" />

            </div>
        </div>
    )
}

export default HeroSection