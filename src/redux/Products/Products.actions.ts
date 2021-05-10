import { ProductCreator } from "../../components/Products/ProductForm"
import { getAllProducts } from "../../services/Product.services"
import { Action } from "./Products.reducer"

export const getProducts = () => async (dispatch: any) => {
  const products = await getAllProducts()
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