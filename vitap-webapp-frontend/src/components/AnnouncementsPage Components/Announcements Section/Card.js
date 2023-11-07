import React from 'react'
import "./Card.css"

const Card = ({ key, content }) => {
  return (
    <div className="relative min-w-[375px] min-h-[175px] z-10 bg-white cursor-pointer" key={key}>
      <div className="absolute w-[100%] h-[50%] border-[8px] border-red-200 bottom-0 border-t-0 z-20 hover:border-red-800 transition-all duration-300 ease-in-out"></div>
      <div className="absolute w-[97%] h-[96%] border border-gray-400 ml-[5px] flex flex-col justify-center items-start text-start">
        <div className='p-[25px]'>
          <h1 className='tags text-[#000] text-[15px] font-bold mb-1 '>
            Hello
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card
