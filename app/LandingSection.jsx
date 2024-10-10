import Image from "next/image";
import React from "react";
import landingImage from "./images/ladningMeme.png";
const LandingSection = () => {

  // MAIN
  return (
    <div className=" flex flex-col text-black  mt-10 relative  w-full p-8 md:p-12">
      <div className="w-full flex flex-col md:flex-row gap-8 justify-start items-start">
        <div className="text-black font-body w-full flex-col flex ">
          <h2 className="text-4xl font-normal text-red-800 mb-8">
            the historic rise of memes
          </h2>
          <p className="md:text-2xl  text-xl  ">
            Verily, in these modern days, there hath arisen a most curious form
            of jest, known to the masses as a "meme." These simple, yet cunning
            pictographs, doth spread with great haste across the vast web of
            knowledge, bearing words of wit or wisdom. Oftentimes, they art but
            trifles, meant to amuse or mock, yet in their simplicity, they
            capture the spirit of the age, conveying truth or folly in ways more
            potent than a legion’s decree. Thus, the meme, like the scrolls of
            old, doth endure as a tool for the common folk to share mirth and
            thought alike.
          </p>
          <span className="w-full justify-end relative text-right mt-4 right-3 font-sans ">
            –{" "}
            <strong className="font-body font-[400]">
              Based on Real world Events!
            </strong>
          </span>
        </div>

        <div className=" w-full relative min-h-max flex flex-col -top-32  md:-top-20">
          <Image
            src={landingImage}
            alt="Somethin old timey"
            layout="fill"
            objectFit="contain"
            className="object-cover  h-[500px_!important] rounded-full"
          />
        </div>
      </div>

      <div className="mt-[15rem] md:mt-20 w-full justify-center items-center ">
        <h4 className="w-full text-[2.5rem] md:text-[3.5rem] md:text-center text-red-800 font-body">
          Why are guys thinking about the roman empire{" "}
          <strong className="font-sans font-[400] animate-pulse">?</strong>
        </h4>
      </div>
    </div>
  );
};

export default LandingSection;
