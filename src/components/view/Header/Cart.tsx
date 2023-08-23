// "use client";

<<<<<<< HEAD
// import Link from "next/link";
// import { useEffect, useState } from "react";

// import { CgShoppingCart } from "react-icons/cg";

// const Cart = () => {
 
//   const isBrowser = () => typeof window !== undefined;

//   useEffect(() => {
//     if (!isBrowser()) {
//       let data = localStorage.getItem("cart") as string;
//       setquantity(JSON.parse(data).length);
//     }
//   }, []);
=======
import ContextWrapper, { cartContext } from "@/global/context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";

const Cart = () => {
  // const { state } = useContext(cartContext);
  // // console.log(state.cart.length);

  // const [quantity, setQuantity] = useState(0);
  // const isBrowser = () => typeof window !== undefined;

  // useEffect(() => {
  //   if (!isBrowser()) {
  //     let data = localStorage.getItem("cart") as string;
  //     setQuantity(JSON.parse(data).length);
  //   }
  // }, []);

  let { cartArray, quantity } = useContext(cartContext);

  // console.log();

  return (
    <>
      <Link href='/cart'>
        <button className='hidden lg:flex bg-[#F1F1F1] relative p-3 rounded-[50%] border-[none]'>
          <CgShoppingCart size={22} />
          <span className='absolute text-xs px-3 flex justify-center items-center text-[#eee] bg-[#f02d34] w-[18px] h-[18px] text-center font-semibold rounded-[50%] right-[5px] top-0'>
            {quantity}
            {/* {cartArray.length} */}
          </span>
        </button>
      </Link>
    </>
  );
};
>>>>>>> 15fbce5f202d38cf618133c41601ee8cf5a74117

//   return (
   
//   );
// };

// export default Cart;
