import React from 'react'

const QuestionSection = () => {
    return (
        <div className='bg-careerQuestionBgColor py-[50px] sm:py-[75px] lg:py-[112px]'>
            <div className="main-container text-center">
                <h2 className='max-w-[710px] mx-auto sm:whitespace-nowrap'>Didn’t find what you’re looking for?</h2>
                <p className='mt-[16px]'>We are always on the lookout for great people. Tell us why you want to join us.</p>
                <div className='mt-[40px] flex flex-col xxs:flex-row gap-2 xxs:gap-[20px] justify-center'>
                    <button className="red-button ">Write to us</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection