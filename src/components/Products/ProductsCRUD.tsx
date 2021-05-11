import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Table, { TableHeader } from '../../shared/Table'
import { Product } from '../../shared/Table/Table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import { connect, useDispatch } from 'react-redux'
import * as ProductsAction from '../../redux/Products/Products.actions'
import { RootState, ThunkDispatch } from '../../redux'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
  //{ key: 'action', value: "Action"}
]

declare interface ProductsCRUDProps {
  products: Product[]
}

const ProductsCRUD: React.FC <ProductsCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()

  const showAErroAlert =
    (err: Error) => Swal.fire('Oooops!', err.message, 'error')

  const [updatingProduct, setUpdatingProduct] = useState <Product | undefined>(undefined)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    dispatch(ProductsAction.getProducts())
      .catch(showAErroAlert)
  }
    
  const handleProductSubmit = async (product: ProductCreator) => {
    dispatch(ProductsAction.insertNewProduct(product))
      .catch(showAErroAlert)
  }

  const handleProductUpdate =  async (newProduct: Product) => {
    dispatch(ProductsAction.updateProduct(newProduct))
      .then(() => setUpdatingProduct(undefined))
      .catch(showAErroAlert)
            
      
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product Details',
      `${product.name} cost R$${product.price}. We have ${product.stock} in stock`,
      'info'
    )
  }

  const deleteProduct = async (id: string) => {
    dispatch(ProductsAction.deleteProduct(id))      
      .then(() => {
        Swal.fire('Uhuuu!', 'Product sucessfully deleted!', 'success')
      })
      .catch(showAErroAlert)   
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
    }).then(( { value }) =>  value && deleteProduct(product._id) )
  }

  return <>
    <Table 
          headers={headers}
          data={props.products}
          enableActions
          onEdit={setUpdatingProduct}
          onDelete={handleProductDelete}          
          onDetail={handleProductDetail}
        />
        <ProductForm 
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate} />
  </>
}

const mapStateToProps = (state: RootState) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)