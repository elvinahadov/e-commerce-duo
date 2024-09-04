import Image from 'next/image'
import React from 'react'
import Chevron from '@/assets/images/icons/chevron.svg'

const MainHeader = () => {
  return (
    <section className='bg-white'>
      <div className='max-w-[1240px] m-auto flex items-center gap-10'>
        <div>
            <p className='text-black text-[32px] font-bold'>SHOP.CO</p>
        </div>
        <div>
            <ul className='text-[16px] font-[400] flex gap-6'>
                <li className='flex'>Shop <Image
                 src={Chevron}
                 alt=''
                 />
                </li>
                <li>On Sale</li>
                <li>New Arriwals</li>
                <li>Brands</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default MainHeader
