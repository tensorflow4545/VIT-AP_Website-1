import Image from "next/image";
import style from "./gallary.module.css";
export default function Gallary(){
    return(
        <>
            <div className="w-full h-[950px] bg-white">
            <div className="pl-[108px] pr-[100px]">
              
              {/* flex */}
              <div className="flex flex-row">
               
               {/* basis */}
               <div className="basis-1/3 pt-[148px]">
               <p className="text-[48px] font-[400px] text-emilio text-dark">Gallery</p>
               <p className="text-[16px] font-[500px] text-montserrat pt-[18px]">Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum</p>
               </div>

              {/* basis */}
              <div className="basis-2/3 pl-[127px]">

               {/* Inner flex */}
              <div className="flex flex-row">
                 
                 {/* basis */}
                 <div className="basis-1/4 pt-[74px]">
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div className={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div className="basis-1/4 pt-[149px] pl-[30px]">
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div className={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div className="basis-1/4 pt-[30px] pl-[30px]">
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div className={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

                 {/* basis */}
                 <div className="basis-1/4 pt-[102px] pl-[30px]">
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img1} rounded-md`}></div>
                    <div className={`w-[180px] h-[325px] overflow-hidden ${style.img2} rounded-md mt-[17px]`}></div>
                    <div className={`w-[180px] h-[190px] overflow-hidden ${style.img3} rounded-md mt-[17px]`}></div>
                 </div>

              </div>
              
              </div>

              </div>

            </div>
            </div>
        </>
    )
}
