import React from 'react'
import contactHero from "../../assets/images/contactHero.svg"

const HeroSection = () => {
    return (
        <div className='bg-heroBgColor  overflow-hidden'>
            <div className='main-container relative'>

                <div className='pt-[110px] lg:pt-[200px] md:pt-[180px] pb-[200px] xxs:pb-[250px] sm:pb-[200px] md:pb-[250px] lg:pb-[139px] text-center xs:text-left  sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <h1>Connect with us</h1>
                    <h6 className=' text-grayColor mt-[25px] sm:mt-[40px]'>We’d love to hear from you.Fill out this form and we’ll get back to you.For job related queries, click on the button below. </h6>
                    <div className='flex flex-col gap-[10px] xs:flex-row items-center xs:justify-start mt-[30px] sm:mt-[50px] sm:space-x-[16px]'>
                        <button className='outline-button w-[300px] max-w-full xs:w-auto'>Work with us</button>
                    </div>
                </div>

                <img className=' absolute bottom-0 right-0 lg:w-auto w-[400px] xs:w-[75vw] sm:w-[65vw]' src={contactHero} alt="img" />

            </div>
        </div>
    )
}

export default HeroSection