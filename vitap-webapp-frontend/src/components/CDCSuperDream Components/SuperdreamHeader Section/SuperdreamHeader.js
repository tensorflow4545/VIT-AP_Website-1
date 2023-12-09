import React from 'react'

const SuperdreamHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-end justify-start"
            >
                <h1 className="text-white text-[40px] font-semibold text-start flex justify-center items-center p-[50px]">
                    Super <br /> Dream Offer
                </h1>
            </div>
        </div>
    )
}

export default SuperdreamHeader
