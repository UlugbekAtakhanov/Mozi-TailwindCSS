import React from 'react'
import homeBuild from "../../assets/images/homeBuild.svg"
import productsWebtoffeeLogo from "../../assets/images/productsWebtoffeeLogo.svg"
import productsWebtoffeeHero from "../../assets/images/productsWebtoffeeHero.png"

const WebtoffeeSection = () => {
    return (
        <div className=''>
            <div className='main-container lg:flex flex-row-reverse items-center justify-between  py-[50px] sm:py-[73px] md:py-[110px]'>
                <div className=' w-full sm:w-[85%] lg:basis-[50%] text-center sm:text-left lg:pl-[131px]'>
                    <div className='flex justify-center sm:justify-start'>
                        <img src={productsWebtoffeeLogo} alt="img" />
                    </div>
                    <p className='my-[32px]'>Streamline eCommerce businesses and create amazing customer experiences with our WordPress/WooCommerce plugins and extensions. Manage your day-to-day operations with extensions for product imports, smart coupons, payment gateways, subscriptions and more.</p>
                    <p>WebToffee builds some of the most popular and top-rated plugins in the marketplace and powers over 1.3 million online stores and websites.</p>
                    <button className='outline-button lg:mt-[42px]'>Visit Webtoffee</button>
                </div>
                <div className=' w-full sm:basis-[50%] mt-6 sm:mt-0 flex justify-end'>
                    <img src={productsWebtoffeeHero} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default WebtoffeeSection