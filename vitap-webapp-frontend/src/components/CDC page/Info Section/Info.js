"use client";
import Image from "next/image";
import react, { useState } from "react";
export default function Info() {
  const [active, setActive] = useState("/CDC.png");
  return (
    <>
      <div class="w-full h- bg-white pl-[108px] hidden ls:block">

        {/* flex */}
        <div class="flex flex-row">

          {/* basis */}
          <div class="basis pt-[230px] flex-1">
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
          <div class="basis bg-red-100 h-[650px] flex-1 flex justify-center items-center lx:mr-[100px] mr-[50px]">
            <div class="max-w-[830px] max-h-[550px] w-[100%] h-[100%] mt-[20px] lx:pr-[100px] pr-[50px]">
              <div class="max-w-[800px] max-h-[603px] w-[100%] h-[100%] relative">
                <Image fill alt="Images" src={active}></Image>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
