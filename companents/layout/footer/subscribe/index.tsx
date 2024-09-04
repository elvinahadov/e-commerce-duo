import React from 'react'
import Message from "@/assets/images/icons/Message.svg"
import Image from 'next/image';

const Subscribe = () => {
  return (
    <>
      <div className='bg-[black] w-full'>
        <div>
           <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        </div>
        <div>
            <div>
                <div><input type='email' placeholder='Enter your email address'/></div>
                <div><Image src={Message} alt=''/></div>
            </div>
            <div>
                <button></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe;
