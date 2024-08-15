import React from "react";

function FeaturedPropertyCard({ imgUrl, title, description }) {
  return (
    <div class="hover:cursor-pointer group relative w-full overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-auto block rounded-lg"
        src={imgUrl}
        alt={title}
      />
      <div class="absolute bottom-0 left-0 right-0 bg-[#0000007a] text-white text-center p-5 transform group-hover:translate-y-0 translate-y-full transition-transform duration-300 ease-in-out">
        <h3 className="m-0 text-[1.2em] font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeaturedPropertyCard;
