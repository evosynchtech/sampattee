import React from "react";

function FeaturedPropertyCard({ imgUrl, title, description }) {
  return (
    <div class="relative w-full overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-auto block rounded-lg"
        src={imgUrl}
        alt={title}
      />
      <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-5 transform translate-y-full transition-transform duration-300 ease-in-out">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeaturedPropertyCard;
