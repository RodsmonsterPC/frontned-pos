import { CategoriesResponseSchema, Product } from "@/src/schemas"
import UploadProductImage from "./UploadProductImage"


async function getCategories(){
        const url = `${process.env.API_URL}/categories`
        const req = await fetch(url)
        const json = await req.json()
        const categories = CategoriesResponseSchema.parse(json)
        return categories
        
}

export default async function ProductForm({product} : {product? : Product}) {

   const categories = await getCategories()

    return (
      <>
        <div className="space-y-2 ">
          <label
            htmlFor="name"
            className="block"
          >Nombre Producto</label>
          <input
            id="name"
            type="text"
            placeholder="Nombre Producto"
            className="border border-gray-300 w-full p-2"
            name="name"
            defaultValue={product?.name}
          />
        </div>
  
        <div className="space-y-2 ">
          <label
            htmlFor="price"
            className="block"
          >Precio</label>
          <input
            id="price"
            type="number"
            placeholder="Precio Producto"
            className="border border-gray-300 w-full p-2"
            name="price"
            defaultValue={product?.price}
            min={0}
          />
        </div>
  
        <div className="space-y-2 ">
          <label
            htmlFor="inventory"
            className="block"
          >Inventario</label>
          <input
            id="inventory"
            type="number"
            placeholder="Cantidad Disponible"
            className="border border-gray-300 w-full p-2"
            name="inventory"
            defaultValue={product?.inventory}
            min={0}
          />
        </div>
  
        <div className="space-y-2">
          <label
            htmlFor="categoryId"
            className="block"
          >Categoría</label>
          <select
            id="categoryId"
            className="border border-gray-300 w-full p-2 bg-white"
            name="categoryId" 
            defaultValue={product?.categoryId}
          >
            <option value={0} >Seleccionar Categoría</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
            
          <UploadProductImage
          currentImage={product?.image}
          />
      </>
    )
  }