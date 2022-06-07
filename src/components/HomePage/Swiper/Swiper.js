import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss"

import { Navigation, Autoplay } from "swiper";

import innovation1 from "../../../assets/images/innovation1.jpg"
import innovation2 from "../../../assets/images/innovation2.jpg"
import innovation3 from "../../../assets/images/innovation3.jpg"
import innovation4 from "../../../assets/images/innovation4.jpg"

export default function App() {
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    250: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    550: {
                        slidesPerView: 3.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                speed = {1500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation = {{
                    nextEl: ".next",
                    prevEl: ".prev"
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={innovation1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation4} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={innovation4} alt="" /> </SwiperSlide>

                <div className="absolute mt-4 space-x-4 navigation-btns">
                    <button className="rotate-180 prev">
                        <svg className="group" width="24" height="24" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:stroke-redColor" d="M2.3335 17H35.6668" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
                            <path  className="group-hover:stroke-redColor" d="M21.0835 2.41669L35.6668 17L21.0835 31.5834" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className = "next">
                        <svg className="group" width="24" height="24" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:stroke-redColor" d="M2.3335 17H35.6668" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
                            <path  className="group-hover:stroke-redColor" d="M21.0835 2.41669L35.6668 17L21.0835 31.5834" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </Swiper>

        </>
    );
}