import headerimage from "../../../assets/images/Homepage Images/HeaderImage2.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <div className="z-0 absolute top-[352px] left-[108px] ls:text-[60px] md:text-[78px] text-white font-Emilo ls:w-[400px] md:w-[600px]">
        <h1>
          Welcome to <br /> VIT-AP{" "}
          <u
            style={{
              textDecorationColor: "#650010",
              textDecorationThickness: 25,
              textUnderlineOffset: 1,
              textUnderlinePosition: "left",
            }}
          >
            University
          </u>
        </h1>
        <h1 className="text-[20px] font-Montserrant">APPLY KNOWLEDGE, IMPROVE LIFE</h1>
      <button className="md:w-[201px] md:h-[54px] bg-primary font-Montserrant text-white text-[14px] rounded-full" >
        <div className="flex justify-center items-center space-x-[12px]"><div>Contact Us</div> <BsArrowRight/></div>
      </button>

      </div>
          

      <div className="w-full  ls:h-auto object-cover">
        <Image src={headerimage} alt="university image" className="w-full" />
      </div>
      
    </>
  );
};

export default HeroSection;
