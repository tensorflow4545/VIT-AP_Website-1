import Image from "next/image";
import aboutimage from "../../../assets/images/Homepage Images/about.png";
const About = () => {
  return (
    <>
      <div className="px-[108px] mb-[100px]">
        <div className="flex justify-end pt-[48px]">
          <h1>View More</h1>
        </div>

        <div className="flex  pt-[36px]">
          <div className="w-[50%]">
            <h1 className="font-Emilo text-[48px] text-primary font-bold pb-[9px]">
              About VIT-AP
            </h1>
            <Image src={aboutimage} width={600} height={295} />
            <h1 className="font-Montserrant font-medium text-[22px] mt-[35px] leading-7">
              {" "}
              VIT-AP University is one of India's Best Top Emerging
              <br /> Universities
            </h1>

            <div className="flex flex-col mt-[58.5px] ml-[80.5px]">
              <div className="flex flex-row space-x-[180px]">
                <div className="flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">1100+</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Students
                  </h1>
                </div>

                <div className="flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">8</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Schools
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-[180px] mt-[60px]">
                <div className="flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">100+</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Faculty
                  </h1>
                </div>
                <div className="flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">100+</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Publications
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] pl-[67px] mt-[15px]">
            <h1 className="text-[24px] text-primary font-Montserrant font-bold">
              OUR ANNOUNCEMENTS
            </h1>

            <div className="flex-col space-y-[25px] mt-[42px]">
              <h1 className="font-semibold text-[14px] font-Montserrant">
                13th sep, 2023
              </h1>
              <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                VITREE January 2024 - Apply Now
              </h1>
              <hr
                style={{
                  background: "#1B1C1E38",
                  border: 0,
                  height: "1px",
                }}
              />

              <h1 className="font-semibold text-[14px] font-Montserrant">
                13th sep, 2023
              </h1>
              <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                VITREE January 2024 - Apply Now
              </h1>
              <hr
                style={{
                  background: "#1B1C1E38",
                  border: 0,
                  height: "1px",
                }}
              />

              <h1 className="font-semibold text-[14px] font-Montserrant">
                13th sep, 2023
              </h1>
              <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                VITREE January 2024 - Apply Now
              </h1>
              <hr
                style={{
                  background: "#1B1C1E38",
                  border: 0,
                  height: "1px",
                }}
              />

              <h1 className="font-semibold text-[14px] font-Montserrant">
                13th sep, 2023
              </h1>
              <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                VITREE January 2024 - Apply Now
              </h1>
              <hr
                style={{
                  background: "#1B1C1E38",
                  border: 0,
                  height: "1px",
                }}
              />
              <h1 className="font-semibold text-[14px] font-Montserrant">
                13th sep, 2023
              </h1>
              <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                VITREE January 2024 - Apply Now
              </h1>
              <hr
                style={{
                  background: "#1B1C1E38",
                  border: 0,
                  height: "1px",
                }}
              />
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
