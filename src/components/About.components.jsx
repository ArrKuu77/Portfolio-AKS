import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import frontendImg from "../image/frontend.jpg";
import microsoft from "../image/microsoft.jpg";
import computerBassic from "../image/computerBassic.png";

const AboutComponents = () => {
  const cvPDF = "./CV(zmo)1.pdf";

  return (
    <div
      className=" z-10 max-sm:h-[25%]  md:h-[18%]    "
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      id="about"
    >
      <div className=" flex flex-col justify-evenly gap-5 h-full">
        <div className=" max-sm:w-1/2 border border-zinc-700 md:w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
          <PiStarFourFill />
          <p>About Me</p>
        </div>
        <div className=" w-full md:text-6xl max-sm:text-4xl ">
          {/* <h1>Turning complex problems into simple design</h1> */}
          <h1>Personal Information</h1>
        </div>
        <div className="  max-sm:h-[20%]  md:h-[13%] max-sm:w-full max-sm:overflow-hidden">
          <div className="max-sm:flex-col flex justify-between items-center gap-8 h-full">
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos="zoom-in-down"
              className=" md:h-full max-sm:h-[30%] max-sm:w-full rounded-3xl flex flex-col justify-center items-center w-4/12 border border-zinc-700  "
            >
              <h1 className=" md:text-7xl">28</h1>
              <h2 className=" md:text-xl">Date of birth (9.1.1996)</h2>
            </div>
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos="zoom-in-down"
              className=" md:h-full max-sm:h-[30%] max-sm:w-full rounded-3xl flex flex-col justify-center items-center w-4/12 border border-zinc-700  "
            >
              <h1 className=" md:text-4xl">NRC Number</h1>
              <h2 className=" md:text-xl">12/DaGaMa(Naing)038804</h2>
            </div>
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos="zoom-in-down"
              className=" md:h-full max-sm:h-[30%] max-sm:w-full rounded-3xl flex flex-col justify-center items-center w-4/12 border border-zinc-700  "
            >
              <h1 className=" md:text-xl">Buddhist</h1>
              <h2 className=" md:text-4xl">Religion</h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-between max-sm:flex-col max-sm:h-[24%]">
          <div className=" max-sm:w-full md:w-[60%]   md:text-2xl">
            <div className="">
              <p>
                I am seeking a suitable position that enables me to utilize and
                fortify the attributes, skills and personal qualities. I have
                always been anenergetic worker and I enjoy overcoming
                challenges.
              </p>
            </div>
            <div>
              <p>
                I always try to get 100 achievement and i always got nearly 100
                achievement in ever months. I always Building and maintaining
                strong relationships with doctors, pharmacists, and other
                medical personnel .i always timely reporting and documentation
                of interactions with doctor .
              </p>
            </div>
          </div>
          <a
            className="z-20 cursor-pointer select-none"
            target="_blank"
            href={cvPDF}
            download
          >
            <div className=" max-sm:w-full md:hidden max-sm:flex p-3 rounded-xl  justify-center items-center border border-zinc-700 bg-[#D47904]">
              <button>Download CV</button>
              <PiDownloadSimpleBold />
            </div>
          </a>

          <div className="max-sm:w-full  md:w-[35%] md:text-2xl flex justify-between flex-col">
            <div>
              <span className=" !text-base text-[#75747C]">Name</span>
              <h1>Aung Kaung San</h1>
            </div>
            <div>
              <span className=" !text-base text-[#75747C]">Phone</span>
              <h1>09250676890</h1>
            </div>
            <div>
              <span className=" !text-base text-[#75747C]">Email</span>
              <h1>aungkungsan@gmail.com</h1>
            </div>
            <div>
              <span className=" !text-base text-[#75747C]">Location</span>
              <h1>
                No(468/46),Aye Yeit Nyein Street,North Dagon Township,Yangon
              </h1>
            </div>
          </div>
        </div>

        <a
          className="z-20 cursor-pointer select-none"
          target="_blank"
          href="https://doc-0o-4c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/meo06sldiq5bk03co551c5i1gdb7noi5/754u3u3qo5111n5fk5dkkpfefdsc3eab/1715790300000/3/104141507534228198759/APznzabh-N7y50CCkHDg1WPD0HsqcnX-U7bQ7CzmOtO7NhHMDTMRLrYoLFyQL8OhLDaHDNYLFmyC4FAd6heZ3nAs3QgEg73R8isvHjZhg0XtVfxcJ-wMwx2dEJMJu7aHudy2jvck1vstMO-OgGb4gmcoSJjxGZZcgq30VcxmuDtNs02oxlvT0WYkkEDfueX33LojLHTyxiweCcKAxDV-yVv-etyDcjpjM5Pw_cvpjLCLojnDhq_Qx-SNfMFB5kEuR7iT0hQmgEeMV0itI7c3F0NIlic0JtOqdIgpFcNm0379_MwyBnwkhZxeZv_N-1tq2l0gvRAid0uSJOmAatdnnYxO1RnaLKGoyl7pps6YpQ5vtXNS3VggClSttFE6lbBW8ahXFWhl4MLjFDBu6vz7ewKDKDjYzJXl3sy2TanLmZaBt1PTqf2L6_M=?authuser=0&nonce=62kgg22k2shpo&user=104141507534228198759&hash=2l670u8mpfn5qkcsu2v86cvov5k62iq7"
        >
          <div className="  max-sm:hidden md:w-[25%] p-3 rounded-xl md:flex justify-center items-center border border-zinc-700 bg-[#D47904]">
            <button>Download CV</button>
            <PiDownloadSimpleBold />
          </div>
        </a>

        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="  h-[40%] max-sm:h-[40%] max-sm:w-full max-sm:overflow-hidden"
        >
          <div className=" max-sm:h-full flex max-sm:flex-col justify-between max-sm:w-full">
            <div className="  md:w-[45%]  border  border-zinc-700 rounded-3xl p-3 flex justify-between flex-col   ">
              <div className=" h-[30%] flex justify-between flex-col px-2">
                <div className=" max-sm:text-2xl md:text-4xl">
                  <h1>Computer Bassic </h1>
                  <h1>Class</h1>
                </div>
                <div className=" flex items-center gap-3">
                  <p className=" max-sm:text-sm border-zinc-700 p-3 border  rounded-2xl">
                    Microsoft office
                  </p>
                  <p className=" max-sm:text-sm border-zinc-700 p-3 border  rounded-2xl">
                    i can use to Gmail
                  </p>
                </div>
              </div>
              <div className=" md:text-[20px] px-2">
                <p>I work with microsoft office and email</p>
              </div>
              <div className=" h-[50%] overflow-hidden ">
                <img src={computerBassic} alt="" />
              </div>
            </div>
            <div className=" md:w-[45%] border  border-zinc-700 rounded-3xl p-3 flex justify-between flex-col   ">
              <div className=" h-[30%] flex justify-between flex-col px-2">
                <div className=" max-sm:text-2xl md:text-4xl">
                  <h1>Frontend </h1>
                  <h1>development</h1>
                </div>
                <div className=" flex items-center gap-3">
                  <p className=" max-sm:text-sm border-zinc-700 p-3 border  rounded-2xl">
                    UI/UX Design
                  </p>
                  <p className=" max-sm:text-sm border-zinc-700 p-3 border  rounded-2xl">
                    Design to Code
                  </p>
                </div>
              </div>
              <div className=" md:text-[20px] px-2">
                <p>I work with HTML/CSS, Framer and WordPress.</p>
              </div>
              <div className=" h-[50%] overflow-hidden ">
                <img src={microsoft} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponents;
