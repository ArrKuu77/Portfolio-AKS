import React, { useEffect } from "react";
import { RiAppsFill } from "react-icons/ri";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import AnimatedText from "./AnimateCycle.components";
import { BiDownArrowAlt } from "react-icons/bi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

const HeroCcomponents = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  const cvPDF = "./CV(aks).pdf";
  const [text, { isDelete }] = useTypewriter({
    words: ["Aung Kaung San"],
    loop: 0,
    typeSpeed: 100,
    delaySpeed: 1500,
    deleteSpeed: 200,
  });
  // console.log(helper);
  return (
    <div
      className=" relative md:h-[7%] h-[6%] animate-none  "
      id="hero"
      data-aos="fade-up"
      // data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="max-sm:w-full flex justify-evenly h-[85%] max-sm:h-full flex-col absolute bottom-0 z-10  ">
        <div className=" max-sm:w-1/2 border border-zinc-700 w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
          <PiStarFourFill />
          <p>Let's meet!</p>
        </div>
        <div className="max-sm:h-[35%] max-sm:flex max-sm:flex-col  items-center ">
          <h1 className=" md:text-6xl font-bold max-sm:text-3xl max-sm:h-1/3">
            I'm <span className=" font-bold text-white">{text}</span>
            <Cursor cursorStyle={isDelete ? "<" : ">"} cursorColor="orange" />
          </h1>

          <h1 className=" md:text-7xl w-[90%] font-bold max-sm:text-3xl max-sm:h-[44%]">
            Frontend developer and Medical Representative (MR)
          </h1>
        </div>

        <div className=" relative    max-sm:flex max-sm:flex-col max-sm:justify-evenly max-sm:h-[40%] md:flex items-center gap-5 ">
          <Link
            className="z-20 cursor-pointer select-none"
            to="portfolio"
            smooth={true}
            offset={-120}
            duration={500}
          >
            <button className="  max-sm:w-full flex gap-3 items-center justify-center border border-zinc-700 p-3 rounded-2xl md:text-2xl font-bold">
              <p>My Works</p> <RiAppsFill />
            </button>
          </Link>
          <a
            className="z-20 cursor-pointer select-none"
            target="_blank"
            href={cvPDF}
            download
          >
            <button className="z-20 cursor-pointer select-none max-sm:w-full flex gap-3 items-center justify-center border border-zinc-700 p-3 rounded-2xl md:text-2xl font-bold">
              <p>Download CV</p> <PiDownloadSimpleBold />
            </button>
          </a>
          <div className="md:hidden w-full items-center   flex ">
            <AnimatedText className=" " />
            <div className=" absolute w-[25%] flex justify-center items-centern ">
              <BiDownArrowAlt className=" md:text-3xl cursor-pointer  hover:animate-bounce " />
            </div>
          </div>
          <div className="max-sm:hidden w-full absolute bottom-0 items-center   flex justify-end">
            <AnimatedText className=" " />
            <div className=" absolute w-[15%] flex justify-center items-centern ">
              <BiDownArrowAlt className=" md:text-3xl cursor-pointer  hover:animate-bounce " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCcomponents;
