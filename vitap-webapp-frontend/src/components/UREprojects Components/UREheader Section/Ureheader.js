import React from 'react'

const UreHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] max-h-[300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center">
                <h1 className="text-white text-[32px] ls:text-[45px] font-semibold font-Emilio text-center flex justify-center items-center">
                    URE Projects
                </h1>
            </div>
        </div>
    )
}

export default UreHeader
