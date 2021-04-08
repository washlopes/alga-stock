import React from 'react';

import './Table.scss'
// import { Container } from './styles';

const Table: React.FC = () => {
  return <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Stock</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cookie</td>
        <td>$1.25</td>
        <td>23</td>
      </tr>
      <tr>
        <td>Milk</td>
        <td>$.99</td>
        <td>10</td>
      </tr>
    </tbody>
    </table>  
}

export default Table;