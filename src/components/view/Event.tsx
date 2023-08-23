import Image from "next/image";
import Wrapper from "./Wrapper";

const Event = () => {
  return (
    <>
      <section>
        <Wrapper className=' py-16'>
          <div className='text-center flex flex-col gap-4 mb-8'>
            {" "}
            <span className='text-sm font-bold leading-[15px] text-center tracking-widest text-[#0062F5]'>
              promotions
            </span>
            <h2 className='font-bold text-[32px] leading-10 text-center tracking-[0.03em] text-[#212121]'>
              Our Promotions Events
            </h2>
          </div>
          <div className='flex justify-between gap-4'>
            {/* event-left-side */}
            <div className='flex flex-col justify-between gap-8 w-[650px]'>
              <div className='flex-[2] flex flex-col gap-4'>
                <div className='bg-[#D6D6D8] flex justify-between items-center tracking-wider text-[#212121] px-8 py-0'>
                  <div>
                    <h3 className='font-bold text-[1.75rem] leading-[35px'>
                      GET UP TO{" "}
                      <span className=' font-extrabold text-4xl leading-[45px]'>
                        60%
                      </span>
                    </h3>
                    <p className='font-normal text-lg leading-[23px] tracking-[0.03em]'>
                      For the summer season
                    </p>
                  </div>
                  <Image
                    src={"/images/event1.png"}
                    width={"260"}
                    height={200}
                    alt='event'
                  />
                </div>
              </div>
              <div className='bg-[#212121] text-[white] flex flex-col justify-center items-center pt-12 pb-8 px-8'>
                <h3 className='font-extrabold text-4xl leading-[45px] tracking-[0.03em] mb-4'>
                  GET 30% Off
                </h3>
                <p className='font-normal text-sm leading-[18px] tracking-[0.03em]'>
                  USE PROMO CODE
                </p>
                <div className='bg-[#474747] rounded-lg border-[none]'>
                  <button className='font-bold text-[17px] leading-[21px] tracking-[0.25em] text-[white] mt-[5px] px-10 py-2 '>
                    DINEWEEKENDSALE
                  </button>
                </div>
              </div>
            </div>
            {/* event-right-side */}
            <div className='flex-1 flex justify-between items-center gap-4 bg-[#EFE1C7]'>
              <div className='flex flex-col justify-between items-center gap-4 pt-6'>
                <div className='w-full ml-10'>
                  <p className=' font-normal text-[15px] leading-6 tracking-[0.03em]'>
                    Flex Sweatshirt
                  </p>
                  <div className='price'>
                    <span className=' line-through'>$100.00</span>
                    <span className='font-semibold text-lg leading-[23px] ml-2.5'>
                      $75.00
                    </span>
                  </div>
                </div>
                <Image
                  className=' w-[280px] h-[340px] pt-4'
                  src={"/images/event2.png"}
                  width={"260"}
                  height={200}
                  alt='event'
                />
              </div>
            </div>
            <div className='flex flex-col justify-between  bg-[#D7D7D9] items-center pt-6'>
              <div className='w-full ml-10'>
                <p className=' font-normal text-[15px] leading-6 tracking-[0.03em]'>
                  Flex Push Button Bomber
                </p>
                <div className='price'>
                  <span className=' line-through'>$225.00</span>
                  <span className='font-semibold text-lg leading-[23px] ml-2.5'>
                    $190.00
                  </span>
                </div>
              </div>
              <Image
                className=' w-[280px] h-[340px] pt-4'
                src={"/images/event3.png"}
                width={"260"}
                height={200}
                alt='event'
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Event;
