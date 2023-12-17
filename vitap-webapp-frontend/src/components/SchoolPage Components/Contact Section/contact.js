"use client";
import React from "react";
import axios from "axios"
import { useState,useEffect } from "react";

const Contact = () => {
    const [Profile, SetProfile] = useState();

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/school-contact-uses`,{
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                },
              }).then(response => {
                const { data: [{ attributes }] } = response.data;
                SetProfile(attributes);
            });
        }
        fetchData();
    }, []);

    return (
        <>  <div className='bg-white w-[100%] h-[297px] pt-[37px] text-center'>
            <p className='text-primary font-Emilio text-[20px] font-bold'>Contact Us</p>
            <p className='text-primary font-Emilio text-[20px] font-bold pb-[6px]'>{Profile?.Name}</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[24px]'>{Profile?.Designation}</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[12px]'>{Profile?.Address}</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[12px]'>Email : {Profile?.Email}</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium'>Intercom: {Profile?.Intercom}</p>
        </div>
        </>
    )

}

export default Contact;