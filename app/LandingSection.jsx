import Image from "next/image";
import React from "react";
import landingImage from "./images/landingMeme.jpeg";
const LandingSection = () => {
  return (
    <div className=" text-5xl text-black flex gap-8 justify-start items-start  mt-10 relative  w-full ">
      <div className="text-black text-5xl font-body w-full">Rise of Meme</div>

      <div className=" w-full relative">
        <Image src={landingImage} alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default LandingSection;
