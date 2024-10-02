"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../images/dol1.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const HandleNav = () => {
    setToggled(!toggled);
  };
  return (
    <div className="flex justify-between items-center h-24  w-full mx-auto p-8 md:p-12 text-black/80 font-body z-50">
      <h1 className="w-full justify-start text-left text-3xl md:text-6xl flex items-center gap-2 text-white cursor-pointer md:text-white font-bubble">
        <Image
          src={logo}
          alt="helm"
          width={100}
          height={100}
          className="md:flex hidden"
        />
        <strong className="font-[400] font-bubble ">$</strong> FUNGIE{" "}
      </h1>

      <ul className="hidden md:flex text-[1.5rem] font-cartoon text-white">
        <li className="p-4 cursor-pointer hover:scale-110 relative" href="#X">
          X
        </li>

        <li
          className="p-4  w-max cursor-pointer hover:scale-110 relative"
          href="#about"
        >
          Community
        </li>

        <li
          className="p-4 cursor-pointer hover:scale-110 relative  "
          href="#contact"
        >
          Buy
        </li>
      </ul>

      <div onClick={HandleNav} className="block md:hidden ">
        {toggled ? (
          <AiOutlineClose size={20} className="text-white/70" />
        ) : (
          <AiOutlineMenu size={20} className="text-white/70" />
        )}
      </div>

      <div
        className={
          toggled
            ? "fixed left-0 top-0 h-full w-[60%] wrapper2 border-r border-r-white/40 ease-in-out duration-1000 z-10 shadow-2xl"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full justify-start text-left text-3xl md:font-bold text-white/80 font-bubble  m-4">
          <Image
            src={logo}
            alt="helm"
            width={100}
            height={100}
            className="md:flex hidden"
          />{" "}
          $FUNGIE{" "}
        </h1>
        <ul className="pt-24 uppercase p-4 ">
          <li className="p-4 border-b-[0.6px] border-b-gray-900">X</li>

          <li className="p-4 border-b-[0.6px] border-b-gray-900">Community</li>

          <li className="p-4 border-b-[0.6px] border-b-gray-900">Buy</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
