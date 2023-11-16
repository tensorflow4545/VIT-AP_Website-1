"use client";
import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { DateRange } from "react-date-range";
import Image from "next/image";
import banner from "../../assets/images/Events/banner2.png";
import card from "../../assets/images/Events/card.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
//import "react-datepicker/dist/react-datepicker.css";

const Card = () => {
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <>
      <div>
        <div className="relative">
          <Image src={banner} className="w-full" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="text-white text-4xl font-bold font-Emilo text-[61px]">
              Events
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col relative">
            <div className="mt-[60px] ml-[150px]">
              <Image
                src={card}
                width={646}
                height={678}
                className="rounded-top shadow-2xl"
              />
            </div>
            <div className="w-[450px] h-[370px] mt-[50px] ml-[150px] font-Montserrant text-[18px]">
              <p className="mb-3 font-Montserrant">
                <strong>Event name:</strong> V-Launch Pad
              </p>
              <p className="mb-3 font-Montserrant">
                <strong>Event Date and Time:</strong> 18th October, 4:00pm
              </p>
              <p className="mb-3 font-Montserrant">
                <strong>Venue:</strong> Newton Hall
              </p>
              <p className="mb-3 font-Montserrant">
                <strong>Registration Link:</strong> Registration Link
              </p>
              <p className="mb-3 font-Montserrant">
                <strong>About the Event:</strong> Lorem ipsum dolor sit amet
                consectetur. Morbi tortor tempus aliquet ales.Lorem ipsum dolor
                sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="ml-[300px] mt-[100px]">
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setSelectedDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={selectedDate}
              />
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "350px",
                width: "310px",
              }}
              className="flex flex-col rounded items-center border border-black shadow-2xl mt-[20px]"
            >
              <p className="text-center mt-[20px] font-extrabold font-Inter">
                Upcoming Events
              </p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
            </div>
          </div>
        </div>
        <div className="w-screen h-[108px] bg-[#E6CFCF] mt-[70px]"></div>
        <div className="w-screen h-[248px] bg-[#741D26] flex">
          <div className="w-[760px] mt-[75px] ml-[313px]">
            <p className="text-[26px] text-[#FDFEFF] font-Emilo">
              “ Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit
              amet consectetur ”
            </p>
            <p className="text-[20px] text-white font-Montserrant float-right">
              -Jagdish Mudiganti
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
