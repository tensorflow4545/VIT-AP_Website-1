import React from "react";
import img from "../../../assets/images/testimonials/img2.png";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      name: 'Srujan Cheemakurthi',
      company: 'SAPP LABS',
      quote: '“',
      description: 'I am very proud and blessed to be a part of this university as it has taught me many lessons for life. I have learnt to be disciplined towards my studies and carrier. Especially  Computer science department which I choose to pursue here had equipped me with great knowledge and real world problem solving skills , this knowledge in my UG  made myself  ready to pursue my  masters in computer science.',
      image: "/testimonial/pic--3.png",
    },
    {
      name: 'Srujan Cheemakurthi',
      company: 'SAPP LABS',
      quote: '“',
      description: "VIT AP University's environment has clearly played a pivotal role in nurturing my curiosity and fostering a deep appreciation for the intricacies of the software industry. I am confident that I continued journey at VIT AP University will not only enhance their technical skills but also contribute significantly to the institution's vibrant academic community.",
      image: "/testimonial/pic--1.png",
    },
    {
      name: 'Lopamudra Panda',
      company: 'Bajaj Direct Limited',
      quote: '“',
      description: "I had a phenomenal journey with SCOPE and VIT-AP University. The comprehensive syllabus and well-structured courses allowed me to delve into my dreams. The supportive and specific domain knowledged faculties were always approachable, fostering a conducive learning environment. Engaging in research distinguished me among my peers, and SCOPE's top-notch labs and infrastructure provided a seamless space to excel. The hands-on experience gained through semester-end assessments and lab activities proved invaluable, enabling a smooth transition into the corporate world where I thrive today.",
      image: "/testimonial/pic--2.png",
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
                <p className="text-center font-Montserrant w-[320px] h-[70px] ml-[10px] overflow-hidden">
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
