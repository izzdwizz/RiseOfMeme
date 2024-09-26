"use client";
import React from "react";
import styled from "styled-components";
import landingImage from "./images/landingMeme.jpeg";
import secondImage from "./images/meme3.png";
import Image from "next/image";

const MemeSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 grid-flow-row p-16 gap-20 w-full">
        <div className="w-full h-[500px] min-w-[500px] relative">
          <Image
            src={secondImage}
            layout="fill"
            alt="meme"
            className=" object-cover rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          />
        </div>

        <div className="w-full h-[500px] min-w-[500px] relative">
          <Image
            src={landingImage}
            layout="fill"
            alt="meme"
            className=" object-cover rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          />
        </div>

        <div className="w-full h-[500px] min-w-[500px] relative">
          <Image
            src={landingImage}
            layout="fill"
            alt="meme"
            className=" object-cover rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          />
        </div>

        <div className="w-full h-[500px] min-w-[500px] relative">
          <Image
            src={secondImage}
            layout="fill"
            alt="meme"
            className=" object-cover rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MemeSection;

const MemeContainer = styled.div`
  & > img {
    height: 500px;
    width: 500px;
    object-fit: cover;
  }
`;
