import React from 'react'
import aboutWho from "../../assets/images/aboutWho.png"

const WhoSection = () => {
    return (
        <div>
            <div className='main-container lg:flex items-center justify-between  py-[50px] md:pb-[97px]'>
                <div className=' w-full sm:w-[85%] lg:basis-[50%] text-center sm:text-left md:pr-[100px] lg:pr-[131px]'>
                    <h2>Who we are</h2>
                    <p className='my-[16px]'>We are a bunch of thinkers and dreamers, who have come together to build products we are proud of. We come from diverse backgrounds, work in different agile teams and come together to deliver the best technology.</p>
                    <p>In 2017, we started as a one-person endeavour by Anvar TK, our CEO, in an incubator at National Institute of Technology Calicut. Today, we are a growing team of 40+ members with offices in London, Bangalore and Calicut.</p>
                </div>
                <div className=' w-full sm:basis-[50%] mt-6 sm:mt-0 flex justify-end'>
                    <img src={aboutWho} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default WhoSection