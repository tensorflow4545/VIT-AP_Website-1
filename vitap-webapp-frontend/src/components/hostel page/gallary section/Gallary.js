import Image from "next/image";
import style from "./gallary.module.css";
export default function gallary(){
    return(
        <>
            <div class="w-full h-[950px] bg-white">
            <div class="pl-[108px] pr-[100px]">
              
              {/* flex */}
              <div class="flex flex-row">
               
               {/* basis */}
               <div class="basis-1/3 pt-[148px]">
               <p class="text-[48px] font-[400px] text-emilio text-dark">Gallery</p>
               <p class="text-[16px] font-[500px] text-montserrat pt-[18px]">Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum</p>
               </div>

              {/* basis */}
              <div class="basis-2/3 pl-[127px]">

               {/* Inner flex */}
              <div class="flex flex-row">
                 
                 {/* basis */}
                 <div class="basis-1/4 pt-[74px]">
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div class={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div class="basis-1/4 pt-[149px] pl-[30px]">
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div class={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div class="basis-1/4 pt-[30px] pl-[30px]">
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div class={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div class="basis-1/4 pt-[102px] pl-[30px]">
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div class={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div class={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

              </div>
              
              </div>

              </div>

            </div>
            </div>
        </>
    )
}
