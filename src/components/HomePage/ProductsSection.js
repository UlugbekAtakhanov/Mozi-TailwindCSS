import React from 'react'
import homeProductsCookieyes from "../../assets/images/homeProductsCookieyes.png"
import homeProductsCookieyesHero from "../../assets/images/homeProductsCookieyesHero.png"
import homeProductsWebtoffee from "../../assets/images/homeProductsWebtoffee.png"
import homeProductsWebtoffeeHero from "../../assets/images/homeProductsWebtoffeeHero.png"

const ProductsSection = () => {
    return (
        <div className='main-container py-[50px] md:py-[75px] lg:py-[106px] '>
            <h2 className='text-center'>Our line of products</h2>
            <p className='text-center mt-4'>Here’s what we’re building to help businesses deliver amazing customer experiences.</p>

            <div className='mt-[35px] md:mt-[97px] flex flex-col md:flex-row items-center md:items-stretch gap-4'>

                <div className=' max-w-[538px] shadow-customShadow rounded-[8px] flex flex-col justify-between'>
                    <div className='pt-[25px] px-[10px] xxs:px-4 xs:pt-[63px] xs:pr-[124px] xs:pl-[62px]'>
                        <img className='w-[60%] xxs:w-auto' src={homeProductsCookieyes} alt="img" />
                        <h4 className='py-6 md:py-8 lg:pt-[46px] lg:pb-[32px]'>Cookie consent solution for privacy compliance.</h4>
                        <button className='outline-button group flex items-center gap-2 py-[13px] px-[25px]'>
                            <span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:stroke-white' d="M7.39375 13.0125L12.9049 7.50002L7.39235 1.98752M1.09375 7.50002H12.9063H1.09375Z" stroke="#BF0830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>Learn more</span>
                        </button>
                    </div>
                    <div className=' flex justify-center'>
                        <img src={homeProductsCookieyesHero} alt="img" />
                    </div>
                </div>
                <div className=' max-w-[538px] shadow-customShadow rounded-[8px] flex flex-col justify-between'>
                    <div className='pt-[25px] px-[10px] xxs:px-4 xs:pt-[63px] xs:pr-[124px] xs:pl-[62px]'>
                        <img className='w-[60%] xxs:w-auto' src={homeProductsWebtoffee} alt="img" />
                        <h4 className='py-6 md:py-8 lg:pt-[46px] lg:pb-[32px]'>Plugins and extensions for eCommerce needs.</h4>
                        <button className='outline-button group flex items-center gap-2 py-[13px] px-[25px]'>
                            <span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:stroke-white' d="M7.39375 13.0125L12.9049 7.50002L7.39235 1.98752M1.09375 7.50002H12.9063H1.09375Z" stroke="#BF0830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>Learn more</span>
                        </button>
                    </div>
                    <div className=' flex justify-center'>
                        <img src={homeProductsWebtoffeeHero} alt="img" />
                    </div>
                </div>
              
            </div>

        </div>
    )
}

export default ProductsSection