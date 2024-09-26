import Image from "next/image";
import React from "react";
import landingImage from "./images/landingImage.jpeg";
const LandingSection = () => {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] text-5xl text-black relative min-w-max w-screen h-screen">
      <Image
        src={landingImage}
        alt=""
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <h2 className="text-black text-5xl relative">Rise of Meme</h2>
    </div>
  );
};

export default LandingSection;
