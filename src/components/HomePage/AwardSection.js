import React from 'react'
import homeAward from "../../assets/images/homeAward.png"

const AwardSection = () => {
    return (
        <div className='bg-awardBgColor'>
            <div className='main-container sm:flex items-center justify-between  py-[50px] sm:py-[73px]'>
                <div className=' w-full sm:basis-[50%] text-center sm:text-left'>
                    <h2 className='mb-4'>Creators of award-winning products</h2>
                    <p>Our products are loved by customers and recommended by leading industry experts.</p>
                </div>
                <div className=' w-full sm:basis-[50%] mt-8'>
                    <img src={homeAward} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default AwardSection