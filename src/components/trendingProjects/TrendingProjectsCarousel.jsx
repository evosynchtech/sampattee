import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrendingProjectCard from "./TrendingProjectCard";

function TrendingProjectsCarousel() {
  return (
    <Swiper
      className="trending-projects-swiper relative p-5 w-[1100px] h-[400px]"
      direction="horizontal"
      loop={true}
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        el: ".trending-project-swiper-pagination",
      }}
      navigation={{
        nextEl: ".trending-project-swiper-next",
        prevEl: ".trending-project-swiper-prev",
      }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <TrendingProjectCard
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
          title={"Title"}
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TrendingProjectCard
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
          title={"Title"}
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TrendingProjectCard
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
          title={"Title"}
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TrendingProjectCard
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
          title={"Title"}
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TrendingProjectCard
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
          title={"Title"}
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
        />
      </SwiperSlide>
      <div class="trending-project-swiper-pagination flex flex-row justify-center gap-1"></div>

      <div class="trending-project-swiper-prev w-12 flex justify-center items-center aspect-square rounded-full absolute left-[1%] top-1/2 z-20 bg-white text-black text-[30px] transition-transform transform -translate-y-1/2">
        <i class="bi bi-caret-left-fill"></i>
      </div>
      <div class="trending-project-swiper-next w-12 flex justify-center items-center aspect-square rounded-full absolute right-[1%] top-1/2 z-20 bg-white text-black text-[30px] transition-transform transform -translate-y-1/2">
        <i class="bi bi-caret-right-fill"></i>
      </div>
    </Swiper>
  );
}

export default TrendingProjectsCarousel;
