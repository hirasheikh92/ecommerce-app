import { Productprops } from "@/types/produts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store"
import { urlForImage } from "../../../sanity/lib/image";

interface CartState {
    items: Array<Productprops>;
    totalAmount: number;
    totalQuantity: number;
    isLoading: boolean;
    error: any;
  }
  
  const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    isLoading: false,
    error: null,
  };
  
//   export const fetchData = createAsyncThunk(
//     "cart/fetchData",
//     async (userId: string) => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`
//       );
  
//       if (!res.ok) {
//         console.log("Failed to Fetch Data From API");
//       }
  
//       const data = await res.json();
  
//       return data; // Return the cart data as the payload
//     }
//   );
  
  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart(
        state: CartState,
        action: PayloadAction<{ product: Productprops; quantity: number }>
      ) {
        const newItem = action.payload.product;
        const existingItem = state.items.find((item) => item._id === newItem._id);
  
        state.totalQuantity = state.totalQuantity + action.payload.quantity;
        state.totalAmount =
          state.totalAmount +
          action.payload.quantity * action.payload.product.price;
  
        if (!existingItem) {
          const totalPrice = newItem.price * action.payload.quantity;
          state.items.push({
            ...newItem,
            // @ts-ignore
            image: urlForImage(newItem.image).url(),
            quantity: action.payload.quantity,
            totalPrice,
          });
        } else {
          const totalPrice =
            existingItem.totalPrice +
            existingItem.price * action.payload.quantity;
          existingItem.quantity += action.payload.quantity;
          existingItem.totalPrice = totalPrice;
        }
      },
  
      removeProduct(state: CartState, action: PayloadAction<string>) {
        const productId = action.payload;
        state.items = state.items.filter((item) => item._id !== productId);
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      },
      decrementCartProduct(state: CartState, action: PayloadAction<string>) {
        const Product = action.payload;
        const existingItem = state.items.find((item) => item._id === Product);
        
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem?.price!;
        
        if (existingItem?.quantity === 1) {
          state.items = state.items.filter((item) => item._id !== Product);
        } else {
          existingItem!.quantity--;
          existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;
          
          
        }
      }
    }
  });
  
//   export const selectIsLoading = (state: RootState) => state.cart.isLoading;
  
  export const cartActions = cartSlice.actions;
  
  export default cartSlice.reducer;