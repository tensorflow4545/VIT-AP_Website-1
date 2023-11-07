import Card from "./Card.js";
import config from "@/config";
import Image from "next/image";

import Schools from "@/constants/index.js";
import image1 from "../../../assets/images/Homepage Images/Schools/SAS.jpg";
import image2 from "../../../assets/images/Homepage Images/Schools/SENSE.jpg";
import image3 from "../../../assets/images/Homepage Images/Schools/SCOPE.jpg";
import image4 from "../../../assets/images/Homepage Images/Schools/VSL.jpg";
import image5 from "../../../assets/images/Homepage Images/Schools/SMEC.jpg";
import image6 from "../../../assets/images/Homepage Images/Schools/VISH.jpg";
import image7 from "../../../assets/images/Homepage Images/Schools/VSB.jpg";

import { BsArrowRightShort } from "react-icons/bs";
const fetchdata = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const response = await fetch(`${config.api}/api/announcements/`, reqOptions);
  const data = await response.json();
  return data;
};

const OurSchools = async () => {
  // const data = await fetchdata();

  // console.log( data.data)
  // console.log(typeof data)

  return (
    <>
      <div className="flex-col mb-[400px]">
        <div className="w-full bg-[#E6CFCF] h-[450px] pl-[108px] pr-[114px]  ">
          <h1 className="font-Emilio font-bold text-primary text-[48px] pt-[40px]">
            Our Schools
          </h1>
          <h1 className="font-Montserrat text-[18px] text-secondary w-full">
            At VIT-AP the entire teaching-learning process is concentrated
            around six schools. A research center is also part of the schools,
            that encourages students to participate in exciting research
            projects amongst these departments.
          </h1>
          <div class="grid grid-cols-4 justify-center mt-5 items-center">
            <div className="w-[270px] h-[290px] ml-[46px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image1}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[190px] text-white  px-[14px] font-semibold flex-col ">
                <h1 className="leading-[23px] font-Emilio text-[20px]">
                  School of Advanced Sciences
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[270px] h-[290px] ml-[46px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image2}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[190px] text-white  px-[14px] font-semibold flex-col">
                <h1 className="leading-[23px] font-Emilio text-[20px] ">
                  School of Electical and Electronics Engineering
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[270px] h-[290px] ml-[46px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image3}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[185px] text-white  px-[14px] font-semibold flex-col ">
                <h1 className="leading-[26px] font-Emilio text-[20px]">
                  School of Computer Science and Engineering
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[270px] h-[290px] ml-[46px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image4}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[200px] text-white  px-[14px] font-semibold flex flex-col ">
                <h1 className="leading-[26px] font-Emilio text-[20px]">
                  VIT School of Law
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>

            <div className="w-[270px] h-[290px] ml-[150px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image5}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[190px] text-white  px-[14px] font-semibold flex-col">
                <h1 className="leading-[23px] font-Emilio text-[20px]">
                  School of Mechanical Engineering
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[270px] h-[290px] ml-[150px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image6}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[190px] text-white f px-[14px] font-semibold flex-col">
                <h1 className="leading-[26px] font-Emilio text-[20px]">
                  School of Social Science and Humanities
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[270px] h-[290px] ml-[150px] relative group">
              <div className="absolute w-[270px] h-[270px] bg-black"></div>
              <Image
                src={image7}
                className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
                width={270}
                height={290}
              />
              <div className="absolute top-[200px] text-white px-[14px] font-semibold flex-col ">
                <h1 className="leading-[26px] text-[20px] font-Emilio">
                  School of Business
                </h1>
                <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
                  Explore Now{" "}
                  <span>
                    <BsArrowRightShort size={23} />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSchools;
