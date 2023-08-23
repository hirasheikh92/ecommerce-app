import ProductCarousel from "@/components/ProductCarousel";
import BASE_PATH_API_URL from "@/components/config/BasePath";
import Banner from "@/components/view/Banner";
import Event from "@/components/view/Event";
import Feature from "@/components/view/Feature";
import NewsLetter from "@/components/view/NewsLetter";

import { Productprops, responseType } from "@/types/produts";

async function fetchAllProductsData() {
  const res = await fetch(`${BASE_PATH_API_URL}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const { response }: responseType = await fetchAllProductsData();
  // console.log("response:", response);

  return (
    <>
      <Banner />
      <Event />
      <ProductCarousel productData={response} />

      <Feature />
      <NewsLetter />
    </>
  );
}
