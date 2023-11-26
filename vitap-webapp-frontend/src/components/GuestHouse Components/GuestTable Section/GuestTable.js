import Link from 'next/link'
import React from 'react'

const GuestTable = () => {
    return (
        <div className='max-w-screen w-[100%] min-h-[1100px] h-[100%] bg-gradient-to-b from-[#FCE3E5] to-white px-[50px] md:px-[100px] py-[80px] flex flex-col'>
            <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Tariff for Rooms</h1>
            <div className='grid grid-rows-6 mt-[20px] max-h-[700px] h-[100%]'>
                <div className='grid grid-cols-3 text-center bg-[#650010] text-white p-5 text-[22px] font-semibold'>
                    <h1>Category</h1>
                    <h1>Room Rent Including Taxes</h1>
                    <h1>Remarks</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Executive Room (Including Breakfast)</h1>
                    <h1>2500</h1>
                    <h1>Single Occupancy</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Executive Room (Including Breakfast)</h1>
                    <h1>3000</h1>
                    <h1>Double Occupancy</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Executive Room (Including Breakfast)</h1>
                    <h1>3500</h1>
                    <h1>Double Occupancy(+Extra Bed)</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Suite Room (Including Breakfast)</h1>
                    <h1>3500</h1>
                    <h1>Single Occupancy</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Suite Room (Including Breakfast)</h1>
                    <h1>4000</h1>
                    <h1>Double Occupancy</h1>
                </div>
                <div className='grid grid-cols-3 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>Suite Room (Including Breakfast)</h1>
                    <h1>4500</h1>
                    <h1>Double Occupancy(+Extra Bed)</h1>
                </div>
            </div>
            <div className='mt-[20px] flex flex-col gap-4'>
                <h1 className='text-[32px] font-Emilio text-[#650010] font-semibold'>Note:</h1>
                <p className='text-[#000] text-[20px]'>✧ Room categories are subject to availability</p>
                <p className='text-[#000] text-[20px]'>✧ 24 Hours check in / check out.</p>
                <p className='text-[#000] text-[20px]'>✧ Room tariff subject to change without prior notice</p>
                <p className='text-[#000] text-[20px]'>✧ Credit card accepted. <br /> (Extra charges applicable for Card payment as per VIT norms).</p>
                <p className='text-[#000] text-[20px]'>✧ Extra person (Including Breakfast) @ 500/- (+Taxes)</p>
            </div>
        </div>
    )
}

export default GuestTable
