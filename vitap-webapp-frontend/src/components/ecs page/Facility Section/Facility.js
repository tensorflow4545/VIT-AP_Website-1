"use client";
import { useState } from 'react';
import Image from "next/image";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
export default function Package(){
    const imglink=[
        "/ecs.png","/ecs.png","/ecs.png","/ecs.png","/ecs.png","/ecs.png","/ecs.png"
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
          {/* Desktop view */}
          <div className="sm:grid hidden">
           <div className="w-full  h-max bg-white overflow-hidden pb-[70px]">

              <div className="w-full h-[420px] bg-fuchsia-100 px-[108px] pt-[66px]">
               <p className="text-emilio text-red-950 text-[48px] text-extrabold">Facilities provided @ Engineering Clinics labs</p>
               <p className="text-dark text-montserrat text-[20px] text-light pt-[29px]">Engineering Clinics labs provide students with the required state-of-the-art equipment and resources that they can use to design, build, and test their prototypes.</p>
               
               {/* flex */}
               <div className="flex flex-row overflow-hidden">
                 
               <div className="basis pt-[50px] pr-[20px]">
               <div className="w-[360px] h-[247px] bg-white relative inline-block group">
               <Image  width={390} height={246} alt="Image" src={imglink[Index]}></Image>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 group-hover:bg-primary group-hover:bg-opacity-50">
               <p className="text-[#FFFFFF] inline-baseline align-bottom opacity-0 transform font-light mt-[200px] ml-[20px] mr-[7px] text-[20px] transition-opacity duration-300 group-hover:opacity-100">
                  Computer Lab
               </p>
               </div></div>
               </div>
            
               <div className="basis pt-[50px] pr-[20px]">
               <div className="w-[360px] h-[247px] bg-white relative inline-block group"><Image width={390} height={246} alt="Image" src={imglink[Index+1]}></Image>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 group-hover:bg-primary group-hover:bg-opacity-50">
               <p className="text-[#FFFFFF] inline-baseline align-bottom opacity-0 transform font-light mt-[200px] ml-[20px] mr-[7px] text-[20px] transition-opacity duration-300 group-hover:opacity-100">
                  Computer Lab
               </p>
               </div></div>
               </div>
               
               <div className="basis pt-[50px] pr-[20px]">
               <div className="w-[360px] h-[247px] bg-white relative inline-block group"><Image width={390} height={246} alt="Image" src={imglink[Index+2]}></Image>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 group-hover:bg-primary group-hover:bg-opacity-50">
               <p className="text-[#FFFFFF] inline-baseline align-bottom opacity-0 transform font-light mt-[200px] ml-[20px] mr-[7px] text-[20px] transition-opacity duration-300 group-hover:opacity-100">
                  Computer Lab
               </p>
               </div></div>
               </div>


               </div>
                
                {/* icons */}
               <div className="flex flex-row float-right pt-[36px]">
               <div className="basis w-[36px] h-[36px] bg-fuchsia-100 mr-[12px] rounded-md float-center pt-[10px] pl-[10px]" onClick={prevSlide}><IoIosArrowBack /></div>
               <div className="basis w-[36px] h-[36px] bg-fuchsia-100 rounded-md pt-[10px] pl-[10px]" onClick={nextSlide}><IoIosArrowForward/></div>
               </div>

              </div>

           </div>
           </div>

           {/* Mobile view */}
           <div className="sm:hidden">
           <div className="w-full h-[700px] bg-white">
           <div className="w-full h-[350px] bg-fuchsia-100 px-[18px] py-[50px]">
            <p className="text-emilio text-red-900 text-[24px] font-bold">Facilities provided @ Engineering Clinics labs</p>
            <p className="text-dark text-montserrat text-[16px] font-light pt-[29px]">Engineering Clinics labs provide students with the required state-of-the-art equipment and resources that they can use to design, build, and test their prototypes.</p>
           
            <div className="pt-[50px] pr-[20px] flex justify-center">
            <div className="basis pt-[50px] pr-[20px]">
               <div className="w-[360px] h-[247px] bg-white relative inline-block group"><Image width={390} height={246} alt="Image" src={imglink[Index+1]}></Image>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 group-hover:bg-primary group-hover:bg-opacity-50">
               <p className="text-[#FFFFFF] inline-baseline align-bottom opacity-0 transform font-light mt-[200px] ml-[20px] mr-[7px] text-[20px] transition-opacity duration-300 group-hover:opacity-100">
                  Computer Lab
               </p>
               </div></div>
               </div>
               
            </div>
               
            <div className="flex flex-row float-right pt-[16px]">
               <div className="basis w-[36px] h-[36px] bg-fuchsia-100 mr-[12px] rounded-md float-center pt-[10px] pl-[10px]" onClick={prevSlide}><IoIosArrowBack /></div>
               <div className="basis w-[36px] h-[36px] bg-fuchsia-100 rounded-md pt-[10px] pl-[10px]" onClick={nextSlide}><IoIosArrowForward/></div>
            </div>
               
            </div>    
           </div>
           </div>
        </>
    )
}