<<<<<<< HEAD

=======
>>>>>>> 15fbce5f202d38cf618133c41601ee8cf5a74117
import { client } from "../../../../sanity/lib/client";

import { Productprops, imagesType, slugType } from "@/types/produts";
import Wrapper from "@/components/view/Wrapper";
import ProductDetails from "@/components/view/ProductDetails";
<<<<<<< HEAD
import { getAllProduct, getProducts } from "../../../../sanity/sanityUtils";
=======

import BASE_PATH_API_URL from "@/components/config/BasePath";
import ContextWrapper from "@/global/context";
>>>>>>> 15fbce5f202d38cf618133c41601ee8cf5a74117

type Props = {
  params: {
    slug: string;
    products: Array<Productprops>;
  };
};

export async function generateStaticParams() {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }`;
  const res: Productprops[] = await client.fetch(query);

  return res.map((product) => ({
    slug: product.slug.current,
  }));
}
export default async function page({ params: { slug } }: Props) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    ...,
    _id,
    _createdAt,
    name,
    details,
    care,
    url,
    price,
    "image": image[0].asset->url,
    "slug":slug.current,
    content,
    }`;

  const products: Productprops = await client.fetch(query, { slug });

  return (
    <section className='bg-[#FCFCFC] min-h-screen  my-32'>
      <Wrapper className='flex flex-col justify-between relative items-center px-4 py-8'>
<<<<<<< HEAD
        <ProductDetails products={products} qty={0} userId={""} />
=======
        <ProductDetails products={products} />
>>>>>>> 15fbce5f202d38cf618133c41601ee8cf5a74117
      </Wrapper>
    </section>
  );
}
