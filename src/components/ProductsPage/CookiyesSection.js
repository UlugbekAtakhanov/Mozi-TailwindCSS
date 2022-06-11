import React from 'react'
import homeBuild from "../../assets/images/homeBuild.svg"
import productsCookiyesLogo from "../../assets/images/productsCookiyesLogo.svg"
import productsCookieyesHero from "../../assets/images/productsCookieyesHero.png"

const CookiyesSection = () => {
    return (
        <div className=''>
            <div className='main-container lg:flex items-center justify-between  py-[50px] sm:py-[73px] md:py-[110px]'>
                <div className=' w-full sm:w-[85%] lg:basis-[50%] text-center sm:text-left md:pr-[100px] lg:pr-[131px]'>
                    <div className='flex justify-center sm:justify-start'>
                        <img src={productsCookiyesLogo} alt="img" />
                    </div>
                    <p className='my-[32px]'>Build brand trust and minimize legal risks with the market-leading consent management platform that helps businesses comply with global privacy regulations. Display cookie consent banners, manage consent, generate policy documents and privacy-proof websites with CookieYes.</p>
                    <p>CookieYes is the #1 cookie compliance technology with over 1.2 million user base, powering global brands to startups across US, UK and Europe.</p>
                    <button className='outline-button mt-2'>Visit CookieYes</button>
                </div>
                <div className=' w-full sm:basis-[50%] mt-6 sm:mt-0 flex justify-end'>
                    <img src={productsCookieyesHero} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default CookiyesSection