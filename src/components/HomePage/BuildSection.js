import React from 'react'
import homeBuild from "../../assets/images/homeBuild.svg"

const BuildSection = () => {
    return (
        <div className='bg-awardBgColor'>
            <div className='main-container sm:flex items-center justify-between  py-[50px] sm:py-[73px] md:py-[110px]'>
                <div className=' w-full sm:basis-[50%] text-center sm:text-left md:pr-[100px] lg:pr-[185px]'>
                    <h2 className='mb-4'>Let's build the next big thing!</h2>
                    <p>Looking to achieve great things? You’ve come to the right place.</p>
                    <button className='outline-button mt-[30px]'>Join the team</button>
                </div>
                <div className=' w-full sm:basis-[50%] mt-8'>
                    <img src={homeBuild} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default BuildSection