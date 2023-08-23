"use client";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import MobileMenu from "./MobileMenu";

import { CgShoppingCart } from "react-icons/cg";

import { useAppSelector } from "@/redux/store";


const Header = () => {
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <header className='w-full'>
      <Wrapper className='flex justify-between items-center my-8'>
        <div className='hidden lg:inline-block ml-1'>
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              alt={"logo"}
              width={140}
              height={25}
            />
          </Link>{" "}
        </div>
        <Navbar />
        <SearchBar />
        <Link href='/cart'>
          <button className='hidden lg:flex bg-[#F1F1F1] relative p-3 rounded-[50%] border-[none]'>
            <CgShoppingCart size={22} />
            <span className='absolute text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] text-center font-semibold rounded-[50%] right-[5px] top-0'>
            {totalItems}
            </span>
          </button>
        </Link>
        <MobileMenu />
      </Wrapper>
    </header>
  );
};

export default Header;
