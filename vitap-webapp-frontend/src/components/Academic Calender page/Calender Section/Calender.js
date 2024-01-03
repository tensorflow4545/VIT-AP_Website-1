"use client";
import { useState } from "react";
import Fall from "../../../assets/academiccalenderimage/fall.png";
import Intra from "../../../assets/academiccalenderimage/Intra.png";
import Regular from "../../../assets/academiccalenderimage/regular.png";
import Image from "next/image";
export default function Calender(){
  const cal=[
    {
      "year":"2023",
      "sem":"fall",
       "head":"Modified Academic Calendar of INTRA Semester 2023-24",
       "desc":"# FAT Schedule will be notified by the Controller of Examinations.",
       img:Intra
    },
    {
      "year":"2023",
      "sem":"win",
       "head":"Academic Calendar of FALL 2023-24 Semester for Freshers",
       "desc":"",
       img:Intra
    },
    {
      "year":"2023",
      "sem":"fallregular",
       "head":"Academic Calendar of FALL 2023-24 Semester for Freshers",
       "desc":"",
       img:Intra
    },
    {
      "year":"2022",
      "sem":"fall",
       "head":"Modified Academic Calendar of INTRA Semester 2022-23",
       "desc":"# FAT Schedule will be notified by the Controller of Examinations.",
       img:Intra
    },
    {
      "year":"2022",
      "sem":"win",
       "head":"Academic Calendar of FALL 2023-24 Semester for Freshers",
       "desc":"",
       img:Intra
    },
    {
      "year":"2022",
      "sem":"Win",
       "head":"Academic Calendar of FALL 2023-24 Semester for Freshers",
       "desc":"",
       img:Intra
    }
  ];
    const [yeardropdown,setyeardropdown]=useState("0");
    const [semdropdown,setsemdropdown]=useState("0");
    const [year,setyear]=useState("2023");
    const [sem,setsem]=useState("");
    return (
        <>

            {/* Desktop View */}
            <div className="sm:grid hidden">
            <div className="w-full h-max bg-white px-[54px] py-[95px]">
            
            
            {/* buttons */}
            <div className="grid lg:grid-cols-2 pb-[35px] gap-[24px]">

            <div className="w-[600px] h-[63px] pl-[54px]" onClick={()=>yeardropdown=="0"?setyeardropdown("1"):setyeardropdown("0")}>
             <button type="button" className="w-[600px] h-[63px] rounded-sm shadow-lg inline-flex items-center w-full rounded-md bg-red-100 pl-[37px] py-2 text-[20px] font-light text-black hover:bg-red-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
             Select the Year
             <svg className="ml-[300px] h-5 w-5  text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
             </button>
              
              {/* Dropdown */}
              <div className={`w-[600px] ${yeardropdown=="1"?"visible":"invisible"} h-max absolute z-10 mt-2 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
                <div onClick={()=>setyear("2019")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2019</a>
                </div>
                <hr className=" h-[3px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2020")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2020</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2021")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2021</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2022")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2022</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2023")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2023</a>
                </div>
              </div>
              </div>
             </div>
             
             {/* New dropdown */}
             <div className="w-[600px] h-[63px] pl-[54px]" onClick={()=>semdropdown=="0"?setsemdropdown("1"):setsemdropdown("0")}>
             <button type="button" className="w-[600px] h-[63px] rounded-sm shadow-lg inline-flex items-center w-full rounded-md bg-red-100 pl-[37px] py-2 text-[20px] font-light text-black hover:bg-red-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
             Select the Semester
             <svg className="ml-[250px] h-5 w-5  text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
             </button>
              
              {/* Dropdown */}
              <div className={`w-[600px] ${semdropdown=="1"?"visible":"invisible"}  h-max absolute z-10 mt-2 w-56 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
              <div onClick={()=>setsem("win")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">win Sem {year}</a>
                </div>
                <hr className=" h-[3px] bg-slate-900"></hr>
                <div onClick={()=>setsem("Win")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Win Sem {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fallregular")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fall Sem-Regular {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fall")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fall Sem {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fasttrackfalls")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[600px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fast Track Fall {year}</a>
                </div>
              </div>
              </div>
             </div>
            </div>

            {cal.map((calender)=>{ 
             if(year==calender.year&&(sem==""||sem==calender.sem)){ 
             {/* Intra Calender */}
             return <div>
             <div className="w-full h-[600px] bg-purple-200 px-[54px] py-[36px] mb-[36px]">
              
             <p className="text-[32px] text-center font-bold text-emilio pb-[15px] text-red-950">{calender.head}</p>
             <p className="text-[20px] text-black text-emilio font-light pb-[16px] text-center">{calender.desc}</p>
             
             <div className="w-full flex justify-center"><div className="w-[1224px] h-[415px]">
               <Image width={1224} height={415} src={calender.img} alt="Calander Image"></Image>
             </div></div>

             </div></div>
            }})}

            
            </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden">
                 
               <div className="w-full h-max px-[10px] bg-white">
               
               <p className="flex items-center justify-center text-[24px] text-emilio font-bold text-red-950 pt-[27px] pb-[24px]">Academic Calendar</p>
                 {/* buttons */}
               <div className="grid lg:grid-cols-2 items-center justify-center pb-[35px] gap-[24px]">

               <div className="w-[320px] h-[42px]">
                <button type="button" onClick={()=>yeardropdown=="0"?setyeardropdown("1"):setyeardropdown("0")} className="w-320px] h-[42px] rounded-sm shadow-lg inline-flex items-center w-full rounded-md bg-red-100 pl-[37px] py-2 text-[14px] font-light text-black hover:bg-red-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Select Academic Year
                <svg className="ml-[100px] h-5 w-5  text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
                </button>
                 
                 {/* Dropdown */}
                 <div className={`w-[320px] ${yeardropdown=="1"?"visible":"invisible"} h-max absolute z-10 mt-2 w-56 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                 <div className="py-1" role="none">
                 <div onClick={()=>setyear("2019")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2019</a>
                </div>
                <hr className=" h-[3px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2020")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2020</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2021")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2021</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2022")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2022</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setyear("2023")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">2023</a>
                </div>
                 </div>
                 </div>
                </div>
                
                {/* New dropdown */}
                <div className="w-[320px] h-[42px]">
                <button type="button" onClick={()=>semdropdown=="0"?setsemdropdown("1"):setsemdropdown("0")} className="w-320px] h-[42px] rounded-sm shadow-lg inline-flex items-center w-full rounded-md bg-red-100 pl-[37px] py-2 text-[14px] font-light text-black hover:bg-red-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Select the Semester
                <svg className="ml-[110px] h-5 w-5  text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
                </button>
                 
                 {/* Dropdown */}
                 <div className={`w-[320px] ${semdropdown=="1"?"visible":"invisible"} h-max absolute z-10 mt-2 w-56 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                 <div className="py-1" role="none">
                 <div onClick={()=>setsem("win")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">win Sem {year}</a>
                </div>
                <hr className=" h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("Win")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Win Sem {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fallregular")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fall Sem-Regular {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fall")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fall Sem {year}</a>
                </div>
                <hr className="h-[2px] bg-slate-900"></hr>
                <div onClick={()=>setsem("fasttrackfalls")}>
                <a href="#" className="text-black bg-red-100 hover:bg-red-300 block w-[320px] h-[50px] px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Fast Track Fall {year}</a>
                </div>
                 </div>
                 </div>
                </div>
               </div>
               
               {cal.map((calender)=>{ 
             if(year==calender.year&&(sem==""||sem==calender.sem)){
                {/* Intra Calender */}
                return  <div>
                <div className="w-full h-max bg-purple-200 px-[54px] py-[36px] mb-[36px] items-center justify-center shadow-lg">
                 
                <p className="text-[16px] text-center font-bold text-emilio pb-[15px] text-red-950">Modified Academic Calendar of INTRA Semester 2023-24</p>
                <p className="text-[12px] text-black text-emilio font-light pb-[16px] text-center"># FAT Schedule will be notified by the Controller of Examinations.</p>
                
                <div className="w-full flex justify-center"><div className="w-[320px] h-[113px]">
                  <Image width={320} height={113} src={Intra} alt="Calander Image"></Image>
                </div></div>
               
                </div></div>
             }})}

               </div>
                 
            </div>
        </>
    )
}