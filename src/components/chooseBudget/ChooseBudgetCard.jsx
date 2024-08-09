import React from "react";

function ChooseBudgetCard({ imgUrl, title }) {
  return (
    <div class="relative w-full overflow-hidden rounded-lg duration-150 hover:scale-[1.025]">
      <img
        className="w-auto h-full block rounded-lg"
        src={imgUrl}
        alt="10 Lakh to 50 Lakh"
      />
      <div class="overlay absolute bottom-0 text-3xl left-0 txtx right-0 bg-black bg-opacity-50 text-white text-center p-5 rounded-b-lg">
        {title}
      </div>
    </div>
  );
}

export default ChooseBudgetCard;
