import React, { useState} from 'react';
import Button from '../../shared/Button';

import Form from '../../shared/Form';
import Input from '../../shared/Input';

// import { Container } from './styles';

const initialFormState = {
  name: '',
  price: '',
  stock: ''
}

const ProductForm: React.FC = () => {

  const [form, setForm] = useState(initialFormState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value,name} = event.target

    setForm( {
      ...form,
      [name]: value
    })
  }
  function handleSubmitForm(data: any) {
    console.log(data)
    console.log(form)
  }

  return <Form onSubmit={handleSubmitForm}>
     <Input
      onChange={handleInputChange}
      name="name" 
      label="Name"            
      placeholder="E.g.: Cookie"
      required
    />
    <Input 
      onChange={handleInputChange}
      name="price" 
      label="Price"
      type="number"
      step="0.01"
      min="0"
      placeholder="E.g.: 1.25"
      required
    />
    <Input 
      onChange={handleInputChange}
      name="stock" 
      label="Stock"
      type="number"
      min="0"
      placeholder="E.g.: 32"
      required
    />

    <Button>
      Submit
    </Button>
  </Form>
}

export default ProductForm;