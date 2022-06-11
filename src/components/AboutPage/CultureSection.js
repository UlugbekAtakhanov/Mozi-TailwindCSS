import React from 'react'

const CultureSection = () => {
    return (
        <div className='pt-[65px] pb-[50px]'>
            <div className='main-container'>
                <h2 className='text-center'>Our culture code </h2>
                <p className='text-center mt-4'>The values that drive Mozilorians every day.</p>

                <div className='mt-[50px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 sm:gap-6 lg:gap-[36px] lg:mt-[97px]'>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Integrity</h4>
                        <p className='mt-4 lg:mt-8'>We value people who live by a strong moral code and act with uncompromising honesty in everything they do. </p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Accountability</h4>
                        <p className='mt-4 lg:mt-8'>We take ownership of everything we do, including our mistakes.We learn from them so that we can make better mistakes next time. </p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Humility</h4>
                        <p className='mt-4 lg:mt-8'>We value curiosity to learn from anyone, anywhere and the openness to acknowledge differences.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Autonomy</h4>
                        <p className='mt-4 lg:mt-8'>We insist on individuality and care for the goals we achieve, not the procedures or ceremony in getting there. </p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Conscientiousness</h4>
                        <p className='mt-4 lg:mt-8'>We seek to be principled and reliable so that we can always provide value for everyone around us.</p>
                    </div>

                    <div className='p-[25px] sm:p-[40px] lg:max-w-[345px] bg-white shadow-customShadow rounded-[8px]'>
                        <h4 className='lg:text-[28px]'>Contribution</h4>
                        <p className='mt-4 lg:mt-8'>We actively look for opportunities to give back to our team and the world around us. </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CultureSection