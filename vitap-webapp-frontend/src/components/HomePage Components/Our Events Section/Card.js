import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ imgUrl, date, index, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={index}
      className="max-w-[380px] relative rounded-lg overflow-hidden w-[400px] h-[350px] cursor-pointer "
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
    >

      {/* <div className=' w-full h-full bg-black opacity-100'></div> */}

      <Image
        key={1}
        src={imgUrl}
        alt="A descriptive text here"
        width={400}
        height={350}
        className="opacity-85 w-full h-full object-cover rounded-lg relative transition-all duration-500 ease-in overflow-hidden scale-1.5"
      />

      <div className="absolute bottom-[0px] right-[0px] justify-between items-right text-[20px] font-semibold  max-ls:text-[14px]">
        {isHovered === false ? (
          <div className="flex gap-7 items-center justify-center bg-[#5C0E14] w-[80px] h-[80px] p-[20px] text-center text-white text-right rounded-sm max-ls:p-[10px] hover:w-[400px] hover:h-[350px] hover:bg-opacity-80 duration-3000">

            <div className="flex-1">
              <div className="flex w-full mb-2 items-center justify-center">
                <h1 className={`max-w-[150px] p-[20px] text-white text-center rounded-sm max-ls:p-[10px] h-[100px]`}>
                  {date}
                </h1>
              </div>
            </div>
          </div>) : (<div className="flex gap-7 items-center justify-center bg-[#5C0E14] w-[400px] h-[350px] p-[20px] text-center text-white text-right rounded-sm max-ls:p-[10px] bg-opacity-80 duration-3000">

            <div className="flex-1">
              <div className="flex w-full p-4 mb-2 items-center justify-center">
                <h1 className="text-white max-w-[250px] font-Emilo font-[600] text-center p-[20px] max-ls:p-[10px]">
                  {title}
                </h1>

              </div>
              <div className="flex w-full mb-2 items-center justify-center">
                <h1 className={`max-w-[150px] p-[20px] text-white text-center rounded-sm max-ls:p-[10px] h-[100px]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[100%] h-[100%]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </h1>
              </div>
            </div>
          </div>)}

      </div>


    </div>
  );
}

export default Card
