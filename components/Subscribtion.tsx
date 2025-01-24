import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

const Subscribtion = () => {
    return (
        <div className='px-10 py-4'>
            <div className='flex justify-center'><h1 className='text-white text-4xl text-center'>Subscribe to our mailing list</h1></div>
            <div className="flex justify-between mt-4">
                <div className='w-2/4 px-4 py-8'>
                    <p className="text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget temp</p>
                </div>
                <div className='w-2/4 py-4 flex flex-col items-center justify-center'>
                    <div className='w-3/5 p-2'>
                        <Input placeholder='Name' className='px-2' />
                    </div>
                    <div className='w-3/5 p-2'>
                        <Input placeholder='Email' className='px-2'/>
                    </div>
                    <div><Button variant={'outline'} className='text-white text-sm border rounded-2xl  border-white text-center m-2'>Call to action</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Subscribtion