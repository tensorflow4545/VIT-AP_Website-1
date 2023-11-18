"use client";
import Image from "next/image";
// import headerimage from "../../../assets/images/Homepage Images/HeaderImage.png";
import headerimage2 from "../../../assets/images/Homepage Images/headerimage1280-720.png";
import config from "@/config";
import { headerimage3 } from "../../../assets/images/Homepage Images/1.JPG";
import CarouselComp from "./CarouselComp";
import HeaderText from "./HeaderText";

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
     <CarouselComp/>
     <HeaderText/>

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
