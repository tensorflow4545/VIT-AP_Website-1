import React from "react";
import Image from "next/image";
import exp1 from "../../../assets/images/explorePhotos/explore1.png";
import exp2 from "../../../assets/images/explorePhotos/explore2.png";
import exp3 from "../../../assets/images/explorePhotos/explore3.png";
import exp4 from "../../../assets/images/explorePhotos/explore4.png";
import exp5 from "../../../assets/images/explorePhotos/explore5.png";
import exp6 from "../../../assets/images/explorePhotos/explore6.png";
import exp7 from "../../../assets/images/explorePhotos/explore7.png";
import exp8 from "../../../assets/images/explorePhotos/explore8.png";
import exp9 from "../../../assets/images/explorePhotos/explore9.png";

const Life = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-[#E8E8E8] relative">
        <Image
          src={exp1}
          width={250}
          height={200}
          className="absolute top-3 left-[50px]"
        />
        <Image
          src={exp2}
          width={184}
          height={147}
          className="absolute top-0 left-[490px]"
        />
        <Image
          src={exp3}
          width={250}
          height={200}
          className="absolute top-0 left-[820px]"
        />
        <Image
          src={exp4}
          width={250}
          height={180}
          className="absolute top-[40px] right-[30px]"
        />
        <Image
          src={exp5}
          width={320}
          height={220}
          className="absolute left-[15px] top-[240px]"
        />
        <Image
          src={exp6}
          width={316}
          height={200}
          className="absolute top-[300px] right-[20px]"
        />
        <Image
          src={exp7}
          width={272}
          height={200}
          className="absolute left-[70px] top-[500px]"
        />
        <Image
          src={exp8}
          width={280}
          height={202}
          className="absolute bottom-0 right-[590px] top-[534px]"
        />
        <Image
          src={exp9}
          width={280}
          height={202}
          className="absolute bottom-0 right-[40px] top-[534px]"
        />
        <h4 className="mt-[210px] text-[27px] text-center items-center relative text-[#5C0E14] font-Emilo font-bold">
          <i>Explore our campus</i>
        </h4>
        <h1 className="text-[90px] mt-[5px] text-center items-center relative font-Emilo font-bold">
          Life @ VIT-AP
        </h1>
        <p className="w-[616px] h-[54px] text-center ml-[30%] mt-3">
          Welcome to VIT-AP!
        </p>
        <button className="ml-[44%] bg-[#5C0E14] items-center text-[#FDFEFF] w-[185px] h-[64px] rounded-full hover:bg-[#7A1820]">
          EXPLORE
        </button>
      </div>
    </>
  );
};

export default Life;
