import React from 'react'

const CDCOfficeHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-end justify-start"
            >
                <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center p-[50px]">
                    CDC Office
                </h1>
            </div>
        </div>
    )
}

export default CDCOfficeHeader
