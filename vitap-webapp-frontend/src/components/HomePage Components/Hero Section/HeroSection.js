import headerimage from "../../../assets/images/Homepage Images";
const HeroSection = () => {
  return (
    <>
      <div className="w-full h-auto object-cover">
        <Image src={headerimage} alt="university image" className="w-full" />
      </div>
    </>
  );
};

export default HeroSection;
