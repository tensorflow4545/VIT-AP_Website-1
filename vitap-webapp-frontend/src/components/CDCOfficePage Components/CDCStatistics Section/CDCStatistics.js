import React from 'react'
import Card from './Card'

const CDCStatistics = () => {
    return (
        <div className='max-w-[1560px] w-[100%]'>
            <div className="w-[100%] min-h-[400px] h-[100%] px-[20px] py-[20px] ls:py-[40px] ls:px-[50px] grid grid-cols-2 ls:grid-cols-5 justify-center items-center gap-5 max-md:px-[20px] max-lx:px-[0px] ">

                <div className=''>
                    <Card url={"./convocards/card1.jpeg"} title={"Schedule"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card2.jpeg"} title={"Videos"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card3.jpeg"} title={"Ranklist"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card4.jpeg"} title={"Instructions"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card5.jpeg"} title={"Photos"} />
                </div>
            </div>
            <div className="min-h-[200px] w-[100%] bg-red-100 mt-[-150px] -z-20"></div>
        </div>
    )
}

export default CDCStatistics
