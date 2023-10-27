import Image from "next/image";
// import schools from "../../../assets/images/Homepage Images/schools.png";
const card = (props) => {
  return (
    <>
      <div className="w-[270px] h-[290px] ml-[46px] relative">
        <Image src={`${props.imgsrc}`} className="opacity-90" width={270} height={290} />
        <div className="absolute top-[220px] text-white font-Emilo text-[20px] px-[14px] font-semibold ">
          <h1 className="leading-[26px]">{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default card;
<>
  <div className="w-[270px] h-[290px]"></div>
</>;
