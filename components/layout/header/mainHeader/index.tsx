import React from "react";
import Image from "next/image";
import Chevron from "@/assets/images/icons/chevron.svg";
import Search from "@/assets/images/icons/searchIcon.svg";
import SearchBlack from "@/assets/images/icons/searchIconBlack.svg";
import Cart from "@/assets/images/icons/cartIcon.svg";
import Person from "@/assets/images/icons/personIcon.svg";
import Hamburger from "@/assets/images/icons/hamburgerIcon.svg";


const MainHeader = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] mx-auto py-6 flex items-center justify-between px-4 gap-10">
        <div className="flex gap-3 items-center">
          <Image
            src={Hamburger}
            width={24}
            height={24}
            alt="menu"
            className="visible lg:invisible"
          />
          <h1 className="text-[32px] font-bold">SHOP.CO</h1>
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-row gap-4 items-center">
            <li className="flex gap-1">
              Shop
              <Image src={Chevron} width={20} height={20} alt="arrowIcon" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="hidden md:flex mx-10 bg-[#F0F0F0] py-3 px-4 rounded-[62px] flex-grow flex gap-3">
          <button>
            <Image
              src={Search}
              width={24}
              height={24}
              alt="graySearch"
              className="my-auto"
            />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="placeholder:text-[16px] font-normal text-[#00000066] bg-[#F0F0F0] outline-none w-full"
          />
        </div>

        <div className="flex gap-[14px] shrink-0">
          <button>
            <Image
              src={SearchBlack}
              width={24}
              height={24}
              alt="blackSearch"
              className="visible md:invisible"
            />
          </button>

          <button>
            <Image src={Cart} width={24} height={24} alt="bucket" />
          </button>

          <button>
            <Image src={Person} width={24} height={24} alt="profile" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
