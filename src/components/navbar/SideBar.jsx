import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./SideBar.css";
import NavButton from "../navButtons/NavButton";
import InputBox from "../inputBox/InputBox";
import Button from "../buttons/Button";

function SideBar({ isMounted, unMount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.body.classList.add("scroll-lock");
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove("scroll-lock");
      }, 300);
    }
    return () => {
      if (document.body.classList.contains("scroll-lock") && isTransitioning) {
        document.body.classList.remove("scroll-lock");
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <div
      className={`sidebar-container z-[100] top-0 left-0 fixed ${
        isTransitioning && isMounted ? "translate-x-0" : "-translate-x-full"
      } w-full h-full bg-black duration-300`}
    >
      <div className="sidebar-navbar w-full flex flex-row justify-center border-b border-b-slate-300">
        <div className="px-4 w-[80%] flex justify-between">
          <Link className="flex flex-row items-center" to={"/"}>
            <div className="h-full flex items-center">
              <img
                className="h-[70%]"
                src="/assets/sampatteeLogo.jpg"
                alt="Sampattee"
              />
            </div>
          </Link>
          <div
            onClick={unMount}
            className="close-logo text-white text-2xl p-3 sm:text-3xl border-none cursor-pointer duration-150"
          >
            <i class="bi bi-x-lg duration-300 focus:outline-none active:bg-slate-800 rounded-full"></i>
          </div>
        </div>
      </div>
      <div className="grid place-content-center font-medium gap-y-4 p-4 text-base sm:text-lg">
        <NavButton title={"Home"} navigateTo={"/"} classname={"text-center"} />
        <NavButton
          title={"About"}
          navigateTo={"/about"}
          classname={"text-center"}
        />
        <NavButton
          title={"Contact"}
          navigateTo={"/contact"}
          classname={"text-center"}
        />
        <InputBox id={"search"} placeholder={"Search For"} type={"text"} />
        <Button width={"100%"} title={"Submit"} />
      </div>
    </div>,
    document.getElementById("overlay")
  );
}

export default SideBar;
