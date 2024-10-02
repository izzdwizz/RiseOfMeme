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
import downarrow from "./images/down1.png";

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
    { text: "LFG" },
    { text: "4" },
    { text: "MEMOnics" },
    { text: "Wen CTO" },
    { text: "CTO of CTO" },
    { text: <div className="font-serif">1bn mcap is FUD</div> },
    { text: "Send it" },
    { text: "Locked in" },
    { text: "It's just a meme" },
    { text: <div className="font-serif">6.9</div> },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [arrow, setArrow] = useState(true);

  const handleClick = () => {
    if (!isDisabled) {
      // Select a random text from the array
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setDisplayedText(textArray[randomIndex].text);

      // Disable the button for 2.5 seconds
      setIsDisabled(true);
      setArrow(false);
      // Re-enable the button and reset the displayed text after 2.5 seconds
      setTimeout(() => {
        setIsDisabled(false);
        setDisplayedText(""); // Clears the text
      }, 600); // Animation completes after 2.5 seconds
    }
  };

  return (
    <div className="flex flex-col text-black items-center justify-center relative w-full min-w-screen min-h-screen p-8 md:p-12">
      {/* Image */}
    </div>
  );
};

export default LandingSection;
