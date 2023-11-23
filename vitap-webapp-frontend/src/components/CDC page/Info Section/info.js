"use client";
import Image from "next/image";
import react,{useState} from "react";
export default function info(){
    const [active, setActive] = useState("/CDC.png");
    return(
        <>
            <div class="w-full h- bg-white pl-[108px]">
                
                {/* flex */}
                <div class="flex flex-row">
                 
                   {/* basis */}
                  <div class="basis pt-[230px] w-[500px]">
                  {/* flex */}
                  <div class="flex flex-row  whitespace-nowrap">
                  <div class={`basis w-[24px] h-[24px] ${active=="/CDC.png"?"bg-red-900":"bg-black"} mt-[15px] rotate-45 pl-[15px]`}></div>
                  <div class="basis" ><button class={`text-[20px]  ${active=="/CDC.png"?"text-red-900":"text-dark"} ${active=="/CDC.png"?"font-semibold":""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/CDC.png")}>CDC Function</button></div></div>
                  
                  <hr class="w-[108px] h-[2px] text-black"></hr>

                  {/* flex */}
                  <div class="flex flex-row  whitespace-nowrap">
                  <div class={`basis w-[24px] h-[24px] ${active=="/PlacementCalen.png"?"bg-red-900":"bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
                  <div class="basis">
                  <button class={`text-[20px]  ${active=="/PlacementCalen.png"?"text-red-900":"text-dark"}  ${active=="/PlacementCalen.png"?"font-semibold":""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementCalen.png")}>Placement Process</button>
                  </div>
                  </div>
                    
                  <hr class="w-[108px] h-[2px] text-black"></hr>

                  {/* flex */}
                  <div class="flex flex-row  whitespace-nowrap">
                  <div class={`basis w-[24px] h-[24px] ${active=="/PlacementPolicy.png"?"bg-red-900":"bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
                  <div class="basis">
                  <button class={`text-[20px]  ${active=="/PlacementPolicy.png"?"text-red-900":"text-dark"}  ${active=="/PlacementPolicy.png"?"font-semibold":""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementPolicy.png")}>Placement Calendrer</button>
                  </div>
                  </div>

                  <hr class="w-[108px] h-[2px] text-black"></hr>

                  {/* flex */}
                  <div class="flex flex-row  whitespace-nowrap">
                  <div class={`basis w-[24px] h-[24px] ${active=="/PlacementProcess.png"?"bg-red-900":"bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
                  <div class="basis">
                  <button class={`text-[20px]  ${active=="/PlacementProcess.png"?"text-red-900":"text-dark"}  ${active=="/PlacementProcess.png"?"font-semibold":""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementProcess.png")}>Facilities & Training</button>
                  </div>
                  </div>

                  <hr class="w-[108px] h-[2px] text-black"></hr>

                  {/* flex */}
                  <div class="flex flex-row  whitespace-nowrap">
                  <div class={`basis w-[24px] h-[24px] ${active=="/PlacementTraining.png"?"bg-red-900":"bg-black"} mt-[15px] rotate-45 mr-[15px]`}></div>
                  <div class="basis">
                  <button class={`text-[20px]  ${active=="/PlacementTraining.png"?"text-red-900":"text-dark"}  ${active=="/PlacementTraining.png"?"font-semibold":""} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("/PlacementTraining.png")}>Placement Policy & Guidelines</button>
                  </div>
                  </div>
                
                </div>

                  {/* basis */}
                  <div class="basis bg-red-100 h-[813px]">
                    <div class="w-[830px] h-[630px] mt-[120px] pr-[100px]">
                    <div class="w-[800px] h-[603]">
                        <Image width={800} height={603} alt="Images" src={active}></Image>
                    </div>
                    </div>

                  </div>
                </div>

            </div>
        </>
    )
}