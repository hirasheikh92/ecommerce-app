import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and,eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

const userId= "hjjkljl"

export const POST = async (request: NextRequest) => {
    // const { userId } = auth();
  
    const req: addToCart = await request.json();
  
    try {
      if (req) {
        const res = await db
          .insert(cartTable)
          .values({
            user_id: userId,
            product_id: req.product_id,
            quantity: req.quantity,
            image: req.image,
            price: req.price,
            product_name: req.product_name,
            total_price: req.total_price ,
          })
          .returning();
        return NextResponse.json({ Message:"data added to DB" },{status:200});
      } else {
        throw new Error("Failed to insert Data");
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        Message: "Something went wrong",
      });
    }
  };

export const PUT = async (request: NextRequest) => {
  
  const data: addToCart = await request.json();

  try {
    if (data) {
      await db.update(cartTable).set({
        quantity: data.quantity,
        total_price: data.price,
      }).where(and(eq(cartTable.user_id,userId),eq(cartTable.product_id,data.product_id))).returning()
    return NextResponse.json({Message:"Data updated"},{status:200})
    } else {
      throw new Error("Failed to data updated")
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({Message:error},{status:500})
  }
}  