import React from 'react'
import Image from 'next/image'
import Tshirt from '@/assets/images/icons/Tshirt.svg'
const SingleProduct = () => {
  return (
    <> 
        <div>
            <div>
                <Image src={Tshirt} alt=''/>
            </div>
            <div>
                <p className='font-bold text-[20px] leading-[27px]'>T-SHIRT WITH TAPE DETAILS</p>
                <p>Stars</p>
                <p className='font-bold text-[24px] leading-[32.4px]'>$120</p>
            </div>
        </div>

    </>
  )
}

export default SingleProduct    






































