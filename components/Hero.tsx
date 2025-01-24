import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='px-10 py-4'>
            <div className=' flex justify-center items-center px-10 py-4'>
                <h1 className='text-white text-center text-5xl'>Write a captivating header here <br />to engage your customers</h1>
            </div>
            <div className='flex justify-center items-center'>
                <Button variant={"outline"} className='text-white text-sm border rounded-2xl  border-white text-center m-4'>Call to action</Button>
            </div>
            <div className="grid grid-cols-3 gap-4 my-4">
                <div>
                    <Image src={"/photographer 1.svg"} alt={'photographer 1'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
                </div>
                <div>
                    <Image src={"/photographer 2.svg"} alt={'photographer 1'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
                </div>
                <div>
                    <Image src={"/photographer 3.svg"} alt={'photographer 1'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-sm text-white text-center px-32 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget temp</p>
            </div>
            <div className='flex justify-center items-center'>
                <Button variant={"outline"} className='text-white text-sm border rounded-2xl  border-white text-center m-4'>Call to action</Button>
            </div>
        </div>
    )
}

export default Hero