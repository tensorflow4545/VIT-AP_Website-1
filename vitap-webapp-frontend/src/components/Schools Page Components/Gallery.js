import React from "react";

function GalleryComponent(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-full max-w-[1224px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ab37382-cd00-42ff-a782-159ae1047cc2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-[2.24] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-6"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bd0f41b-f0d1-4122-a538-e1cf001924b2?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1220px] mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-12 max-md:mt-10">
              <div className="text-primary font-Emilio text-5xl font-bold capitalize self-stretch whitespace-nowrap max-md:text-4xl">
                Gallery
              </div>
              <div className="font-Montserrat text-zinc-900 text-lg leading-7 self-stretch mt-3">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur amet consectetur.Lorem ipsum dolor sit amet
                consectetur.
              </div>
              <a
                href="..."
                className="text-primary w-[250px] text-xl font-medium leading-7   mt-10  py-2 border-[2px] border-solid border-primary  text-center"
              >
                Visit Gallery Room
              </a>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b462b78-4046-4c50-93c3-f554b0a94a2e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/108cef25-9248-45d7-94d6-dc5ae26879fd?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
        </div>
      </div>
      <div className="bg-rose-950 self-stretch flex min-h-[44px] w-full flex-col mt-24 max-md:max-w-full max-md:mt-10" />
    </div>
  );
}

export default GalleryComponent;