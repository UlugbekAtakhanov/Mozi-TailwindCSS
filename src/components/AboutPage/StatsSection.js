import React from 'react'
import stats1 from "../../assets/images/stats1.svg"
import stats2 from "../../assets/images/stats2.svg"
import stats3 from "../../assets/images/stats3.svg"

const StatsSection = () => {
  return (
        <div className='main-container flex justify-center items-center sm:items-stretch gap-[20px] xs:gap-[25px] md:gap-[32px] pb-[50px] md:pb-[90px] flex-col sm:flex-row sm:flex-wrap'>
        <div className='max-w-[316px] w-full shadow-customShadow pt-[53px]  text-center flex flex-col '>
              <h1 className='lg:text-[56px] lg:leading-[62px]'>2017</h1>
              <h5 className='py-[18px]'>Founded in</h5>
              <img className='w-full mt-auto' src={stats1} alt="img" />
        </div>
        <div className='max-w-[316px] w-full shadow-customShadow pt-[53px] text-center flex flex-col'>
              <h1 className='lg:text-[56px] lg:leading-[62px]'>44+</h1>
              <h5 className='py-[18px]'>Employees</h5>
              <img className='w-full mt-auto' src={stats2} alt="img" />
        </div>
        <div className='max-w-[316px] w-full shadow-customShadow pt-[53px] text-center flex flex-col'>
              <h1 className='lg:text-[56px] lg:leading-[62px]'>1.3M+</h1>
              <h5 className='py-[18px]'>Active users</h5>
              <img className='w-full mt-auto' src={stats3} alt="img" />
        </div>
    </div>
  )
}

export default StatsSection