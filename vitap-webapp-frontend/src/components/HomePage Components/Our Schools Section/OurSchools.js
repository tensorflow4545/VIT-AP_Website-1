"use client";
import Card from "./Card.js";
import config from "@/config";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

import Schools from "@/constants/index.js";
import image1 from "../../../assets/images/Homepage Images/Schools/SAS.jpg";
import image2 from "../../../assets/images/Homepage Images/Schools/SENSE.jpg";
import image3 from "../../../assets/images/Homepage Images/Schools/SCOPE.jpg";
import image4 from "../../../assets/images/Homepage Images/Schools/VSL.jpg";
import image5 from "../../../assets/images/Homepage Images/Schools/SMEC.jpg";
import image6 from "../../../assets/images/Homepage Images/Schools/VISH.jpg";
import image7 from "../../../assets/images/Homepage Images/Schools/VSB.jpg";

import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link.js";
import MobileCard from "./MobileCard.js";

const datarow1 = [
  {
    id: 1,
    title: "School of Advanced Sciences",
    href: "https://vitap.ac.in",
    imgsrc: image1,
  },
  {
    id: 2,
    title: "School of Electronics Engineering",
    href: "https://vitap.ac.in",
    imgsrc: image2,
  },
  {
    id: 3,
    title: "School of Computer Science and Engineering",
    href: "https://vitap.ac.in",
    imgsrc: image3,
  },
  {
    id: 4,
    title: "School of Law",
    href: "https://vitap.ac.in",
    imgsrc: image4,
  },
];

const datarow2 = [
  {
    id: 1,
    title: "School of Mechanical Engineering",
    href: "https://vitap.ac.in",
    imgsrc: image5,
  },
  {
    id: 2,
    title: "School of Social Sciences and Humanities",
    href: "https://vitap.ac.in",
    imgsrc: image6,
  },
  {
    id: 3,
    title: "School of Business",
    href: "https://vitap.ac.in",
    imgsrc: image7,
  },
];

const OurSchools = () => {
  return (
    <>
      <div className="flex-col mb-[400px]">
        <div className="w-full xl:bg-[#E6CFCF] h-[450px] xl:px-[80px] md:px-[40px] px-5 ">
          <h1 className="font-Emilio font-bold text-primary text-[35px] md:text-[48px] pt-[20px] md:pt-[40px] text-left ">
            Our Schools
          </h1>
          <h1 className="font-Montserrat text-[18px] text-secondary w-full md:text-left text-center hidden md:block">
            At VIT-AP the entire teaching-learning process is concentrated
            around seven schools for preparing students to make meaningful
            contributions to society as engaged citizens and leaders in a
            complex world.
          </h1>

          <div className="lg:flex lg:flex-col ">
            <div class="hidden xl:flex justify-center mt-5 space-x-10">
              {datarow1.map((item) => {
                return (
                  <>
                    <Card
                      imgsrc={item.imgsrc}
                      href={item.href}
                      title={item.title}
                    />
                  </>
                );
              })}
            </div>

            <div className="hidden xl:flex justify-center mt-5 space-x-8">
              {datarow2.map((item) => {
                return (
                  <>
                    <Card
                      imgsrc={item.imgsrc}
                      href={item.href}
                      title={item.title}
                    />
                  </>
                );
              })}
            </div>
          </div>

          <Carousel className="xl:hidden mt-5  md:px-[60px]  overflow-y-hidden w-full">
            {datarow1.map((item) => (
              <MobileCard
                key={item.id}
                imgsrc={item.imgsrc}
                href={item.href}
                title={item.title}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OurSchools;
