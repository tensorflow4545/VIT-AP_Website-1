"use client";
import Image from "next/image";
import react, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Info() {
  const [active, setActive] = useState("/CDC.png");

  const imglink = [
    "/CDC.png", "/PlacementCalen.png", "/PlacementPolicy.png", "/PlacementProcess.png", "/PlacementTraining.png"
  ];

  const [Index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = Index === 0;
    const newIndex = isFirstSlide ? imglink.length - 1 : Index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = Index === imglink.length - 1;
    const newIndex = isLastSlide ? 0 : Index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div class="w-full h- bg-[#FCE3E5]  hidden lg:block">

        {/* flex */}
        <div class="flex flex-row">

          {/* basis */}
          <div class="basis-1/2 my-[20px] flex-1 bg-white flex flex-col justify-center items-start px-[30px] lg:px-[100px]">
            {/* flex */}
            <div class="flex flex-row  whitespace-nowrap">
              <div class={`basis w-[24px] h-[24px] ${active == "/CDC.png" ? "bg-red-900" : "bg-black"} mt-[15px] rotate-45 pl-[15px]`}></div>
              <div class="basis" ><button class={`text-[20px]  ${active == "/CDC.png" ? "text-red-900" : "text-dark"} ${active == "/CDC.png" ? "font-semibold" : ""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/CDC.png")}>CDC Function</button></div></div>

            <hr class="w-[108px] h-[2px] text-black"></hr>

            {/* flex */}
            <div class="flex flex-row  whitespace-nowrap">
              <div class={`basis w-[24px] h-[24px] ${active == "/PlacementCalen.png" ? "bg-red-900" : "bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
              <div class="basis">
                <button class={`text-[20px]  ${active == "/PlacementCalen.png" ? "text-red-900" : "text-dark"}  ${active == "/PlacementCalen.png" ? "font-semibold" : ""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementCalen.png")}>Placement Process</button>
              </div>
            </div>

            <hr class="w-[108px] h-[2px] text-black"></hr>

            {/* flex */}
            <div class="flex flex-row  whitespace-nowrap">
              <div class={`basis w-[24px] h-[24px] ${active == "/PlacementPolicy.png" ? "bg-red-900" : "bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
              <div class="basis">
                <button class={`text-[20px]  ${active == "/PlacementPolicy.png" ? "text-red-900" : "text-dark"}  ${active == "/PlacementPolicy.png" ? "font-semibold" : ""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementPolicy.png")}>Placement Calendrer</button>
              </div>
            </div>

            <hr class="w-[108px] h-[2px] text-black"></hr>

            {/* flex */}
            <div class="flex flex-row  whitespace-nowrap">
              <div class={`basis w-[24px] h-[24px] ${active == "/PlacementProcess.png" ? "bg-red-900" : "bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
              <div class="basis">
                <button class={`text-[20px]  ${active == "/PlacementProcess.png" ? "text-red-900" : "text-dark"}  ${active == "/PlacementProcess.png" ? "font-semibold" : ""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementProcess.png")}>Facilities & Training</button>
              </div>
            </div>

            <hr class="w-[108px] h-[2px] text-black"></hr>

            {/* flex */}
            <div class="flex flex-row  whitespace-nowrap">
              <div class={`basis w-[24px] h-[24px] ${active == "/PlacementTraining.png" ? "bg-red-900" : "bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
              <div class="basis">
                <button class={`text-[20px]  ${active == "/PlacementTraining.png" ? "text-red-900" : "text-dark"}  ${active == "/PlacementTraining.png" ? "font-semibold" : ""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementTraining.png")}>Placement Policy & Guidelines</button>
              </div>
            </div>

          </div>

          {/* basis */}
          <div class="basis-1/2 -ml-[30px] lg:-ml-[100px] md:-ml-[200px]  h-[650px] flex-1 flex justify-center items-center lg:mr-[100px] mr-[50px]">
            <div class="max-w-[830px] max-h-[550px] w-[100%] h-[100%] mt-[20px] lg:pr-[100px] pr-[50px]">
              <div class="max-w-[800px] max-h-[603px] w-[100%] h-[100%] relative">
                <Image fill alt="Images" src={active}></Image>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="block lg:hidden w-full max-h-[500px] bg-[#FCE3E5]">
        <div className="px-[18px] py-[30px] flex flex-col justify-center items-center gap-3">
          <div>
            <h1 className="text-[#650010] font-Emilio text-[24px] font-bold">High Salary Packages</h1>
          </div>
          <div className="max-w-[324px] w-[100%] min-h-[241px] relative">
            <Image src={imglink[Index]} alt="cdc" fill />
          </div>
          <div>
            <div class="flex flex-row">
              <div class="basis w-[36px] h-[36px] mr-[12px] rounded-md float-center pl-[10px]" onClick={prevSlide}><IoIosArrowBack size={25}/></div>
              <div class="basis w-[36px] h-[36px] rounded-md pl-[10px]" onClick={nextSlide}><IoIosArrowForward size={25}/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
