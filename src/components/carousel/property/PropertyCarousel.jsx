import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "./styles.css";
import CarouselSlide from "../CarouselSlide";

function PropertyCarousel() {
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
              "/assets/properties/property_1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "/assets/properties/property_2.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "/assets/properties/property_3.jpg"
            }
          />
        </SwiperSlide>

        <div class="swiper-pagination"></div>

        <div class="swiper-prev text-[30px] cursor-pointer w-12 flex justify-center items-center aspect-square z-20 absolute rounded-full bg-white top-1/2 transition-[150ms] transform -translate-y-1/2 text-black left-[1%]">
          <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="swiper-next text-[30px] cursor-pointer w-12 flex justify-center items-center z-20 absolute aspect-square bg-white rounded-full top-1/2 transition-[150ms] transform -translate-y-1/2 text-black right-[1%]">
          <i class="bi bi-caret-right-fill"></i>
        </div>
      </Swiper>
    </>
  );
}

export default PropertyCarousel;
