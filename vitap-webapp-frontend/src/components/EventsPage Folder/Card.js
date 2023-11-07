import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Image from "next/image";
import banner from "@/assets/images/Events/banner2.png";
import card from "@/assets/images/Events/card.png";
//import "react-datepicker/dist/react-datepicker.css";

const Card = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="h-screen">
        <div className="relative bg-black">
          <Image src={banner} className="max-w-full h-auto mx-auto" />
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
        <div className="flex flex-row relative">
          <div className="mt-[60px] ml-[150px]">
            <Image
              src={card}
              width={380}
              height={380}
              className="rounded-top"
            />
          </div>
          <div className="w-[370px] h-[370px] mt-[100px] ml-[60px] font-Montserrant text-[18px]">
            <p className="mb-4 font-Montserrant">
              <strong>Event name:</strong> V-Launch Pad
            </p>
            <p className="mb-4 font-Montserrant">
              <strong>Event Date and Time:</strong> 18th October, 4:00pm
            </p>
            <p className="mb-4 font-Montserrant">
              <strong>Venue:</strong> Newton Hall
            </p>
            <p className="mb-4 font-Montserrant">
              <strong>Registration Link:</strong> Registration Link
            </p>
            <p className="mb-4 font-Montserrant">
              <strong>About the Event:</strong> Lorem ipsum dolor sit amet
              consectetur. Morbi tortor tempus aliquet ales.Lorem ipsum dolor
              sit amet consectetur.
            </p>
          </div>
          <div className="ml-[80px]">
            <div>
              <Datetime
                value={new Date()}
                input={true}
                className="w-60 border rounded py-3 px-2 text-gray-darker shadow-lg mt-[30px]"
              />
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "300px",
                width: "280px",
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
      </div>
    </>
  );
};

export default Card;
