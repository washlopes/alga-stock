import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2'
import { getAllProducts } from '../../services/Product.services';

import Container from '../../shared/Container';

import Table, { TableHeader } from '../../shared/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';

import Header from '../Header';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
  //{ key: 'action', value: "Action"}
]

function App() { 

  const [products, setProducts] = useState <Product[]>([])

  const [updatingProduct, setUpdatingProduct] = useState <Product | undefined>(products[0])

  useEffect(() => {
    async function fetchData() {
      const _products = await getAllProducts()

      setProducts(_products)
    }

    fetchData()
  }, [])
  getAllProducts().then(console.log)

  const handleProductSubmit = (product: ProductCreator) => {
    console.log(product)
    setProducts( [
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    console.log(newProduct)
    setProducts( products.map( product => 
        product.id === newProduct.id
        ? newProduct
        : product
      )
    )
    setUpdatingProduct(undefined)    
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product Details',
      `${product.name} cost R$${product.price}. We have ${product.stock} in stock`,
      'info'
    )
  }

  const deleteProduct = (id: number) => {
    console.log(`Confirmada a exclusão do produto de id ${id}`)
    setProducts(products.filter(product => product.id !== id))
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'You are sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    }).then((result) => {
      if (result.value) {
        deleteProduct(product.id)       
      }
    })
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={products}
          enableActions
          onEdit={handleProductEdit}
          onDelete={handleProductDelete}          
          onDetail={handleProductDetail}
        />
        <ProductForm 
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate} />
      </Container>            
    </div>    
  );
}

export default App;
