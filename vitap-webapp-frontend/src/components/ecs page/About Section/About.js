import Image from "next/image";
export default function About(){
    return (
        <>
          {/* Desktop view */}
          <div className="sm:grid hidden">
          <div className="w-full h-max bg-red-950 pr-[27px] ">
               <div className="w-full h-max bg-white px-[108px] pb-[69px]">
                 {/* flex */}
                 <div className="lg:flex lg:flex-row">
                 {/* basis */}
                 <div className="basis-2/3">
                  <p className="text-red-950 text-[48px] font-extrabold text-emilio pt-[96px]">Engineering Clinicss</p>
                  <p className="text-red-950 text-[32px] font-bold text-emilio pt-[15px]">A Project-Based Learning Approach to Engineering Education</p>
                  <p className="text-dark text-[18px] text-montserrat pt-[14px]">VIT-AP University is offering a unique project-based learning courses called “Engineering Clinics”. These courses provides students with the opportunity to gain hands-on experience with the engineering concepts and principles they learn in the classNameroom, while also developing their critical thinking, problem-solving, and teamwork skills.</p>
                  <p className="text-dark text-[18px] text-montserrat pt-[14px]">Students form interdisciplinary teams and choose a topic to work on, developing a prototype that addresses the problem at hand. At the end of the semester, students showcase their prototypes at the Engineering Clinics Expo, where industrial experts assess their work and provide feedback. The top three projects are awarded reimbursement for all expenses incurred.</p>
                 </div>
                 
                  {/* basis */}
                 <div className="basis-1/3 pl-[60px]">
                  <div className="w-[354px] h-[384px] pt-[169px]">
                    <Image width={354} height={384} alt="About Image" src="/about.png" ></Image>
                  </div>
                 </div>
                 </div>

               </div>
             </div>
          </div>

          {/* Mobile view */}
          <div className="sm:hidden">
            <div className="w-full h-[1000px] bg-white px-[22px] jusitfy-center items-center">
            <p className="text-red-950 text-[24px] font-extrabold text-emilio pt-[96px] text-center">About</p>
            <p className="text-red-950 text-[24px] font-extrabold text-emilio pb-[24px] text-center">Engineering Clinicss</p>
            <div className="w-full h-max flex items-center justify-center"><div className="w-[315px] h-[226px] overflow-hidden">
                    <Image width={315} height={226} alt="About Image" src="/ecs.png" ></Image>
            </div></div>
            <p className="text-red-950 text-[16px] font-bold pt-[28px] text-emilio text-center">A Project-Based Learning Approach to Engineering Education</p>
            <p className="text-dark text-[18px] text-montserrat pt-[14px]">VIT-AP University is offering a unique project-based learning courses called “Engineering Clinics”. These courses provides students with the opportunity to gain hands-on experience with the engineering concepts and principles they learn in the classNameroom, while also developing their critical thinking, problem-solving, and teamwork skills.</p>
            <p className="text-dark text-[18px] text-montserrat pt-[14px]">Students form interdisciplinary teams and choose a topic to work on, developing a prototype that addresses the problem at hand. At the end of the semester, students showcase their prototypes at the Engineering Clinics Expo, where industrial experts assess their work and provide feedback. The top three projects are awarded reimbursement for all expenses incurred.</p>
            </div>
          </div>

        </>
    )
}