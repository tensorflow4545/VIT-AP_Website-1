import Image from "next/image";
// import aboutimage from "../../../assets/images/Homepage Images/about.png";
import config from "@/config";
import axios from 'axios';

const fetchannouncements = async () => {
  try {
    const response = await axios.get(`${config.api}/api/announcements`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling at a higher level
  }
};

const fetchaboutImage = async () =>{

    const response = await axios.get(`${config.api}/api/aboutus-image?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    return response.data;
}
const About = async () => {


  const announcementdata = await fetchannouncements();
  const announcements = announcementdata.data;
  // console.log(announcements);

  const data1 = await fetchaboutImage();
  const aboutimage = data1.data.attributes.image.data.attributes.url
  console.log(aboutimage)
  return (
    <>
      <div className="px-[108px] mb-[100px] ">
        <div className="md:flex  pt-[70px]">
          <div className="md:w-[50%] ls:w-[100%] sm:text-center md:text-left sm:flex-col sm:justify-center md:justify-normal ">
            <h1 className="font-Emilo ls:text-[48px] sm:text-[40px] text-primary font-bold pb-[9px]">
              About VIT-AP
            </h1>
            <div className="sm:justify-center md:justify-normal sm:hidden ls:flex w-full object-cover">
              <Image src={`${config.api}${aboutimage}`} width={600} height={295} />
            </div>
            <h1 className="font-Montserrant font-medium text-[22px] mt-[35px] leading-7">
              VIT-AP University is one of India's Best Top Emerging
              <br /> Universities
            </h1>

            <div className="ls:flex sm:flex-col ls:mt-[40px] ls:ml-[40px] md:mt-[58.5px] md:ml-[80.5px] ls:justify-center ls:text-center">
              <div className="ls:flex flex-row space-x-[180px] ls:justify-center">
                <div className="flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">1100+</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Students
                  </h1>
                </div>

                <div className="ls:flex flex-col text-center">
                  <h1 className="text-[46px] text-primary font-bold">8</h1>
                  <h1 className="text-[20px] font-Inter text-primary">
                    Schools
                  </h1>
                </div>
              </div>

              <div className="ls:flex flex-row space-x-[180px] mt-[60px] ls:justify-center">
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

          {/* Anouncements section  */}

          <div className="md:w-[50%] sm:w-[100%] md:pl-[67px] ls:mt-[100px] md:mt-[15px] md:block ls:flex-col ls:justify-center  relative">
            <div className="top-[-40px] right-5 absolute">
              <h1>View More</h1>
            </div>

            <h1 className="text-[24px] text-primary font-Montserrant font-bold ls:text-center md:text-left">
              OUR ANNOUNCEMENTS
            </h1>
            <div className="flex-col space-y-[25px] mt-[42px] ">
              {announcements.map((announcement) => {
                return (
                  <>
                  <div>
                    
                  </div>
                    <h1 className="font-semibold text-[14px] font-Montserrant ">
                      {announcement.attributes.date}
                    </h1>
                    <h1 className="font-bold text-secondary font-Montserrant text-[20px]">
                      <a href={announcement.attributes.link} target ="#">{announcement.attributes.title}</a>
                    </h1>
                    <hr
                      style={{
                        background: "#1B1C1E38",
                        border: 0,
                        height: "1px",
                      }}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
