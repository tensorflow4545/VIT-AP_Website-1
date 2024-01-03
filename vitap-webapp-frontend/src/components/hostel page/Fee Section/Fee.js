"use client";
import Image from 'next/image'
import react,{useState} from "react";
export default function Fee(){

    const [active, setActive] = useState("/1.jpeg");
    
    return(
        <>
            <div className="w-full h-[1250px] bg-red-200">
              
              <div className="pl-[148px] pr-[148px]">
              <h1 className="text-[48px] font-[400px] font-emilio text-center pt-[96px]">Hostel and Mess Fee Structure</h1>

              <div className="flex flex-row pb-[20px] pt-[55px]">
                 <div className={`basis-1/3`}><button className={` ${active=="/1.jpeg"?"bg-red-900":"bg-white"} ${active=="/1.jpeg"?"text-white":"text-dark"} w-[340px] h-[84px] `} onClick={() => setActive("/1.jpeg")}>Fall & winter semester</button></div>
                 <div className={`basis-1/3`}><button className={` ${active=="/2.jpeg"?"bg-red-900":"bg-white"} ${active=="/2.jpeg"?"text-white":"text-dark"} w-[340px] h-[84px]`} onClick={() => setActive("/2.jpeg")}> NRI Fall & winter semester</button></div>
                 <div className={`basis-1/3`}><button className={` ${active=="/3.jpeg"?"bg-red-900":"bg-white"} ${active=="/3.jpeg"?"text-white":"text-dark"} w-[340px] h-[84px]`} onClick={() => setActive("/3.jpeg")}>Research scholar/Foreign category</button></div>
              </div>
              

              <div className="w-[1040px] h-[780px] bg-white">
              <Image src={active} width={1040} height={780}></Image>
              </div>

            </div>
            </div>
        </>
    )
    
}
