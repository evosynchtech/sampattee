import React, { useEffect, useState } from "react";
import Logo from "/assets/logoWithoutText.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SideBar from "./SideBar";
import NavButton from "../navButtons/NavButton";
import InputBox from "../inputBox/InputBox";
import Button from "../buttons/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.body.appendChild(div);
    return () => div.remove();
  }, []);
  return (
    <>
      <div className="w-full bg-black flex justify-center">
        <div class="nav-container items-stretch px-4 flex justify-between w-[90%] sm:w-[80%]">
          <Link to="/" className=" flex flex-row items-center">
            <h1 className="sm:text-2xl text-white text-xl font-roboto font-semibold ml-2">
              Sampattee
            </h1>
          </Link>
          <div class="lower-navbar bg-black font-poppins font-medium my-auto text-white flex flex-row justify-start py-2">
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              classname={"mx-1 text-lg"}
            />
            <div className="flex px-1 gap-4 flex-row justify-center">
              <InputBox
                id={"search"}
                placeholder={"Search For"}
                type={"text"}
              />
              <Button width={30} title={"Submit"} marginX={2} />
            </div>
          </div>
          <div
            onClick={() => setIsOpen(true)}
            class="ham-burger p-3 text-2xl sm:text-3xl border-none duration-150"
          >
            <i class="hamberger-lines text-white bi bi-list duration-300 focus:outline-none active:bg-slate-800 rounded-full"></i>
          </div>
        </div>
        <SideBar isMounted={isOpen} unMount={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default Navbar;
