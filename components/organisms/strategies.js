import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import ListStrategies from '../molecules/ListStrategies'

export default function Strategies() {
    return (
        <div className="container mx-auto strategies">
            <h1 className="strategies-heading">Contents Strategies</h1>
            <h6 className="strategies-desc">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h6>
            <div className="row">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><ListStrategies cover="/images/strategies1.svg" owner="Wahid Ari" date="03 March 2019" title="Increasing Prosperity With Positive Thinking" /></SwiperSlide>
                    <SwiperSlide><ListStrategies cover="/images/strategies2.svg" owner="Wahid Ari" date="03 March 2019" title="Motivation Is The First Step To Success" /></SwiperSlide>
                    <SwiperSlide><ListStrategies cover="/images/strategies3.svg" owner="Wahid Ari" date="03 March 2019" title="Success Steps For Your Personal Or Business" /></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
