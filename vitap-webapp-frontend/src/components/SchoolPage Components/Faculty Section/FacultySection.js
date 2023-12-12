import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import img7 from "@/assets/images/FacultyImages/Dr. HARI-SEETHA.jpg"
import img6 from "@/assets/images/FacultyImages/Dr. Anil Vithalrao Turukmane - HOD Networking and Security.jpg"
import img4 from "@/assets/images/FacultyImages/Dr. Muneeswari G - HOD Data Science and Engineering.jpg"
import img3 from "@/assets/images/FacultyImages/Dr. Nagaraju Devarakonda - HOD Software and System Engineering.jpg"
import img5 from "@/assets/images/FacultyImages/Dr. Reeja S R - HOD Artificial Intelligence and Machine Learning.jpg"
import img1 from "@/assets/images/FacultyImages/Dr.-PRADEEP-REDDY - Dean.jpg"
import img2 from "@/assets/images/FacultyImages/Mr.-SAROJ-KUMAR-PANIGRAHY - Asso.Dean.jpg"

const FacultySection = () => {
  return (
    <div className="max-w-[1340px] mx-auto w-full h-[820px] flex justify-between px-[120px] pt-[50px] pb-[10px] ls:gap-[20px] md:gap-[0px] max-md:px-[80px] max-lx:px-[60px] font-Emilo">
      <div className="flex-1  flex flex-col">
        <div className="mt-[20px]">
          <h1 className="text-[#5C0E14] text-[48px] font-Emilio font-bold mb-[10px] max-md:text-[32px]">
            Faculty
          </h1>
          <p className="pr-[10px] text-[#1E1E1E] text-[18px] font-normal mb-[25px] max-md:text-[14px]">
            Our multidisciplinary faculty are leaders in research and teaching
          </p>
          <Link href={"/faculty"} target='_blank'>
          <button className="py-[9px] px-[7px] text-[#650010] text-[20px] font-semibold border-2 border-red-800 max-md:text-[16px]">
            Faculty Profiles
          </button>
          </Link>
        </div>

        {/* <div className="flex justify-end items-end overflow-hidden mt-[75px] pr-[20px] max-w-[230px] max-h-[230px] h-full w-full relative">
          <Image src={"/faculty1.jpeg"} alt="faculty1Img" fill={true} className='flex justify-end items-end'/>
        </div> */}
        <div className="flex justify-end items-end overflow-hidden mt-[75px] pr-[20px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img1}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>PRADEEP REDDY</h1>
              <h1 className='text-white text-[15px] font-semibold'>Dean, SCOPE</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img2}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. SAROJ KUMAR PANIGRAHY</h1>
              <h1 className='text-white text-[15px] font-semibold'>Associate Dean, SCOPE</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img3}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. Nagaraju Devarakonda</h1>
              <h1 className='text-white text-[15px] font-semibold'>HOD Software and System Engineering</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img4}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. Muneeswari G</h1>
              <h1 className='text-white text-[15px] font-semibold'>HOD Data Science and Engineerin</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1  items-center justify-center gap-[20px]">
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img5}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. Reeja S R</h1>
              <h1 className='text-white text-[15px] font-semibold'>HOD Artificial Intelligence and Machine Learning</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img6}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. Anil Vithalrao Turukmane</h1>
              <h1 className='text-white text-[15px] font-semibold'>HOD Networking and Security</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 ">
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={img7}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>Dr. HARI SEETHA</h1>
              <h1 className='text-white text-[15px] font-semibold'>Faculty, SCOPE</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultySection
