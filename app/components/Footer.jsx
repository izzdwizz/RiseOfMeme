"use client";
import Image from "next/image";
import React, { useState } from "react";
import dolfirst from "../images/dolf5.png";
import logo from "../images/dol1.png";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
// import dexscreener from

const Footer = () => {
  const [clicked, setClicked] = useState(false);

  const CopyCa = () => {
    setClicked(true);
    navigator.clipboard.writeText("Calm down boss, token never list");

    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };
  return (
    <div className="flex landingWrapper card  flex-col text-white items-center justify-start relative w-full min-w-screen min-h-max h-full p-8 md:p-12">
      <div className="flex gap-6 w-full md:gap-8 md:px-[5rem]  justify-center md:mt-8">
        <a
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px] h-[5rem] w-[5rem] md:h-[6rem] flex items-center md:w-[6rem]"
        >
          <img src="/images/dex-screener.svg" alt="" />
        </a>

        <a
          href="https://t.me/fungiesui"
          target="_blank"
          className="md:text-[1.5rem] text-center text-[1.3rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px] flex items-center"
        >
          <LiaTelegramPlane className=" h-8 w-8 md:h-[3rem] md:w-[3rem]" />
        </a>
        <a
          href="https://x.com/Fungiesui"
          target="_blank"
          className="md:text-[1.5rem] text-center text-[1.3rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px] flex items-center"
        >
          <RiTwitterXFill className=" h-8 w-8 md:h-[3rem] md:w-[3rem]" />
        </a>
      </div>
      <div className="relative hidden md:flex mt-20 md:h-[16rem] md:w-[16rem] rounded-full  p-2 overflow-hidden ">
        <Image
          src="/images/dolfMain.png"
          alt=""
          layout="fill"
          className="  hover:scale-110 duration-500 ease-in-out rounded-full"
        />
      </div>

      {/* <h2 className="font-rubber text-6xl md:mt-5">$FUNGIESUI</h2>
       */}

      <Zoom direction="up" delay={100} duration={700}>
        <h1 className="mt-8 md:mt-6 justify-start text-left text-5xl md:text-[6rem] flex items-center gap-2 text-white cursor-pointer md:text-white font-rubber">
          <strong className="font-[400] font-rubber ">$</strong> FUNGIE{" "}
        </h1>
      </Zoom>
      <h4 className=" mt-6 md:text-[3rem] text-[1.7rem] text-center py-4 md:py-0 font-rubber flex gap-4 items-center">
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
        <span>WORLD RECORD HOLDER DOLPHIN</span>{" "}
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
          <span
            className="md:text-[1.5rem] text-[1.35rem] min-w-max rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[20px_95px_18px] md:p-[17px_25px_14px]"
            onClick={CopyCa}
          >
            {!clicked ? "BUY $FUNGIE" : "Copied!"}
          </span>
          <a
            href="#"
            className="md:text-[1.5rem] text-[1.35rem] min-w-max rounded-[20px] bg-[#10a3e895] hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[20px_95px_18px] md:p-[17px_25px_14px]"
          >
            DEX SCREENER
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
