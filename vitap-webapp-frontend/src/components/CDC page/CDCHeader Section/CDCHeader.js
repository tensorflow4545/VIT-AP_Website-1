import React from 'react'

const CDCHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center ls:items-end ls:justify-start px-[34px] py-[22px]"
            >
                <p className=" hidden ls:block font-Emilo text-white opacity-100 font-bold text-[44px] w-[382px] border-2 border-white border-t-0 border-l-0 border-r-0 py-[15px]">Career Development Cell</p>

                <p className=" ls:hidden block font-Emilo text-white opacity-100 font-bold text-[24px]">CDC</p>
            </div>
        </div>
    )
}

export default CDCHeader
