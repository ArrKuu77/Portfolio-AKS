import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import InputFormComponents from "../components/InputForm.components";

import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BiSolidErrorAlt } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactComponents = () => {
  const form = useRef();
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailErrorMassage, setemailErrorMassage] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setLoading(true);

    emailjs
      .sendForm("service_dxc79fb", "template_jtejhjh", form.current, {
        publicKey: "PcA-n6rmekdpHdx25",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(emailSuccess);
          setEmailSuccess(true);
          setLoading(false);
          setTimeout(() => {
            setEmailSuccess(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setemailErrorMassage(error.text);
          setEmailSuccess(false);
          setLoading(false);
          setTimeout(() => {
            setemailErrorMassage(null);
          }, 3000);
          form.current.reset();
        }
      );
  };

  return (
    <div
      className=" z-10 md:h-[23%] max-sm:h-[16%]     "
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      id="contact"
    >
      <div className="flex flex-col justify-evenly md:gap-5 h-full">
        <div className=" md:h-[13%] flex justify-between max-sm:h-[8%]  flex-col">
          <div className="max-sm:w-1/2  border border-zinc-700 w-1/6 flex items-center justify-center p-2 rounded-2xl">
            <PiStarFourFill />
            <p>Contact</p>
          </div>

          <div>
            <h1 className=" max-sm:text-3xl md:text-6xl">
              Let's make something awesome together!
            </h1>
          </div>
        </div>

        <div
          className="  max-sm:h-[32%] md:h-[35%]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <form
            className="md:flex md:flex-wrap md:justify-between md:items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <InputFormComponents
              loading={loading}
              name={"Name"}
              userName={"user_name"}
            />
            <InputFormComponents
              loading={loading}
              name={"Email"}
              userName={"user_email"}
            />
            <InputFormComponents
              loading={loading}
              name={"Phone Number"}
              userName={"user_phoneNumber"}
            />
            <InputFormComponents
              loading={loading}
              name={"Company Name"}
              userName={"user_companyName"}
            />
            <div className="h-full w-full my-3 py-3">
              <textarea
                required
                disabled={loading}
                name="message"
                id=""
                // rows="4"
                // cols="50"
                className={`${
                  loading ? "opacity-10" : "opacity-100"
                }  h-full text-2xl resize-none w-full text-white bg-[rgb(17,17,17)] outline-none border-b-2 border-b-stone-600 focus:border-b-white`}
                placeholder="A Few Words"
              ></textarea>
            </div>

            <div className=" w-full">
              {emailSuccess ? (
                <div
                  className={`${
                    emailSuccess ? "flex" : "hidden"
                  }   justify-center animate-bounce text-2xl  items-center max-sm:w-full md:w-1/2 text-green-600 mx-auto`}
                >
                  <IoCheckmarkDoneSharp />
                  <h1>Send Massage is successful</h1>
                </div>
              ) : (
                <div
                  className={`${
                    emailErrorMassage ? "flex" : "hidden"
                  }   justify-center animate-bounce max-sm:w-full md:text-2xl items-center w-1/2 text-red-600 mx-auto`}
                >
                  <BiSolidErrorAlt className=" max-sm:text-4xl" />
                  <h1>{emailErrorMassage}</h1>
                </div>
              )}
            </div>

            <div
              className=" max-sm:w-1/2 md:w-[25%] text-black md:text-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <button
                disabled={loading}
                type="submit"
                value="Send"
                className="font-bold w-full flex justify-center items-center gap-3 bg-orange-500 rounded-3xl p-5"
              >
                {" "}
                <p>Send Message</p>
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>

        <div
          className=" h-[50%] md:flex justify-between flex-col items-center "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <ul className=" h-[48%] w-full  flex flex-wrap justify-center gap-8 items-center text-[#c7c6d3]">
            <li className="max-sm:w-[40%] max-sm:h-[25%] hover:border-white transition-all hover:scale-110 h-[45%] w-[25%] flex justify-center items-center font-bold md:text-xl border border-zinc-700 p-2 rounded-3xl">
              <a
                className=" w-full h-full flex justify-center items-center"
                target="_blank"
                href="https://github.com/ArrKuu77?tab=repositories"
              >
                <FaGithub className=" w-[50%] h-[50%]" />
              </a>
            </li>

            <li className="max-sm:w-[40%] max-sm:h-[25%] hover:border-white transition-all hover:scale-110  h-[45%] w-[25%] flex justify-center items-center font-bold md:text-xl border border-zinc-700 p-2 rounded-3xl">
              <a
                className=" w-full h-full flex justify-center items-center"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100007569554931&mibextid=ZbWKwL"
              >
                <FaFacebook className=" w-[50%] h-[50%]" />
              </a>
            </li>

            <li className="max-sm:w-[40%] max-sm:h-[25%] hover:border-white transition-all hover:scale-110  h-[45%] w-[25%] flex justify-center items-center font-bold md:text-xl border border-zinc-700 p-2 rounded-3xl">
              <a
                className=" w-full h-full flex justify-center items-center"
                target="_blank"
                href="https://www.instagram.com/arrkuu07?igsh=aGpqb2twZWNrY3Bu"
              >
                <FaInstagramSquare className=" w-[50%] h-[50%]" />
              </a>
            </li>
            <li className=" max-sm:w-[40%] max-sm:h-[25%] hover:border-white transition-all hover:scale-110  h-[45%] w-[25%] flex justify-center items-center font-bold md:text-xl border border-zinc-700 p-2 rounded-3xl">
              <a
                className=" w-full h-full flex justify-center items-center"
                target="_blank"
                href="https://www.linkedin.com/in/aung-san-a8452122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FaLinkedin className=" w-[50%] h-[50%]" />
              </a>
            </li>

            <li className=" max-sm:w-[40%] max-sm:h-[25%] hover:border-white transition-all hover:scale-110  h-[45%] w-[25%] flex justify-center items-center font-bold md:text-xl border border-zinc-700 p-2 rounded-3xl">
              <a
                className=" w-full h-full flex justify-center items-center"
                target="_blank"
                href="https://app.netlify.com/teams/arrkuu77/overview"
              >
                <SiNetlify className=" w-[50%] h-[50%]" />
              </a>
            </li>
          </ul>
          <div
            className="h-[50%] flex flex-col justify-evenly gap-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h1 className=" md:text-4xl max-sm:text-xl">
              Want to know more about me or just to say hello? Drop me a line
              and I'll get back as soon as possible.
            </h1>
            <div className=" bg-slate-700 w-full h-[1px] "></div>
            <div className=" flex justify-between md:items-center max-sm:flex-col  max-sm:h-[50%]">
              <div className=" md:w-[25%]">
                <h2 className=" md:text-xl">Location</h2>
                <p className=" text-stone-400 border-b-0 cursor-pointer hover:text-white hover:border-b duration-1000 translate-x-0 hover:translate-x-2 transition-all">
                  Yangon,Myanmar
                </p>
              </div>
              <div className=" md:w-[25%]">
                <h2>Phone Number</h2>
                <p className="text-stone-400 border-b-0 cursor-pointer hover:text-white hover:border-b duration-1000 translate-x-0 hover:translate-x-2 transition-all">
                  09425826867
                </p>
              </div>
              <div className=" md:w-[25%]">
                <h2>Email</h2>
                <p className="text-stone-400 border-b-0 cursor-pointer hover:text-white hover:border-b duration-1000 translate-x-0 hover:translate-x-2 transition-all">
                  zinmarlay768@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
