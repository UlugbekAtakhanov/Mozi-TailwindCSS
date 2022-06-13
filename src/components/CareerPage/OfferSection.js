import React from 'react'
import careerOfferIcon1 from "../../assets/images/careerOfferIcon1.svg"
import careerOfferIcon2 from "../../assets/images/careerOfferIcon2.svg"
import careerOfferIcon3 from "../../assets/images/careerOfferIcon3.svg"
import careerOfferIcon4 from "../../assets/images/careerOfferIcon4.svg"
import careerOfferIcon5 from "../../assets/images/careerOfferIcon5.svg"
import careerOfferIcon6 from "../../assets/images/careerOfferIcon6.svg"

const OfferSection = () => {
    return (
        <div className='pt-[65px] pb-[50px]'>
            <div className='main-container'>
                <h2 className='text-center'>We offer nothing but the best </h2>
                <p className='text-center mt-4'>We put our people first and have built a culture that brings the best out of everyone.</p>

                <div className='mt-[50px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 sm:gap-6 lg:gap-[36px] lg:mt-[97px]'>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon1} alt = "img" /> Flexiblility</h4>
                        <p className='mt-4 lg:mt-8'>Be it in-office, WFH or a mix of both, do your best work from wherever you want, because we have a hybrid and flexible work culture.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon2} alt = "img" /> Learning</h4>
                        <p className='mt-4 lg:mt-8'>We offer plenty of learning opportunities such as professional courses, guided learning and workshops to pick up new skills.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon3} alt = "img" /> Wellbeing</h4>
                        <p className='mt-4 lg:mt-8'>We’ve got your wellbeing covered with medical insurance for employees and dependents, employee loans and paid parental leaves.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon4} alt = "img" /> Perks</h4>
                        <p className='mt-4 lg:mt-8'>We provide great tech like Macbooks and work essentials. To top it, we have yearly company-wide retreats at the best locations!</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon5} alt = "img" /> Growth</h4>
                        <p className='mt-4 lg:mt-8'>Get the freedom to run your ideas, take up new job roles and collaborate across teams and chart your career.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px] flex items-center gap-[10px]'> <img src = {careerOfferIcon6} alt = "img" /> Network</h4>
                        <p className='mt-4 lg:mt-8'>Build your network and rub shoulders with top teams from the biggest brands and startups in the world. </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OfferSection