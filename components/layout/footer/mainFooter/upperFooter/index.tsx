import React from 'react'
import Image from 'next/image';
import  Twitter  from '@/assets/images/icons/Twitter.svg';
import Facebook from '@/assets/images/icons/Facebook.svg'
import Instagram from '@/assets/images/icons/Instagram.svg'
import GitHub from '@/assets/images/icons/GitHub.svg'

const UpperFooter = () => {
  return (
    <>
    <section className=''>
          <div className=" mx-auto flex justify-center pb-[50px] pt-[150px] bg-[#F0F0F0]">
       <div className="flex gap-[113.5px]">
        <div className="w-[268px] ">
            <p className="font-bold text-[33.45px] leading-[40.15px] mb-[25px]">SHOP.CO</p>
            <p className="tex-[14px] leading-[22px] font-[400] text-black opacity-60">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="flex gap-[12px] mt-[35px]">
              <div className="w-[28px] h-[28px] bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                    <Image src={Twitter} alt=''/>
              </div>
              <div className="w-[28px] h-[28px] bg-black text-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={Facebook} alt=''/>
              </div>
              <div className="w-[28px] h-[28px] bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={Instagram} alt=''/>
              </div>
              <div className="w-[28px] h-[28px] bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
               <Image src={GitHub} alt=''/>
              </div>
            </div>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div><p className="text-[16px] font-medium tex-black">COMPANY</p></div>
            <div>
                <ul className="">
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">About</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Features</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Works</li>
                    <li className="text-[16px] text-black opacity-60">Career</li>  
                </ul>
            </div>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div><p className="text-[16px] font-medium tex-black">Help</p></div>
            <div>
                <ul>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Customer Support</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Delivery Details</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Terms & Conditions</li>
                    <li className="text-[16px] text-black opacity-60 ">Privacy Policy</li>  
                </ul>
            </div>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div><p className="text-[16px] font-medium tex-black">FAQ</p></div>
            <div>
                <ul>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Account</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Manage Deliveries</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Orders</li>
                    <li className="text-[16px] text-black opacity-60 ">Payments</li>  
                </ul>
            </div>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div><p className="text-[16px] font-medium tex-black">Resources</p></div>
            <div>
                <ul>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Free eBooks</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">Development Tutorial</li>
                    <li className="text-[16px] text-black opacity-60 mb-[16px]">How to - Blog</li>
                    <li className="text-[16px] text-black opacity-60 ">Youtube Playlist</li>  
                </ul>
            </div>
        </div>
       </div>
    </div>
    </section>
   </>
  )
}

export default UpperFooter;

