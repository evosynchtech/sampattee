import React from "react";
import { Link } from "react-router-dom";

function Button({ title, width, marginX, to }) {
  return (
    <Link to={to} className={`w-[${width}%] mx-${marginX}`}>
      <button
        type="submit"
        className="text-black bg-[#ffffff] hover:outline outline-2 outline-white hover:bg-[#000000] hover:text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        {title}
      </button>
    </Link>
  );
}

export default Button;
