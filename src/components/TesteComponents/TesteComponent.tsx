import React, { useState, useEffect } from   'react'
import './TesteComponent.css'

function TesteComponent(props: {name: string}) {

  const  [idade, setIdade] = useState(21)

  useEffect( () => {
    console.log('Component foi criado!')
  }, [])

  useEffect( () => {
    console.log('Idade foi atualizada para: ' + idade)
  }, [idade] )

  console.log('Segundo log')

  return <div className="TesteComponent">
      Teste de Componente Funcional! Olá { props.name }, { idade }!
      <button onClick = { () => {
        setIdade(idade + 1)
      }} > +
    </button>
    </div>
}
export default TesteComponent