// import Image from "next/image";
// import React from "react";
// import memeOrigin from "./images/memeOriginMain.jpeg";
// const LandingSection = () => {
//   return (
//     <div className=" flex flex-col text-black items-center md:-mt-10 justify-center  relative  w-full min-w-screen min-h-screen p-8 md:p-12">
//       <div className="relative h-[100px] w-[100] md:min-w-[200px] md:h-[200px] rounded-md">
//         <Image
//           src={memeOrigin}
//           alt="Meme origin"
//           layout="fill"
//           objectFit="contain"
//           className="cursor-pointer hover:scale-105 ease-in-out duration-500 rounded-md shadow-xl hover:shadow-2xl hover:animate-spin"
//         />
//       </div>
//     </div>
//   );
// };

// export default LandingSection;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import memeOrigin from "./images/memeOriginMain.jpeg";

const LandingSection = () => {
  const textArray = [
    { text: "Are you winning son?" },
    { text: "Let's gooo!" },
    { text: "Much wow!" },
    { text: "Such meme!" },
    { text: "Epic win!" },
    { text: "Incredible!" },
    { text: "Ayy lmao!" },
    { text: "This is fine." },
    { text: "Big mood." },
    { text: "Wholesome 100!" },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (!isDisabled) {
      // Select a random text from the array
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setDisplayedText(textArray[randomIndex].text);

      // Disable the button for 2.5 seconds
      setIsDisabled(true);

      // Re-enable the button and reset the displayed text after 2.5 seconds
      setTimeout(() => {
        setIsDisabled(false);
        setDisplayedText(""); // Clears the text
      }, 1500); // Animation completes after 2.5 seconds
    }
  };

  return (
    <div className="flex flex-col text-black items-center justify-center relative w-full min-w-screen min-h-screen p-8 md:p-12">
      {/* Image */}
      <div
        className="relative h-[100px] w-[100px] md:w-[200px] md:h-[200px] rounded-md cursor-pointer hover:scale-105 ease-in-out duration-500"
        onClick={handleClick}
      >
        <Image
          src={memeOrigin}
          alt="Meme origin"
          layout="fill"
          objectFit="contain"
          className={`rounded-md shadow-xl hover:shadow-2xl ${
            isDisabled && "cursor-vertical-text"
          }`}
        />
      </div>

      {/* Animated Text */}
      {displayedText && (
        <div className="animated-text absolute top-[50%] left-[50%] font-body font-[300] text-center text-[1rem] md:text-lg text-black/70 animate-bounce transform -translate-x-1/2">
          {displayedText}
        </div>
      )}
    </div>
  );
};

export default LandingSection;
