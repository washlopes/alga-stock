import { Action } from ".."
import Products, { Product } from "../../shared/Table/Table.mockdata"

export default function redutor( state = Products, action: Action ): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]    
    default:
      return state
  }
  
}