"use client";
import style from "./programoffere.module.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const programoffered = () => {
  const [ProgrammesOffered, SetProgrammesOffered] = useState([]);
  const [active, setActive] = useState("undergraduate");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/scope-school-programmes-offereds`,{
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          const extractedAttributes = response.data.data.map(item => item.attributes);
          SetProgrammesOffered(extractedAttributes);
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
            {ProgrammesOffered.map((attributes, index) => {
              if (active === attributes.Field) {

                return (
                  <div className="relative group transition duration-1000" key={index}>
                    <div className="relative pb-3 pl-[78px] w-[67%] group-hover:left-[20px] transition duration-1000">
                      <div className="pb-3 text-black font-Emilio text-[20px] font-semibold group-hover:text-primary">{attributes.Head}</div>
                      <div className="pb-3 text-black font-Emilio text-[18px] font-medium group-hover:text-primary group-hover:inline-block">{attributes.Title}</div>
                    </div>
                    <Link href={attributes.Link} target="_blank">
                      <button className="absolute fixed right-[150px] top-[20px] w-[147px] h-[50px] bg-primary rounded-[6px] text-center text-white font-semibold invisible group-hover:visible hover:bg-[#7A1820]">
                        Apply Now
                      </button>
                    </Link>
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

