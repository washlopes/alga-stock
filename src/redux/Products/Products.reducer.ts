import { Action } from ".."
import { Product } from "../../shared/Table/Table.mockdata"

export default function redutorProduct( state: Product[] = [], action: Action ): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]    
    default:
      return state
  }  
}