import React from 'react'
import time from "../../assets/images/time.svg"
import location from "../../assets/images/location.svg"

const JoinSection = () => {
    return (
        <div className='main-container pt-[60px] pb-[44px]'>
            <h2 className='text-center'>Join the pack</h2>
            <p className='mt-4 text-center'>If you’re looking to do the best work of your career, learn and grow, then you’ll fit right in at Mozi! </p>

            <div className='shadow-customShadow mt-[50px] md:mt-[75px] lg:mt-[101px] flex flex-col gap-4 xs:flex-row justify-between items-center py-[15px] px-[24px] sm:py-[18px] sm:px-[30px] md:py-[25px] md:px-[40px] lg:py-[35px] lg:px-[60px] rounded-[8px]'>
                <div className='flex flex-col'>
                    <h4 className='lg:[28px] text-grayColor'>Front-end Developer</h4>
                    <div className='flex items-center gap-[28px] justify-center xs:justify-start  mt-2 md:mt-[27px]'>
                        <h6 className='flex items-center gap-[6px] lg:[20px] text-[#8F90A6]'>
                            <img src={time} alt="img" />
                            Full time
                        </h6>
                        <h6 className='flex items-center gap-[5px] text-[#8F90A6]'>
                            <img src={location} alt="img" />
                            India
                        </h6>
                    </div>
                </div>
                <div>
                    <a href="#" className='outline-button block'>View Details</a>
                </div>
            </div>

            <div className='shadow-customShadow mt-[30px] flex  flex-col gap-4 xs:flex-row justify-between items-center  py-[15px] px-[24px] m:py-[18px] sm:px-[30px] md:py-[25px] md:px-[40px] lg:py-[35px] lg:px-[60px] rounded-[8px]'>
                <div className=''>
                    <h4 className='lg:[28px] text-grayColor'>PHP Developers (Laravel)</h4>
                    <div className='flex items-center gap-[28px] justify-center   xs:justify-start mt-2  md:mt-[27px]'>
                        <h6 className='flex items-center gap-[6px] lg:[20px] text-[#8F90A6]'>
                            <img src={time} alt="img" />
                            Full time
                        </h6>
                        <h6 className='flex items-center gap-[5px] text-[#8F90A6]'>
                            <img src={location} alt="img" />
                            India
                        </h6>
                    </div>
                </div>
                <div className=''>
                    <a href="#" className='outline-button block'>View Details</a>
                </div>
            </div>

            <div className='shadow-customShadow mt-[30px] flex  flex-col gap-4 xs:flex-row justify-between items-center  py-[15px] px-[24px] m:py-[18px] sm:px-[30px] md:py-[25px] md:px-[40px] lg:py-[35px] lg:px-[60px] rounded-[8px]'>
                <div className=''>
                    <h4 className='lg:[28px] text-grayColor'>Junior Software Developer</h4>
                    <div className='flex items-center gap-[28px] justify-center   xs:justify-start mt-2  md:mt-[27px]'>
                        <h6 className='flex items-center gap-[6px] lg:[20px] text-[#8F90A6]'>
                            <img src={time} alt="img" />
                            Full time
                        </h6>
                        <h6 className='flex items-center gap-[5px] text-[#8F90A6]'>
                            <img src={location} alt="img" />
                            India
                        </h6>
                    </div>
                </div>
                <div>
                    <a href="#" className='outline-button block'>View Details</a>
                </div>
            </div>

            <div className='shadow-customShadow mt-[30px] flex  flex-col gap-4 xs:flex-row justify-between items-center  py-[15px] px-[24px] m:py-[18px] sm:px-[30px] md:py-[25px] md:px-[40px] lg:py-[35px] lg:px-[60px] rounded-[8px]'>
                <div className=''>
                    <h4 className='lg:[28px] text-grayColor'>WordPress Developer + Designer</h4>
                    <div className='flex items-center gap-[28px] justify-center   xs:justify-start mt-2  md:mt-[27px]'>
                        <h6 className='flex items-center gap-[6px] lg:[20px] text-[#8F90A6]'>
                            <img src={time} alt="img" />
                            Full time
                        </h6>
                        <h6 className='flex items-center gap-[5px] text-[#8F90A6]'>
                            <img src={location} alt="img" />
                            India
                        </h6>
                    </div>
                </div>
                <div>
                    <a href="#" className='outline-button block'>View Details</a>
                </div>
            </div>

            <div className='shadow-customShadow mt-[30px] flex  flex-col gap-4 xs:flex-row justify-between items-center  py-[15px] px-[24px] m:py-[18px] sm:px-[30px] md:py-[25px] md:px-[40px] lg:py-[35px] lg:px-[60px] rounded-[8px]'>
                <div className=''>
                    <h4 className='lg:[28px] text-grayColor'>Node.js Developer</h4>
                    <div className='flex items-center gap-[28px] justify-center   xs:justify-start mt-2  md:mt-[27px]'>
                        <h6 className='flex items-center gap-[6px] lg:[20px] text-[#8F90A6]'>
                            <img src={time} alt="img" />
                            Full time
                        </h6>
                        <h6 className='flex items-center gap-[5px] text-[#8F90A6]'>
                            <img src={location} alt="img" />
                            India
                        </h6>
                    </div>
                </div>
                <div>
                    <a href="#" className='outline-button block'>View Details</a>
                </div>
            </div>

            <div className='text-center mt-[40px] md:mt-[68px]'>
                <button className="red-button">See more</button>
            </div>

        </div>
    )
}

export default JoinSection