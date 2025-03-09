import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import dailyReportOffice from "../image/daily-report-office.jpg";
import MovieDB from "../image/movie-db.jpg";
// import phoneContactsImg from "../image/PhoneContactsImg.jpg";
import kindergartenImg from "../image/kindergarten.jpg";
import PostfolioImg from "./PostfolioImgExperience/PostfolioImg.PExperience";
import allCountriesImg from "../image/AllcountriesImg.jpg";
import OnlineShopImg from "../image/online-shop.jpg";
import homeCouple from "../image/home-couple.png";
import reviewReportImg from "../image/images.png";

const PostfolioComponents = () => {
  return (
    <div
      className=" z-10 max-sm:h-[35%] md:h-[23%]   md:mt-10 max-sm:mt-5   "
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
        <div className="  max-sm:w-[50%] border border-zinc-700 w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
          <PiStarFourFill />
          <p>Protfolio</p>
        </div>
        <div className=" w-full md:text-7xl max-sm:text-5xl  max-sm:h-[5%] flex justify-center items-center  ">
          {/* <h1>Check out my featured projects</h1> */}
          <h1>Check out my projects</h1>
        </div>
        <div className=" md:h-[80%]  w-full max-sm:mx-auto max-sm:overflow-hidden max-sm:h-[90%] ">
          <div className="max-sm:h-full flex md:flex-wrap max-sm:w-full max-sm:flex-col  justify-evenly gap-5 items-center">
            <PostfolioImg
              infoImg={OnlineShopImg}
              infoProject={"OnlineShopApi"}
              infoInclude={"Tailwind CSS,React,Redux,RTKQuery"}
              infoLink={"https://arrkuushopping.netlify.app/"}
              infoCRUD={"Read Only"}
              fade={"fade-right"}
            />

            <PostfolioImg
              infoImg={allCountriesImg}
              infoProject={"All Countries"}
              infoInclude={"html,css,js(Api Fetching)"}
              infoLink={"https://arrkuu77.github.io/AllCountryOnlyJavaScript/"}
              infoCRUD={"Read Only"}
              fade={"fade-left"}
            />

            {/* <PostfolioImg
              infoImg={phoneContactsImg}
              infoProject={"Phone Contacts"}
              infoInclude={"Tailwind CSS,React,Redux Toolkit ,RTK Query"}
              infoLink={"https://phone-contact.netlify.app"}
              infoCRUD={"Create,Read,Update,Delete"}
              fade={"fade-right"}
            /> */}
            <PostfolioImg
              infoImg={dailyReportOffice}
              infoProject={"DailyReportOffice"}
              infoInclude={"Tailwind CSS,React, Supabase"}
              infoLink={"https://magenta-flan-b5b755.netlify.app"}
              infoCRUD={"Create,Read,Update,Delete"}
              fade={"fade-right"}
            />
            <PostfolioImg
              infoImg={reviewReportImg}
              infoProject={"DailyReportOfficeReview"}
              infoInclude={"Tailwind CSS,React,Supabase"}
              infoLink={"https://report-system.netlify.app/"}
              infoCRUD={"Read,Create,Update,Delete"}
              fade={"fade-left"}
            />
            <PostfolioImg
              infoImg={MovieDB}
              infoProject={"Movie-DB"}
              infoInclude={"Tailwind CSS,React,RTKQuery,Authentication"}
              infoLink={"https://arrkuu-movie-db.netlify.app"}
              infoCRUD={"Create,Read,Update,Delete"}
              fade={"fade-right"}
            />
            <PostfolioImg
              infoImg={kindergartenImg}
              infoProject={"kindergarten school"}
              infoInclude={"Tailwind CSS,React,Team Git,Git Hub"}
              infoLink={"https://tinyverse-mcf3.netlify.app/"}
              infoCRUD={"Read only"}
              fade={"fade-left"}
            />
            <PostfolioImg
              infoImg={homeCouple}
              infoProject={"Realestate-Test"}
              infoInclude={"Tailwind CSS,React,Team Git,Git Hub"}
              infoLink={"https://mcf-3-realestate-test.netlify.app/"}
              infoCRUD={"Read only"}
              fade={"fade-right"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostfolioComponents;
