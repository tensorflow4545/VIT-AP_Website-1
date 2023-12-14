"use client";
import style from "./programoffere.module.css";
import react, { useState } from "react";
const programoffered = () => {

  const programmesOffered = [
    {
      id: 1,
      head: "B.Tech CSE",
      title: "B.Tech in Computer Science and Engineering",
      field: "undergraduate"
    },
    {
      id: 1,
      head: "B.Tech CSE",
      title: "B.Tech in Computer Science and Engineering",
      field: "undergraduate"
    },
    {
      id: 1,
      head: "B.Tech CSE",
      title: "B.Tech in Computer Science and Engineering",
      field: "undergraduate"
    },
    {
      id: 2,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in AI and ML",
      field: "postgraduate"
    },
    {
      id: 3,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Data Analytics",
      field: "postgraduate"
    },
    {
      id: 4,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "postgraduate"
    },
    {
      id: 5,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "doctoral"
    },
    {
      id: 6,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "doctoral"
    },
    {
      id: 7,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "doctoral"
    },
    {
      id: 8,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "integrated"
    },
    {
      id: 9,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "integrated"
    },
    {
      id: 10,
      head: "B.Tech CSE",
      title:
        "B.Tech in Computer Science and Engineering Specialization in Network and Security",
      field: "integrated"
    },
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

                return (<div className="pb-3 pl-[78px] group group-hover:pl-[100px] transition duration-300">
                  <div className="pb-3 text-black font-Emilio text-[20px] font-semibold">{program.head}</div>
                  <div className="pb-3 text-black font-Emilio text-[20px] font-medium">{program.title}</div>
                  <hr className="w-[90%] h-[1px] bg-opacity-20 bg-black" />
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

