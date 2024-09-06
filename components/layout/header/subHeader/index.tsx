import React from 'react'
import Image from 'next/image'
import CloseIcon from "@/assets/images/icons/closeIcon.svg"

const SubHeader = () => {
  return (
    <section className='bg-black'>
      <div className='max-w-[1240px]  m-auto sm:max-w-[390px]'>
      <div className='px-4 text-center flex items-center justify-between text-[12px] text-white py-[9px] xl:text-[14px]'>
      <div></div>
       
       <h1 className='font-normal'>Sign up and get 20% off to your first order. <a href="#" className='underline'>Sign Up Now</a></h1>
      

       <button className='invisible md:visible '>
        <Image src={CloseIcon} width={20} height={20} alt=''/>
       </button>
       </div>
      </div>
    </section>
  )
}

export default SubHeader;
