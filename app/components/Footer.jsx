"use client";
import Image from "next/image";
import React from "react";
import dolfirst from "../images/dolf5.png";
import logo from "../images/dol1.png";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="flex landingWrapper card  flex-col text-white items-center justify-start relative w-full min-w-screen min-h-max h-full p-8 md:p-12">
      <div className="relative md:top-12 md:-left-4 md:h-[22rem] md:w-[22rem]  p-2 overflow-hidden ">
        <Image
          src={dolfirst}
          alt=""
          layout="fill"
          className="hover:scale-110 duration-500 ease-in-out"
        />
      </div>

      {/* <h2 className="font-rubber text-6xl md:mt-5">$FUNGIESUI</h2>
       */}

      <Zoom direction="up" delay={100} duration={700}>
        <h1 className=" mt-6 justify-start text-left text-5xl md:text-[6rem] flex items-center gap-2 text-white cursor-pointer md:text-white font-rubber">
          <strong className="font-[400] font-rubber ">$</strong> FUNGIE{" "}
        </h1>
      </Zoom>
      <h4 className=" mt-6 md:text-[3rem] font-rubber flex gap-4 items-center">
        <Slide direction="left" delay={200} duration={800}>
          {" "}
          <Image
            src={logo}
            alt="helm"
            width={100}
            height={100}
            className="md:flex hidden"
          />{" "}
        </Slide>
        <span>WORLD RECORD HOLDER TOKEN</span>{" "}
        <Slide direction="right" delay={250} duration={800}>
          {" "}
          <Image
            src={logo}
            alt="helm"
            width={100}
            height={100}
            className="md:flex hidden scale-x-[-1]"
          />
        </Slide>
      </h4>

      <Fade delay={300} duration={200}>
        {" "}
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center font-rubber md:mt-8">
          <a
            href="#"
            className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
          >
            BUY $FUNGIE
          </a>
          <a
            href="#"
            className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895] hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
          >
            DEX SCREENER
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
