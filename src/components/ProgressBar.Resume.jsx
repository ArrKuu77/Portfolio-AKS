import React, { useEffect, useRef, useState } from "react";
import { ProgressBarComponent } from "react-progress-components";

const ProgressBar = ({ num, skill }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < num) {
      setTimeout(() => {
        setProgress(progress + 5);
      }, 150);
    }
    // return () => {
    //   console.log("Unmount");
    // };
  });
  return (
    <div className=" h-[13%]">
      <div className=" flex justify-between items-center">
        <p>{skill}</p>
        <p>{progress}%</p>
      </div>
      <div className="w-full bg-slate-500  rounded-full h-2">
        <div
          className=" bg-crazy-gradient h-2 rounded-full"
          style={{
            width: `${progress}%`,
            transition: "width 2s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
