import React from 'react'
import Card from './Card'

const CDCStatistics = () => {
    return (
        <div className='max-w-[1560px] w-[100%]'>
            <div className="w-[100%] min-h-[400px] h-[100%] py-[20px] lg:py-[40px] px-[50px] md:px-[100px] lg:px-[150px] grid grid-cols-2 lg:grid-cols-5 justify-center items-center gap-5 max-md:px-[20px] max-lg:px-[0px] ">

                <div className=''>
                    <Card url={"./convocards/card1.jpeg"} href={"/cdc-superdream"} title={"Super dream offer"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card2.jpeg"} href={"/cdc-dream"} title={"Dream offer"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card3.jpeg"} href={"/cdc-internship"} title={"Internship"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card4.jpeg"} href={"/cdc-statistics"} title={"Statistics"} />
                </div>
                <div className=''>
                    <Card url={"./convocards/card5.jpeg"} href={"/cdc-office"} title={"C.D.C Office"} />
                </div>
            </div>
            <div className="min-h-[200px] w-[100%] bg-red-100 mt-[-150px] -z-20"></div>
        </div>
    )
}

export default CDCStatistics
