import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../assets/images/logo1.png"

const Footer = () => {
    return (
        <div className='bg-[#0D123C]'>
            <div className="main-container pt-[57px] pb-[64px] md:flex flex-wrap ">

                <div className='xxs:w-[80%] xs:w-[70%] md:w-[40%]'>
                    <img src={logo1} alt="img" />
                    <p className='mt-[29px] text-white'>Mozil builds extensions, plugins and apps to simplify work for businesses. </p>
                </div>

                <div className='flex flex-wrap gap-12 lg:gap-20 mt-12 md:mt-0 md:ml-auto'>
                    <div className=''>
                        <h6 className='text-white'>Products</h6>
                        <ul className='mt-[20px] md:mt-[30px]'>
                            <li className='mt-[10px] md:mt-[21px]'><Link className='text-white/80 hover:text-redColor transition-all text-[14px]' to="/products">CookieYes</Link></li>
                            <li className='mt-[10px] md:mt-[21px]'><Link className='text-white/80 hover:text-redColor transition-all text-[14px]' to="/products">Webtoffee</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h6 className='text-white'>About</h6>
                        <ul className='mt-[20px] md:mt-[30px]'>
                            <li className='mt-[10px] md:mt-[21px]'><Link className='text-white/80 hover:text-redColor transition-all text-[14px]' to="/about">About us</Link></li>
                            <li className='mt-[10px] md:mt-[21px]'><Link className='text-white/80 hover:text-redColor transition-all text-[14px]' to="/career">Career</Link></li>
                            <li className='mt-[10px] md:mt-[21px]'><Link className='text-white/80 hover:text-redColor transition-all text-[14px]' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h6 className='text-white'>Follow us</h6>
                        <ul className='flex gap-4 items-center mt-[20px] md:mt-[30px]'>
                            <li className='mt-[10px]'>
                                <a className='text-white/80' href="#">
                                    <svg className='group' width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover:fill-redColor transition-all' d="M6.95282 2.89077H8.50569V0.186185C8.23779 0.14933 7.31641 0.0664062 6.24337 0.0664062C4.00443 0.0664062 2.4707 1.47469 2.4707 4.06304V6.44514H0V9.46867H2.4707V17.0764H5.49989V9.46937H7.87065L8.247 6.44585H5.49918V4.36284C5.49989 3.48895 5.73519 2.89077 6.95282 2.89077Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                            <li className='mt-[10px]'>
                                <a className='text-white/80' href="#">
                                    <svg className='group' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover:fill-redColor transition-all' d="M17.2678 2.37425C16.6444 2.64768 15.9802 2.82892 15.2878 2.91692C16.0001 2.49158 16.5439 1.8232 16.7995 1.01758C16.1353 1.41358 15.402 1.6933 14.6204 1.84939C13.9898 1.17787 13.0909 0.761963 12.1103 0.761963C10.2079 0.761963 8.67624 2.30615 8.67624 4.1992C8.67624 4.47158 8.69929 4.73349 8.75586 4.98282C5.899 4.84349 3.3711 3.47425 1.67291 1.38844C1.37643 1.90282 1.20253 2.49158 1.20253 3.12539C1.20253 4.31549 1.81538 5.37044 2.72891 5.9812C2.17681 5.97073 1.63519 5.81044 1.17634 5.55796C1.17634 5.56844 1.17634 5.58206 1.17634 5.59568C1.17634 7.26558 2.36748 8.65263 3.92948 8.97215C3.64976 9.04863 3.34491 9.0853 3.02853 9.0853C2.80853 9.0853 2.58643 9.07272 2.37795 9.02663C2.82319 10.3875 4.08662 11.388 5.58891 11.4204C4.41976 12.335 2.93529 12.8861 1.32824 12.8861C1.04643 12.8861 0.776145 12.8735 0.505859 12.8389C2.02805 13.8205 3.83205 14.381 5.77748 14.381C12.1009 14.381 15.558 9.14292 15.558 4.60253C15.558 4.45063 15.5528 4.30396 15.5455 4.15834C16.2275 3.67434 16.8005 3.06987 17.2678 2.37425Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                            <li className='mt-[10px]'>
                                <a className='text-white/80' href="#">
                                    <svg className='group' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover:fill-redColor transition-all' fillRule="evenodd" clipRule="evenodd" d="M5.62472 0H12.0533C15.0115 0 17.4104 2.39893 17.4104 5.35714V11.7857C17.4104 14.7439 15.0115 17.1429 12.0533 17.1429H5.62472C2.66651 17.1429 0.267578 14.7439 0.267578 11.7857V5.35714C0.267578 2.39893 2.66651 0 5.62472 0ZM12.0531 15.5357C14.1209 15.5357 15.8031 13.8536 15.8031 11.7857V5.35718C15.8031 3.28932 14.1209 1.60718 12.0531 1.60718H5.62451C3.55665 1.60718 1.87451 3.28932 1.87451 5.35718V11.7857C1.87451 13.8536 3.55665 15.5357 5.62451 15.5357H12.0531Z" fill="white" />
                                        <path className='group-hover:fill-redColor transition-all' fillRule="evenodd" clipRule="evenodd" d="M4.55273 8.5716C4.55273 6.20482 6.47166 4.28589 8.83845 4.28589C11.2052 4.28589 13.1242 6.20482 13.1242 8.5716C13.1242 10.9384 11.2052 12.8573 8.83845 12.8573C6.47166 12.8573 4.55273 10.9384 4.55273 8.5716ZM6.15967 8.57164C6.15967 10.0481 7.36181 11.2502 8.83824 11.2502C10.3147 11.2502 11.5168 10.0481 11.5168 8.57164C11.5168 7.09414 10.3147 5.89307 8.83824 5.89307C7.36181 5.89307 6.15967 7.09414 6.15967 8.57164Z" fill="white" />
                                        <circle className='group-hover:fill-redColor transition-all' cx="13.4461" cy="3.96414" r="0.571071" fill="white" />
                                    </svg>
                                </a>
                            </li>
                            <li className='mt-[10px]'>
                                <a className='text-white/80' href="#">
                                    <svg className='group' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover:fill-redColor transition-all' d="M4.01709 16.5715H0.780099V5.93569H4.10958V16.5715H4.01709ZM2.35236 4.45592C1.33501 4.45592 0.410156 3.62356 0.410156 2.51373C0.410156 1.49639 1.24253 0.571533 2.35236 0.571533C3.36969 0.571533 4.29454 1.4039 4.29454 2.51373C4.29454 3.62356 3.46218 4.45592 2.35236 4.45592ZM16.4102 16.5715H13.0807V11.3923C13.0807 10.19 13.0807 8.61777 11.4159 8.61777C9.65872 8.61777 9.47374 9.91257 9.47374 11.2999V16.5715H6.14426V5.93569H9.28877V7.41547C9.7512 6.58309 10.7685 5.75072 12.4333 5.75072C15.7628 5.75072 16.4102 7.97037 16.4102 10.8374V16.5715Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='border-t border-[#c5cbe280]'>
                <div className='main-container pt-[29px] pb-[38px] text-center xs:text-left xs:flex justify-between items-center'>
                    <p className='text-white text-[14px] sm:text-base'>© 2022 Mozi - All right reserved</p>
                    <p className='text-white text-[14px] sm:text-base underline hover:text-redColor'><a href="#">Terms & Conditions</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer