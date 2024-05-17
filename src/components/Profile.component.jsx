import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiGmail } from "react-icons/si";

import imageZmo from "../image/zmo.png";
import Logo from "../image/logo1.jpg";
import { Link } from "react-scroll";

const ProfileComponent = () => {
  return (
    <div className="  max-sm:h-[85vh] max-sm:mt-[5%] md:sticky md:top-5 md:left-16 w-full bg-[#161616] border border-zinc-700 p-1 rounded-3xl ">
      <div className=" max-sm:h-[95%] w-11/12 flex flex-col justify-between gap-2 mx-auto my-3 ">
        {/* Logo and Name */}
        <div className=" max-sm:h-[15%]  flex  justify-around items-center">
          <div className="   border rounded-3xl p-1 wi border-white font-bold text-[#2b2e4a] md:text-7xl">
            <img
              src={Logo}
              alt=""
              className=" max-sm:w-20 max-sm:h-20 w-14 h-14 rounded-full"
            />
          </div>
          <h1 className=" ms-3 md:text-2xl max-sm:text-xl font-bold ">
            Zin Mar Oo
          </h1>
        </div>
        {/* Photo */}
        <div className=" max-sm:h-[35%]   ">
          <img
            src={imageZmo}
            alt=""
            className="md:h-[200px] max-sm:h-full w-full mx-auto rounded-xl   object-cover"
          />
        </div>
        {/* Specialization && Based in*/}
        <div className=" max-sm:h-[25%] max-sm:flex max-sm:flex-col max-sm:justify-evenly">
          <div>
            {/* <span className=" text-sm text-[#c7c6d3] p-0">Specialization:</span> */}
            <span className=" text-sm text-[#c7c6d3] p-0">Work is:</span>
            <div className=" text-xl  font-semibold">
              <p>Medical Representative (MR)</p>
              {/* <p>and frontend developer</p> */}
            </div>
          </div>
          <div>
            {/* <span className=" text-sm text-[#c7c6d3] p-0">Based in:</span> */}
            <span className=" text-sm text-[#c7c6d3] p-0">Live in:</span>
            <h1 className="  text-xl font-semibold">Yangon, Myanmar</h1>
          </div>
        </div>
        {/* contact Icon */}
        <div className=" max-sm:h-[8%]">
          <ul className=" max-sm:h-full flex justify-between items-center text-[#c7c6d3]">
            {/* <li className=" font-bold text-xl max-sm:text-3xl border border-zinc-700 p-2 rounded-full">
              <a
                target="_blank"
                href="https://github.com/ArrKuu77?tab=repositories"
              >
                <FaGithub />
              </a>
            </li> */}
            <li className=" font-bold text-xl max-sm:text-3xl border border-zinc-700 p-2 rounded-full">
              <a
              // target="_blank"
              // href="https://github.com/ArrKuu77?tab=repositories"
              >
                <SiGmail />
              </a>
            </li>
            <li className=" font-bold text-xl border max-sm:text-3xl border-zinc-700 p-2 rounded-full">
              <a
                target="_blank"
                href="https://www.facebook.com/zinmar.lay.3720"
              >
                <FaFacebook />
              </a>
            </li>
            <li className=" font-bold text-xl border max-sm:text-3xl border-zinc-700 p-2 rounded-full">
              <a
                target="_blank"
                href="https://www.instagram.com/zinmar.lay.3720/?fbclid=IwZXh0bgNhZW0CMTAAAR1ojaQlywP1vUY3iDPnbu99DhFs8eOvZQSKpdwa6BHKfgiColkTt0HGNGo_aem_AQD6Q-p12sRFl3IWNuRlckrKupvdw3LHxzEfut6Z3gqFn13XyrgbxBM-ptsufFenLvasRZjEymdXV78z0R-bzLN5"
              >
                <FaInstagramSquare />
              </a>
            </li>
            {/* <li className=" font-bold text-xl border max-sm:text-3xl border-zinc-700 p-2 rounded-full">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aung-san-a8452122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FaLinkedin />
              </a>
            </li> */}
            {/* <li className=" font-bold text-xl border max-sm:text-3xl border-zinc-700 p-2 rounded-full">
              <a
                target="_blank"
                href="https://app.netlify.com/teams/arrkuu77/overview"
              >
                <SiNetlify />
              </a>
            </li> */}
          </ul>
        </div>
        {/* Let's Work Together! */}

        <div className=" max-sm:h-[8%] flex justify-center items-center rounded-full bg-[#D47904] p-3 text-xl  text-center font-bold">
          <Link to="contact" smooth={true} offset={60} duration={500}>
            <button> Let's Work Together!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
