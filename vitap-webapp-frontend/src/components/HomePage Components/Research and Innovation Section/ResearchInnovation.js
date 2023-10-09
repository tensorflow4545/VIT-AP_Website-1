import React from 'react'
import { researchInnovation, researchNumbers } from '@/constants';
import Image from 'next/image';

const ResearchInnovation = () => {
  return (
    <div className="max-w-[1440px] min-h-[960px] bg-[#FDFEFF] mx-auto pt-[56px] pl-[110px] flex flex-col max-xl:pl-[50px]">
      <div className="flex flex-col justify-start items-start gap-5">
        <h1 className="text-[#51060D] text-[48px] font-bold">
          Research and Innovation
        </h1>
        <p className="text-[18px] font-normal ">
          We indulge in driving discoveries vital to our world, our health, and
          our intellectual life.
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-[24px] mt-[53px] max-lx:flex-col flex-wrap max-xl:justify-center max-lx:items-center">
          {researchInnovation.map((research) => (
            <Image
              key={research.id}
              src={research.imgUrl}
              alt={research.id}
              width={"392"}
              height={"446"}
            />
          ))}
        </div>
        <div className="absolute -bottom-10 left-[29%] min-w-[380px] mx-auto min-h-[60px] bg-[#650010] max-lx:left-[25%] max-ls:left-[15%]">
          <h1 className="text-[#FFE9EB] text-[25px] p-[22px] max-lx:text-[20px] max-lx:p-[17px]">
            Top Quality and Leading Experience
          </h1>
        </div>
      </div>
      <div className="flex max-ls:flex-col max-ls:justify-center max-ls:items-center flex-wrap max-w-[1240px] min-h-[240px] justify-between mt-[80px] max-ls:gap-5">
        {researchNumbers.map((item) => (
          <div key={item.id} className='flex-start'>
            <h1 className="text-[#5C0E14] text-[48px] max-lx:text-[38px] max-ls:text-[32px] font-bold">
              {item.number} +
            </h1>
            <p className="text-[#5C0E14] text-[20px] font-normal max-lx:text-[17px] max-ls:text-[15px]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchInnovation
