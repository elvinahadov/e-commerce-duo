import React from 'react';
import Message from '@/assets/images/icons/Message.svg';
import Image from 'next/image';

const Subscribe = () => {
  return (
    <section className="relative bg-black py-8 ">
      <div className=" mx-auto max-w-[390px] px-4 flex flex-col md:flex-row md:max-w-[1240px] items-center justify-between bg-black rounded-lg p-8">
        {/* Text Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <p className="font-bold text-2xl md:text-3xl text-white text-center md:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="py-3 px-10 w-full rounded-full focus:outline-none"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image src={Message} alt="Message Icon" width={24} height={24} />
            </div>
          </div>
          <button className="bg-white text-black rounded-full py-2 px-6 text-sm md:text-base font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
