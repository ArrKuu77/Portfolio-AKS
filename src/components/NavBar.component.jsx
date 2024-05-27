import React from "react";
import { FaHome } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { RiAppsFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { PiArticleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const NavBarComponent = () => {
  return (
    <nav className=" max-sm:rounded-3xl max-sm:transparent-color   max-sm:w-[90%] max-sm:mx-auto md:w-full flex justify-between sticky max-sm:top-[93%] top-8 h-[0.5%]  md:left-[50%] z-30 ">
      <div className=" w-[70%] md:w-[65%] ">
        <ul className=" flex justify-evenly items-center h-full w-full">
          <li className="   md:text-2xl md:p-5 rounded-3xl max-sm:h-full max-sm:w-1/5 max-sm:flex max-sm:justify-center">
            <Link
              // activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="  max-[1300px]:hidden text-orange-600 ">
                Home
              </span>
              <FaHome className=" min-[1300px]:hidden max-sm:w-[50%] text-orange-600 max-sm:mx-auto max-sm:h-full " />
            </Link>
          </li>
          <li className=" md:p-5  md:text-2xl  rounded-3xl max-sm:h-full max-sm:w-1/5 max-sm:flex max-sm:justify-center ">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className=" max-[1300px]:hidden text-orange-600">
                Portfolio
              </span>
              <RiAppsFill className="min-[1300px]:hidden  max-sm:w-[50%] max-sm:h-full max-sm:mx-auto text-orange-600" />
            </Link>
          </li>
          <li className=" md:p-5  md:text-2xl  rounded-3xl max-sm:h-full max-sm:w-1/5 max-sm:flex max-sm:justify-center">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className=" max-[1300px]:hidden text-orange-600">
                About{" "}
              </span>
              <IoMdContact className="min-[1300px]:hidden  max-sm:w-[50%] max-sm:h-full max-sm:mx-auto text-orange-600" />
            </Link>
          </li>
          <li className=" md:p-5  md:text-2xl  rounded-3xl max-sm:h-full max-sm:w-1/5 max-sm:flex max-sm:justify-center">
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className=" max-[1300px]:hidden text-orange-600">
                Resume
              </span>
              <PiArticleFill className="min-[1300px]:hidden  max-sm:w-[50%] max-sm:h-full max-sm:mx-auto text-orange-600" />
            </Link>
          </li>
          <li className=" md:p-5  md:text-2xl  rounded-3xl max-sm:h-full max-sm:w-1/5 max-sm:flex max-sm:justify-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className=" max-[1300px]:hidden text-orange-600">
                Contact
              </span>
              <MdEmail className="min-[1300px]:hidden  max-sm:w-[50%] max-sm:h-full max-sm:mx-auto text-orange-600" />
            </Link>
          </li>
        </ul>
      </div>
      <div className=" w-[30%] flex justify-evenly items-center">
        {/* <div className="  md:text-2xl max-sm:w-[30%] max-sm:h-[100%] max-sm:flex max-sm:justify-center max-sm:items-center">
          <MdLightMode className=" w-full h-full" />
        </div> */}
        <div className="  max-sm:h-[100%] text-xl text-black flex w-[60%] bg-[#D47904] md:p-5 rounded-full  font-bold  border border-zinc-700">
          <Link
            className="md:justify-evenly max-sm:justify-center max-sm:w-full items-center flex"
            to="contact"
            smooth={true}
            offset={100}
            duration={500}
          >
            <button className=" md:block hidden ">Let's Talk</button>
            <AiFillMessage className=" max-sm:h-[100%] max-sm:-w-[90%]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
