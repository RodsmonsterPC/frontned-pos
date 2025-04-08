
import AddProductForm from "@/components/products/AddProductForm"
import ProductForm from "@/components/products/ProductsForm"
import Heading from "@/components/ui/Heading"
import Link from "next/link"


const NewProductPage = () => {
  return (
   <>
   <Link
  href='/admin/products?page=1'
  className="rounded bg-green-400 font-bold py-2 px-10"
  >
  Volver
  </Link>
      <Heading>Nuevo Producto</Heading>


      <AddProductForm>
        <ProductForm/>
      </AddProductForm>

   </>

  
  )
}

export default NewProductPage
