import { Action, Thunk } from ".."
import { ProductCreator } from "../../components/Products/ProductForm"
import { getAllProducts } from "../../services/Product.services"
import { Product } from "../../shared/Table/Table.mockdata"


export const getProducts =
 (): Thunk<Product[]> =>
 async (dispatch: any) => {
  const products = await getAllProducts()
  console.log('fetched')
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products
  })
}

export const insertNewProduct = (payload: ProductCreator):Action <ProductCreator> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload
  }
}