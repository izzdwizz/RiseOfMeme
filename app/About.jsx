"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { GiDolphin } from "react-icons/gi";
import aboutdolf from "./images/aboutdolf.png";

const About = () => {
  return (
    <div className="Wrappers md:mt-[4rem] border-t-8 border-white card p-4 md:p-8 flex justify-center flex-col items-center font-rubber">
      <Slide direction="up" duration={600} delay={100} triggerOnce={true}>
        {" "}
        <header className="py-16 flex gap-4">
          {" "}
          <GiDolphin className="text-[#9adaf7e8] md:text-white md:h-[3rem] md:w-[3rem]" />{" "}
          <h2 className="aos-init text-[5rem]">ABOUT FUNGIE</h2>{" "}
        </header>
      </Slide>
      <Slide direction="up" delay={300} duration={1000} triggerOnce={true}>
        {" "}
        <div className="aos-init md:h-[20rem] md:w-[20rem] relative">
          <Image src={aboutdolf} alt="" layout="fill" objectFit="contain" />
        </div>
      </Slide>

      <Fade
        direction="up"
        delay={400}
        duration={1200}
        triggerOnce={true}
        className="flex items-center justify-center"
      >
        {" "}
        <p className="aos-init font-rubber md:text-[3rem] md:mt-8 p-[3rem] text-center w-[80%]">
          ✨Fungie is the cutest record-holding Dolphin on SUI, spreading
          $FUNGIE to the meme world✨
        </p>
      </Fade>
    </div>
  );
};

export default About;
