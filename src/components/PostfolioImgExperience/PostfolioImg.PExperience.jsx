import React from "react";

const postfolioImg = ({
  infoImg,
  infoProject,
  infoInclude,
  infoLink,
  infoCRUD,
  fade,
}) => {
  console.log(infoImg);
  return (
    <div
      className=" h-full w-2/5 max-sm:w-full  rounded-3xl border border-zinc-700 relative   "
      data-aos={fade}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <a href={infoLink} target="_blank">
        <img
          src={infoImg}
          className="  h-[250px] object-cover w-full rounded-3xl p-2  hover:p-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[0.8] hover:bg-[#D47904] duration-300  "
        />
      </a>
      <div className=" h-[40%] justify-evenly my-2  gap-3 left-3 text-white flex flex-col  ">
        <p className=" flex justify-evenly items-center bg-black p-3 rounded-xl ">
          {" "}
          <span>Project Name:</span> <span>{infoProject}</span>
        </p>
        <p className=" bg-black p-3 rounded-xl flex items-center justify-center ">
          {infoInclude}
        </p>
        <p className=" bg-black p-3 rounded-xl flex items-center justify-center ">
          {infoCRUD}
        </p>
      </div>
    </div>
  );
};

export default postfolioImg;
