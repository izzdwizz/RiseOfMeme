"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import fish1 from "./images/dolf5.png";
import dolfirst from "./images/dolfirst.png";

import fish2 from "./images/dol2.png";
import Image from "next/image";

const MemeSection = () => {
  return (
    <div className="flex flex-col gap-8 md:mt-10">
      <div className="w-full flex-col gap-8 items-center justify-center">
        <div className="flex gap-8 w-full md:py-8 md:px-[8rem] flex-col md:flex-row justify-between">
          <Image
            src={fish2}
            alt=""
            width={100}
            height={100}
            className="md:h-[15rem] md:w-[20rem] scale-x-[-1]"
          />
          <Image
            src={fish2}
            alt=""
            width={100}
            height={100}
            className="md:h-[15rem] md:w-[20rem]"
          />
        </div>

        <p className="md:text-4xl font-rubber w-full md:text-center text-left md:px-[10rem] mt-8">
          We are donating a % of our profits to wildlife needs <br></br>across
          the world.
          <br></br>
          <br></br>
          Starting with support for Khao Kheow Open Zoo, <br></br>the zoo that
          houses Moo Deng.
        </p>
        <div className="w-full justify-center flex">
          <a
            href="#"
            className=" cursor-pointer w-max uppercase md:mt-[5rem] md:text-[1.8rem] rounded-[20px] bg-[#10a3e895] border-white/70 border shadow-[9px_9px_0px_1px_#fff] p-[17px_25px_14px] hover:bg-[#5bc4f5e8] font-rubber flex gap-8  flex-col md:flex-row text-center justify-center"
          >
            Buy now on dex screener
          </a>
        </div>
      </div>

      <div className="w-full card flex flex-col items-center md:mt-16 md:justify-center justify-start mb-6 md:mb-10 section4">
        {/* <Slide direction="up" cascade={true} delay={100} duration={800}> */}{" "}
        <div className="relative md:h-[20rem] md:w-[20rem] rounded-xl shadow-lg border-[0.5px] border-white/70 p-2 md:p-8 overflow-hidden">
          <Image
            src={dolfirst}
            alt=""
            layout="fill"
            className="hover:scale-110 duration-500 ease-in-out"
          />
        </div>
        <section className="section-4">
          <div className="figures">
            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme1.jpeg" />
            </figure>
            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme2.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme3.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme4.jpeg" />
            </figure>

            {/* <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme5.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme6.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme7.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme2.jpeg" />
            </figure>*/}

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme9.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme5.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme6.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme5.jpeg" />
            </figure>

            <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
              <img src="/images/meme6.jpeg" />
            </figure>
          </div>
        </section>
        {/* </Slide> */}
      </div>
    </div>
  );
};

export default MemeSection;
