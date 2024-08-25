import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrendingProjectCard from "./TrendingProjectCard";
import placeWise from "../../data/placeWise";

function TrendingProjectsCarousel() {
  return (
    <Swiper
      className="trending-projects-swiper relative p-5 w-full h-[400px]"
      direction="horizontal"
      loop={true}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        880: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      pagination={{
        el: ".trending-project-swiper-pagination",
      }}
      navigation={{
        nextEl: ".trending-project-swiper-next",
        prevEl: ".trending-project-swiper-prev",
      }}
      modules={[Navigation, Pagination]}
    >
      {Object.values(placeWise).map((place) => (
        <SwiperSlide>
          <TrendingProjectCard
            imgUrl={`assets/places/${place[0].imgUrl}`}
            title={place[0].title}
            description={place[0].description}
          />
        </SwiperSlide>
      ))}
      <div class="trending-project-swiper-pagination flex flex-row justify-center gap-1"></div>

      <div class="trending-project-swiper-prev cursor-pointer w-12 flex justify-center items-center aspect-square rounded-full absolute left-[1%] top-1/2 z-20 bg-white text-black text-[30px] transition-transform transform -translate-y-1/2">
        <i class="bi bi-caret-left-fill"></i>
      </div>
      <div class="trending-project-swiper-next cursor-pointer w-12 flex justify-center items-center aspect-square rounded-full absolute right-[1%] top-1/2 z-20 bg-white text-black text-[30px] transition-transform transform -translate-y-1/2">
        <i class="bi bi-caret-right-fill"></i>
      </div>
    </Swiper>
  );
}

export default TrendingProjectsCarousel;
