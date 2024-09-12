import React from 'react';
import Image from 'next/image'
import CloseIcon from "@/assets/images/icons/closeIcon.svg"

const SubHeader = () => {
  return (
    <section className="bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-2.5">
        <p className="text-white sm:text-[10px] md:text-[14px] font-normal text-center">
          Sign up and get 20% off your first order. 
          <a href="#" className="underline font-medium sm:text-[10px] md:text-base ml-1">Sign Up Now.</a>
        </p>
      </div>
    </section>
  );
}

export default SubHeader;
