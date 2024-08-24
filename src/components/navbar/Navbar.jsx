import React, { useEffect, useState } from "react";
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
        <div class="nav-container items-stretch px-4 flex justify-between w-[90%] lg:w-[95%]">
          <Link to="/" className=" flex flex-row items-center">
            <div className="h-full flex items-center">
              <img className="h-[70%]" src="/assets/sampatteeLogo.jpg" alt="Sampattee" />
            </div>
          </Link>
          <div class="lower-navbar bg-black font-poppins font-medium my-auto text-white flex flex-row justify-start py-2">
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Kharar"}
              navigateTo={"/place/kharar"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"New Chandigarh"}
              navigateTo={"/place/new_chandigarh"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Zirakpur"}
              navigateTo={"/place/zirakpur"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Dera Bassi"}
              navigateTo={"/place/dera_bassi"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Banur"}
              navigateTo={"/place/banur"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Contact"}
              navigateTo={"/contact"}
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
