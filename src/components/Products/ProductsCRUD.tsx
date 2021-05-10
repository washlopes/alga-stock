import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {
          deleteteSingleProduct,
          getAllProducts,
          updateSingleProduct
} from '../../services/Product.services'
import Table, { TableHeader } from '../../shared/Table'
import { Product } from '../../shared/Table/Table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import { connect, useDispatch } from 'react-redux'
import { insertnewProduct } from '../../redux/Products/Products.actions'

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
  const dispatch = useDispatch()

  //const [products, setProducts] = useState <Product[]>([])

  const [updatingProduct, setUpdatingProduct] = useState <Product | undefined>(undefined)

  async function fetchData() {
    /* const _products = await getAllProducts()

    setProducts(_products) */
  }

  useEffect(() => {
    fetchData()
  }, [])
  getAllProducts().then(console.log)

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(insertnewProduct(product))
      //await createSingleProduct(product)
      fetchData()
    } catch (err) {
      Swal.fire('Oops!', err.message, 'error')
    }
  }

  const handleProductUpdate =  async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct)      
      setUpdatingProduct(undefined)
      fetchData()
    } catch(err) {
      Swal.fire('Ooooops!', err.message, 'error')
    }  
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

  const deleteProduct = async (id: string) => {
    try {
      await deleteteSingleProduct(id)
      fetchData()
      Swal.fire('Uhuuu!', 'Product sucessfully deleted!', 'success')      
    } catch (err) {
      Swal.fire('Oooops!', err.message, 'error')
    }    
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
        deleteProduct(product._id)       
      }
    })
  }

  return <>
    <Table 
          headers={headers}
          data={props.products}
          enableActions
          onEdit={handleProductEdit}
          onDelete={handleProductDelete}          
          onDetail={handleProductDetail}
        />
        <ProductForm 
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate} />
  </>
}

const mapStateToProps = (state: any) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)