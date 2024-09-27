"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import helmet from "../images/helmet.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const HandleNav = () => {
    setToggled(!toggled);
  };
  return (
    <div className="flex justify-between items-center h-24  w-full mx-auto p-8 md:p-12 text-black/80 font-body z-50">
      <h1 className="w-full justify-start text-left text-3xl md:text-6xl flex items-center gap-2 text-red-800 md:text-black font-body">
        <Image
          src={helmet}
          alt="helm"
          width={100}
          height={100}
          className="md:flex hidden"
        />
        Rise of meme.{" "}
      </h1>

      <ul className="hidden md:flex ">
        <li className="p-4 cursor-pointer hover:opacity-80" href="#home">
          Home
        </li>

        <li
          className="p-4  w-max cursor-pointer hover:opacity-80"
          href="#about"
        >
          Community
        </li>

        <li
          className="p-4 cursor-pointer hover:opacity-80 text-red-700"
          href="#contact"
        >
          Purchase
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
        <h1 className="w-full justify-start text-left text-3xl md:font-bold text-red-800 font-body  m-4">
          rise of meme{" "}
        </h1>
        <ul className="pt-24 uppercase p-4 ">
          <li className="p-4 border-b-[0.6px] border-b-gray-600">Home</li>

          <li className="p-4 border-b-[0.6px] border-b-gray-600">Community</li>

          <li className="p-4 border-b-[0.6px] border-b-gray-600">purchase</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
