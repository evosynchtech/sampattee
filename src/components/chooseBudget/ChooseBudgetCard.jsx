import React from "react";

function ChooseBudgetCard({ imgUrl, title }) {
  return (
    <div class="relative w-full overflow-hidden cursor-pointer rounded-lg duration-150 hover:scale-[1.025]">
      <img
        className="w-auto h-full block rounded-lg"
        src={imgUrl}
        alt="10 Lakh to 50 Lakh"
      />
      <div class="absolute top-0 h-full w-full bg-[#0000006a] left-0 right-0 p-5 rounded-b-lg flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
      </div>
    </div>
  );
}

export default ChooseBudgetCard;
