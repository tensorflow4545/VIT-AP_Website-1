import Card from "./Card.js";
import config from "@/config";


const fetchdata = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const response = await fetch(
    `${config.api}/api/announcements/`,
    reqOptions
  );
  const data = await response.json();
  return data;
};

const OurSchools = async () => {
  // const data = await fetchdata();

  // console.log( data.data)
  // console.log(typeof data)
  
  return (
    <>
      <div className="flex-col">
        <div className="w-full bg-[#E6CFCF] h-[472px] pl-[108px] pr-[114px]  ">
          <h1 className="font-Emilo font-bold text-primary text-[48px] pt-[80px]">
            Our Schools
          </h1>
          <h1 className="font-Montserrant text-[18px] text-secondary w-full">
            At VIT-AP the entire teaching-learning process is concentrated
            around six schools. A research center is also part of the schools,
            that encourages students to participate in exciting research
            projects amongst these departments.
          </h1>
          <div className="relative top-[36px] flex flex-col">
            <div className="flex-row flex ">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <div className="flex-row flex mt-[35px] pl-[161px]">
              <Card />
              <Card />
              <Card />

            </div>
   
          </div>
        </div>
        <div className="w-full bg-white h-[472px] pl-[108px] pr-[114px]"></div>
      </div>
    </>
  );
};

export default OurSchools;
