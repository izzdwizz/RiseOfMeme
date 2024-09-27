import Image from "next/image";
import React from "react";
import memeOrigin from "./images/memeOriginMain.jpeg";
const LandingSection = () => {
  return (
    <div className=" flex flex-col text-black items-center md:-mt-10 justify-center  relative  w-full min-w-screen min-h-screen p-8 md:p-12">
      <div className="relative h-[100px] w-[100] md:min-w-[200px] md:h-[200px] rounded-md">
        <Image
          src={memeOrigin}
          alt="Meme origin"
          layout="fill"
          objectFit="contain"
          className="cursor-pointer hover:scale-105 ease-in-out duration-500 rounded-md shadow-xl hover:shadow-2xl hover:animate-spin"
        />
      </div>
    </div>
  );
};

export default LandingSection;
