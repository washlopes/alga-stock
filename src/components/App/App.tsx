import React from 'react';


import Container from '../../shared/Container';

import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';

import Header from '../Header';
import ProductForm from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
  //{ key: 'action', value: "Action"}
]

function App() { 
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={Products}
        />
        <ProductForm />
      </Container>            
    </div>    
  );
}

export default App;
