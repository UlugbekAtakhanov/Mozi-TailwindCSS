import { Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const scrollEvent = window.addEventListener("scroll", (e) => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            return () => {
                window.removeEventListener("scroll", scrollEvent())
            }
        })

    }, [])
    return (
        <div className={`
            fixed top-0 left-0 w-full z-10  border-gray-100 transition-all
            ${isScrolled ? "bg-white border-b" : "bg-transparent border-none"}
        `}>
            <div className='flex items-center justify-between py-4 md:py-6 main-container'>
                <Link to="/">
                    <img className='w-[110px] sm:w-auto' src={logo} alt="logo" />
                </Link>
                <ul className='text-[16px] md:text-[18px] text-[#646A89] hidden sm:flex items-center'>
                    <li className='mr-[30px] md:mr-[60px] transition-all hover:text-redColor'><Link to="/products">Products</Link></li>
                    <li className='mr-[30px] md:mr-[60px] transition-all hover:text-redColor'><Link to="/about">About us</Link></li>
                    <li className='mr-[15px] md:mr-[30px] transition-all hover:text-redColor'><Link to="/contact">Contact</Link></li>
                    <li className='red-button'><Link to="#">We're hiring</Link></li>
                </ul>

                {/* hamburger */}
                <div className=' sm:hidden'>
                    <svg onClick={() => setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer stroke-redColor transition-all hover:stroke-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                {/* menu */}
                <Transition
                    as={Fragment}
                    show={menuOpen}
                    enter="transition-all duration-300"
                    enterFrom=" h-0 opacity-0"
                    enterTo=" h-full opacity-100"
                    leave="transition-all duration-200"
                    leaveFrom=" h-full opacity-100"
                    leaveTo=" h-0 opacity-0"
                >
                    <div className='fixed inset-0 bg-black flex items-center justify-center'>
                        <div className='absolute top-5 right-5 z-0' style={{ display: menuOpen ? "block" : "none" }} onClick={() => setMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <ul className='text-white text-[20px] flex flex-col gap-[20px] text-center'>
                            <li className='bg-white px-4 py-2 rounded-md ring-1 ring-white ring-offset-2 ring-offset-black hover:bg-emerald-100'>
                                <Link onClick={() => setMenuOpen(false)} to="/">
                                    <img className='w-[110px] sm:w-auto' src={logo} alt="logo" />
                                </Link>
                            </li>
                            <li className=' transition-all hover:text-redColor'><Link onClick={() => setMenuOpen(false)} to="/products">Products</Link></li>
                            <li className=' transition-all hover:text-redColor'><Link onClick={() => setMenuOpen(false)} to="/about">About us</Link></li>
                            <li className=' transition-all hover:text-redColor'><Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link></li>
                            <li className=' transition-all hover:text-redColor'><Link onClick={() => setMenuOpen(false)} to="#">We're hiring</Link></li>
                        </ul>
                    </div>
                </Transition>

            </div>
        </div>
    )
}

export default Navbar