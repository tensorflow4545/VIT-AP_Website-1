"use client";

import React, { useState } from "react";
import { programmesOffered } from "@/constants";
import { BiSolidDownArrow } from "react-icons/bi";

const ProgrammesOffered = () => {
  const [active, setActive] = useState("undergraduate");

  return (
    <>
      <div
        style={{ backgroundImage: `url("/programsbackground3.png")` }}
        className="max-w-[1560px] w-full h-full bg-center mx-auto"
      >
        <div className="w-full mx-auto hidden max-h-[750px] pr-[40px] max-lx:pr-[20px] pt-[20px] text-white ls:flex">
          <div className=" p-[110px] max-lx:p-[60px] flex flex-col flex-[60%] pt-[60px]">
            <h1 className="text-white text-[40px] max-lx:text-[32px] font-medium font-Emilio">
              Programmes Offered
            </h1>
            <p className="my-[15px] ls:text-[18px] text-[15px] font-Montserrat">
              Program covers the entire spectrum of new-age specializations.
              This program seamlessly integrates basic science concepts to the
              latest technologies with relevant practice through lab and
              projects for building problem-solving skills
            </p>
            <div className="md:flex md:flex-col my-[20px] justify-center items-center text-center gap-10 grid grid-cols-2">
              <h1
                className={`font-Montserrat lx:text-[18px] text-[14px] py-[19px] md:px-[23px] ${
                  active === "undergraduate" ? "border border-zinc-200" : ""
                } cursor-pointer w-full first-letter`}

                onClick={() => setActive("undergraduate")}
              >
                Undergraduate
              </h1>
              <h1
                className={`font-Montserrat lx:text-[18px] text-[14px] py-[19px] md:px-[23px] ${
                  active === "integrated" ? "border border-zinc-200" : ""
                } cursor-pointer w-full first-letter`}
                onClick={() => setActive("integrated")}
              >
                Integrated
              </h1>
              <h1
                className={`font-Montserrat lx:text-[18px] text-[14px] py-[19px] md:px-[23px] ${
                  active === "postgraduate" ? "border border-zinc-200" : ""
                } cursor-pointer w-full first-letter`}
                onClick={() => setActive("postgraduate")}
              >
                Postgraduate
              </h1>
              <h1
                className={`font-Montserrat lx:text-[18px] text-[14px] py-[19px] md:px-[23px] ${
                  active === "doctorial" ? "border border-zinc-200" : ""
                } cursor-pointer w-full first-letter`}
                onClick={() => setActive("doctorial")}
              >
                Doctorial
              </h1>
            </div>
          </div>
          <div className="font-Montserrat lex flex-col border border-zinc-200 flex-[50%] bg-[#E6CFCF] min-h-[650px] overflow-auto my-auto z-10 relative max-w-[680px] scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-400">
            <div className="min-h-[1500px]w-full absolute md:pl-[75px] pl-[35px] max-lx:pl-[40px] pt-[55px] max-lx:pt-[30px] ">
              <h3 className="text-[16px] max-lx:text-[14px] font-semibold text-gray-500 uppercase">
                Engineering
              </h3> 

              {programmesOffered.map((program) =>
                program.field === active ? (
                  <h1
                    key={program.id}
                    className="py-[19px] max-w-[432px] font-Emilio max-lx:py-[16px] text-[#51060D] text-[20px] max-lx:text-[15px] font-[500] capitalize border border-l-0 border-t-0 border-r-0 border-b-gray-500 hover:font-bold"
                  >
                    <a href="#">
                    {program.title}</a>
                  </h1>
                ) : (
                  ""
                )
              )}
            </div>
            <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl hidden">
              <BiSolidDownArrow className="text-black text-[20px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-[#51060D] min-h-[100vh] p-[30px] text-white ls:hidden">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-[26px] font-bold">Programs Offered</h1>
          <p className="text-white text-[16px]">
            Program covers the entire spectrum of new-age specializations. This
            program seamlessly integrates basic science concepts to the latest
            technologies with relevant practice through lab and projects for
            building problem-solving skills
          </p>
        </div>
        <div>
          <ul className="flex gap-5 my-[40px] justify-center items-center flex-wrap">
            <li
              className={`py-[10px] px-[10px] ${active === "undergraduate" ? "border border-zinc-200" : ""
                }`}
              onClick={() => setActive("undergraduate")}
            >
              Undergraduate
            </li>
            <li
              className={`py-[10px] px-[10px] ${active === "integrated" ? "border border-zinc-200" : ""
                }`}
              onClick={() => setActive("integrated")}
            >
              Integrated
            </li>
            <li
              className={`py-[10px] px-[10px] ${active === "postgraduate" ? "border border-zinc-200" : ""
                }`}
              onClick={() => setActive("postgraduate")}
            >
              Post Graduate
            </li>
            <li
              className={`py-[10px] px-[10px] ${active === "doctorial" ? "border border-zinc-200" : ""
                }`}
              onClick={() => setActive("doctorial")}
            >
              Doctorial
            </li>
          </ul>
        </div>

        <div className="flex flex-col flex-[50%] bg-[#E6CFCF] min-h-[750px] overflow-auto my-auto z-10 relative max-w-[680px] scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-400">
          <div className="max-h-[1500px] h-full w-full absolute pl-[35px] max-lx:pl-[40px] pt-[55px] max-lx:pt-[30px] ">
            <h3 className="text-[16px] max-lx:text-[14px] font-semibold text-gray-500 uppercase">

              Engineering
            </h3> 

            {programmesOffered.map((program,index) =>
              program.field === active ? (
                <h1 key={index} className="py-4 max-w-[432px] text-#51060D text-14 max-lx:text-15 font-semibold capitalize border border-l-0 border-t-0 border-r-0 border-b-gray-500 hover:text-bold">
                  <a href="#">{program.title}</a>
                </h1>
              ) : (
                ""
              )
            )}
          </div>
          {/* <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl">
            <BiSolidDownArrow className="text-black text-[20px]" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProgrammesOffered;
