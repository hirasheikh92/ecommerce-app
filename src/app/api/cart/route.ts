import { addToCart, cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { and,eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";




export const POST = async (request: NextRequest) => {
  const { userId } = auth();

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: userId as string,
          product_id: req.product_id,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          product_name: req.product_name,
          total_price: req.price * req.quantity,
        })
        .returning();
      return NextResponse.json({ res });
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
  const { userId } = auth();

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .update(cartTable)
        .set({
          quantity: req.quantity,
          total_price: req.price,
        })
        .where(and(eq(cartTable.user_id, userId as string), eq(cartTable.product_id, req.product_id))).returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};


export const DELETE = async(request:NextRequest) => {
  const { userId } = auth();
  const Url = request.nextUrl;
  try {
    if (Url.searchParams.has("product_id")&& userId) {
      const product_id = Url.searchParams.get('product_id');
      
      const res = await db.delete(cartTable).where(and
        (eq(cartTable.user_id, userId),
          eq(cartTable.product_id, product_id as string))).returning() 
      
          return NextResponse.json({Message:"Data Removed"},{status:200});
    }
    else {
      if (Url.searchParams.has("product_id")) {
        throw new Error("Login required")
      } else {
        throw new Error("product Id Required")
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({Message:error},{status:405})
  }
}