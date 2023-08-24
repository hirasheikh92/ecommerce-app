import { client } from "../../../../sanity/lib/client";
import { Productprops, imagesType, slugType } from "@/types/products";
import Wrapper from "@/components/view/Wrapper";
import ProductDetails from "@/components/view/ProductDetails";
import { auth } from "@clerk/nextjs";

type Props = {
  params: {
    slug: string;
    products: Array<Productprops>;
  };
};

// export async function generateStaticParams() {
//   const query = `*[_type == "product"]{
//     slug {
//       current
//     }
//   }`;
//   const res: Productprops[] = await client.fetch(query);

//   return res.map((product) => ({
//     slug: product.slug.current,
//   }));
// }
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
  const { userId:user_id } = auth();
  return (
    <section className='bg-[#FCFCFC] min-h-screen  my-32'>
      <Wrapper className='flex flex-col justify-between relative items-center px-4 py-8'>
        <ProductDetails products={products} qty={0} userId={user_id as string} />
      </Wrapper>
    </section>
  );
}
