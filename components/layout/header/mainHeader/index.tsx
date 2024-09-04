import Image from "next/image";
import React from "react";
import Chevron from "@/assets/images/icons/chevron.svg";
import Search from "@/assets/images/icons/searchIcon.svg";
import SearchBlack from "@/assets/images/icons/searchIconBlack.svg";
import Cart from "@/assets/images/icons/cartIcon.svg";
import Person from "@/assets/images/icons/personIcon.svg";
import Hamburger from "@/assets/images/icons/hamburgerIcon.svg";

const MainHeader = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] m-auto flex items-center my-6 gap-10">
        <div className="hidden">
          <Image
            src={Hamburger}
            alt=""
          />
        </div>
        <div>
          <p className="text-black text-[32px] font-bold">SHOP.CO</p>
        </div>
        <div>
          <ul className="text-[16px] font-[400] flex gap-6">
            <li className="flex">
              Shop <Image src={Chevron} alt="" />
            </li>
            <li>On Sale</li>
            <li>New Arriwals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            className="py-3 px-4 pl-10 bg-[#F0F0F0] rounded-[62px] w-[530px]"
            placeholder="Search for products..."
          />
          <Image
            src={Search}
            alt="Search Icon"
            className="absolute left-3 top-3"
          />
        </div>
        <div className="flex gap-[14px]">
          <div className="hidden">
            <Image
            src={SearchBlack}
            alt=""
            
            />
          </div>
          <div>
            <Image
            src={Cart}
            alt=""
            />
          </div>
          <div>
            <Image
            src={Person}
            alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
