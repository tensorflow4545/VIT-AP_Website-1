// components/AnnouncementCard.js
function AnnouncementCard({ title, children }) {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg m-2 h-80 ls:m-3 lx:m-4 md:m-5 lg:m-6 min-h-[326px] sm:min-w-[300px] ls:min-w-[200px] md:min-w-[300px] text-center overflow-hidden">
        <h3 className="text-base ls:text-[26px] sm:text-[26px]  lx:text-[26px]  md:text-[26px] lg:text-[26px]  font-semibold mb-2 font-Emilio text-primary mt-[30px]">{title}</h3>
        <p className="text-sm ls:text-base lx:text-lg md:text-xl font-Montserrat text-secondary mt-[30px]">{children}</p>
      </div>
    );
  }
  
  export default function Home() {
    return (
        <div className="bg-primary text-white p-4 ls:p-6 lx:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center min-h-[591px] font-Emilio">
        <div className="container mx-auto">
          <h1 className=" sm:text-4xl font-bold mb-4 ls:mb-5 lx:ml-4 lx:mb-6 md:mb-8 lg:mb-10 xl:mb-12 ls:text-left sm:text-center w-full">Announcements</h1>
          <div className="flex flex-wrap justify-center items-stretch ls:flex-nowrap ls:justify-start">
            <AnnouncementCard title="Announcement-1">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
            </AnnouncementCard>
            <AnnouncementCard title="Announcement-2">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
            </AnnouncementCard>
            <AnnouncementCard title="Announcement-3">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
            </AnnouncementCard>
          </div>
        </div>
      </div>
    );
  }
  