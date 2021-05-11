import React, { useState } from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const LoginForm = () => {
  const [form, setForm] = useState({
    user: '',
    pass: ''
  })

  const handleLogin = () => {
    console.table(form)
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }
    
  return <Form title="Login - AlgaStrock" onSubmit={ handleLogin }>
    <Input
      label="User" 
      name="user"
      value={form.user}
      onChange={handleInputChange}
      placeholder="E.g.: your_user_name3221"/>
    <Input 
      type="password"
      label="Password"
      name="pass"
      value={form.pass}
      onChange={handleInputChange}
    />
    <Button>
      Login
    </Button>
  </Form>
}

export default LoginForm