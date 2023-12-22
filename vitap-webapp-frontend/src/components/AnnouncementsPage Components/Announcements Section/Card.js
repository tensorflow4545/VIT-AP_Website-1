import React from 'react'
import "./Card.css"
import Link from 'next/link';

const Card = ({ key, content,link }) => {
  return (
    <div className="relative min-w-[365px] min-h-[175px] z-10 bg-white cursor-pointer group" key={key}>
      <Link href={link} target='_blank'>
      <div className="absolute w-[100%] h-[50%] border-[8px] bottom-0 border-[#E6CFCF] border-t-0 z-20 group-hover:border-primary transition-all duration-300 ease-in-out"></div>
      <div className="absolute w-[97%] h-[96%] border border-gray-400 ml-[5px] flex flex-col justify-center items-start text-start">
        <div className='p-[25px]'>
          <h1 className='tags text-[#000] text-[16px] font-bold mb-1 font-Emilo'>
            {content} 
          </h1>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card
