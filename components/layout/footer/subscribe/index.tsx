import React from 'react';
import Message from '@/assets/images/icons/Message.svg';
import Image from 'next/image';

const Subscribe = () => {
  return (
    <section className="absolute left-0 right-0 px-4 py-[43px] sm:mx-auto m-auto max-w-[390px] md:top-10 md:max-w-[1240px] bg-black rounded-[20px] z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-6 md:mb-0  mx-4">
          <p className="sm:text-[32px] sm:leading-[35px] md:text-[40px] font-bold md:leading-[45px] text-white text-left">
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
