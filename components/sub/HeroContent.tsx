"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/util/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center h-full w-full m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[15px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] h-5 w-10 " />
          <h1 className="wWelcome-text text-[#ffffffbb] text-[15px] ">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto "
        >
          Hello !
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            I am Joy
          </span>
          Back-End Developer.
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className=" text-lg text-justify text-gray-300 my-5 max-w-[550px]"
        >
          I&apos;m a Full Stack Developer with experience in website, and
          software development. Check out my projects and skills. Now a days I
          am learning about cyber security with online resources.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(0.8)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[200px]"
        >
          Hire Me !
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={750}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
