import * as React from "react";
import AnnouncementsComponent from "@/components/Schools Page Components/Announcements";
import FacultySection from "@/components/Schools Page Components/Faculty";
import SeedBallsComponent from "@/components/Schools Page Components/SeedBallsComponent";
import GalleryComponent from "@/components/Schools Page Components/Gallery";
import TestimonialsComponent from "@/components/Schools Page Components/Testimonials";
import MousSection from "@/components/Schools Page Components/Mous";

function SchoolAbout(props) {
  return (
    <>
    <section className="bg-white flex flex-col px-20 max-md:px-5">
      <div className="self-center w-full max-w-[1224px] mt-16 mb-20 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-rose-950 text-5xl font-bold capitalize self-stretch whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                About School
              </h1>
              <p className="text-zinc-900 text-xl leading-8 self-stretch mt-7 max-md:max-w-full">
                The Department of Computer Science and Engineering was established in 2017. It has become the School of Computer Science and Engineering (SCOPE) in January 2019. At present, the School is headed by Dr. CH. Pradeep Reddy. The School has qualified and committed faculty members who offer impressive instruction in a variety of modes, exploring experiential learning approaches and new pedagogical methods in order to provide proper learning to students. The school provides the necessary infrastructure, hardware, and software to support the faculty for their continuous learning and research.
              </p>
              <h2 className="text-black text-opacity-10 text-center text-9xl font-semibold max-w-[587px] self-center mt-36 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                SCOPE
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1f35e0b-2bc5-4066-b161-17e1e89363f2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-[0.67] object-contain object-center w-full overflow-hidden grow rounded max-md:max-w-full max-md:mt-10"
              alt="School Image"
            />
          </div>
        </div>
      </div>
    </section>
    <AnnouncementsComponent/>
    <FacultySection/>
    <SeedBallsComponent/>
    <GalleryComponent/>
    <TestimonialsComponent/>
    <MousSection/>
    </>
  );
}

export default SchoolAbout;