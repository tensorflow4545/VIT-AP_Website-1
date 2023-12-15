"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const FacultySection = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/scope-school-faculty-sections?populate=*`,{
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          const extractedAttributes = response.data.data.map((item) => item.attributes);
          setProfiles(extractedAttributes);
        } else {
          console.error('The "data" property in the API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

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
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[0]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[0]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[0]?.Designation}</h1>
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
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[1]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[1]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[1]?.Designation}</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[2]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[2]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[2]?.Designation}</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[3]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[3]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[3]?.Designation}</h1>
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
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[4]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[4]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[4]?.Designation}</h1>
            </div>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <Link href={"/"} className='text-white text-[18px] font-semibold'>See Profile</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden mt-[15px] max-w-[230px] max-h-[230px] h-full w-full relative group transition-all duration-300 ease-in-out">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[5]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[5]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[5]?.Designation}</h1>
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
            src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[6]?.Image.data[0].attributes.url}`}
            alt="faculty1Img"
            fill={true}
          />
          <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
            <div className='p-5 hidden group-hover:flex flex-col gap-1'>
              <h1 className='text-white text-[18px] font-semibold'>{profiles[6]?.Name}</h1>
              <h1 className='text-white text-[15px] font-semibold'>{profiles[6]?.Designation}</h1>
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
