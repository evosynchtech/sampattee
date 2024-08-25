import React from "react";

function TrendingProjectCard({imgUrl, title, description}) {
  return (
    <div class="swiper-slide bg-black cursor-pointer">
      <div class="trending-project-card overflow-hidden rounded-[10px] relative w-full h-full">
        <div class="trending-project-card-item flex justify-center w-full h-full group">
          <img
            className="h-full object-cover"
            src={imgUrl}
            alt={title}
          />
          <div class="trending-project-card-overlay h-full absolute bottom-0 left-0 right-0 bg-[#0000009a]  text-white text-center p-2 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h3 className="m-0 text-[1.2em] font-bold">
              {title}
            </h3>
            <p className="mt-3 text-[1em]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProjectCard;
