import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ imgUrl, date, index, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={index}
      className="max-w-[380px] relative rounded-lg overflow-hidden w-[400px] h-[350px] "
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
    >
      <Image

        key={1}
        src={imgUrl}
        alt="A descriptive text here"
        width={400}
        height={350}
        className="object-cover rounded-lg relative hover:scale-110 transition-all duration-500 ease-in overflow-hidden scale-0.5"
      />
      <div className="absolute bottom-[0px] flex justify-between items-center gap-7 text-[20px] font-semibold text-white max-ls:text-[14px]">
        <h1 className="flex-2 max-w-[250px] font-Emilo font-[600] text-left p-[20px] max-ls:p-[10px]">
          {title}
        </h1>
        {isHovered === false ? (
          <h1 className={`flex-1 bg-[#5C0E14] text-center max-w-[150px] p-[20px] text-right rounded-sm max-ls:p-[10px] h-[100px]`}>
            {date}
          </h1>) : (<h1 className={`flex-1 bg-[#5C0E14] justify-center max-w-[150px] p-[20px] text-right rounded-sm max-ls:p-[10px] h-[100px]`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[100%] h-[100%]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

          </h1>)}
      </div>
    </div>
  );
}

export default Card
