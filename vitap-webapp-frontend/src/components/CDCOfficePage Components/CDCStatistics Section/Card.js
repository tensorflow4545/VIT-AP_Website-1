import Link from 'next/link';
import React from 'react'

const Card = ({ url, title, href }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="min-h-[350px] w-[100%] h-[100%] max-lx:min-h-[280px] group bg-center bg-cover bg-no-repeat relative hover:scale-105 transition-all duration-300 ease-in-out basis-1/5 flex-shrink-0 transform -skew-x-6"
    >
      <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
        <h1 className="text-[15px] ls:text-[17px] font-bold">{title}</h1>
        <Link href={href}><p className="text-[13px] ls:text-[14px] font-semibold cursor-pointer">Explore Now</p></Link>
      </div>
    </div>
  );
}

export default Card
