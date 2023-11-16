"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { DateRange } from "react-date-range";
import "react-datetime/css/react-datetime.css";
import Image from "next/image";
import banner from "../../assets/images/Events/banner2.png";
import card from "../../assets/images/Events/card.png";
import Link from "next/link";
import Card from "./Card";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Events = () => {
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
        <div className="flex flex-row">
          <div className="w-[1171px]">
            <div className="flex">
              <div className="mt-[60px] ml-[150px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[60px] ml-[150px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
              <div className="mt-[60px] ml-[30px] w-[270px] h-[300px] shadow-xl">
                <Image
                  src={card}
                  width={270}
                  height={270}
                  className="rounded-top"
                />
                <Link href="/Card">
                  <button className="w-[270px] h-[60px] bg-[#5C0E14] text-[#FFFFFF] rounded-b text-[24px] hover:bg-[#7A1820]">
                    V-Launch Pad
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
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
              <h5 className="font-bold mt-3">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
              <hr className="w-[230px] mt-4" />
              <h5 className="font-bold mt-3 font-Inter">V-Launch Pad</h5>
              <p className="font-Inter">18th Oct, 4pm</p>
            </div>
          </div>
        </div>
        <div className="flex ml-[40%] mt-[30px]">
          <div className="mt-[5px] mr-3">
            <button>&larr;</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14]">
            <button className="mt-[8px] ml-[15px] font-Inter">1</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px] font-Inter">2</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px] font-Inter">3</button>
          </div>
          <div className="rounded w-[40px] h-[40px] bg-[#E6CFCF] hover:text-[#FFFFFF] hover:bg-[#5C0E14] ml-3">
            <button className="mt-[8px] ml-[15px] font-Inter">4</button>
          </div>
          <div className="mt-[5px] ml-3">
            <button>&rarr;</button>
          </div>
        </div>
        <div className="w-screen mt-[93px] h-[248px] bg-[#741D26] flex">
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

export default Events;
