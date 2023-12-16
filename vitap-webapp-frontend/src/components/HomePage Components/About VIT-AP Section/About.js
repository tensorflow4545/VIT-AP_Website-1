"use client";
import Image from "next/image";
import aboutimage from "../../../assets/images/Homepage Images/about.png";
import config from "@/config";
import axios from "axios";
import Announcement from "./Announcement.js";
import { Content } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
  const [announcements, setAnouncements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page-announcements-sections`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          const extractedAttributes = response.data.data.map(item => item.attributes);
          setAnouncements(extractedAttributes);
        } else {
          console.error('The "data" property in the API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <div className="lx:px-[108px] sm:px-[40px] mb-[100px] ">
        <div className="md:flex  ls:pt-[70px] sm:pt-[50px]">
          <div className="md:w-[50%]  sm:text-center md:text-left sm:flex-col sm:justify-center md:justify-normal ">

            <h1 className="font-Emilio ls:text-[48px] sm:text-[40px] text-primary font-bold pb-[9px]">
              About VIT-AP
            </h1>
            <div className="sm:justify-center md:justify-normal sm:hidden ls:flex w-full object-cover">
              <div className="ls:w-[600px] ls:h-[335px] sm:h-[200px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Bx3tAXPJThM?si=3j6CacZA7uFGU6zb"
                  title="About VIT-AP"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-inpicture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

            </div>
            <div className="w-[95%]">
              <h1 className="font-Montserrant font-[680px] text-justify text-[18px] text-left mt-[35px] leading-7">
                With a history of 37 years of innovation in educational and
                research domain, VIT has been a forerunner in delivering quality
                education. Consistently ranked among the top educational
                institutes in the country, the VIT group of institutions have
                had a proud tradition of pursuing knowledge and excellence. In
                keeping with this tradition, the leadership at VIT-AP resonates
                a dynamic blend of academic initiative and industry partnership
                with a vision of creating one of the finest academic
                destinations in the world.
              </h1>
            </div>
          </div>

          {/* Anouncements section  */}

          <div className="md:w-[50%]  sm:w-[100%] md:pl-[67px]  md:mt-[15px] ls:mt-[50px] sm:mt-[50px] md:block ls:flex-col ls:justify-center  relative">

            <motion.div
              initial={{ left: "[80px]", width: "[32px]" }}
              whileHover={{ left: "[-20px]", width: "[125px]" }}
              className="top-[-7px] z-999  right-5 absolute hover:cursor-pointer flex items-center"
            >
              <div className="flex flex-row items-center justify-center relative  transition-all duration-300 ease-in group">
                <Link href="/announcements"><div className="Rectangle91 w-[32px] h-[30px] left-[45px] top-[-3px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[85px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div></Link>
                <div className="font-bold">See All</div>
                <h1 className="mr-2 text-[#5C0E14] font-bold"></h1>
                <hr className=" h-[4px] w-[36px] font-bold bg-[#5C0E14] max-lx:w-[28px]" />
              </div>
            </motion.div>

            <h1 className="text-[24px] text-primary font-Montserrant font-bold  md:text-left">
              ANNOUNCEMENTS
            </h1>
            <div className="flex-col space-y-[20px] mt-[20px] ">

              {announcements.map((attributes, index) => {
                return (
                  <Announcement date={attributes.Date} title={attributes.Title} link={attributes.Link} />
                )
              }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
