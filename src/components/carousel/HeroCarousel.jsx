import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "./styles.css";
import CarouselSlide from "./CarouselSlide";

function HeroCarousel() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        direction="horizontal"
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        className="hero-carousel-swiper"
      >
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "https://mercedesblog.com/wp-content/uploads/2018/11/Mercedes-Benz-Instagram-11.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "https://mercedesblog.com/wp-content/uploads/2018/11/Mercedes-Benz-Instagram-11.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "https://mercedesblog.com/wp-content/uploads/2018/11/Mercedes-Benz-Instagram-11.jpg"
            }
          />
        </SwiperSlide>

        <div class="swiper-pagination"></div>

        <div class="swiper-prev text-[30px] z-20 absolute bg-white top-1/2 transition-[150ms] transform -translate-y-1/2 text-black left-[1%]">
          <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="swiper-next text-[30px] z-20 absolute bg-white top-1/2 transition-[150ms] transform -translate-y-1/2 text-black right-[1%]">
          <i class="bi bi-caret-right-fill"></i>
        </div>
      </Swiper>
    </>
  );
}

export default HeroCarousel;
