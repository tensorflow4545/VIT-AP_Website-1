import Image from 'next/image'
import React from 'react'

const Card = ({imgUrl, date, index, title}) => {
  return (
    <div
      key={index}
      className="max-w-[380px] relative rounded-lg overflow-hidden "
    >
      <Image
        src={imgUrl}
        alt={index}
        width={400}
        height={350}
        className="object-cover rounded-lg relative hover:scale-110 transition-all duration-500 ease-in overflow-hidden"
      />
      <div className="absolute bottom-0 flex justify-between items-center gap-5 text-[20px] font-semibold text-white max-ls:text-[14px]">
        <h1 className="flex-2 max-w-[250px] text-left p-[20px] max-ls:p-[10px] text-white">
          {title}
        </h1>
        <h1 className="flex-1 bg-[#5C0E14] max-w-[150px] p-[20px] text-center max-ls:p-[10px]">
          {date}
        </h1>
      </div>
    </div>
  );
}

export default Card
