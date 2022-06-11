import React from 'react'

const QuestionSection = () => {
    return (
        <div className='bg-questionBgColor py-[50px] sm:py-[75px] lg:py-[136px]'>
            <div className="main-container text-center">
                <h2 className='max-w-[600px] mx-auto'>Want to know how we build products for the future?</h2>
                <p className='mt-[20px]'>Then be a part of our remarkable journey and let’s learn together!</p>
                <div className='mt-[40px] flex flex-col xxs:flex-row gap-2 xxs:gap-[20px] justify-center'>
                    <button className="red-button ">About us</button>
                    <button className="outline-button ">Join the team</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection