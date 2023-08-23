import CartComp from "@/components/view/cart/CartComp";
import ContextWrapper from "@/global/context";
import { getProducts } from "../../../sanity/sanityUtils";
import { Productprops } from "@/types/produts";
import { client } from "../../../sanity/lib/client";

async function fatchAllStoreProducts() {
  let res = await fetch(
    `https://dt9hky49.api.sanity.io/v2023-06-19/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  console.log(allProductsOfStore);

  return (
    <ContextWrapper>
      <CartComp allProductsOfStore={allProductsOfStore.result[0].products}></CartComp>
    </ContextWrapper>
  );
};

export default Cart;
