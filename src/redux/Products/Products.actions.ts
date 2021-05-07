import { Action } from "../../redux/Products/Products.reducer"
import { Product } from "../../shared/Table/Table.mockdata"

export const insertnewProduct = ():Action <Product> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload: {
      _id: '123456',
      name: 'Potato',
      price: 0.35,
      stock: 700
    }
  }
}