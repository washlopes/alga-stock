export interface Product {
  id: number;
  name: string
  price: number
  stock: number
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Cokie',
    price: 1.25,
    stock: 20
  },
  {
    id: 2,
    name: 'Milk',
    price: 0.99,
    stock: 10
  },
  {
    id: 3,
    name: "Detergent",
    price: 0.75,
    stock: 65
  },
  {
    id: 4,
    name: "Water 1L",
    price: 0.30,
    stock: 150
  },
  {
    id: 5,
    name: "Rice",
    price: 1.30,
    stock: 54
  }
]

export default Products