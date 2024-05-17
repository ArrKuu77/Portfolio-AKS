import React from "react";

const postfolioImg = ({ infoImg, infoCompany, infoExp, fade }) => {
  console.log(infoImg);
  return (
    <div
      className=" w-2/5 max-sm:w-full  rounded-3xl border border-zinc-700 relative   "
      data-aos={fade}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img
        src={infoImg}
        className="  h-[250px] object-cover w-full rounded-3xl p-2  hover:p-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[0.8] hover:bg-[#D47904] duration-300  "
        alt=""
      />
      <div className=" justify-evenly my-2  gap-3 left-3 text-white flex  items-center">
        <p className=" bg-black p-3 rounded-xl ">{infoCompany}</p>
        <p className=" bg-black p-3 rounded-xl ">{infoExp}</p>
      </div>
    </div>
  );
};

export default postfolioImg;
