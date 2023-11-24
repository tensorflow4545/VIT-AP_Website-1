"use client";
import style from "./programoffere.module.css";
import {useState} from "react";
import React from "react";

 const Programoffered=()=>{
    const programmesOffered = [
        {
          id: 1,
          head:"B.Tech CSE",
          title: "B.Tech in Computer Science and Engineering",
          field: "undergraduate"
        },
        {
          id: 1,
          head:"B.Tech CSE",
          title: "B.Tech in Computer Science and Engineering",
          field: "undergraduate"
        },
        {
          id: 1,
          head:"B.Tech CSE",
          title: "B.Tech in Computer Science and Engineering",
          field: "undergraduate"
        },
        {
          id: 2,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in AI and ML",
          field: "postgraduate"
        },
        {
          id: 3,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Data Analytics",
          field: "postgraduate"
        },
        {
          id: 4,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "postgraduate"
        },
        {
          id: 5,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "doctoral"
        },
        {
          id: 6,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "doctoral"
        },
        {
          id: 7,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "doctoral"
        },
        {
          id: 8,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "integrated"
        },
        {
          id: 9,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "integrated"
        },
        {
          id: 10,
          head:"B.Tech CSE",
          title:
            "B.Tech in Computer Science and Engineering Specialization in Network and Security",
          field: "integrated"
        },
      ];
    const [active, setActive] = useState("undergraduate");
    return(
        <div class={style.pragramdiv}>
        <div class={` ${style.program}`}>
        <p class={style.explore}>Explore our programs</p>
        <p class={style.offered}>Programs Offered</p>
        <p class={style.programdescrip}>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
        
        <div class="flex flex-row pb-20">
        
            <div class={`basis-1/4`}><button class={` ${active=="undergraduate"?"bg-red-900":"bg-white"} ${active=="undergraduate"?"text-white":"text-dark"} ${style.button}`}  onClick={() => setActive("undergraduate")}>Undergraduate</button></div>
            <div class={`basis-1/4`}><button class={` ${active=="postgraduate"?"bg-red-900":"bg-white"} ${active=="postgraduate"?"text-white":"text-dark"} ${style.button}`} onClick={() => setActive("postgraduate")}>Postgraduate</button></div>
            <div class={`basis-1/4`}><button class={` ${active=="integrated"?"bg-red-900":"bg-white"} ${active=="integrated"?"text-white":"text-dark"} ${style.button}`} onClick={() => setActive("integrated")}>Integrated</button></div>
            <div class={`basis-1/4`}><button class={` ${active=="doctoral"?"bg-red-900":"bg-white"} ${active=="doctoral"?"text-white":"text-dark"} ${style.button}`} onClick={() => setActive("doctoral")}>Doctoral</button></div>

        </div>
        <div class={`shadow-lg ${style.course}`}>
        <div class="pt-10">
           {programmesOffered.map((program)=>{
             if(active===program.field){
              return <div class={`pb-3 ${style.coursecard}`} key={program.id}>
            <p class={`pb-3 ${style.heading}`}>{program.head}</p>
            <p class={`pb-3 ${style.text}`}>{program.title}</p>
            <hr class={style.hr}/>
            </div>}
           })}
           </div>
           </div>
        </div>
        </div>
    
    )
}
export default Programoffered;
