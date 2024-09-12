import React from 'react';
import Image from 'next/image';
import Visa from '@/assets/images/icons/Visa.svg';
import MasterCard from '@/assets/images/icons/MasterCard.svg';
import Paypal from '@/assets/images/icons/Paypal.svg';
import ApplePay from '@/assets/images/icons/ApplePay.svg';
import GooglePay from '@/assets/images/icons/GooglePay.svg';

const BottomFooter = () => {
  return (
    <section className='bg-[#F0F0F0] py-8'>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        {/* Copyright Text */}
        <div>
          <p className='text-sm text-black opacity-60'>
            Shop.co © 2000-2023, All Rights Reserved
          </p>
        </div>
        
        {/* Payment Icons */}
        <div className='flex gap-3 mt-4 md:mt-0'>
          <div className='w-16 h-8 flex items-center justify-center'>
            <Image src={Visa} alt='Visa' />
          </div>
          <div className='w-16 h-8 flex items-center justify-center'>
            <Image src={MasterCard} alt='MasterCard' />
          </div>
          <div className='w-16 h-8 flex items-center justify-center'>
            <Image src={Paypal} alt='Paypal' />
          </div>
          <div className='w-16 h-8 flex items-center justify-center'>
            <Image src={ApplePay} alt='ApplePay' />
          </div>
          <div className='w-16 h-8 flex items-center justify-center'>
            <Image src={GooglePay} alt='GooglePay' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomFooter;
