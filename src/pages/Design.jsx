import React from "react";
import { placeholderImg } from "../assets";
import { RedoLogo, UndoLogo } from "../assets/indexlogo";
import { DesignLeftLogo, DesignOptions } from "../config/constants";
import {
  arrow1Icon,
  arrowIcon,
  saveIcon,
  uploadIcon,
} from "../assets/indexIcon";
import Logo from "../components/design/Logo";
import DesignButton from "../components/design/DesignButton";

const Design = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-white overflow-y-auto max-h-screen">
        <div className="w-full h-28 px-28 py-8 left-0 top-0 absolute bg-white shadow justify-center items-center inline-flex">
          <div className="w-full h-16 justify-center items-center gap-16 flex">
            <div className="justify-center items-center gap-14 flex">
              <div className="text-black text-3.5 font-bold font-['Inter'] leading-3.5">
                Home
              </div>
              <div className="justify-center items-center gap-1 flex">
                <div className="text-black text-3.5 font-bold font-['Inter'] leading-3.5">
                  Products
                </div>
                <div className="w-6 h-6 relative"></div>
              </div>
              <div className="px-5 py-2 rounded-3xl border border-cyan-600 justify-center items-center gap-1 flex">
                <div className="text-black text-3.5 font-bold font-['Inter'] leading-3.5">
                  Influencers
                </div>
              </div>
            </div>
            <div className="w-32 h-16 relative">
              <div className="left-0 top-0 absolute text-zinc-800 text-xl font-black font-['Inter'] leading-[20.81px]">
                The
              </div>
              <div className="left-0 top-[14.78px] absolute">
                <span className="text-zinc-800 text-5xl font-black font-['Inter'] leading-[51.22px]">
                  Store
                </span>
                <span className="text-cyan-600 text-5xl font-black font-['Inter'] leading-[51.22px]">
                  .
                </span>
              </div>
            </div>
          </div>
          <div className="h-full justify-center items-center gap-[27px] flex">
            <div className="w-36 text-black text-3.5 font-bold font-['Inter'] leading-3.5">
              Contact us
            </div>
            <div className="w-40 px-4 py-2.5 bg-zinc-800 rounded-[32px] justify-center items-center gap-4 flex">
              <div className="text-white text-3.5 font-bold font-['Inter'] leading-3.5">
                Design Now
              </div>
            </div>
            <div className="w-32 px-4 py-2.5 rounded-[35px] border border-neutral-800 justify-center items-center gap-4 flex">
              <div className="text-neutral-700 text-3.5 font-bold font-['Inter'] leading-3.5">
                Sign in
              </div>
            </div>
            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex"></div>
            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex"></div>
          </div>
        </div>
        <div className="flex">
          <div className="flex mt-40">
            <div className="flex-col mt-32 bg-grey justify-start items-start gap-5 px-32  inline-flex">
              {DesignLeftLogo.map((ele, index) => (
                <Logo title={ele.title} logo={ele.icon} index={index} />
              ))}
            </div>

            <div className="flex mt-16">
              <img className="w-[510px] h-[574px]" src={placeholderImg} />
            </div>
            <div className="flex">
              <div className="flex-col mt-24 pl-16">
                <div className="flex text-black text-3xl font-black font-['Inter'] leading-11">
                  Create your deign
                </div>
                <div className="flex text-black text-base mt-3.5  font-normal font-['Inter'] leading-none">
                  Get started by choosing one of the actions below.
                </div>
                <div className="flex">
                  <div className="flex-col pt-6">
                    {DesignOptions.map((ele, index) => (
                      <div className="flex">
                        <DesignButton
                          title={ele.title}
                          icon={ele.icon}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-col pt-10">
                  <div className="flex items-center w-96 h-16 px-4 mt-5 border-t-2 border-t-stone-300 justify-start items-start gap-44 inline-flex">
                    <div className="w-full flex justify-between">
                      <div className="flex">
                        <div className="flex border border-stone-300 px-3 py-1">
                          <span>
                            <img src={saveIcon} alt="" srcset="" />
                          </span>
                          Save
                        </div>
                      </div>
                      <div className="flex mt-2 h-4 rotate-120 text-[#0F76B0]">
                        Change Product
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
