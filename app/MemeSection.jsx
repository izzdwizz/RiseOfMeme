"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const MemeSection = () => {
  return (
    <div className="w-full card flex md:justify-center justify-start mb-6 md:mb-10 section4">
      {/* <Slide direction="up" cascade={true} delay={100} duration={800}> */}{" "}
      <section className="section-4">
        <div className="figures">
          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>
          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme3.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme4.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme5.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme6.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme7.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure className="aos-init shadow-lg hover:scale-none ease-in-out duration-500 hover:shadow-2xl cursor-pointer">
            <img src="/images/meme3.jpeg" />
          </figure>
        </div>
      </section>
      {/* </Slide> */}
    </div>
  );
};

export default MemeSection;
