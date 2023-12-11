"use client";
import Image from "next/image";
import aboutimage from "../../../assets/images/Homepage Images/about.png";
import config from "@/config";
import axios from "axios";
import Announcement from "./Announcement.js";
import { Content } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

// const announcementsContent = [
//   {date: "13.09.2023", title: "VITREE January 2024 - Apply Now" , link: "https://vitap.ac.in/vitree-january-2024/"},
//   {date: "13.09.2023", title: "VITREE January 2024 - Apply Now" , link: "https://vitap.ac.in/vitree-january-2024/"},
//   {date: "13.09.2023", title: "VITREE January 2024 - Apply Now" , link: "https://vitap.ac.in/vitree-january-2024/"},
//   {date: "13.09.2023", title: "VITREE January 2024 - Apply Now" , link: "https://vitap.ac.in/vitree-january-2024/"},
//   {date: "13.09.2023", title: "VITREE January 2024 - Apply Now" , link: "https://vitap.ac.in/vitree-january-2024/"},

// ]

// const fetchannouncements = async () => {
//   try {
//     const response = await axios.get(`${config.api}/api/announcements`, {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow the error for handling at a higher level
//   }
// };

// const fetchaboutImage = async () => {
//   const response = await axios.get(
//     `${config.api}/api/aboutus-image?populate=*`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     }
//   );

//   return response.data;
// };
const About = () => {
  // const announcementdata = await fetchannouncements();
  // const announcements = announcementdata.data;
  // console.log(announcements);

  // const data1 = await fetchaboutImage();
  // const aboutimage = data1.data.attributes.image.data.attributes.url;
  // console.log(aboutimage);

  return (
    <>

      <div className="lx:px-[108px] sm:px-[40px] mb-[100px] ">
        <div className="md:flex  ls:pt-[70px] sm:pt-[50px]">
          <div className="md:w-[50%]  sm:text-center md:text-left sm:flex-col sm:justify-center md:justify-normal ">

            <h1 className="font-Emilio ls:text-[48px] sm:text-[40px] text-primary font-bold pb-[9px]">
              About VIT-AP
            </h1>
            <div className="sm:justify-center md:justify-normal sm:hidden ls:flex w-full object-cover">
              {/* <Image
                src={`${config.api}${aboutimage}`}
                width={600}
                height={100}
              /> */}
              {/* <Image
                alt="A descriptive text here"
                src={aboutimage}
                width={600}
                height={100}; web-share

              /> */}
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
                <Link href="/announcements"><div className="Rectangle91 w-[32px] h-[30px] left-[80px] top-[-3px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[120px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div></Link>
                View More
                <h1 className="mr-2 text-[#5C0E14] font-bold"></h1>
                <hr className=" h-[4px] w-[36px] font-bold bg-[#5C0E14] max-lx:w-[28px]" />
              </div>
            </motion.div>

            <h1 className="text-[24px] text-primary font-Montserrant font-bold  md:text-left">
              ANNOUNCEMENTS
            </h1>
            <div className="flex-col space-y-[20px] mt-[20px] ">
              <Announcement
                date="1st  Nov,  23"
                title="VITEEE 2024 - Apply Now"
                link="https://vitap.ac.in/viteee-2024-b-tech-admissions/"
              />
              <Announcement
                date="17th September, 23"
                title="3rd Annual Convocation "
                link="https://vitap.ac.in/3rd-annual-convocation-2023/"
              />
              <Announcement
                date="2nd September, 23"
                title="360 Campus Tour"
                link="https://campustour.vitap.ac.in/index04.html"
              />
              <Announcement
                date="10th May, 23"
                title="New Curriculum"
                link="https://vitap.ac.in/new-curriculum-ay-2021-2022/"
              />
              <Announcement
                date="28th March, 23"
                title="Academic Bank of Credits"
                link="https://vitap.ac.in/new-curriculum-ay-2021-2022/"
              />

              {/* {announcements.map((announcement) => {
                return (
                  <>
                    <h1 className="font-semibold text-[14px] font-Montserrant ">
                      {announcement.attributes.date}
                    </h1>
                    <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                      <a href={announcement.attributes.link} target="#">
                        {announcement.attributes.title}
                      </a>
                    </h1>
                    <hr
                      style={{
                        background: "#1B1C1E38",
                        border: 0,
                        height: "1px",
                      }}
                    />
                  </>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
