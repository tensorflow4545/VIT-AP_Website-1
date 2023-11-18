"use client";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import react,{useState} from "react";
export default function hostel(){
    const hostels=[
        {
           id:"1",
           hostelimg:"/hostelimg.png",
           name:"Men's Hostel 1",
           desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
           wardenimg:"/wardenimg.png",
           wardenname:"Dr. S. Karthikeyan",
           designation:"Chief Warden",
           email:"cw.mh@vitap.ac.in"
        },
        {
            id:"2",
            hostelimg:"/hostelimg.png",
            name:"Men's Hostel 2",
            desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
            wardenimg:"/wardenimg.png",
            wardenname:"Dr. S. Karthikeyan",
            designation:"Chief Warden",
            email:"cw.mh@vitap.ac.in"
        },
        {
            id:"3",
            hostelimg:"/hostelimg.png",
           name:"Men's Hostel 3",
           desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
           wardenimg:"/wardenimg.png",
           wardenname:"Dr. S. Karthikeyan",
           designation:"Chief Warden",
           email:"cw.mh@vitap.ac.in"
        },
        {
            id:"4",
            hostelimg:"/hostelimg.png",
            name:"Men's Hostel 4",
            desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
            wardenimg:"/wardenimg.png",
            wardenname:"Dr. S. Karthikeyan",
            designation:"Chief Warden",
            email:"cw.mh@vitap.ac.in"
        },
        {
            id:"5",
            hostelimg:"/hostelimg.png",
           name:"Men's Hostel 5",
           desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
           wardenimg:"/wardenimg.png",
           wardenname:"Dr. S. Karthikeyan",
           designation:"Chief Warden",
           email:"cw.mh@vitap.ac.in"
        },
        {
            id:"6",
            hostelimg:"/hostelimg.png",
           name:"Ladie's Hostel 1",
           desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
           wardenimg:"/wardenimg.png",
           wardenname:"Dr. S. Karthikeyan",
           designation:"Chief Warden",
           email:"cw.mh@vitap.ac.in"
        },
        {
            id:"7",
            hostelimg:"/hostelimg.png",
           name:"Ladie's Hostel 2",
           desc:"Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum",
           wardenimg:"/wardenimg.png",
           wardenname:"Dr. S. Karthikeyan",
           designation:"Chief Warden",
           email:"cw.mh@vitap.ac.in"
        }
    ];
    const [active, setActive] = useState("1");
    const img="/1.jpeg";
   return(
    <>
        <div class="w-full h-[1100px] bg-white">
        
        <div class="pl-[108px] pr-[108px] pt-[92px]">

          <p class="text-[40px] font-[400px] text-dark font-emilio text-center">Have a look at our hostels</p>
           
           {/* felx */}
           <div class="flex flex-row pt-[55px]">
                 <div class={`basis-1/3`}><button class={` ${active=="1"?"bg-red-200":"bg-white"} ${active=="1"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md `} onClick={() => setActive("1")}>MH1</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="2"?"bg-red-200":"bg-white"} ${active=="2"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("2")}> MH2</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="3"?"bg-red-200":"bg-white"} ${active=="3"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("3")}>MH3</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="4"?"bg-red-200":"bg-white"} ${active=="4"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("4")}>MH4</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="5"?"bg-red-200":"bg-white"} ${active=="5"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("5")}> MH5</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="6"?"bg-red-200":"bg-white"} ${active=="6"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("6")}>LH1</button></div>
                 <div class={`basis-1/3`}><button class={` ${active=="7"?"bg-red-200":"bg-white"} ${active=="7"?"text-white":"text-dark"} w-[153px] h-[53px] rounded-t-md`} onClick={() => setActive("7")}>LH2</button></div>
            </div>
             
            <div class="w-[1200px] h-[782px] bg-red-200">
                
                {/* map function */}
                {hostels.map((program)=>{
              if(active===program.id){
              return <div>
            
                 {/* flex */}
                <div class="flex flex-row pt-[34px] pl-[29px] pr-[29px]">

                <div class="basis-1/2 w-[625px] h-[282px] rounded-lg bg-white overflow-hidden"><Image class="rounded-lg" width={625} height={282} src={program.hostelimg} alt="Hostel Image"></Image></div>
                 
                 <div class="basis-1/2 pl-[45px]">
                    <p class="text-dark text-[24px] font-[400px] text-emilio pt-[10px] pb-[10px]">{program.name}</p>
                    <p class="text-dark-300">{program.desc}</p>
                 </div>
                </div>

                <p class="text-[24px] font-[400px] text-dark text-emilio text-center pt-[36px] pb-[30px]">Meet our Wardens</p>
    
                {/* flex */}
                <div class="flex felx-row pl-[113px] pr-[113px]">

                    {/* basis */}
                   <div class="basis">
                      <div class="w-[134px] h-[134px] rounded-full bg-white overflow-hidden"><Image width={134} height={134} src={program.wardenimg} alt="Warden Image"></Image></div>
                      <p class="text-dark text-[20px] font-[400px]">{program.wardenname}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.designation}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.email}</p>
                   </div>

                   {/* basis */}
                   <div class="basis pl-[100px]">
                      <div class="w-[134px] h-[134px] rounded-full bg-white overflow-hidden"><Image width={134} height={134} src={program.wardenimg} alt="Warden Image"></Image></div>
                      <p class="text-dark text-[20px] font-[400px]">{program.wardenname}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.designation}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.email}</p>
                   </div>

                   {/* basis */}
                   <div class="basis pl-[100px]">
                      <div class="w-[134px] h-[134px] rounded-full bg-white overflow-hidden"><Image width={134} height={134} src={program.wardenimg} alt="Warden Image"></Image></div>
                      <p class="text-dark text-[20px] font-[400px]">{program.wardenname}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.designation}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.email}</p>                  
                   </div>

                   {/* basis */}
                   <div class="basis pl-[100px]">
                      <div class="w-[134px] h-[134px] rounded-full bg-white overflow-hidden"><Image width={134} height={134} src={program.wardenimg} alt="Warden Image"></Image></div>
                      <p class="text-dark text-[20px] font-[400px]">{program.wardenname}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.designation}</p>
                      <p class="text-dark text-[16px] font-[400px] text-center">{program.email}</p>
                   </div>

                </div>

                </div>}
                })}

                     {/* contact flex */}
                    <div class="flex flex-row text-center justify-center pt-[50px]">
                    <div class="pt-[5px]"><BsFillTelephoneFill /></div>
                    <p class="text-[18px] font-[600] text-center pl-[5px]">08632370501</p>
                    </div>

            </div>
        </div>
        </div>
    </>
   )
}