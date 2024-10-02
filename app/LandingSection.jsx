"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import dolfirst from "./images/dolfirst.png";
import dolfirst from "./images/dolf5.png";
import logo from "./images/dol1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

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

      <div
        className="relative md:top-12 md:-left-4 md:h-[22rem] md:w-[22rem]  p-2 overflow-hidden "
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="00"
      >
        <Image
          src={dolfirst}
          alt=""
          layout="fill"
          className="hover:scale-110 duration-500 ease-in-out"
        />
      </div>

      {/* <h2 className="font-rubber text-6xl md:mt-5">$FUNGIESUI</h2>
       */}

      <h1 className=" mt-6 justify-start text-left text-5xl md:text-[6rem] flex items-center gap-2 text-white cursor-pointer md:text-white font-rubber">
        <strong className="font-[400] font-rubber ">$</strong> FUNGIE{" "}
      </h1>
      <h4
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="100"
        className=" mt-6 md:text-[3rem] font-rubber flex gap-4 items-center"
      >
        <Image
          src={logo}
          alt="helm"
          width={100}
          height={100}
          className="md:flex hidden"
        />{" "}
        <span>FUNGIE ON SUI</span>{" "}
        <Image
          src={logo}
          alt="helm"
          width={100}
          height={100}
          className="md:flex hidden scale-x-[-1]"
        />
      </h4>

      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center font-rubber md:mt-8">
        <a
          data-aos="fade-up"
          data-aos-duration="100"
          data-aos-delay="100"
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895]  hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
        >
          BUY $FUNGIE
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-delay="100"
          href="#"
          className="md:text-[1.5rem] rounded-[20px] bg-[#10a3e895] hover:bg-[#5bc4f5e8] duration-300 ease-in-out border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px]"
        >
          DEX SCREENER
        </a>
      </div>
    </div>
  );
};

export default LandingSection;
