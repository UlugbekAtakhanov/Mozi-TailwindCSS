import React from 'react'
import careerLifeImg1 from "../../assets/images/careerLifeImg1.jpg"
import careerLifeImg2 from "../../assets/images/careerLifeImg2.jpg"
import careerLifeImg3 from "../../assets/images/careerLifeImg3.jpg"
import careerLifeImg4 from "../../assets/images/careerLifeImg4.jpg"
import careerLifeImg5 from "../../assets/images/careerLifeImg5.jpg"

const LifeSection = () => {
  return (
    <div className='bg-careerLifeBgColor'>
        <div className="main-container grid grid-cols-1 sm:grid-cols-2 py-[50px] gap-x-[30px] gap-y-4 sm:gap-y-0 place-items-start ">

            <div className='self-center text-center sm:text-left mb-4 sm:mb-0'>
                  <h2 className='sm:w-[150px]'>Life@ Mozi</h2>
                  <p className='sm:w-[325px]'>The problems we solve every day could be serious, but we’re not! We have a lot of fun because we love what we do and you’re welcome to be a part of it.</p>
            </div>

              <div className='rounded-[8px] overflow-hidden shadow-customShadow bg-transparent justify-self-end w-3/4 sm:w-auto sm:mb-[50px]'><img className='' src={careerLifeImg1} alt="img" /></div>
              <div className='rounded-[8px] overflow-hidden shadow-customShadow bg-transparent w-3/4 sm:w-auto'><img className='' src={careerLifeImg2} alt="img" /></div>
              <div className='rounded-[8px] overflow-hidden shadow-customShadow bg-transparent justify-self-end w-3/4 sm:w-auto'><img className='' src={careerLifeImg3} alt="img" /></div>
              <div className='rounded-[8px] overflow-hidden shadow-customShadow bg-transparent w-3/4 sm:w-auto'><img className='' src={careerLifeImg4} alt="img" /></div>
              <div className='rounded-[8px] overflow-hidden shadow-customShadow bg-transparent justify-self-end w-3/4 sm:w-auto sm:mt-auto'><img className='' src={careerLifeImg5} alt="img" /></div>

        </div>
    </div>
  )
}

export default LifeSection