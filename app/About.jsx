import Image from "next/image";
import React from "react";
import { GiHeavyRain } from "react-icons/gi";
import { GiDolphin } from "react-icons/gi";
import aboutdolf from "./images/aboutdolf.png";

const About = () => {
  return (
    <div className="Wrappers md:mt-[4rem] border-t-8 border-white card p-4 md:p-8 flex justify-center flex-col items-center font-rubber">
      <header className="py-16 flex gap-4">
        {" "}
        <GiDolphin className="text-[#9adaf7e8] md:text-white md:h-[3rem] md:w-[3rem]" />{" "}
        <h2 className="text-[5rem]">ABOUT FUNGIE</h2>{" "}
      </header>
      <div className="md:h-[20rem] md:w-[20rem] relative">
        <Image src={aboutdolf} alt="" layout="fill" objectFit="contain" />
      </div>

      <p className="font-rubber md:text-[3rem] md:mt-8 p-[3rem] text-center w-[80%]">
        ✨Fungie is the cutest record-holding Dolphin on SUI, spreading $FUNGIE
        to the meme world✨
      </p>
    </div>
  );
};

export default About;
