import Image from "next/image";
import Link from "next/link";
import { getFemaleProducts } from "../../../sanity/sanityUtils";
import { urlForImage } from "../../../sanity/lib/image";
import { Productprops } from "@/types/products";

const Femalepage = async () => {
  const data: Array<Productprops> = await getFemaleProducts();

  return (
    <>
      <section className=''>
        <div className='container px-5 py-24 mx-auto'>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr] justify-between justify-items-center gap-16'>
            {data.map((data) => (
              <div key={data._id} className=' w-[250px]'>
                <Link href={`/product/${data.slug}`} className=''>
                  <Image
                    alt='ecommerce'
                    className='object-cover object-center w-full  block'
                    src={urlForImage(data.image[0]).url()}
                    width={250}
                    height={270}
                  />
                </Link>
                <div className=''>
                  <h2 className='font-semibold leading-6 tracking-[0.03em] text-[#212121] text-[1.05rem] mt-2'>
                    {data.name}
                  </h2>
                  <h3 className='font-semibold text-[15px] leading-[15px] text-[#888888] mt-2'>
                    {data.tags}
                  </h3>

                  <p className='text-xl mt-4 font-semibold leading-6 tracking-[0.03em] text-[#212121]'>
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Femalepage;
