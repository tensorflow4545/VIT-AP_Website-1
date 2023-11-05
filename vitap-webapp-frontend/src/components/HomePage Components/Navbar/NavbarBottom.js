"use client";
import Image from "next/image";
import image0 from "../../../assets/images/Homepage Images/navbar-images/0.png";
import image1 from "../../../assets/images/Homepage Images/navbar-images/1.png";
import image2 from "../../../assets/images/Homepage Images/navbar-images/2.png";
import image3 from "../../../assets/images/Homepage Images/navbar-images/3.png";
import image4 from "../../../assets/images/Homepage Images/navbar-images/4.png";
import image5 from "../../../assets/images/Homepage Images/navbar-images/5.png";
import image6 from "../../../assets/images/Homepage Images/navbar-images/6.png";

import "./navbar.css";
import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
const NavbarBottom = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 180) {
          setNavbar(true);
          setLogo(true);
        } else {
          setNavbar(false);
          setLogo(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);

  const [activeNavItem, setActiveNavItem] = useState(null);
  const handleDropdownEnter = (navItem) => {
    setActiveNavItem(navItem);
  };

  const handleDropdownLeave = () => {
    setActiveNavItem(null);
  };

  const [Programmes, setProgrammes] = useState([]);
  const [Programme, setProgramme] = useState("Undergraduate");
  const [underline, setunderline] = useState("custom-underline decoration-[#650010] underline-offset-8 decoration-[6px] ");
  const [research, setResearch] = useState(null);

  useEffect(() => {
    if (Programme === 'Undergraduate') {
      setProgrammes([
        'Undergraduate',
        'Dual Degree',
        'Integrated',
        'Postgraduate',
        'Ph. D',
      ]);
    }
  }, [Programme]);

  useEffect(() => {
    if (underline === 'custom-underline decoration-[#650010] underline-offset-8 decoration-[6px] ') {
      setProgramme("Undergraduate");
    }
  }, [underline]);
  

  return (
    <>
      <div className="sticky top-0 z-30 sm:hidden md:block ">
        {/* {"bg-opacity-50 "} */}
        {/* Increased z-index to 30 */}
        <div
          className={`bg-gray-900 ${navbar ? "navbar active" : "navbar"
            }  w-full h-[74px] shadow-xl absolute md:flex font-Montserrat font-medium text-white text-[20px]`}
        >
          <ul className="flex flex-row  items-center pl-[33px] w-full justify-between pr-[76px]">
            <li className="mr-[100px]">
              <a>
                <Image alt="A descriptive text here" src={logo} className={logo ? "logo active" : "logo"} />
              </a>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "about" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline">About</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[430px] top-[45px]"></span>

                    <ol className="flex-row font-[400] text-[20px] h-full pt-[82px] pl-[110px] space-y-[29px]">
                      <li className=" custom-list-item   w-[fit-content]">
                        <h1>Vision & Mission</h1>
                      </li>

                      <li className="absolute left-[600px]  top-[20px]  ">
                        <Image alt="A descriptive text here" src={image0} />
                      </li>

                      <li className="peer/leadership custom-list-item w-[fit-content]">
                        <h1 className="w-full h-full">Leadership</h1>
                      </li>

                      <li className="peer/Governance custom-list-item w-[fit-content]">
                        Governance
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image alt="A descriptive text here" src={image2} />
                      </li>

                      <li className="peer/contactus custom-list-item w-[fit-content]">
                        FAQ
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image alt="A descriptive text here" src={image3} />
                      </li>

                      <li className="peer/faq custom-list-item w-[fit-content]">
                        Contact us
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
                        <Image alt="A descriptive text here" src={image4} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/faq:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "admissions" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("admissions")}
              onMouseLeave={() => {
                handleDropdownLeave();
                setProgramme("Undergraduate");
              }}
            >
              <a className="custom-underline ">Admissions</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px] flex-row flex">

                  <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                    <li
                      className={` hover:cursor-pointer  w-[fit-content] ${underline}`}
                      
                      onMouseEnter={() => {
                        setProgrammes([
                          "Undergraduate",
                          "Dual Degree",
                          "Integrated",
                          "Postgraduate",
                          "Ph. D",
                        ]);
                        setunderline(
                          "custom-underline decoration-[#650010] underline-offset-8 decoration-[6px] "
                        );
                      }}
                    >
                      Programmes
                    </li>
                    <li className="peer/ap custom-list-item w-[fit-content]"  onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>Application Process</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/ap:visible">
                    <Image alt="A descriptive text here h-full" src={image0} />
                    </li>
                    <li className="peer/fas custom-list-item w-[fit-content]" onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>Fees & Scholarship</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/fas:visible">
                    <Image alt="A descriptive text here" src={image1} />
                    </li>
                    <li className="peer/fas custom-list-item w-[fit-content]" onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>STARS</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/fas:visible">
                    <Image alt="A descriptive text here" src={image2} />
                    </li>
                    <li className="peer/fas custom-list-item w-[fit-content]" onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>Affidivit</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/fas:visible">
                    <Image alt="A descriptive text here" src={image3} />
                    </li>
                    <li className="peer/fas custom-list-item w-[fit-content]" onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>Videos</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/fas:visible">
                    <Image alt="A descriptive text here" src={image4} />
                    </li>
                    <li className="peer/fas custom-list-item w-[fit-content]" onMouseEnter={() => {setProgrammes([]); setProgramme(null); setunderline("")}} onMouseLeave={()=> {setProgramme("Undergraduate")}}>Enquiry</li>
                    <li className="absolute left-[600px] invisible top-[20px] peer-hover/fas:visible">
                    <Image alt="A descriptive text here" src={image5} />
                    </li>
                  </ol>
                  <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[400px] top-[45px]"></span>
                  
                  <ol
                    className={` ${""}   flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px] absolute left-[350px] `}
                  >
                    {Programmes.map((Program, index) => {
                      return <li key={index} className={`custom-list-item w-[fit-content] ${Programme === Program ? "custom-underline decoration-[#650010] underline-offset-8 decoration-[6px]" : ""
                        }`} onMouseEnter={() => { setProgramme(Program) }}> {Program} </li>;
                    })}
                  </ol>
                  {Programme === "Undergraduate" || Programme === "Dual Degree" || Programme === "Integrated" || Programme === "Postgraduate" || Programme === "Ph. D" ? (
                  <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[750px] top-[45px]"></span>):null}
                  {Programme === "Undergraduate" ? (
                    <div className="flex">
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[550px] space-y-[29px]">
                        <lh className="font-bold underline decoration-[#000000] underline-offset-8 decoration-[6px] text-[20px]">Engineering</lh>
                        <li className="custom-list-item w-[fit-content]">B.Tech CSE</li>
                        <li className="custom-list-item w-[fit-content]">B.Tech CSBS</li>
                        <li className="custom-list-item w-[fit-content]">B.Tech ECE</li>
                        <li className="custom-list-item w-[fit-content]">B.Tech Mechanical</li>
                      </ol>
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[110px] space-y-[29px]">
                        <lh className="font-bold underline decoration-[#000000] underline-offset-8 decoration-[6px] text-[20px]">Management</lh>
                        <li className="custom-list-item w-[fit-content]">BBA</li>
                        <li className="custom-list-item w-[fit-content]">B.Com</li>
                      </ol>
                    </div>
                  ) : Programme === "Dual Degree" ? (
                    <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[550px] space-y-[29px]">
                      <li className="custom-list-item w-[fit-content]">BA - MA</li>
                      <li className="custom-list-item w-[fit-content]">B.Sc - M.Sc</li>
                    </ol>) : Programme === "Integrated" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[550px] space-y-[29px]">
                        <li className="custom-list-item w-[fit-content]">M. Tech CSE in Collaboration with Virtusa</li>
                        <li className="custom-list-item w-[fit-content]">M. Tech Software Engineering</li>
                        <li className="custom-list-item w-[fit-content]">BA. LL.B (Hons.)</li>
                        <li className="custom-list-item w-[fit-content]">BBA. LL.B (Hons.)</li>
                      </ol>
                    ) : Programme === "Postgraduate" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[550px] space-y-[29px]">
                        <li className="custom-list-item w-[fit-content]">M. Tech VLSI</li>
                        <li className="custom-list-item w-[fit-content]">M.Sc. Data Science</li>
                        <li className="custom-list-item w-[fit-content]">M. Sc. Physics</li>
                        <li className="custom-list-item w-[fit-content]">M. Sc. Chemistry</li>
                      </ol>
                    ) : Programme === "Ph. D" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[550px] space-y-[29px]">
                        <li className="custom-list-item w-[fit-content]">School of Computer Science and Engineering</li>
                        <li className="custom-list-item w-[fit-content]">School of Electronics Engineering</li>
                        <li className="custom-list-item w-[fit-content]">School of Mechanical Engineering</li>
                        <li className="custom-list-item w-[fit-content]">School of Advanced Sciences</li>
                        <li className="custom-list-item w-[fit-content]">School of Social Science and Humanities</li>
                        <li className="custom-list-item w-[fit-content]">School of Law</li>
                        <li className="custom-list-item w-[fit-content]">School of Business</li>
                      </ol>
                    ) : null}
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Academics" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Academics")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Academics</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px]">
                  <div className="w-full h-full flex flex-row ">
                    <ol className="flex-row font-[400] text-[20px]  pt-[61px] pl-[83px] space-y-[29px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Schools
                      </li>
                      <li className="custom-list-item w-[fit-content]">School of Computer Science and Engineering (SCOPE)</li>
                      <li className="custom-list-item w-[fit-content]">School of Electronics Engineering (SENSE)</li>
                      <li className="custom-list-item w-[fit-content]">School of Mechanical Engineering (SMEC)</li>
                      <li className="custom-list-item w-[fit-content]">School of Advanced Sciences (SAS)</li>
                      <li className="custom-list-item w-[fit-content]">School of Social Sciences and Humanities (VISH)</li>
                      <li className="custom-list-item w-[fit-content]">School of Law (VSL)</li>
                      <li className="custom-list-item w-[fit-content]">School of Business (VSB)</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute left-[700px] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[61px] pl-[200px] space-y-[19px]">
                      <li className="custom-list-item w-[fit-content]">Academic Regulations</li>
                      <li className="custom-list-item w-[fit-content]">Academic Council</li>
                      <li className="custom-list-item w-[fit-content]">Faculty</li>
                      <li className="custom-list-item w-[fit-content]">Academic Calender</li>
                      <li className="custom-list-item w-[fit-content]">International Collabration</li>
                      <li className="custom-list-item w-[fit-content]">Engineering Clinic </li>
                      <li className="custom-list-item w-[fit-content]">Value Added Courses</li>
                      <li className="custom-list-item w-[fit-content]">Centre of Examination</li>
                      <li className="custom-list-item w-[fit-content]">Fully Flexible Credit System (FFCS)</li>
                      <li className="custom-list-item w-[fit-content]">Design your own degree (DYOD) </li>
                    </ol>

                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Career Development Center"
                ? "active-nav-item"
                : ""
                }`}
              onMouseEnter={() =>
                handleDropdownEnter("Career Development Center")
              }
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Career Development Center</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[430px] top-[45px]"></span>

                    <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                      <li className=" custom-list-item   w-[100px]">
                        Overview
                      </li>

                      <li className="absolute left-[600px]  top-[40px]  ">
                        <Image alt="A descriptive text here" src={image0} />
                      </li>

                      <li className="peer/leadership custom-list-item w-[fit-content]">
                        Super Dream Offers
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/leadership:visible">
                        <Image alt="A descriptive text here" src={image2} />
                      </li>

                      <li className="peer/Governance custom-list-item w-[fit-content]">
                        Dream offers
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/Governance:visible">
                        <Image alt="A descriptive text here" src={image3} />
                      </li>

                      <li className="peer/contactus custom-list-item w-[fit-content]">
                        Internships
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/contactus:visible">
                        <Image alt="A descriptive text here" src={image4} />
                      </li>

                      <li className="peer/faq custom-list-item w-[fit-content]">
                        Industrial Collaboration
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/faq:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>

                      <li className="peer/cdc custom-list-item w-[fit-content]">
                        CDC Office
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/cdc:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>

                      <li className="peer/Statistics custom-list-item w-[fit-content]">
                        Statistics
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/Statistics:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Campus Life" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Campus Life")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Campus Life</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px]">
                  <div className="w-full h-full flex flex-row ">
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[110px] space-y-[29px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Life @ VIT-AP
                      </li>
                      <li className="custom-list-item w-[fit-content]">Clubs & Chapters</li>
                      <li className="custom-list-item w-[fit-content]">Celebrations</li>
                      <li className="custom-list-item w-[fit-content]">Cafeteria</li>
                      <li className="custom-list-item w-[fit-content]">Sports</li>
                      <li className="custom-list-item w-[fit-content]">Gallery</li>
                      <li className="custom-list-item w-[fit-content]">360 Campus Tour</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute left-[400px] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[200px] space-y-[15px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Facilities
                      </li>
                      <li className="custom-list-item w-[fit-content]">Infrastructure</li>
                      <li className="custom-list-item w-[fit-content]">Hostels</li>
                      <li className="custom-list-item w-[fit-content]">Libraries</li>
                      <li className="custom-list-item w-[fit-content]">Labs</li>
                      <li className="custom-list-item w-[fit-content]">Bank and ATM</li>
                      <li className="custom-list-item w-[fit-content]">Transport</li>
                      <li className="custom-list-item w-[fit-content]">Health Center</li>
                      <li className="custom-list-item w-[fit-content]">Guest House</li>
                      <li className="custom-list-item w-[fit-content]">Facilities to employees</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute left-[800px] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[200px] space-y-[15px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Committees
                      </li>
                      <li className="custom-list-item w-[fit-content]">V-CHANCE</li>
                      <li className="custom-list-item w-[fit-content]">Anti - Ragging Commitee</li>
                      <li className="custom-list-item w-[fit-content]">Internal Complaints committee</li>
                      <li className="custom-list-item w-[fit-content]">University disciplinary committee</li>
                      <li className="custom-list-item w-[fit-content]">Grievances Redressal Commitee</li>

                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Research" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Research")}
              onMouseLeave={() => {
                handleDropdownLeave();
                setResearch("ar");
              }}
            >
              <a className="custom-underline">Research</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrat h-full relative top-[20px] flex-row flex">

                  <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                    <li className="custom-list-item w-[fit-content]" onMouseEnter={()=>{setResearch("ar")}}>Academic Reasearch</li>
                    
                    <li className="custom-list-item w-[fit-content]" onMouseEnter={()=>{setResearch("ure")}}>URE Project</li>
                    
                    <li className={`custom-list-item w-[fit-content] ${research === "coe" ? "custom-underline decoration-[#650010] underline-offset-8 decoration-[6px]" : ""
                      }`} onMouseEnter={() => { setResearch("coe") }}>Center of Excellence</li>
                    <li className={`custom-list-item w-[fit-content] ${research === "iiec" ? "custom-underline decoration-[#650010] underline-offset-8 decoration-[6px]" : ""
                      }`} onMouseEnter={() => { setResearch("iiec") }}>IIEC</li>
                    <li className="custom-list-item w-[fit-content]" onMouseEnter={()=>{setResearch("vitbif")}}>VITBIF</li>
                    {research === "ar" ? (<li className="absolute left-[600px] top-[20px] visible">
                    <Image alt="A descriptive text here" src={image0} />
                    </li>): research === "ure" ? (<li className="absolute left-[600px] top-[20px] visible">
                    <Image alt="A descriptive text here" src={image1} />
                    </li>): research === "vitbif" ? (<li className="absolute left-[600px] top-[20px] visible">
                    <Image alt="A descriptive text here" src={image2} />
                    </li>):null}
                  </ol>
                  <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[400px] top-[45px]"></span>
                  {research === "iiec" ? (
                    <div className="flex">
                      <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px] absolute left-[350px]">
                        <li className="custom-list-item w-[fit-content]">V-Launch</li>
                        <li className="custom-list-item w-[fit-content]">RGEMS</li>
                        <li className="custom-list-item w-[fit-content]">SpoRIC</li>
                        <li className="custom-list-item w-[fit-content]">IPR Cell</li>
                        <li className="custom-list-item w-[fit-content]">Incubatees</li>
                        <li className="custom-list-item w-[fit-content]">E- magazine</li>
                      </ol> </div>) : research === "coe" ? (
                        <div className="flex">
                          <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px] absolute left-[350px]">
                            <li className="custom-list-item w-[fit-content]">AI & Robotics</li>
                            <li className="custom-list-item w-[fit-content]">Cyber-Security</li>
                            <li className="custom-list-item w-[fit-content]">Internet of Things</li>
                            <li className="custom-list-item w-[fit-content]">Blockchain</li>
                          </ol></div>
                      ) : null}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="sticky top-0 z-30 ls:block sm:hidden">
        <div className="bg-gray-900 shadow-sm w-full h-[85px] bg-opacity-50 absolute sm:flex  text-white text-[16px]">
          <ul className="flex flex-row space-x-[31px] items-center pl-[33px] w-full justify-between pr-[76px]">
            <li>
              <a>
                <Image alt="A descriptive text here" src={logo} />
              </a>
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <RxHamburgerMenu size={30} />
            </li>
            <li><a>About</a></li>
            <li><a>Admissions</a></li>
            <li><a>Academics</a></li>
            <li><a>Career Development Center</a></li>
            <li><a>Facilities</a></li>
            <li><a>Campus Life</a></li>
            <li><a>Research</a></li>
          </ul>
        </div>
      </div> */}

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default NavbarBottom;
