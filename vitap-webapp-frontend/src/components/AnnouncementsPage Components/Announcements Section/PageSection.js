import React from 'react';
import "./PageSection.css";
import Image from 'next/image';

const PageSection = () => {
    return (
      <div className="max-w-[1560px] w-[100%] max-h-[1300px] h-[100%] mx-auto font-Emilo">
        <div
          style={{ backgroundImage: `url("/announcements.png")` }}
          className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center"
        >
          <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center">
            Announcements
          </h1>
        </div>
        <div
          className="spacer flex flex-col justify-center items-center p-[50px]"
          style={{ backgroundImage: 'url("/wave3.png")' }}
        >
          <Image src={"/announcementphoto.png"} width={400} height={300} />
          <h1 className='text-[28px] font-bold text-white font-Emilo'>
            Five Day workshop on IoT and Beyond: Exploring Electronics, PCBs,
            and 3D Printing
          </h1>
        </div>
        <div className="min-h-[100px] w-[100%] bg-red-100"></div>
      </div>
    );
}

export default PageSection;