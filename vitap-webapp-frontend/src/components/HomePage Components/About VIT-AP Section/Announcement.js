const Announcement = (props) => {
  return (
    <>
      <h1 className="font-semibold text-[14px] font-Montserrant opacity-70">
        {props.date}
      </h1>
      <h1 className="font-bold text-secondary font-Montserrant text-[20px] hover:text-primary hover:text-[24px] ease-in duration-300">
        <a href={props.link} target="#">
          {props.title}
        </a>
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
};

export default Announcement;
