// pages/index.js
import Image from 'next/image';
import {Button} from '@/components/ui/button'

export default function Banner() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '350px' }}>
      <Image
        src={"/mountain.svg"}
        alt='mountain'
        layout='fill'
        objectFit="cover"
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'Black',
        fontSize: '12',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        <div><h1 className='text-2xl p-4'>Engage your customers</h1></div>
        <div><p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget temp</p></div>
        <div><Button variant={'outline'} className=' text-sm border rounded-2xl  border-black text-center m-4'>Call to action</Button></div>
      </div>
    </div>
  );
}
