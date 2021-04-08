import React from 'react';

import Button from '../Button';
import Header from '../Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <div className="Container">
        <Button  onClick= { () => window.alert('Alert ativado através de props') }>
          Submit
        </Button>
      </div>      
    </div>
    
  );
}

export default App;
