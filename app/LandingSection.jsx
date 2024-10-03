"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import dolfirst from "./images/dolfirst.png";
import dolfirst from "./images/dolf5.png";
import logo from "./images/dol1.png";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";

const LandingSection = () => {
  return (
    <div className="flex landingWrapper card  flex-col text-white items-center justify-start relative w-full min-w-screen min-h-max h-full p-8 md:p-12">
      {/* Image */}
      {/* 
      <div className="relative md:h-[20rem] md:w-[20rem] rounded-full border-[1rem] border-white p-2 overflow-hidden">
        <Image
          src={dolfirst}
          alt=""
          layout="fill"
          className="hover:scale-110 duration-500 ease-in-out"
        />
      </div> */}
      {/* <div className="flex gap-6 w-full md:gap-8 md:px-[5rem] justify-center md:mt-8">
        <a
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
        >
          <RiTwitterXFill className="" />
        </a>

        <a
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
        >
          <LiaTelegramPlane />
        </a>
        <a
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
        >
          <RiTwitterXFill className="" />
        </a>
      </div> */}

      <div className="relative top-10 -left-4 md:top-12 md:-left-4 h-[22rem] w-[22rem] md:h-[22rem] md:w-[22rem]  p-2 overflow-hidden ">
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
        <h1 className=" mt-6 justify-start text-left text-[5rem] md:text-[6rem] flex items-center gap-2 text-white cursor-pointer md:text-white font-rubber">
          <strong className="font-[400] font-rubber ">$</strong> FUNGIE{" "}
        </h1>
      </Zoom>
      <h4 className=" mt-6 md:text-[3rem] text-[2rem] font-rubber flex gap-2 md:gap-4 items-center text-center group">
        <Slide direction="left" delay={200} duration={800}>
          {" "}
          <Image
            src={logo}
            alt="helm"
            width={100}
            height={100}
            className="md:flex md:h-[100px] md:w-[100px] h-[60px] w-[60px] group-hover:-rotate-180  ease-in-out duration-1000"
          />{" "}
        </Slide>
        <span>FUNGIE ON SUI</span>{" "}
        <Slide direction="right" delay={250} duration={800}>
          {" "}
          <Image
            src={logo}
            alt="helm"
            width={100}
            height={100}
            className="md:flex md:h-[100px] md:w-[100px] h-[60px] w-[60px] group-hover:rotate-180 ease-in-out duration-1000 scale-x-[-1]"
          />
        </Slide>
      </h4>

      <Fade delay={300} duration={200}>
        {" "}
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center font-rubber my-[4rem] md:mt-8 md:mb-0">
          <a
            href="#"
            className="md:text-[1.5rem] text-[1.5rem] text-center  rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[20px_95px_18px] md:p-[17px_25px_14px]"
          >
            BUY $FUNGIE
          </a>
          <a
            href="#"
            className="md:text-[1.5rem] text-[1.5rem] text-center  rounded-[20px] bg-[#10a3e895] hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[20px_95px_18px] md:p-[17px_25px_14px]"
          >
            DEX SCREENER
          </a>
        </div>
      </Fade>

      <div className="md:p-5 border-[.5rem] md:border-[.8rem] md:h-max md:w-max text-center  border-white bg-[#10a3e895] text-2xl md:text-3xl font-rubber fixed md:top-[5rem] top-[3rem] right-[1.2rem] md:right-[2rem] hover:bg-[#5bc4f5e8] duration-300 ease-in-out cursor-pointer rounded-[0%_100%_100%_100%] rotate-45 droplet ">
        BUY <br></br> $FUNGIE <br></br>NOW
      </div>
    </div>
  );
};

export default LandingSection;
