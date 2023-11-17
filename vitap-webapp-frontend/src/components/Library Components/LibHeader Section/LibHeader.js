import React from 'react'
import "./LibHeader.css"

const LibHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] max-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center">
                <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center">
                    Library
                </h1>
                {/* <div className="curve3">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default LibHeader
