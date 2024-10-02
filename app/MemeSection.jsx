"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import landingImage from "./images/landingMeme.jpeg";
import secondImage from "./images/meme3.png";
import firstImage from "./images/meme2.jpeg";
import fourthImage from "./images/meme4.jpeg";
import fifthImage from "./images/meme5.jpeg";
import sixthImage from "./images/meme6.jpeg";
import seventhImage from "./images/meme7.jpeg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const MemeSection = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);
  return (
    <div className="w-full card flex md:justify-center justify-start mb-6 md:mb-10 section4">
      {/* <div className=" flex flex-col items-start md:grid  md:grid-cols-2 md:grid-flow-row p-8 md:p-16 gap-20 w-full">
        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={secondImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>

        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={landingImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>

        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={firstImage}
            layout="fill"
            alt="meme"
            className=" object-cover min-w-[200px] h-[200px]"
          />
        </div>

        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={fourthImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>
        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={fifthImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>
        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={sixthImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>
        <div className="w-full md:h-[500px] md:min-w-[500px] h-[200px] min-w-[200px] rounded-md shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer relative p-4">
          <Image
            src={seventhImage}
            layout="fill"
            alt="meme"
            className=" object-contain "
          />
        </div>
      </div> */}
      <section className="section-4">
        <div className="figures">
          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="000"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>
          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="000"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            data-aos-delay="000"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme3.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="100"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme4.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="100"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme5.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="100"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme6.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="200"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme7.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="200"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="200"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="300"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="300"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="300"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme2.jpeg" />
          </figure>

          <figure
            data-aos="fade-up"
            animation-duration="1000"
            data-aos-delay="300"
            className="aos-init shadow-lg hover:scale-105 ease-in-out duration-500 hover:shadow-2xl cursor-pointer"
          >
            <img src="/images/meme3.jpeg" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default MemeSection;

const MemeContainer = styled.div`
  & > img {
    height: 500px;
    width: 500px;
    object-fit: contain;
  }
`;
