// "use client";
// import { Button } from "@/components/ui/button";
// import Wrapper from "@/components/view/Wrapper";

// import { Productprops } from "@/types/produts";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import {
//   AiOutlineMinus,
//   AiOutlinePlus,
//   AiOutlineShopping,
// } from "react-icons/ai";
// import { HiOutlineTrash } from "react-icons/hi";
// import { urlForImage } from "../../../../sanity/lib/image";

// const CartComp = ({
//   allProductOfStore,
// }: {
//   allProductOfStore: Productprops[];
// }) => {
//   const [allProductsForCart, setAllProductsForCart] = useState<Array<any>>([]);

//   useEffect(() => {
//     if (cartArray) {
//       let data = allProductOfStore.filter((item: Productprops) => {
//         for (let index = 0; index < cartArray.length; index++) {
//           let element: any = cartArray[index];
//           if (element.product_id === item._id) {
//             return true;
//           }
//         }
//       });

//       setAllProductsForCart(data);
//       console.log("data", data);
//     }
//     console.log(cartArray, "......", allProductsForCart);
//   }, [allProductOfStore, allProductsForCart, cartArray]);

//   return (
//     <div className='py-10 px-4 md:px-10'>
//       <Wrapper className=''>
//         <div className='py-6'>
//           <h1 className='text-2xl font-semibold text-gray-900'>
//             Shopping Cart
//           </h1>
//         </div>
//         <div className='flex justify-between gap-16'>
//           <div className='flex flex-col gap-16 flex-[3] mt-8 '>
//             {/* {cartItems.length < 1 && ( */}
//             <div className='hidden  justify-center items-center'>
//               <AiOutlineShopping size={150} />
//               <h1>Your shopping bag is empty</h1>
//             </div>
//             {/* )} */}

//             {allProductsForCart.map((item: Productprops, index: number) => (
//               <div key={index} className='flex gap-8'>
//                 <div className='w-3/12 h-[190px] rounded-[10px]'>
//                   <Image
//                     src={urlForImage(item.image[0].asset._ref)
//                       .width(1000)
//                       .height(1000)
//                       .url()}
//                     width={1000}
//                     height={1000}
//                     alt='img'
//                   />
//                 </div>
//                 <div className=' flex flex-col justify-between space-y-1 md:space-y-3  w-9/12 '>
//                   <div className='flex flex-1 justify-between w-full'>
//                     <h3 className='font-light text-[1.3rem] leading-[25px] text-[#212121]'>
//                       {item.name}
//                     </h3>
//                     <button
//                       type='button'
//                       // onClick={() => handleRemove(item._id)}
//                       className='border-[none]'
//                     >
//                       <HiOutlineTrash size={28} />
//                     </button>
//                   </div>
//                   <p className='font-semibold text-base leading-[22px] text-[#212121]'>
//                     {/* {item.category[1]}{item.category[0]} */}
//                   </p>
//                   <p className='font-semibold text-base leading-[22px] text-[#212121]'>
//                     Delivery Estimation
//                   </p>
//                   <p className='font-semibold text-base leading-[22px] text-[#212121]'>
//                     5 Working Days
//                   </p>
//                   <div className='flex justify-between px-[5px] py-[3px] font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]'>
//                     <span className='font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]'>
//                       ${item.price}.00
//                     </span>
//                     <div>
//                       <span
//                         className='px-[5px] py-[3px]'
//                         // onClick={() => toggleCartItemQuantity(item._id, "dec")}
//                       >
//                         <AiOutlineMinus />
//                       </span>
//                       <span className='num'>{item.quantity}</span>
//                       <span
//                         className='px-[5px] py-[3px]'
//                         // onClick={() => toggleCartItemQuantity(item._id, "inc")}
//                       >
//                         <AiOutlinePlus />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* order summary */}
//           <div className='flex flex-col flex-1 gap-8 p-8 bg-[#FBFCFF]'>
//             <h3>Order Summary</h3>
//             <div className='flex justify-between gap-16'>
//               <p>Quantity</p>
//               {/* <span>{cartArray.length} Product</span> */}
//             </div>
//             <div className='flex justify-between gap-16'>
//               <p>Sub Total</p>
//               <span>{}</span>
//             </div>
//             <div>
//               <Button className=' rounded-none text-center'>
//                 process to checkout
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default CartComp;
