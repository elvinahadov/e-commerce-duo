import React from 'react';
import Image from 'next/image';
import Visa from "@/assets/images/icons/Visa.svg"
import MasterCard from '@/assets/images/icons/MasterCard.svg';
import Paypal from '@/assets/images/icons/Paypal.svg';
import ApplePay from '@/assets/images/icons/ApplePay.svg';
import GooglePay from '@/assets/images/icons/GooglePay.svg';


const BottomFooter = () => {
  return (
    <>
    <section className='bg-[#F0F0F0] '>
        <div className=" mx-auto  flex py-[50px] items-center justify-between container max-w-[1240px]  ">
        <div>
            <p className="text-[14px] text-black opacity-60 leading-[18.9px]">Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
        <div className="flex gap-[12px]">
            <div><Image src={Visa} alt=''/></div>
            <div><Image src={MasterCard} alt=''/></div>
            <div><Image src={Paypal} alt=''/></div>
            <div><Image src={ApplePay} alt=''/></div>
            <div><Image src={GooglePay} alt=''/></div>
        </div>
    </div>
    </section>
    </>
  )
}

export default BottomFooter;
