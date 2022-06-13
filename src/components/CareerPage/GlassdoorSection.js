import React from 'react'
import careerGlassdoorPercent from "../../assets/images/careerGlassdoorPercent.svg"
import careerGlassdoorLogo from "../../assets/images/careerGlassdoorLogo.svg"
import careerGlassdoorStar from "../../assets/images/careerGlassdoorStar.svg"

const GlassdoorSection = () => {
    return (
        <div className='main-container py-[60px]'>
            <div className='md:flex items-center justify-between bg-[#F7F8FF] py-[25px] px-[35px] lg:py-[50px]  lg:pl-[69px]  lg:pr-[122px] rounded-[8px] shadow-customShadow'>

                <div className='flex xs:flex-row flex-col text-center xs:text-left gap-[27px] md:w-[60%] items-center'>
                    <img src={careerGlassdoorPercent} alt="img" />
                    <h3>95% of employees recommend Mozi</h3>
                </div>

                <div className='flex flex-col items-end mt-8 xs:mt-4 md:mt-0 md:items-center'>
                    <img src={careerGlassdoorLogo} alt="img" />
                    <div className='flex gap-2'>
                        <h3>4.8</h3>
                        <img src={careerGlassdoorStar} alt="img" />
                        <img src={careerGlassdoorStar} alt="img" />
                        <img src={careerGlassdoorStar} alt="img" />
                        <img src={careerGlassdoorStar} alt="img" />
                    </div>
                        <a href="#" className='flex gap-[7px] items-center underline hover:text-redColor'>
                            Read our reviews
                            <svg  width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='stroke-grayColor' d="M7.39375 13.0125L12.9049 7.50002L7.39235 1.98752M1.09375 7.50002H12.9063H1.09375Z" stroke="#BF0830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                </div>

            </div>
        </div>
    )
}

export default GlassdoorSection