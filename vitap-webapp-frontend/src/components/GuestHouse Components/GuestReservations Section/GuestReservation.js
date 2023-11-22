import React from 'react'
import { guestReservations } from '@/constants'

const GuestReservation = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[800px] h-[100%] flex justify-center items-center'>
            <div className='max-w-[1340px] w-[100%] min-h-[700px] h-[100%] flex flex-col gap-4 text-start justify-center items-start'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Reservations</h1>
                <div className='flex flex-col gap-4'>
                    {
                        guestReservations?.map((reservation) => (
                            <p className='text-[#000] text-[20px]' key={reservation.id}>{reservation.info}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestReservation
