import React from "react";

function Button({ title, width, marginX }) {
  return (
    <div className={`w-[${width}%] mx-${marginX}`}>
      <button
        type="submit"
        className="text-black bg-[#ffffff] hover:outline outline-2 outline-white hover:bg-[#000000] hover:text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
