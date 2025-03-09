import React, { useEffect } from "react";
import "./App.css";
import ProfileComponent from "./components/Profile.component";
import NavBarComponent from "./components/NavBar.component";

import HeroComponents from "./components/Hero.components";
import PostfolioComponents from "./components/Postfolio.components";
import AboutComponents from "./components/About.components";
import ResumeComponents from "./components/Resume.components";

import ContactComponents from "./components/Contact.components";

import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="  bg-[rgb(17,17,17)]  text-white md:relative   md:w-screen max-sm:relative "
      data-aos="fade-in"
    >
      <div className=" absolute w-full h-full  md:right-3 md:w-[66.6%] md:h-full    ">
        <NavBarComponent />
      </div>
      <div className=" animate-none  md:p-4 max-sm:flex-col flex justify-between w-[95%] mx-auto md:relative ">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="1000"
          data-aos-duration="1500"
          className="  md:w-[25%] max-sm:w-full max-sm:p-3"
        >
          <ProfileComponent />
        </div>
        <div className=" w-4/6 my-3 relative max-sm:w-full ">
          <div className="relative md:h-[9500px] max-sm:h-[10500px] my-3">
            <HeroComponents />
            <PostfolioComponents />
            <AboutComponents />
            <ResumeComponents />
            <ContactComponents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
