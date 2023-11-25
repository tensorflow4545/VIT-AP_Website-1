"use client";
import { useState } from 'react';
import Image from "next/image";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
export default function Package(){
    const imglink=[
        "/microsoft.png","/microsoft.png","/hero.jpeg","/hero.jpeg","/microsoft.png","/microsoft.png","/microsoft.png"
   ];

    const [Index, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = Index === 0;
        const newIndex = isFirstSlide ? imglink.length - 1: Index - 1;
        setIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = Index+3 ===imglink.length - 1 ;
        const newIndex = isLastSlide ? 0 : Index + 1;
        setIndex(newIndex);
      };
    
    return(
        <>
           <div class="w-full  h-[830px] bg-white">

              <div class="w-full h-[420px] bg-fuchsia-100 px-[108px] pt-[66px]">
               <p class="text-emilio text-red-950 text-[48px] text-extrabold">High Salary Packages</p>
               <p class="text-dark text-montserrat text-[20px] text-light pt-[29px]">Company CTC: Microsoft: 44.00 Lakhs, Appdynamics: 39.20 Lakhs, D. E. Shaw India Private Limited: 35.20 Lakhs, Udaan: 35 Lakhs, Work India: 35 Lakhs, Cloudera: 31.30 Lakhs, Amazon: 29.50 Lakhs, CISCO: 29.17 Lakhs, Swiggy: 28. 2 Lakhs, Motorq: 26 Lakh, Morgan Stanley Advantage Services: 25.33 Lakhs, Codenation: 25 Lakhs, PayPal: 23.80 Lakhs, Commvault: 20 Lakhs, WellsFargoEGS India: 20 Lakhs, Indian Oil Corporation (Core): 17.30 Lakhs.</p>
               
               {/* flex */}
               <div class="flex flex-row overflow-hidden">
                 
               <div class="basis pt-[50px] pr-[20px]">
               <div class="w-[360px] h-[247px] bg-white"><Image width={390} height={246} alt="Company Image" src={imglink[Index]}></Image></div>
               </div>
            
               <div class="basis pt-[50px] pr-[20px]">
               <div class="w-[360px] h-[247px] bg-white"><Image width={390} height={246} alt="Company Image" src={imglink[Index+1]}></Image></div>
               </div>
               
               <div class="basis pt-[50px] pr-[20px]">
               <div class="w-[360px] h-[247px] bg-white"><Image width={390} height={246} alt="Company Image" src={imglink[Index+2]}></Image></div>
               </div>


               </div>
                
                {/* icons */}
               <div class="flex flex-row float-right">
               <div class="basis w-[36px] h-[36px] bg-red-200 mr-[12px] rounded-md float-center pt-[10px] pl-[10px]" onClick={prevSlide}><IoIosArrowBack /></div>
               <div class="basis w-[36px] h-[36px] bg-red-200 rounded-md pt-[10px] pl-[10px]" onClick={nextSlide}><IoIosArrowForward/></div>
               </div>

              </div>

           </div>
        </>
    )
}