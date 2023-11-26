import React from 'react'

const Guestheader = () => {
    return (
        <div className="max-w-screen w-[100%] max-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center">
                <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center">
                    Guest House
                </h1>
            </div>
        </div>
    )
}

export default Guestheader
