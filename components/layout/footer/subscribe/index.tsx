import React from 'react'
import Message from '@/assets/images/icons/Message.svg'
import Image from 'next/image';

const Subscribe = () => {
  return (
    <>
    <div className='flex justify-center '>
       <div className='bg-[black] px-[64px] flex gap-[212px] w-[1240px] rounded-[20px] py-[36px] items-center justify-between absolute top-[50px]'>
        <div>
           <p className='font-bold text-[40px] leading-[45px] text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        </div>
        <div className='flex flex-col gap-[14px]'>
            <div className='relative pl-[52px] pr-[94px] py-[14px] bg-white rounded-[62px] flex '>
                <input type='email' placeholder='Enter your email address' />
                <div className='absolute left-4'><Image src={Message} alt=''/></div>
            </div>
            <div>
                <button className='px-[88px] py-[12px] bg-white rounded-[62px] text-[16px]'>Subscribe to Newsletter</button>
            </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Subscribe;
