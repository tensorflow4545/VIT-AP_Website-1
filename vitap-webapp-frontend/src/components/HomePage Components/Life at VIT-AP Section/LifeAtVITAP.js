import React from "react";
import Image from "next/image";
import exp1 from "../assets/explorePhotos/explore1.png";
import exp2 from "../assets/explorePhotos/explore2.png";
import exp3 from "../assets/explorePhotos/explore3.png";
import exp4 from "../assets/explorePhotos/explore4.png";
import exp5 from "../assets/explorePhotos/explore5.png";
import exp6 from "../assets/explorePhotos/explore6.png";
import exp7 from "../assets/explorePhotos/explore7.png";
import exp8 from "../assets/explorePhotos/explore8.png";
import exp9 from "../assets/explorePhotos/explore9.png";

const Life = () => {
  return (
    <>
      <div className="flex flex-col h-[960px] bg-[#E8E8E8]">
        <Image src={exp1} width={292} height={281} className="absolute" />
        <Image
          src={exp2}
          width={184}
          height={147}
          className="absolute top-0 left-[420px]"
        />
        <Image
          src={exp3}
          width={288}
          height={231}
          className="absolute top-0 left-[732px]"
        />
        <Image
          src={exp4}
          width={293}
          height={258}
          className="absolute top-[72px] right-0"
        />
        <Image
          src={exp5}
          width={396}
          height={247}
          className="absolute left-0 top-[317px]"
        />
        <Image
          src={exp6}
          width={316}
          height={210}
          className="absolute top-[419px] right-0"
        />
        <Image
          src={exp7}
          width={292}
          height={212}
          className="absolute left-0 top-[645px]"
        />
        <Image
          src={exp8}
          width={396}
          height={247}
          className="absolute bottom-0 right-[522px] top-[713px]"
        />
        <Image
          src={exp9}
          width={396}
          height={247}
          className="absolute bottom-0 right-0 top-[713px]"
        />
        <h4 className="mt-[349px] text-[27px] text-center items-center relative text-[#5C0E14] font-Emilo font-bold">
          <i>Explore our campus</i>
        </h4>
        <h1 className="text-[90px] mt-2 text-center items-center relative font-Emilo font-bold">
          Life @ VIT-AP
        </h1>
        <p className="w-[616px] h-[54px] text-center ml-[30%] mt-3">
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur amet consectetur.
        </p>
        <button className="mt-3 ml-[44%] bg-[#5C0E14] items-center text-[#FDFEFF] w-[185px] h-[64px] rounded-full hover:bg-[#7A1820]">
          EXPLORE
        </button>
      </div>
    </>
  );
};

export default Life;
