import Card from "./Card.js";
import config from "@/config";
import Image from "next/image";

import image2 from "../../../assets/images/Homepage Images/Schools/School of Electronics Engineering (SENSE).jpg";
import image3 from "../../../assets/images/Homepage Images/Schools/School of Advanced Science (SAS).jpg";
import image4 from "../../../assets/images/Homepage Images/Schools/School of Business (VSB).jpg";
import image5 from "../../../assets/images/Homepage Images/Schools/School of Law (VSL).jpg";
import image6 from "../../../assets/images/Homepage Images/Schools/School of Mechanical Engineering (SMEC).jpg";
import image7 from "../../../assets/images/Homepage Images/Schools/School of Social Sciences and Humanities (VISH).jpg";

const fetchdata = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const response = await fetch(`${config.api}/api/announcements/`, reqOptions);
  const data = await response.json();
  return data;
};

const OurSchools = async () => {
  // const data = await fetchdata();

  // console.log( data.data)
  // console.log(typeof data)

  return (
    <>
      <div className="flex-col mb-[130px]">
        <div className="w-full bg-[#E6CFCF] h-[450px] pl-[108px] pr-[114px]  ">
          <h1 className="font-Emilo font-bold text-primary text-[48px] pt-[40px]">
            Our Schools
          </h1>
          <h1 className="font-Montserrant text-[18px] text-secondary w-full">
            At VIT-AP the entire teaching-learning process is concentrated
            around six schools. A research center is also part of the schools,
            that encourages students to participate in exciting research
            projects amongst these departments.
          </h1>
          <div className="relative top-[36px] flex flex-col">
            <div class="container grid grid-cols-3 gap-2 mx-auto">
              <Card
                imgsrc="/vitap-webapp-frontend/public/SAS.jpg"
                title="sample image"
              />
              <div class="w-full rounded">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                />
              </div>
              <div class="w-full rounded">
                <Image
                  src="/vitap-webapp-frontend/public/SAS.jpg"
                  height={200}
                  width={200}
                  alt="image"
                />
              </div>
              <div class="w-full rounded">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                />
              </div>
              <div class="w-full rounded">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                />
              </div>
              <div class="w-full rounded">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                />
              </div>
              <div class="w-full rounded">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[472px] pl-[108px] pr-[114px]"></div>
      </div>
    </>
  );
};

export default OurSchools;
