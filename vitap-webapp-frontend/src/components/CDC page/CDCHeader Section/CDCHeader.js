import React from 'react'

const CDCHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex justify-center items-center md:items-end md:justify-start px-[34px] py-[22px]"
            >
                {/* <p className=" hidden ls:block font-Emilio text-white opacity-100 font-bold text-[44px] w-[382px] border-2 border-white border-t-0 border-l-0 border-r-0 py-[15px]">Career Development Cell</p>
                <p className=" ls:hidden block font-Emilio text-white opacity-100 font-bold text-[24px]">CDC</p> */}

                <h1 className="hidden text-white font-Emilio text-[40px] font-semibold text-start md:flex justify-center items-center p-[10px] pl-0 ml-[30px] mb-[30px] border-2 border-white border-t-0 border-l-0 border-r-0">
                    Career <br /> Development Cell
                </h1>

                <p className="md:hidden block font-Emilio text-white opacity-100 font-bold text-[24px]">CDC</p>
            </div>
        </div>
    )
}

export default CDCHeader
