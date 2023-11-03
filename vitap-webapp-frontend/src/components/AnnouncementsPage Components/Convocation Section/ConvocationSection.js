import React from 'react'
import "./Convocation.css"
import Card from './Card';

const ConvocationSection = () => {
  return (
    <div className="max-w-[1560px] w-[100%] min-h-[100vh] h-[100%] mx-auto">
      <div
        style={{ backgroundImage: `url("./convocation.jpeg")` }}
        className="w-[100%] h-[400px] bg-center bg-cover relative"
      >
        <div class="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-[100%] min-h-[70px] h-[100%] bg-[#650010] ">
        <div className="max-w-[1440px] mx-auto pl-[50px] text-white">
          <h1 className="text-[36px] font-bold">
            3<sup>rd</sup> Annual Convocation
          </h1>
          <p>
            <b>Date:</b> 23<sup>rd</sup> September 2023
          </p>
          <p>
            <b>Venue:</b> Sri Tanguturi Prakasam Auditorium VIT-AP Univeristy
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url("./convocation2.jpeg")` }}
        className="relative w-[100%] min-h-[600px] bg-center bg-cover"
      >
        <div class="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-[100%] min-h-[400px] h-[100%] py-[40px] px-[50px] flex justify-center items-center gap-5 flex-wrap max-md:px-[20px] max-lx:px-[0px]">
        <div className='overflow-hidden'>
          <Card url={"./convocards/card1.jpeg"} title={"Schedule"} />
        </div>
        <div className='overflow-hidden'>
          <Card url={"./convocards/card2.jpeg"} title={"Videos"} />
        </div>
        <div className='overflow-hidden'>
          <Card url={"./convocards/card3.jpeg"} title={"Ranklist"} />
        </div>
        <div className='overflow-hidden'>
          <Card url={"./convocards/card4.jpeg"} title={"Instructions"} />
        </div>
        <div className='overflow-hidden'>
          <Card url={"./convocards/card5.jpeg"} title={"Photos"} />
        </div>
      </div>
      <div className="min-h-[200px] w-[100%] bg-red-100 mt-[-150px] -z-20"></div>
    </div>
  );
}

export default ConvocationSection
