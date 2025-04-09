import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import Pagination from "@/components/ui/Pagination";
import { ProductResponseSchema } from "@/src/schemas";
import { isValidPage } from "@/src/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function getproducts(take: number, skip: number) {
  const url = `${process.env.API_URL}/products?skip=${skip}`;
  const req = await fetch(url);

  const json = await req.json();

  const data = ProductResponseSchema.parse(json);

  return {
    products: data.products,
    total: data.total,
  };
}

type searchParams = Promise<{ page: string }>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: searchParams;
}) => {
  const { page } = await searchParams;

  if (!isValidPage(+page)) redirect("/admin/products?page=1");

  const productPerpage = 10;

  const skip = (+page - 1) * productPerpage;

  const { products, total } = await getproducts(productPerpage, skip);

  const totalPages = Math.ceil(total / productPerpage);

  if(+page > totalPages) redirect('/admin/products?page=1')

  return (
    <>
  <Link
  href='/admin/products/new'
  className="rounded bg-green-400 font-bold py-2 px-10"
  >
  Nuevo Producto
  </Link>

      <Heading>Adminsitrar productos</Heading>

      <ProductsTable products={products} />

      <Pagination
      page={+page}
      totalPages={totalPages}
      baseUrl={'/admin/products'}
      />
    </>
  );
};

export default ProductsPage;
