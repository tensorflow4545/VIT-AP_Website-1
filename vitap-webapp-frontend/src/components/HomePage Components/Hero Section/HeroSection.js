import Image from "next/image";
import headerimage from "../../../assets/images/Homepage Images/HeaderImage2.png";
import { BsArrowRight } from "react-icons/bs";
import config from "@/config";

const fetchdata = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const response = await fetch(
    `${config.api}/api/homepage-heromedias?populate=*`,
    reqOptions
  );
  const data = await response.json();
  return data;
};

const HeroSection = async () => {
  const data = await fetchdata();

  // console.log( media)
















  
  // console.log(typeof media)

  return (
    <>
      <div className="z-0 absolute ls:top-[240px] md:top-[352px] ls:left-[108px] sm:left-[150px] text-white font-Emilo ls:w-[500px] md:w-[600px] sm:top-[200px]  ls:block sm:flex-col ls:text-left sm:text-center">
        <h1 className="md:leading-[100px] sm:leading-10 ls:leading-[60px] sm:text-[35px] ls:text-[50px] md:text-[78px] ">
          Welcome to <br /> VIT-AP University
        </h1>
        <h1 className="md:text-[20px] sm:text-[10px] ls:text-[15px] font-Montserrant">
          APPLY KNOWLEDGE, IMPROVE LIFE
        </h1>
        <button className="md:w-[201px] md:mt-[25px] sm:mt-3 ls:mt-10 md:h-[54px] sm:w-[160px] sm:h-[34px] bg-primary ls:text-[15px] md:text-[14px] rounded-full font-Montserrant text-white ">
          <div className="flex justify-center items-center space-x-[12px]">
            <div>Contact Us</div> <BsArrowRight />
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
        <Image className="w-full" src={headerimage} />
      </div>
    </>
  );
};

export default HeroSection;
