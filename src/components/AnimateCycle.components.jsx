import React from "react";

const AnimatedText = () => {
  const svgCode = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px) rotate(271.725deg);" xml:space="preserve" class="animate-rotation" data-value="360">
      <defs>
        <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"></path>
      </defs>
      <g>
        <use xlink:href="#textPath" fill="none"></use>
        <text fill="white"> <!-- Changed the fill color to white -->
          <!-- button text here!!! -->
          <textPath xlink:href="#textPath">Scroll for More * Scroll for More * </textPath>
        </text>
      </g>
    </svg>
  `;

  return (
    <div
      className=" w-[15%] max-sm:w-[25%]  cursor-pointer animate-spin "
      style={{ animationDuration: "10s" }}
      dangerouslySetInnerHTML={{ __html: svgCode }}
    />
  );
};

export default AnimatedText;
