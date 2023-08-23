import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Wrapper from "./Wrapper";

const Feature = () => {
  return (
    <section className='w-full relative bg-[#FBFCFF] my-16 pt-0 pb-16 px-32'>
      <div className='absolute top-0 right-14 leading-[55px] mt-[-90px] text-4xl font-extrabold tracking-tight lg:text-5xl w-[560px]'>
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>
      <Wrapper className='py-32 grid grid-cols-[1fr_1fr] '>
        <div className='grid grid-cols-[1fr_1fr] justify-center items-center relative  '>
          <div className='font-extrabold text-[6.875rem] leading-[110px] absolute text-[#212121] opacity-[0.07] z-[1]'>
            Different from others
          </div>
          <div className='flex flex-col gap-8 '>
            <h3 className='font-semibold w-48 text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4'>
              Using Good Quality Materials
            </h3>
            <p className='font-light text-base leading-[22px] tracking-wider text-[#212121]'>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex flex-col gap-8'>
            <h3 className='font-semibold w-48 text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4'>
              100% Handmade Products
            </h3>
            <p className='font-light text-base leading-[22px] tracking-wider text-[#212121]'>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex flex-col gap-8'>
            <h3 className='font-semibold w-48 text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4'>
              Modern Fashion Design
            </h3>
            <p className='font-light text-base leading-[22px] tracking-wider text-[#212121]'>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex flex-col gap-8'>
            <h3 className='font-semibold w-48 text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4'>
              Discount for Bulk Orders
            </h3>
            <p className='font-light text-base leading-[22px] tracking-wider text-[#212121]'>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center gap-10'>
          <Image
            src={"/images/female-hoodie.png"}
            width={300}
            height={350}
            alt='img'
          />
          <div className='flex flex-col gap-8'>
            <p className='font-light text-base leading-[26px] text-justify text-[#212121]'>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/products"}>
              <Button className='text-sm w-6/12' type='button'>
                See All Product
              </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Feature;
