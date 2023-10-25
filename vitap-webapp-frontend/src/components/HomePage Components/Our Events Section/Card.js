import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({imgUrl, date, index, title}) => {
  return (
    <div
      key={index}
      className="max-w-[380px] relative rounded-lg overflow-hidden w-[400px] h-[350px] "
    >
      <Image
      
      key={1}
        src={imgUrl}
        alt="A descriptive text here"
        width={400}
        height={350}
        className="object-cover rounded-lg relative hover:scale-110 transition-all duration-500 ease-in overflow-hidden"
      />
      <div className="absolute bottom-0 flex justify-between items-center gap-5 text-[20px] font-semibold text-white max-ls:text-[14px]">
        {/* <h1 className="flex-2 max-w-[250px] text-left p-[20px] max-ls:p-[10px] ">
          {title}
        </h1> */}
        <h1 className={`flex-1 bg-[#5C0E14] max-w-[150px] p-[20px] text-right max-ls:p-[10px]`}>
          {date}
        </h1>
      </div>
    </div>
  );
}

export default Card
