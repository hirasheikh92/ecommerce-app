import React from "react";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className='w-full bg-white '>
      <div className='w-full'>
        <Wrapper className='md:py-32 p-16'>
          <div className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-5 '>
            <div className='flex flex-col justify-between w-4/5 '>
              {" "}
              <Link className='flex ' href='/'>
                <Image
                  src={"/images/Logo.png"}
                  width={180}
                  height={30}
                  alt='logo'
                />
              </Link>
              <p className=' font-normal text-base leading-[22px] text-[#666666]'>
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className=' flex gap-5 mt-5'>
                <div className='social-links'>
                  <GrTwitter size={20} />
                </div>
                <div className='social-links'>
                  <GrFacebookOption size={20} />
                </div>
                <div className='social-links'>
                  <GrLinkedinOption size={20} />
                </div>
              </div>
            </div>
            <div className=''>
              <h3>Company</h3>
              <ul>
                <Link href={"/"}>
                  <li>About</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>Terms of Use</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>Privacy Policy</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>How it Works</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>Contact Us</li>{" "}
                </Link>
              </ul>
            </div>

            <div className=''>
              <h3>Support</h3>
              <ul>
                <Link href={"/"}>
                  <li>Support Carrer</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>24h Service</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>Quick Chat</li>{" "}
                </Link>
              </ul>
            </div>

            <div className=''>
              <h3>Contact</h3>
              <ul>
                <Link href={"/"}>
                  <li>Whatsapp</li>{" "}
                </Link>
                <Link href={"/"}>
                  <li>Support 24h</li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </Wrapper>
        {/* copyright */}
        <div className='grid grid-cols-[auto_auto_auto]  border-t-[#666666] border-t border-solid'>
          <p className='mx-32 my-6'>Copyright © 2023 Dine Market</p>
          <p className='mx-32 my-6'>
            Design by.{" "}
            <span className='font-bold text-base leading-[15px] text-[#212121]'>
              Weired Design
            </span>
          </p>
          <p className='mx-32 my-6'>
            Code by.{" "}
            <span className='font-bold text-base leading-[15px] text-[#212121]'>
              Hira Moueen
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
