import React from 'react'
import aboutWhat from "../../assets/images/aboutWhat.png"

const WhatSection = () => {
    return (
        <div className=''>
            <div className='main-container lg:flex flex-row-reverse items-center justify-between  py-[50px] sm:py-[73px] md:pt-[104px] md:pb-[120px]'>
                <div className=' w-full sm:w-[85%] lg:basis-[50%] text-center sm:text-left lg:pl-[131px]'>
                    <h2>What we do</h2>
                    <p className='my-[32px]'>We build meaningful products that help people to simplify work, are scalable and can stand the test of time. We strive to deliver solutions that can transform how businesses work so that they can focus on what matters the most.</p>
                    <p>At Mozilor, we see each day as a new opportunity to ideate, explore, take risks and learn. And that’s what has helped us grow and be the leaders across industries.</p>
                </div>
                <div className=' w-full sm:basis-[50%] mt-6 sm:mt-0 flex justify-end'>
                    <img src={aboutWhat} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default WhatSection