import Image from "next/image";
import style from "./hero.module.css";
export default function hero(){
    return(
        <>
            
            <div class={`w-full h-[363px] overflow-hidden ${style.hero}`}>

            </div>
          
             {/* About */}
             <div class="w-full h-[600px] bg-red-200 px-[35px]">
               <div class="w-full h-[600px] bg-white px-[75px]">
                 {/* flex */}
                 <div class="lg:flex lg:flex-row">
                 {/* basis */}
                 <div class="basis-2/3">
                  <p class="text-red-950 text-[48px] font-extrabold text-emilio pt-[150px]">About Career Development Cell</p>
                  <p class="text-dark text-[18px] text-montserrat pt-[22px]">The Career Development Centre (CDC) plays an integral role in creating the illustrious placement record of VIT. It ensures smooth functioning of the placement activities on the campus. The centre also facilitates training activities for the students to ensure that they get placed with national and international companies as well. VIT AP has a dedicated Placement and Training (PAT) centralized with VIT Career Development Centre for the enhancement of the Student’s skills and aptitude.</p>
                 </div>
                 
                  {/* basis */}
                 <div class="basis-1/3 pl-[60px]">
                  <div class="w-[462px] h-[462px] pt-[105px]">
                    <Image width={462} height={462} alt="About Image" src="/aboutcdc.jpeg" ></Image>
                  </div>
                 </div>
                 </div>

               </div>
             </div>
        </>
    )
}
