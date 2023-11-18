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

const data = {
  image1: {
    src: "../../../assets/images/Homepage Images/Schools/SAS.jpg",
    text: "School of Advanced Sciences",
  },
  image2: {
    src: "../../../assets/images/Homepage Images/Schools/SENSE.jpg",
    text: "School of Electronics Engineering",
  },
  image3: {
    src: "../../../assets/images/Homepage Images/Schools/SCOPE.jpg",
    text: "School of Computer Science and Engineering",
  },
  image4: {
    src: "../../../assets/images/Homepage Images/Schools/VSL.jpg",
    text: "School of Law",
  },
  image5: {
    src: "../../../assets/images/Homepage Images/Schools/SMEC.jpg",
    text: "School of Mechanical Engineering",
  },
  image6: {
    src: "../../../assets/images/Homepage Images/Schools/VISH.jpg",
    text: "School of Social Science and Humanities",
  },
  image7: {
    src: "../../../assets/images/Homepage Images/Schools/VSB.jpg",
    text: "School of Business",
  },
};

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
      <div className="flex-col mb-[500px] ">
        <div className="w-full  lx:bg-[#E6CFCF] ls:h-[450px] sm:px-[50px] ls:pl-[108px] ls:pr-[114px]  ">
          <h1 className="font-Emilio font-bold text-primary sm:text-[30px] ls:text-[48px] ls:pt-[40px]">
            Our Schools
          </h1>
          <h1 className="font-Montserrat text-[18px] text-secondary w-full lx:block sm:hidden">
            At VIT-AP the entire teaching-learning process is concentrated
            around seven schools for preparing students to make meaningful
            contributions to society as engaged citizens and leaders in a
            complex world.
          </h1>
          <div className="lx:hidden sm:block">
            <div className="bg-[#E6CFCF] w-[106px] h-[150px] mt-[30px] relative">
              <div className="w-[106px] h-[80px] absolute top-[35px] left-[50px]">
                <Image src={data.image1.src} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
          <div class="mx-auto flex justify-center mt-[50px]">
            <div class="sm:hidden ls:grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-5  flex justify-center">
              <div class="flex justify-center ">
                <Card src={data.image1.src} text={data.image1.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image2.src} text={data.image2.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image3.src} text={data.image3.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image4.src} text={data.image4.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image5.src} text={data.image5.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image6.src} text={data.image6.text} />
              </div>
              <div class="flex justify-center ">
                <Card src={data.image7.src} text={data.image7.text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSchools;
