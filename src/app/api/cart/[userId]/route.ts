import { Cart, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params: { userId } }:{params:{userId:string}}) => {
   try {
    if (!userId) {
        throw new Error("user id is not exist")
    } else {
        const res:Cart[] = await db.select().from(cartTable).where(eq(cartTable.user_id, userId));

        const cartItems = res.map((item) => ({
            _id: item.product_id,
            price:item.price ,
            name: item.product_name,
            totalPrice:item.total_price ,
            quantity: item.quantity,
            userId: item.user_id,
            image:item.image,
        })
        )

        return NextResponse.json({ data: res },{status:200})
       }
      
   } catch (error) {
    console.log(error);
    return NextResponse.json({Message:error},{status:400})
    
   }
}