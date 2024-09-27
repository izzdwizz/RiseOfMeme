"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../images/crook-and-flail.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const HandleNav = () => {
    setToggled(!toggled);
  };
  return (
    <div className="flex justify-between items-center h-24  w-full mx-auto p-8 md:p-12 text-black/80 font-body z-50">
      <h1 className="w-full justify-start text-left text-3xl md:text-6xl flex items-center gap-2 text-black cursor-pointer md:text-black font-body">
        <Image
          src={logo}
          alt="helm"
          width={100}
          height={100}
          className="md:flex hidden"
        />
        MEME ORIGINS{" "}
      </h1>

      <ul className="hidden md:flex text-[1.5rem]">
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
        {toggled ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          toggled
            ? "fixed left-0 top-0 h-full w-[60%] wrapper border-r border-r-gray-900/10 ease-in-out duration-1000 z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full justify-start text-left text-3xl md:font-bold text-gray-900/90 font-body  m-4">
          Meme origins{" "}
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
