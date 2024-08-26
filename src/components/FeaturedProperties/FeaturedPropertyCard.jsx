import React from "react";

function FeaturedPropertyCard({ imgUrl, title, description }) {
  return (
    <div className="flex flex-col my-3">
      <div class="hover:cursor-pointer group relative h-full w-full overflow-hidden rounded-lg shadow-lg">
        <img
          className="h-full w-full object-cover block rounded-lg"
          src={imgUrl}
          alt={title}
        />
        <div class="absolute h-full bottom-0 left-0 right-0 bg-[#0000007a] text-white text-center p-5 transform group-hover:translate-y-0 translate-y-full transition-transform duration-300 ease-in-out">
          <h3 className="m-0 text-[1.2em] font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <h1 className="bg-black text-white text-start font-bold p-1 -mx-1">
        {title}
      </h1>
    </div>
  );
}

export default FeaturedPropertyCard;
