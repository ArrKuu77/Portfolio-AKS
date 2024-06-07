import React from "react";
import SkillImgJson from "../lottie/Animation - 1717496001574.json";
import Lottie from "lottie-react";
const SkillImg = () => {
  return (
    <div className=" h-full animate-pulse ">
      <Lottie className=" h-full w-full" animationData={SkillImgJson} loop />
    </div>
  );
};

export default SkillImg;
