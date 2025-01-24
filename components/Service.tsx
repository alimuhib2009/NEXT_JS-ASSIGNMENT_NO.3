import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
const Service = () => {
  return (
    <div className='px-10 py-4'>
        <div className='flex justify-center text-4xl text-white p-4'><h1>Engage your customers</h1></div>
        <div className='flex justify-center p-4'><p className=' text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget temp</p></div>
        <div className="flex justify-center"><Button variant={'outline'} className='text-white text-sm border rounded-2xl  border-white text-center m-4'>Call to action</Button></div>
        <div className='grid grid-cols-3 py-4 '>
            <div>
                <Image src={'/model 1.svg'} alt={'photographer 4'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
            </div>
            <div>
                <Image src={'/model 2.svg'} alt={'photographer 4'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
            </div>
            <div>
                <Image src={'/model 3.svg'} alt={'photographer 4'} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
            </div>
        </div>
    </div>
  )
}

export default Service