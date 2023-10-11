"use client";

import React, { useState } from "react";
import { programmesOffered } from "@/constants";
import { BiSolidDownArrow } from "react-icons/bi";

const ProgrammesOffered = () => {
  const [active, setActive] = useState("undergraduate");

  return (
    <div className="w-full flex min-h-[960px] pr-[40px] max-lx:pr-[20px] pt-[40px] text-white">
      <div className=" p-[110px] max-lx:p-[60px] flex flex-col flex-[60%] bg-[#51060D]">
        <h1 className="text-white text-[40px] max-lx:text-[32px] font-bold">
          Programmes Offered
        </h1>
        <p className="my-[15px] text-[18px] max-lx:text-[14px]">
          Program covers the entire spectrum of new-age specializations. This
          program seamlessly integrates basic science concepts to the latest
          technologies with relevant practice through lab and projects for
          building problem-solving skills
        </p>
        <div className="flex flex-col my-[70px] justify-center items-center text-center gap-10">
          <h1
            className={`text-[18px] max-lx:text-[14px] py-[19px] px-[23px] ${
              active === "undergraduate" ? "border border-zinc-200" : ""
            } cursor-pointer w-full first-letter`}
            onClick={() => setActive("undergraduate")}
          >
            Undergraduate
          </h1>
          <h1
            className={`text-[18px] max-lx:text-[14px] py-[19px] px-[23px] ${
              active === "integrated" ? "border border-zinc-200" : ""
            } cursor-pointer w-full first-letter`}
            onClick={() => setActive("integrated")}
          >
            Integrated
          </h1>
          <h1
            className={`text-[18px] max-lx:text-[14px] py-[19px] px-[23px] ${
              active === "postgraduate" ? "border border-zinc-200" : ""
            } cursor-pointer w-full first-letter`}
            onClick={() => setActive("postgraduate")}
          >
            Postgraduate
          </h1>
          <h1
            className={`text-[18px] max-lx:text-[14px] py-[19px] px-[23px] ${
              active === "doctorial" ? "border border-zinc-200" : ""
            } cursor-pointer w-full first-letter`}
            onClick={() => setActive("doctorial")}
          >
            Doctorial
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-[50%] bg-[#E6CFCF] min-h-[750px] overflow-auto my-auto z-10 relative max-w-[680px] scrollbar-thin scrollbar-thumb-red-900 relative">
        <div className="min-h-[1500px]w-full absolute pl-[75px] max-lx:pl-[40px] pt-[55px] max-lx:pt-[30px] ">
          <h3 className="text-[16px] max-lx:text-[14px] font-semibold text-gray-500 uppercase">
            Engineering
          </h3>

          {programmesOffered.map((program) =>
            program.field === active ? (
              <h1 className="py-[19px] max-w-[432px] max-lx:py-[16px] text-[#51060D] text-[18px] max-lx:text-[15px] font-semibold capitalize border border-l-0 border-t-0 border-r-0 border-b-gray-500">
                {program.title}
              </h1>
            ) : (
              ""
            )
          )}
        </div>
        <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl">
          <BiSolidDownArrow className="text-black text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default ProgrammesOffered;
