import Image from "next/image";
// import style from "./hero.module.css";
export default function Hero() {
  return (
    <div>
      {/* About */}
      <div class="max-w-[1560px] w-[100%] max-h-[800px] bg-red-200 px-[35px] hidden ls:block">
        <div class="max-w-[1560px] w-[100%] max-h-[800px] bg-white px-[75px] py-[100px]">
          {/* flex */}
          <div class="flex flex-row gap-5">
            {/* basis */}
            <div class="basis-2/3">
              <p class="text-[#650010] text-[36px] lx:text-[48px] font-extrabold text-emilio pt-[50px]">About <br /> Career Development Cell</p>
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

      <div className="w-full max-h-[800px] block ls:hidden">
        <div className="flex flex-col gap-3 px-[30px] py-[20px]">
          <p class="text-[#650010] text-[24px] font-extrabold text-emilio ">About <br /> Career Development Cell</p>
          <p class="text-dark text-[15px] text-montserrat">The Career Development Centre (CDC) plays an integral role in creating the illustrious placement record of VIT. It ensures smooth functioning of the placement activities on the campus. The centre also facilitates training activities for the students to ensure that they get placed with national and international companies as well. VIT AP has a dedicated Placement and Training (PAT) centralized with VIT Career Development Centre for the enhancement of the Student’s skills and aptitude.</p>
          <div className="flex justify-center items-center">
            <Image width={350} height={200} alt="About Image" src="/aboutcdc.jpeg" ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
