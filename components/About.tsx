import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        <div className='flex justify-between px-10 py-10'>
            <div className='w-2/4'>
                <div><h1 className="text-white text-4xl">Write a captivating header here to engage your customers</h1></div>
                <div><p className="text-white text-sm py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget temp</p></div>
            </div>
            <div className='flex justify-center items-center h-full'>
                <Image src={"/photographer 4.svg"} alt={"Photographer"} width={400} height={400} className='object-contain w-full h-full p-2'></Image>
            </div>
        </div>
    </div>
  )
}

export default About