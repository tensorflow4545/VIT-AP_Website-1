import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Image from "next/image";
import banner from "../../assets/images/Events/banner2.png";
import card from "../../assets/images/Events/card.png";
import Link from "next/link";
import Card from "./Card";
//import "react-datepicker/dist/react-datepicker.css";

const Events = () => {
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
            <p className="text-white text-4xl font-bold">Events</p>
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="mt-[80px] ml-[30px]">
            <Image
              src={card}
              width={250}
              height={250}
              className="rounded-top"
            />
            <Link href="/Card">
              <button className="w-[250px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b">
                V-Launch Pad
              </button>
            </Link>
          </div>
          <div className="mt-[80px] ml-[30px] group">
            <Image
              src={card}
              width={250}
              height={250}
              className="rounded-top"
            />
            <Link href="/Card">
              <button className="w-[250px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b">
                V-Launch Pad
              </button>
            </Link>
          </div>
          <div className="mt-[80px] ml-[30px]">
            <Image
              src={card}
              width={250}
              height={250}
              className="rounded-top"
            />
            <Link href="/Card">
              <button className="w-[250px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b">
                V-Launch Pad
              </button>
            </Link>
          </div>
          <div className="mt-[80px] ml-[30px]">
            <Image
              src={card}
              width={250}
              height={250}
              className="rounded-top"
            />
            <Link href="/Card">
              <button className="w-[250px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b">
                V-Launch Pad
              </button>
            </Link>
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
              <p className="text-center mt-[20px] font-extrabold">
                Upcoming Events
              </p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p>18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p>18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p>18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p>18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p>18th Oct, 4pm</p>
            </div>
          </div>
        </div>
        <div className="flex ml-[40%]">
          <div className="mt-[5px] mr-3">
            <button>&larr;</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14]">
            <button className="mt-[8px] ml-[15px]">1</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px]">2</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px]">3</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px]">4</button>
          </div>
          <div className="mt-[5px] ml-3">
            <button>&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;

