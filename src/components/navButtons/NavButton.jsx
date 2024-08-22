import React from "react";
import { Link } from "react-router-dom";

function NavButton({ onClick, title, classname, navigateTo, linkTo }) {
  return (
    <div
      onClick={onClick}
      class={`font-poppins cursor-pointer uppercase duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-gray-800 rounded text-lg${
        classname ? " " + classname : ""
      }`}
    >
      {navigateTo ? (
        <Link className="text-white" to={navigateTo}>
          {title}
        </Link>
      ) : linkTo ? (
        <a href={linkTo} target="_blank">
          {title}
        </a>
      ) : (
        <div href="#">{title}</div>
      )}
    </div>
  );
}

export default NavButton;
