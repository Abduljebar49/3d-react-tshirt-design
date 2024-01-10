import React from "react";
import { arrow1Icon } from "../../assets/indexIcon";

const DesignButton = ({ title, icon, index }) => {
  return (
    <>
      <div
        key={index}
        className="flex items-center w-96 h-16 px-4 bg-stone-50 mt-5 border border-stone-300 justify-start items-start gap-44 inline-flex"
      >
        <div className="w-7 h-7 left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
        <div className="w-full flex justify-between">
          <div className="flex">
            <div className="w-7 h-7 -mt-1 rotate-120">
              <img src={icon} alt="" />
            </div>
            <div className="ml-4 text-black text-1xl font-normal font-['Inter'] leading-snug">
              {title}
            </div>
          </div>
          <div className="flex w-4 h-4 rotate-120">
            <img src={arrow1Icon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignButton;
