import {  InferModel,  } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { sql } from '@vercel/postgres'

 export const cartTable = pgTable("cart",{
    product_id: varchar("product_id", { length: 255 }).notNull(),
    quantity: integer("quantity"),
    user_id: varchar("user_id", { length: 255 }).notNull(),
})

export type typeOfCartTable = InferModel<typeof cartTable>

export const db = drizzle(sql);