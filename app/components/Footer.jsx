import React from "react";

const Footer = () => {
  return (
    <div className="relative bottom-2 w-full flex justify-center font-body text-lg md:text-3xl text-black/70">
      <strong className="font-[200] font-serif text-[1rem] md:text-[1.6rem] text-red-800 mr-2">
        © 2024
      </strong>{" "}
      Memo <strong className="font-serif px-2 font-[200]">–</strong> One meme to
      rule them all
    </div>
  );
};

export default Footer;
