import { ProductCreator } from "../../components/Products/ProductForm"
import { Action } from "../../redux/Products/Products.reducer"


export const insertnewProduct = (payload: ProductCreator):Action <ProductCreator> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload
  }
}