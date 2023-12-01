import Image from "next/image";
// import style from "./hero.module.css";
export default function Hero() {
  return (
    <>

      {/* About */}
      <div class="max-w-[1560px] w-[100%] h-[400px] bg-red-200 px-[35px]">
        <div class="max-w-[1560px] w-[100%] h-[400px] bg-white px-[75px]">
          {/* flex */}
          <div class="flex flex-row gap-5">
            {/* basis */}
            <div class="basis-2/3">
              <p class="text-red-950 text-[32px] lx:text-[40px] font-extrabold text-emilio pt-[50px]">About CDC</p>
              <p class="text-dark text-[15px] lx:text-[18px] text-montserrat pt-[22px]">The Career Development Centre (CDC) plays an integral role in creating the illustrious placement record of VIT. It ensures smooth functioning of the placement activities on the campus. The centre also facilitates training activities for the students to ensure that they get placed with national and international companies as well. VIT AP has a dedicated Placement and Training (PAT) centralized with VIT Career Development Centre for the enhancement of the Student’s skills and aptitude.</p>
            </div>

            {/* basis */}
            <div class="basis-1/3 pt-[60px]">
              <div class="max-w-[462px] w-[100%] max-h-[462px] h-[100%] pt-[105px] relative">
                <Image fill alt="About Image" src="/aboutcdc.jpeg" ></Image>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
