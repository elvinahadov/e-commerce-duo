import React from 'react';
import Image from 'next/image';
import Twitter from '@/assets/images/icons/Twitter.svg';
import Facebook from '@/assets/images/icons/Facebook.svg';
import Instagram from '@/assets/images/icons/Instagram.svg';
import GitHub from '@/assets/images/icons/GitHub.svg';

const UpperFooter = () => {
  return (
    <section className=" pt-[135px]">
      <div className='bg-[#F0F0F0] pt-[190px] md:pt-[190px] pb-[50px] md:pb-[50px]'>
      <div className="md:max-w-[1240px] mx-auto px-4">
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-start md:flex-nowrap">
          {/* Company Info */}
          <div className="w-full flex flex-col md:w-1/4 items-start">
            <p className="font-bold text-2xl md:text-3xl mb-6">SHOP.CO</p>
            <p className="text-sm text-black opacity-60 mb-6">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={Twitter} alt="Twitter" />
              </div>
              <div className="w-8 h-8 bg-black text-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={Facebook} alt="Facebook" />
              </div>
              <div className="w-8 h-8 bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={Instagram} alt="Instagram" />
              </div>
              <div className="w-8 h-8 bg-white border border-[#000] border-opacity-20 rounded-full flex items-center justify-center">
                <Image src={GitHub} alt="GitHub" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {/* Company Links */}
              <div>
                <p className="text-lg font-medium text-black mb-4">COMPANY</p>
                <ul className="text-sm text-black opacity-60">
                  <li className="mb-4">About</li>
                  <li className="mb-4">Features</li>
                  <li className="mb-4">Works</li>
                  <li>Career</li>
                </ul>
              </div>

              {/* Help Links */}
              <div>
                <p className="text-lg font-medium text-black mb-4">Help</p>
                <ul className="text-sm text-black opacity-60">
                  <li className="mb-4">Customer Support</li>
                  <li className="mb-4">Delivery Details</li>
                  <li className="mb-4">Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/* FAQ Links */}
              <div>
                <p className="text-lg font-medium text-black mb-4">FAQ</p>
                <ul className="text-sm text-black opacity-60">
                  <li className="mb-4">Account</li>
                  <li className="mb-4">Manage Deliveries</li>
                  <li className="mb-4">Orders</li>
                  <li>Payments</li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <p className="text-lg font-medium text-black mb-4">Resources</p>
                <ul className="text-sm text-black opacity-60">
                  <li className="mb-4">Free eBooks</li>
                  <li className="mb-4">Development Tutorial</li>
                  <li className="mb-4">How to - Blog</li>
                  <li>Youtube Playlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default UpperFooter;
