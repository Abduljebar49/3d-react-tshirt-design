import React from "react";

const Logo = ({logo, title, index}) => {
  return (
    <>
      <div key={index} className="px-5 py-1.5 bg-stone-50 rounded-md flex-col justify-start items-center gap-[9.47px] flex">
        <div className="w-7 h-7 rotate-240">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="text-black text-xs font-normal font-['Inter'] leading-[12.82px]">
          {title}
        </div>
      </div>
    </>
  );
};

export default Logo;
