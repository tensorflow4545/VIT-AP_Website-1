import React from "react";
import img from "../../../assets/images/testimonials/img2.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="bg-[#5C0E14] h-1/2 w-[100%]"></div>
        <div className="w-[90%] h-[80%] bg-[#EFEFEF] shadow-2xl text-center absolute border">
          <p className="text-[#5C0E14] font-bold mt-[12px]">
            <i>Testimonials</i>
          </p>
          <p className="text-[#5C0E14] font-bold text-[56px] font-Emilo">
            What Students Say
          </p>
          <p className="text-[#1B1C1E]">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </p>
          <div className="flex ml-[80px]">
            <div className="w-[350px] h-[302px] bg-[#FDFEFF] mt-[55px] ml-[36px]">
              <Image
                src={img}
                width={109}
                height={109}
                className="absolute ml-[125px] mt-[-50px]"
              />
              <p className="font-bold font-Montserrant text-[18px] mt-[65px]">
                MERVIN JOSEPH
              </p>
              <p className="font-Montserrant">SAPP LABS</p>
              <p className="text-[#5C0E14] text-[60px] font-Montserrant font-bold">
                “
              </p>
              <p className="text-center font-Montserrant w-[320px] ml-[10px]">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur amet consectetur.
              </p>
            </div>
            <div className="w-[350px] h-[302px] bg-[#FDFEFF] mt-[55px] ml-[36px]">
              <Image
                src={img}
                width={109}
                height={109}
                className="absolute ml-[125px] mt-[-50px]"
              />
              <p className="font-bold font-Montserrant text-[18px] mt-[65px]">
                MERVIN JOSEPH
              </p>
              <p className="font-Montserrant">SAPP LABS</p>
              <p className="text-[#5C0E14] text-[60px] font-Montserrant font-bold">
                “
              </p>
              <p className="text-center font-Montserrant w-[320px] ml-[10px]">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur amet consectetur.
              </p>
            </div>
            <div className="w-[350px] h-[302px] bg-[#FDFEFF] mt-[55px] ml-[36px]">
              <Image
                src={img}
                width={109}
                height={109}
                className="absolute ml-[125px] mt-[-50px]"
              />
              <p className="font-bold font-Montserrant text-[18px] mt-[65px]">
                MERVIN JOSEPH
              </p>
              <p className="font-Montserrant">SAPP LABS</p>
              <p className="text-[#5C0E14] text-[60px] font-Montserrant font-bold">
                “
              </p>
              <p className="text-center font-Montserrant w-[320px] ml-[10px]">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur amet consectetur.
              </p>
            </div>
          </div>
          <div className="mt-[10px]">
            <button className="border border-black w-[45px] h-[45px] text-[25px] text-[#5C0E14]">
              &lt;
            </button>
            <button className="border border-black w-[45px] h-[45px] text-[25px] text-[#5C0E14]">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
