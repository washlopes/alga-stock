import React, { useState } from 'react';

import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Header from '../Header';
import './App.css';

function TestComponent()  {
  return <img width="16" src="https://a-static.mlcdn.com.br/1500x1500/lupa-de-mao-100mm-aumento-para-leitura-observacao-bancada-mbtech/badmintonstore/c9d874dac4c611eaa8de4201ac18501e/66485b56c7874c4d625cd0de188b45dd.jpg" alt="Ícone Pesquisar" />
}

function App() {

  const [nome, setNome] = useState('')

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Input 
          label="Nome"
          placeholder="Nome"
          value={nome}
          onChange = { e => setNome(e.target.value)} />
        <Button  onClick= { () => window.alert('Uhuuuuuu....') }
          appendIcon={<TestComponent />}
        >
          Submit
        </Button>
      </Container>            
    </div>
    
  );
}

export default App;
