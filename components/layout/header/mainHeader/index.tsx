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
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-center py-4 px-6 gap-6 md:gap-10">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden block">
          <Image src={Hamburger} alt="Menu" />
        </div>

        {/* Logo */}
        <div className="flex-1 text-left">
          <p className="text-black text-2xl md:text-3xl font-bold">SHOP.CO</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-lg font-medium">
          <ul className="flex gap-6">
            <li className="flex items-center">
              Shop <Image src={Chevron} alt="Chevron" className="ml-1" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="relative hidden flex-1 max-w-xs md:max-w-sm md:block">
          <input
            type="text"
            className="py-3 px-4 pl-10 bg-[#F0F0F0] rounded-full w-full"
            placeholder="Search for products..."
          />
          <Image
            src={Search}
            alt="Search Icon"
            className="absolute left-3 top-3"
          />
        </div>

        {/* Icons (Cart, Person) */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:block">
            <Image src={SearchBlack} alt="Search Icon Black" />
          </div>
          <div>
            <Image src={Cart} alt="Cart Icon" />
          </div>
          <div>
            <Image src={Person} alt="Person Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
