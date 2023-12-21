import React from "react";
import img from "../../../assets/images/testimonials/img2.png";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      name: 'MERVIN JOSEPH',
      company: 'SAPP LABS',
      quote: '“',
      description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.',
      image: img,
    },
    {
      name: 'MERVIN JOSEPH',
      company: 'SAPP LABS',
      quote: '“',
      description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.',
      image: img,
    },
    {
      name: 'MERVIN JOSEPH',
      company: 'SAPP LABS',
      quote: '“',
      description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.',
      image: img,
    },
    {
      name: 'MERVIN JOSEPH',
      company: 'SAPP LABS',
      quote: '“',
      description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.',
      image: img,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="bg-[#5C0E14] h-1/2 w-[100%]"></div>
        <div className="w-[90%] h-[80%] bg-[#EFEFEF] shadow-2xl text-center absolute border">
          <p className="text-[#5C0E14] font-bold mt-[12px] font-Emilio">
            <i>Testimonials</i>
          </p>
          <p className="text-[#5C0E14] font-bold text-[56px] font-Emilio">
            What Students Say
          </p>
          <p className="text-[#1B1C1E]">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </p>
          <div className="flex ml-[80px] justify-center items-center">
            {data.slice(0,3).map((item, index) => (
              <div key={index} className="w-[350px] h-[302px] bg-[#FDFEFF] mt-[55px] ml-[36px]">
                <Image
                  src={item.image}
                  width={109}
                  height={109}
                  className="absolute ml-[125px] mt-[-50px]"
                />
                <p className="font-bold font-Montserrant text-[18px] mt-[65px]">
                  {item.name}
                </p>
                <p className="font-Montserrant">{item.company}</p>
                <p className="text-[#5C0E14] text-[60px] font-Montserrant font-bold">
                  {item.quote}
                </p>
                <p className="text-center font-Montserrant w-[320px] ml-[10px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[10px]">
            <button className="border border-black w-[54px] h-[54px] text-[30px] text-[#5C0E14] hover:text-white hover:bg-primary">
              &lt;
            </button>
            <button className="border border-black w-[54px] h-[54px] text-[30px] text-[#5C0E14] hover:text-white hover:bg-primary">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
