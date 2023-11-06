import * as React from "react";

function AnnouncementsComponent(props) {
  return (
    <main className="bg-primary flex flex-col px-20 max-md:px-5">
      <section className="self-center flex w-full max-w-[1224px] flex-col mt-14 mb-20 max-md:max-w-full max-md:my-10">
        <header className="self-center flex w-full items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <h1 className="text-white text-5xl font-bold capitalize grow shrink basis-auto self-start max-md:text-4xl">
            Announcements
          </h1>
          <div className="flex items-start gap-3 mt-2.5 py-1.5 self-start">
            <a href="#" className="text-white text-lg font-semibold self-stretch">
              View More
            </a>
            <div className="bg-white self-center w-9 h-0.5 my-auto" />
          </div>
        </header>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full max-w-[392px] grow flex-col mx-auto max-md:mt-6">
                <div className="bg-white self-stretch flex w-full grow flex-col pl-16 pr-16 py-24 max-md:px-5">
                  <h2 className="text-black text-center text-2xl font-bold leading-10 self-center whitespace-nowrap">
                    Announcement-1
                  </h2>
                  <p className="text-zinc-900 text-opacity-80 text-center text-base leading-7 self-stretch mt-6">
                    Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full max-w-[392px] grow flex-col mx-auto pl-16 pr-16 py-24 max-md:mt-6 max-md:px-5">
                <h2 className="text-black text-center text-2xl font-bold leading-10 self-center whitespace-nowrap">
                  Announcement-2
                </h2>
                <p className="text-zinc-900 text-opacity-80 text-center text-base leading-7 self-stretch mt-6">
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full max-w-[392px] grow flex-col mx-auto max-md:mt-6">
                <div className="bg-white self-stretch flex w-full grow flex-col pl-16 pr-16 py-24 max-md:px-5">
                  <h2 className="text-black text-center text-2xl font-bold leading-10 self-center whitespace-nowrap">
                    Announcement-3
                  </h2>
                  <p className="text-zinc-900 text-opacity-80 text-center text-base leading-7 self-stretch mt-6">
                    Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AnnouncementsComponent;