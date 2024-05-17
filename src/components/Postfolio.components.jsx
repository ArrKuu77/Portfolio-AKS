import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import zmo from "../image/zmo.png";
import zmoVimpex from "../image/ZMO(vimpex).jpg";
import zmoJDS from "../image/ZMO(JDS).jpg";
import zmoRVTelpha from "../image/ZMO(RV-Telpha).jpg";
import PostfolioImg from "./PostfolioImgExperience/PostfolioImg.PExperience";

const PostfolioComponents = () => {
  return (
    <div
      className=" z-10 max-sm:h-[17%] md:h-[13%]   md:mt-10 max-sm:mt-5   "
      id="portfolio"
      // data-aos-offset="-1000"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
    >
      <div className=" flex flex-col justify-evenly gap-5 h-full">
        <div className="max-sm:w-[50%] border border-zinc-700 w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
          <PiStarFourFill />
          <p>Protfolio</p>
        </div>
        <div className=" w-full md:text-7xl max-sm:text-3xl  ">
          {/* <h1>Check out my featured projects</h1> */}
          <h1>Employment and Work Experience</h1>
        </div>
        <div className="  w-full max-sm:mx-auto max-sm:overflow-hidden max-sm:h-[75%] ">
          <div className="max-sm:h-full flex md:flex-wrap max-sm:w-full max-sm:flex-col  justify-evenly gap-5 items-center">
            <PostfolioImg
              infoImg={zmoVimpex}
              infoCompany={"VimpexMyanmar"}
              infoExp={"5years"}
              fade={"fade-right"}
            />
            <PostfolioImg
              infoImg={zmoJDS}
              infoCompany={"JDS Myanmar"}
              infoExp={"1 Years"}
              fade={"fade-left"}
            />
            <PostfolioImg
              infoImg={zmoRVTelpha}
              infoCompany={"RV-Telpha Myanmar"}
              infoExp={"Untile"}
              fade={"fade-right"}
            />

            {/* <div
              className="max-sm:w-full w-2/5 rounded-3xl border border-zinc-700 relative"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={zmo}
                className="  h-[250px] object-cover w-full rounded-3xl p-2  hover:p-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[0.8] hover:bg-[#D47904] duration-300 "
                alt=""
              />
              <div className=" max-sm:flex-col absolute bottom-2 left-3 text-white flex items-center gap-3">
                <p className=" bg-black p-3 rounded-xl ">Illustrations</p>
                <p className=" bg-black p-3 rounded-xl ">3D Render</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostfolioComponents;
