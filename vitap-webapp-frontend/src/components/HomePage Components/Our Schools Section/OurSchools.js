import Card from "./Card.js";
import config from "@/config";
import Image from "next/image";

import image1 from "../../../assets/images/Homepage Images/Schools/School of Computer Science and Engineering (SCOPE).jpg";
import image2 from "../../../assets/images/Homepage Images/Schools/School of Electronics Engineering (SENSE).jpg";
import image3 from "../../../assets/images/Homepage Images/Schools/School of Advanced Science (SAS).jpg";
import image4 from "../../../assets/images/Homepage Images/Schools/School of Business (VSB).jpg";
import image5 from "../../../assets/images/Homepage Images/Schools/School of Law (VSL).jpg";
import image6 from "../../../assets/images/Homepage Images/Schools/School of Mechanical Engineering (SMEC).jpg";
import image7 from "../../../assets/images/Homepage Images/Schools/School of Social Sciences and Humanities (VISH).jpg";


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
      <div className="flex-col mb-[130px]">
        <div className="w-full bg-[#E6CFCF] h-[450px] pl-[108px] pr-[114px]  ">
          <h1 className="font-Emilo font-bold text-primary text-[48px] pt-[40px]">
            Our Schools
          </h1>
          <h1 className="font-Montserrant text-[18px] text-secondary w-full">
            At VIT-AP the entire teaching-learning process is concentrated
            around six schools. A research center is also part of the schools,
            that encourages students to participate in exciting research
            projects amongst these departments.
          </h1>
          <div className="relative top-[36px] flex flex-col">
            <div className="flex-row flex ">
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image1}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image2}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image3}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image4}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              
            </div>

            <div className="flex-row flex mt-[220px] pl-[161px]">
            <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image5}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image6}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
              <>
                <div className="w-[230px] h-[190px] ml-[46px] relative">
                  <Image
                    src={image7}
                    className="opacity-90"
                  />
                  {/* <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">School of Computer science</h1>
        </div> */}
                </div>
              </>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[472px] pl-[108px] pr-[114px]"></div>
      </div>
    </>
  );
};

export default OurSchools;
