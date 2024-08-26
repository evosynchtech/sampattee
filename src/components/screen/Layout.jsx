import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { BsWhatsapp } from "react-icons/bs";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <a
        target="_blank"
        href="https://wa.me/+919019000530"
        className="fixed bg-[#25d366] text-white font-bold sm:p-5 p-3 rounded-full bottom-5 right-5 z-10"
      >
        <div className="sm:text-5xl text-3xl">
          <BsWhatsapp />
        </div>
      </a>
      <Footer />
    </>
  );
}

export default Layout;
