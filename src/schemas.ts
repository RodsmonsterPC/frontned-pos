import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    price: z.coerce.number(),
    inventory: z.number(),
    categoryId: z.number()
})

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string()
})

export const CategoriesResponseSchema = z.array(CategorySchema)
export const CategoryWithProductsResponseSchema = CategorySchema.extend({
    products: z.array(ProductSchema)
});

//Shoping cart

const ShoppingCartContentSchema = ProductSchema.pick({
    name: true,
    image: true,
    price:true,
    inventory: true,
}).extend({
    productId: z.number(),
    quantity: z.number()
})

export const ShoppingCartSchema = z.array(ShoppingCartContentSchema)

export const CouponResponseSchema = z.object({
    name: z.string().default(''),
    message: z.string(),
    percentage: z.coerce.number().min(0).max(100).default(0)
})

export type Product = z.infer<typeof ProductSchema>
export type ShoppingCart = z.infer<typeof ShoppingCartSchema>
export type CarItem = z.infer<typeof ShoppingCartContentSchema>
export type Coupon = z.infer<typeof CouponResponseSchema>