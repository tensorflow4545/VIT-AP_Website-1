import React from 'react'

const CDCOfficeHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-end justify-start"
            >
                <h1 className="text-white text-[38px] font-semibold font-Emilio text-start flex justify-center items-center p-[10px] pl-0 ml-[30px] mb-[30px] border-2 border-white border-t-0 border-l-0 border-r-0">
                    CDC Office
                </h1>
            </div>
        </div>
    )
}

export default CDCOfficeHeader
