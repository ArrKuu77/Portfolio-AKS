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
  const [text, { isDelete }] = useTypewriter({
    words: ["Zin Mar Oo"],
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
      <div className="max-sm:w-full flex justify-evenly h-3/4 max-sm:h-full flex-col absolute bottom-0 z-10  ">
        <div className=" max-sm:w-1/2 border border-zinc-700 w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
          <PiStarFourFill />
          <p>Let's meet!</p>
        </div>
        <div className="max-sm:h-[35%] max-sm:flex max-sm:flex-col  items-center ">
          <h1 className=" md:text-6xl font-bold max-sm:text-3xl max-sm:h-1/3">
            I'm <span className=" font-bold text-white">{text}</span>
            <Cursor cursorStyle={isDelete ? "<" : ">"} cursorColor="orange" />
          </h1>

          <h1 className=" md:text-7xl font-bold max-sm:text-3xl max-sm:h-[44%]">
            {/* designer and illustrator. */}
            Medical Representative (MR)
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
            href="https://doc-0o-4c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/meo06sldiq5bk03co551c5i1gdb7noi5/754u3u3qo5111n5fk5dkkpfefdsc3eab/1715790300000/3/104141507534228198759/APznzabh-N7y50CCkHDg1WPD0HsqcnX-U7bQ7CzmOtO7NhHMDTMRLrYoLFyQL8OhLDaHDNYLFmyC4FAd6heZ3nAs3QgEg73R8isvHjZhg0XtVfxcJ-wMwx2dEJMJu7aHudy2jvck1vstMO-OgGb4gmcoSJjxGZZcgq30VcxmuDtNs02oxlvT0WYkkEDfueX33LojLHTyxiweCcKAxDV-yVv-etyDcjpjM5Pw_cvpjLCLojnDhq_Qx-SNfMFB5kEuR7iT0hQmgEeMV0itI7c3F0NIlic0JtOqdIgpFcNm0379_MwyBnwkhZxeZv_N-1tq2l0gvRAid0uSJOmAatdnnYxO1RnaLKGoyl7pps6YpQ5vtXNS3VggClSttFE6lbBW8ahXFWhl4MLjFDBu6vz7ewKDKDjYzJXl3sy2TanLmZaBt1PTqf2L6_M=?authuser=0&nonce=62kgg22k2shpo&user=104141507534228198759&hash=2l670u8mpfn5qkcsu2v86cvov5k62iq7"
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
