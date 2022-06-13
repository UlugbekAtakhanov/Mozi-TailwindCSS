import React from 'react'
import contactsFormUK from "../../assets/images/contactsFormUK.png"
import contactsFormIndia from "../../assets/images/contactsFormIndia.png"

const FormSection = () => {
    return (
        <div className='main-container pt-[102px] pb-[75px] md:pb-[166px] md:flex '>
            
            <div className='md:w-[60%]'>
                <form className='shadow-customShadow flex flex-col p-[20px] xs:p-[30px] lg:px-[48px] lg:py-[55px]'>
                    <label className='text-[#8F90A6]'>
                        Name*
                        <input className='block w-full border border-[#E3E7F6] py-[10px] px-[16px] rounded-[6px]' type="text" required />
                    </label>
                    <label className='text-[#8F90A6] mt-[20px] xs:mt-[30px]'>
                        Email*
                        <input className='block w-full border border-[#E3E7F6] py-[10px] px-[16px] rounded-[6px]' type="text" required />
                    </label>
                    <label className='text-[#8F90A6] mt-[20px] xs:mt-[30px]'>
                        Subject
                        <input className='block w-full border border-[#E3E7F6] py-[10px] px-[16px] rounded-[6px]' type="text" />
                    </label>
                    <label className='text-[#8F90A6] mt-[20px] xs:mt-[30px]'>
                        Message*
                        <textarea className='block w-full border border-[#E3E7F6] min-h-[100px] xs:min-h-[148px] py-[10px] px-[16px] resize-none rounded-[6px]' required></textarea>
                    </label>
                    <div className='flex mt-[30px]'>
                        <button className="red-button">Send</button>
                    </div>
                </form>
            </div>

            <div className='md:w-[40%] flex flex-col justify-center lg:justify-start md:ml-[50px] lg:ml-[122px]'>

                <div className='lg:mt-auto mt-[50px]'>
                    <div className='flex items-center gap-[20px] mb-[25px]'>
                        <img src={contactsFormUK} alt="img" />
                        <h6>London</h6>
                    </div>
                    <p className='w-full lg:w-[250px]'>Mozi Limited 3 Warren Yard, Wolverton Mill Milton Keynes England UK – MK12 5NW</p>
                </div>

                <div className = "md:mt-[72px] mt-[50px]">
                    <div className='flex items-center gap-[20px] mb-[25px]'>
                        <img src={contactsFormIndia} alt="img" />
                        <h6>LondonLondon</h6>
                    </div>
                    <p className='w-full lg:w-[250px]'>Mozi Technologies Pvt Ltd First Floor, Sahya Building, Govt. Cyberpark, Nellikode P.O.  Kozhikode, Kerala, India – 673016</p>
                </div>
                
                <div className = "md:mt-[72px] mt-[50px]">
                    <div className='flex items-center gap-[20px] mb-[25px]'>
                        <img src={contactsFormIndia} alt="img" />
                        <h6>Bengaluru</h6> 
                    </div>
                    <p className='w-full lg:w-[250px]'>Mozi Technologies Pvt LtdBrigade IRV Centre  Nallurahalli Whiteield Bengaluru, Karnataka India – 560066</p>
                </div>

            </div>

        </div>
    )
}

export default FormSection