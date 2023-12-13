"use client";
import style from "./programoffere.module.css";
import react, { useState } from "react";
const programoffered = () => {

  const programmesOffered = [
    {
      id: 0,
      head: "B.Tech. CSE",
      title: "B.Tech. (Computer Science and Engineering).",
      field: "undergraduate"
    },
    {
      id: 1,
      head: "B.Tech. CSBS",
      title: "B.Tech. in Computer Science and Engineering with specializations in Business System (In collaboration with TCS).",
      field: "undergraduate"
    },
    // {
    //   id: 2,
    //   head: "M.Tech. CSE",
    //   title:"Five year integrated programme- M.Tech. (Software Engineering).",
    //   field: "postgraduate"
    // },
    // {
    //   id: 3,
    //   head: "M.Tech. CSE",
    //   title:"Five year integrated programme- M.Tech. CSE in Collaboration with Virtusa",
    //   field: "postgraduate"
    // },
    {
      id: 4,
      head: "CSE",
      title: "Computer Science and Engineering",
      field: "doctoral"
    },
    // {
    //   id: 5,
    //   head: "B.Tech CSE",
    //   title:
    //     "B.Tech in Computer Science and Engineering Specialization in Network and Security",
    //   field: "doctoral"
    // },
    // {
    //   id: 6,
    //   head: "B.Tech CSE",
    //   title:
    //     "B.Tech in Computer Science and Engineering Specialization in Network and Security",
    //   field: "doctoral"
    // },
    {
      id: 7,
      head: "M.Tech. CSE",
      title:
        "M.Tech. Computer Science and Engineering in Collaboration with Virtusa",
      field: "integrated"
    },
    {
      id: 8,
      head: "M.Tech. SE",
      title: "M.Tech. Software Engineering",
      field: "integrated"
    },
    // {
    //   id: 9,
    //   head: "B.Tech CSE",
    //   title:
    //     "B.Tech in Computer Science and Engineering Specialization in Network and Security",
    //   field: "integrated"
    // },
  ];
  const [active, setActive] = useState("undergraduate");
  return (
    <div className="h-max w-full">
      <div class={` ${style.program}`}>
        <p className="text-[#FDFEFF] font-Emilio text-[20px] font-semibold leading-[27px]">Explore our programs</p>
        <p className="text-[#FDFEFF] font-Emilio text-[48px] font-bold capitaliza">Programs Offered</p>
        <p className="font-Montserrat text-[18px] font-normal leading-[27px] pb-[69px] text-white text-opacity-80">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>

        <div class="flex flex-row pb-20">

          <div class={`basis-1/4`}><button class={` ${active == "undergraduate" ? "bg-primary" : "bg-white"} ${active == "undergraduate" ? "text-white" : "text-dark"} w-[250px] h-[70px] flex-shrink-0 font-Emilio text-[20px] font-semibold capitalize `} onClick={() => setActive("undergraduate")}>Undergraduate</button></div>
          <div class={`basis-1/4`}><button class={` ${active == "postgraduate" ? "bg-primary" : "bg-white"} ${active == "postgraduate" ? "text-white" : "text-dark"} w-[250px] h-[70px] flex-shrink-0 font-Emilio text-[20px] font-semibold capitalize`} onClick={() => setActive("postgraduate")}>Postgraduate</button></div>
          <div class={`basis-1/4`}><button class={` ${active == "integrated" ? "bg-primary" : "bg-white"} ${active == "integrated" ? "text-white" : "text-dark"} w-[250px] h-[70px] flex-shrink-0 font-Emilio text-[20px] font-semibold capitalize`} onClick={() => setActive("integrated")}>Integrated</button></div>
          <div class={`basis-1/4`}><button class={` ${active == "doctoral" ? "bg-primary" : "bg-white"} ${active == "doctoral" ? "text-white" : "text-dark"} w-[250px] h-[70px] flex-shrink-0 font-Emilio text-[20px] font-semibold capitalize`} onClick={() => setActive("doctoral")}>Doctoral</button></div>

        </div>
        <div className="shadow-lg w-[100%] h-[400px] bg-white">
          <div class="pt-10">
            {programmesOffered.map((program) => {
              if (active === program.field) {

                return (
                  <div className="relative group transition duration-1000">
                    <div className="relative pb-3 pl-[78px] w-[67%] group-hover:left-[20px] transition duration-1000">
                      <div className="pb-3 text-black font-Emilio text-[20px] font-semibold group-hover:text-primary">{program.head}</div>
                      <div className="pb-3 text-black font-Emilio text-[18px] font-medium group-hover:text-primary group-hover:inline-block">{program.title}</div>
                    </div>
                    <button className="absolute fixed right-[150px] top-[20px] w-[147px] h-[50px] bg-primary rounded-[6px] text-center text-white font-semibold invisible group-hover:visible hover:bg-[#7A1820]">
                      Apply Now
                    </button>
                    <hr className="relative w-[85%] h-[1px] left-[78px] bg-opacity-20 bg-black" />
                  </div>
                )

              }
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default programoffered;

