import React from 'react'
import brand1 from "../../assets/images/brand1.svg"
import brand2 from "../../assets/images/brand2.svg"
import brand3 from "../../assets/images/brand3.svg"
import brand4 from "../../assets/images/brand4.svg"
import brand5 from "../../assets/images/brand5.svg"
import brand6 from "../../assets/images/brand6.svg"
import brand7 from "../../assets/images/brand7.svg"

const brandsList = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]

const BrandSection = () => {
    return (
        <div className='border-b border-[#c5cbe280]'>

            {/* <div className='main-container pt-[101px] pb-[127px]'>
              <h1 className='text-center'>Over <span className='text-redColor'>1.3 million</span> users and global brands trust us </h1>
              <div className='flex justify-between mt-[79px]'>
                {brandsList.map((brand, index) => (
                    <img src={brand} key = {index} alt="" />
                ))}
              </div>
        </div> */}

            <div className='main-container py-[50px] md:py-[75px] lg:pt-[101px] lg:pb-[127px]'>
                <h3 className='text-center'>Over <span className='text-redColor'>1.3 million</span> users and global brands trust us </h3>
                <div className='flex flex-wrap justify-center lg:justify-between items-center gap-[30px] md:gap-[40px] mt-[50px] lg:mt-[79px]'>
                    {brandsList.map((brand, index) => (
                        <img className='' src={brand} key={index} alt="" />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BrandSection