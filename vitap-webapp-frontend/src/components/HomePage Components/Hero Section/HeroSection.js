"use client";
import Image from "next/image";
// import headerimage from "../../../assets/images/Homepage Images/HeaderImage.png";
import headerimage2 from "../../../assets/images/Homepage Images/headerimage1280-720.png";
import { BsArrowRight } from "react-icons/bs";
import config from "@/config";
import { Carousel } from "@material-tailwind/react";

// import { Carousel } from "@material-tailwind/react";

// const fetchdata = async () => {
//   const reqOptions = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//     },
//   };

//   const response = await fetch(
//     `${config.api}/api/homepage-heromedias?populate=*`,
//     reqOptions
//   );
//   const data = await response.json();
//   return data;
// };

const HeroSection = () => {
  // const data = await fetchdata();

  // console.log( media)
  // console.log(typeof media)

  return (
    <>
      <Carousel className=" h-screen w-full">
        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-70 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <video autoPlay loop className="h-full w-full object-cover">
            <source src="/intro.mp4" />
          </video>
        </div>

        <img
          src="/acheivements1.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />

        <img
          src="/headerimage1280-720.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />

        <img
          src="/convocation.jpeg"
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <img
          src="/image.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="z-0 absolute ls:top-[240px] md:top-[352px] ls:left-[108px] sm:left-[150px] text-white  font-semibold ls:w-[700px] md:w-[800px] sm:top-[200px]  ls:block sm:flex-col ls:text-left sm:text-center">
        <h1 className="mt-[17%] md:leading-[100px] font-Emilio sm:leading-10 ls:leading-[80px] sm:text-[35px] ls:text-[64px] md:text-[78px]">
          Welcome to <br /> VIT-AP University
        </h1>
        <h1 className="md:text-[20px] sm:text-[10px] ls:text-[15px] font-Montserrat">
          APPLY KNOWLEDGE, IMPROVE LIFE
        </h1>
        <button className="md:w-[201px] md:mt-[25px] sm:mt-3 ls:mt-10 md:h-[54px] sm:w-[160px] sm:h-[34px] bg-primary ls:text-[15px] md:text-[14px] rounded-full font-Montserrat text-white hover:opacity-80">
          <div className="flex justify-center items-center space-x-[12px] ">
            <div>CONTACT US</div> <BsArrowRight />
          </div>
        </button>
      </div>
      {/* <div className="w-full  ls:h-auto object-cover">
          
          {media.map((mediaitem) =>{
            console.log(mediaitem.attributes.url)
            return(
              <img className="w-full" src={`${config.api}${mediaitem.attributes.url}`} />
            )
          })}
</div> */}

      <div className="w-full  ls:h-auto object-cover">
        {/* <Image
          alt="A descriptive text here"
          className="w-full"
          src={headerimage2}
        /> */}
      </div>
    </>
  );
};

export default HeroSection;
