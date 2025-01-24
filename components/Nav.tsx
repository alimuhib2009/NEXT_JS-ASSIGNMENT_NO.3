import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='bg-black text-white flex justify-between items-center px-10 py-4'>
            <div className='flex items-center gap-2'>
                <Image src={"/logo.svg"} alt='logo' width={50} height={50} className='object-contain w-10 h-10'></Image>
                <h1 className='text-2xl font-bold'>LOGO</h1>
            </div>
            <div className='flex gap-4'>
                <div><FaInstagram className='w-9 h-9 bg-white text-black p-2 rounded-full cursor-pointer'/></div>
                <div><FaFacebookF className='w-9 h-9 bg-white text-black p-2 rounded-full cursor-pointer'/></div>
            </div>
        </div>
    )
}

export default Nav